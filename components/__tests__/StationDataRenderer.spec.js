import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';
import fetchMock                      from 'fetch-mock'

import StationDataRenderer            from '../StationDataRenderer';
import Env                            from '../../env'

chai.use(dirtyChai);

let wrapper, props;

describe('StationDataRenderer', () => {
  it('renders correctly', () => {
    props = { stationId: 1 };
    fetchMock.get('http://api.waqi.info/feed/@1/?token=' + Env.API_KEY, {
      data: {
        city: { name: 'Zywiec, ul. Rynek 2' },
        aqi: 2,
        iaqi: 2
      }
    });
    wrapper = shallow(<StationDataRenderer {...props}/>);

    expect(wrapper).to.exist();
    fetchMock.restore();
  });

  it('set in state fetched data', (done) => {
    props = { stationId: 1 };
    fetchMock.get('http://api.waqi.info/feed/@1/?token=' + Env.API_KEY, {
      data: {
        city: { name: 'Zywiec, ul. Rynek 2' },
        aqi: 2,
        iaqi: 2
      }
    });
    wrapper = shallow(<StationDataRenderer {...props}/>);

    expect(wrapper.state().data).to.be.an('undefined');
    expect(wrapper.state().pending).to.equal(true);

    setTimeout(() => {
      expect(wrapper.state().data).to.be.an('object');
      expect(wrapper.state().data).to.eql({ city: { name: 'Zywiec, ul. Rynek 2' }, aqi: 2, iaqi: 2 });
      done();
    }, 1);

    fetchMock.restore();
  });

  describe('pending is false', () => {
    it('is false after download data', (done) => {
      props = { stationId: 1 };
      fetchMock.get('http://api.waqi.info/feed/@1/?token=' + Env.API_KEY, {
        data: {
          city: { name: 'Zywiec, ul. Rynek 2' },
          aqi: 2,
          iaqi: 2
        }
      });
      wrapper = shallow(<StationDataRenderer {...props}/>);

      expect(wrapper.state().pending).to.equal(true);

      setTimeout(() => {
        expect(wrapper.state().pending).to.equal(false);
        done();
      }, 1);

      fetchMock.restore();
    });

    it('return text "Loading"', (done) => {
      props = { stationId: 1 };
      fetchMock.get('http://api.waqi.info/feed/@1/?token=' + Env.API_KEY, {
        data: {
          city: { name: 'Zywiec, ul. Rynek 2' },
          aqi: 2,
          iaqi: 2
        }
      });
      wrapper = shallow(<StationDataRenderer {...props}/>);

      expect(wrapper.state().pending).to.equal(true);
      expect(wrapper.children().length).to.equal(1);

      setTimeout(() => {
        expect(wrapper.state().pending).to.equal(false);
        expect(wrapper.children().children().text()).to.equal('Loading');
        expect(wrapper.children().type().name).to.equal('Component');
        done();
      }, 1);

      fetchMock.restore();
    });
  });

  describe('pending is true', () => {
    it('return text "Loading"', (done) => {

      props = { stationId: 1 };
      fetchMock.get('http://api.waqi.info/feed/@1/?token=' + Env.API_KEY, {
        data: {
          city: { name: 'Zywiec, ul. Rynek 2' },
          aqi: 2,
          iaqi: 2
        }
      });
      wrapper = shallow(<StationDataRenderer {...props}/>);

      expect(wrapper.state().pending).to.equal(true);
      expect(wrapper.children().length).to.equal(1);

      setTimeout(() => {
        expect(wrapper.state().pending).to.equal(false);
        wrapper.update();

        expect(wrapper.children().nodes.length).to.equal(3);
        expect(wrapper.children().nodes[0].type.name).to.equal('CityInfo');
        expect(wrapper.children().nodes[1].type.name).to.equal('AirQualityIndex');
        expect(wrapper.children().nodes[2].type.name).to.equal('PollutionValues');

        done();
      }, 1);

      fetchMock.restore();
    });
  });


});

