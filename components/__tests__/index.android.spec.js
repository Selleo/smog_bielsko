import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';
import fetchMock                      from 'fetch-mock'

import Env                            from '../../env'
import SmogBielsko                    from '../index.android';
import { data }                       from './mock/data'

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('smog_bielsko', () => {

  it('renders correctly', (done) => {
    let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
    fetchMock.get(url, { data: data });
    wrapper = shallow(<SmogBielsko />);
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();

    setTimeout(() => { done() }, .1);
    fetchMock.restore();
  });

  it('has two states', (done) => {
    let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
    fetchMock.get(url, { data: data });

    wrapper = shallow(<SmogBielsko />);
    expect(wrapper.state().isOpen).to.equal(false);
    expect(wrapper.state().pendingApp).to.equal(true);
    expect(wrapper.state()).to.have.all.keys(['isOpen', 'pendingApp']);

    setTimeout(() => { done() }, .1);
    fetchMock.restore();
  });

  it('fetches station data', (done) => {
    let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
    fetchMock.get(url, { data: data });
    wrapper = shallow(<SmogBielsko />);

    expect(wrapper.state().pendingApp).to.equal(true);

    setTimeout(() => {
      expect(wrapper.state().dataStations.aqi).to.equal(24);
      expect(wrapper.state().pendingApp).to.equal(false);
      done();
    }, .1);

    fetchMock.restore();
  });

  describe('#toggle', () => {
    it('set isOpen state into true', (done) => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);

      expect(wrapper.state().isOpen).to.equal(false);
      wrapper.instance().toggle();
      expect(wrapper.state().isOpen).to.equal(true);

      setTimeout(() => { done() }, .1);
      fetchMock.restore();
    });

    it('set isOpen state into false', (done) => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);

      expect(wrapper.state().isOpen).to.equal(false);
      wrapper.instance().toggle();
      expect(wrapper.state().isOpen).to.equal(true);
      wrapper.instance().toggle();
      expect(wrapper.state().isOpen).to.equal(false);

      setTimeout(() => { done() }, .1);
      fetchMock.restore();
    });
  });


  describe('#hideMenu', () => {
    it('set isOpen state into false', (done) => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);

      expect(wrapper.state().isOpen).to.equal(false);
      wrapper.instance().toggle();
      expect(wrapper.state().isOpen).to.equal(true);

      wrapper.instance().hideMenu();
      expect(wrapper.state().isOpen).to.equal(false);
      wrapper.instance().hideMenu();
      expect(wrapper.state().isOpen).to.equal(false);

      setTimeout(() => { done() }, .1);
      fetchMock.restore();
    });
  });

  describe('#navigatorRenderScene', () => {
    it('render view with fetched station', (done) => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);

      let route = {
        id: 'index', stationId: 1, stationName: 'Zywiec'
      };

      setTimeout(() => {
        expect(wrapper.instance().navigatorRenderScene(route, {}).type.name).to.equal('Index');
        done()
      }, .1);
      fetchMock.restore();
    });
  });

  describe('#updateMenuState', () => {
    it('set open state what you have on property', (done) => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);
      expect(wrapper.state().isOpen).to.equal(false);
      wrapper.instance().updateMenuState(true);
      expect(wrapper.state().isOpen).to.equal(true);
      wrapper.instance().updateMenuState(false);
      expect(wrapper.state().isOpen).to.equal(false);

      setTimeout(() => { done() }, .1);
      fetchMock.restore();
    })
  });

  describe('#menuNav', () => {
    it('render menu', (done) => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);

      setTimeout(() => {
        fetchMock.get(url, { data: data });
        expect(wrapper.instance().menuNav().type.name).to.equal('DrawerMenu');
        expect(wrapper.instance().menuNav().type.propTypes.closeDrawer).to.be.a('function');
        expect(wrapper.instance().menuNav().type.propTypes.getCurrentStationId).to.be.a('function');
        done()
      }, .1);
      fetchMock.restore();

    });

    it('fetch data when function is executed', (done) => {
      let url, route, fakeNavArgs, navFunction;
      url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      route = { id: 'index', stationId: 1, stationName: 'Zywiec' };
      navFunction = {
        replace: (param) => {
          fakeNavArgs = param;
        }
      };

      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);
      setTimeout(() => {
        wrapper.instance().navigatorRenderScene(route, navFunction)
      }, 1);

      setTimeout(() => {
        let url2 = 'http://api.waqi.info/feed/@1/?token=' + Env.API_KEY;
        fetchMock.get(url2, { data: data });

        wrapper.instance().menuNav().props.closeDrawer(1, 'Zywiec');
        expect(fakeNavArgs.id).to.equal('index');
        expect(fakeNavArgs.stationId).to.equal(1);
        expect(fakeNavArgs.stationName).to.equal('Zywiec');
        done();
        done();
      }, 2);
      fetchMock.restore();
    });

    it('return currentStationId', (done) => {
      let url, route, fakeNavArgs, navFunction;
      url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      route = { id: 'index', stationId: 1, stationName: 'Zywiec' };
      navFunction = {
        replace: (param) => {
          fakeNavArgs = param;
        }
      };

      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);
      setTimeout(() => {
        wrapper.instance().navigatorRenderScene(route, navFunction)
      }, 1);

      setTimeout(() => {
        let url2 = 'http://api.waqi.info/feed/@1/?token=' + Env.API_KEY;
        fetchMock.get(url2, { data: data });

        expect(wrapper.instance().menuNav().props.getCurrentStationId()).to.equal(1);
        done();
        done();
      }, 2);
      fetchMock.restore();
    })
  });

  describe('#render', () => {
    it('render loading if pendingApp is true', (done) => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      fetchMock.get(url, { data: data });
      wrapper = shallow(<SmogBielsko />);
      expect(wrapper.state().pendingApp).to.equal(true);

      expect(wrapper.children().length).to.equal(1);
      expect(wrapper.children().type().name).to.equal('Component');
      expect(wrapper.children().children().length).to.equal(1);
      expect(wrapper.children().children().text()).to.equal('Loading');

      setTimeout(() => { done() }, .1);
      fetchMock.restore();
    });

    describe('pendingApp is false', () => {
      it('render SideMenu', (done) => {
        let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
        fetchMock.get(url, { data: data });
        wrapper = shallow(<SmogBielsko />);
        expect(wrapper.state().pendingApp).to.equal(true);

        setTimeout(() => {
          expect(wrapper.state().pendingApp).to.equal(false);
          expect(wrapper.children().length).to.equal(2);

          expect(wrapper.children().nodes[0].type.displayName).to.equal('Navigator');
          expect(wrapper.children().nodes[1].type.name).to.equal('Button');

          done()
        }, .1);
        fetchMock.restore();
      });

      it('change state isOpen on each changes', (done) => {
        let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
        fetchMock.get(url, { data: data });
        wrapper = shallow(<SmogBielsko />);

        expect(wrapper.state().isOpen).to.equal(false);

        setTimeout(() => {
          wrapper.simulate('change', true);
          expect(wrapper.state().isOpen).to.equal(true);
          done() }, .1);
        fetchMock.restore();
      });

      it('image on button has fixed width and height', (done) => {
        let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
        fetchMock.get(url, { data: data });
        wrapper = shallow(<SmogBielsko />);

        setTimeout(() => {
          expect(wrapper.children().nodes[1].props.children.type.name).to.equal('Component');
          expect(wrapper.children().nodes[1].props.children.props.style).to.eql({ width: 68, height: 68 });

          done()
        }, .1);
        fetchMock.restore();
      });

      it('toggle menu on click btn', (done) => {
        let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
        fetchMock.get(url, { data: data });
        wrapper = shallow(<SmogBielsko />);

        expect(wrapper.state().isOpen).to.equal(false);

        setTimeout(() => {
          wrapper.find('Button').simulate('press');
          expect(wrapper.state().isOpen).to.equal(true);
          wrapper.find('Button').simulate('press');
          expect(wrapper.state().isOpen).to.equal(false);
          done() }, .1);
        fetchMock.restore();
      });
    });
  });
});
