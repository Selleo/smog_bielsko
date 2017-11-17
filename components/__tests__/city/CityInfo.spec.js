import { Animated } from 'react-native';
import React                          from 'react'

import { shallow }                    from 'enzyme'
import chai, { expect }               from 'chai'
import dirtyChai                      from 'dirty-chai'
import fetchMock                      from 'fetch-mock'

import Env                            from '../../../env'
import CityInfo                       from '../../city/CityInfo'
import { data, image }                from './../mock/data'

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('CityInfo', () => {
  it('renders correctly', () => {
    props = { city: data.city };
    wrapper = shallow(<CityInfo {...props}/>);

    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  it('has two states', () => {
    props = { city: data.city };
    wrapper = shallow(<CityInfo {...props}/>);
    expect(wrapper.state().fetched).to.equal(false);
    expect(wrapper.state().fadeAnim).to.be.a('object');
  });

  it('renders description on html', () => {
    props = { city: data.city };
    wrapper = shallow(<CityInfo {...props}/>);

    expect(wrapper.children().children().length).to.equal(2);
    expect(wrapper.children().children().nodes[0].type.name).to.equal('AnimatedComponent');

    expect(wrapper.children().children().nodes[1].props.children.length).to.equal(3);
    expect(wrapper.children().children().nodes[1].props.children[0].type.name).to.equal('Component');
    expect(wrapper.children().children().nodes[1].props.children[1].type.name).to.equal('CityName');
    expect(wrapper.children().children().nodes[1].props.children[2].type.name).to.equal('CityDescription');
  });

  describe('#componentDidMount', () => {
    it('fetch database getting query from props.stationName', (done) => {
      props = { city: data.city, stationName: 'Zywiec' };
      wrapper = shallow(<CityInfo {...props}/>);

      let query = 'Zywiec%20town';
      let url = 'https://www.googleapis.com/customsearch/v1?key=' + Env.GOOGLE_KEY + '&cx=' + Env.GOOGLE_CX + '&q=' + query + '&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json';
      fetchMock.get(url, { items: image });

      wrapper.instance().componentDidMount();

      setTimeout(() => {
        expect(decodeURI(query)).to.equal('Zywiec town');
        expect(wrapper.instance().props.stationName).to.equal('Zywiec');
        done();
      }, .1);

      fetchMock.restore();

    });

    it('fetch database and set data in state', (done) => {
      props = { city: data.city };
      wrapper = shallow(<CityInfo {...props}/>);

      let query = 'Bielsko-Bia%C5%82a%20town';
      let url = 'https://www.googleapis.com/customsearch/v1?key=' + Env.GOOGLE_KEY + '&cx=' + Env.GOOGLE_CX + '&q=' + query + '&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json';
      fetchMock.get(url, { items: image });

      wrapper.instance().componentDidMount();
      expect(wrapper.state().bgr).to.be.a('undefined');

      setTimeout(() => {
        expect(wrapper.state().bgr).to.equal('http://www.mapofpoland.net/poland-photos-15402/Old-Town-Bielsko-Biala.jpg');
        done();
      }, .1);

      fetchMock.restore();
    });

    it('fetch database and animate image', (done) => {
      props = { city: data.city };
      wrapper = shallow(<CityInfo {...props}/>);

      spyOn(Animated, 'timing').and.callThrough();
      global.cancelAnimationFrame = () => {return true};

      let query = 'Bielsko-Bia%C5%82a%20town';
      let url = 'https://www.googleapis.com/customsearch/v1?key=' + Env.GOOGLE_KEY + '&cx=' + Env.GOOGLE_CX + '&q=' + query + '&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json';
      fetchMock.get(url, { items: image });
      wrapper.instance().componentDidMount();

      setTimeout(() => {
        expect(wrapper.state().bgr).to.equal('http://www.mapofpoland.net/poland-photos-15402/Old-Town-Bielsko-Biala.jpg');
        originalExpect(Animated.timing).toHaveBeenCalled();
        expect(wrapper.state().fadeAnim).to.be.a('object');
        done();
      }, .1);

      fetchMock.restore();
    });
  });

  describe('#secondUmageStyles', () => {
    it('it is style object', () =>{
      props = { city: data.city };
      wrapper = shallow(<CityInfo {...props}/>);

      expect(wrapper.instance().secondUmageStyles()).to.be.a('object');
    });
  });

  describe('#getCityInfo', () => {
    it('split name for city and address', () => {
      props = { city: data.city };
      wrapper = shallow(<CityInfo {...props}/>);

      expect(wrapper.instance().getCityInfo(0)).to.equal('Bielsko-Biała');
      expect(wrapper.instance().getCityInfo(1)).to.equal('ul. Kossak-Szczuckiej 19');
    });
  });
});
