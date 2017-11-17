import 'react-native'
import React                            from 'react'

import chai, { expect }                 from 'chai'
import dirtyChai                        from 'dirty-chai'
import fetchMock                        from 'fetch-mock'

import Env                              from '../../../env'
import { stationId, fetchBgr, getData } from '../../sharing/Extends'
import { data, image, imageResponse }   from './../mock/data'

const originalExpect = global.expect;
chai.use(dirtyChai);

describe('Index', () => {
  it('renders correctly', () => {
    originalExpect(stationId).toMatchSnapshot();
    expect(stationId).to.exist();
    originalExpect(fetchBgr).toMatchSnapshot();
    expect(fetchBgr).to.exist();
    originalExpect(getData).toMatchSnapshot();
    expect(getData).to.exist();
  });

  describe('stationId', () => {
    it('is number', () => {
      expect(stationId).to.equal(6535);
      expect(stationId).to.to.be.a('number');
    });
  });

  describe('#fetchBgr', () => {
    it('is function', () => {
      expect(fetchBgr).to.to.be.a('function');
    });

    it('fetch image from google API', (done) => {
      let url = 'https://www.googleapis.com/customsearch/v1?key=' + Env.GOOGLE_KEY + '&cx=' + Env.GOOGLE_CX + '&q=Zywiec%20city&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json';
      let response = undefined;

      fetchMock.get(url, { items: image });

      let request = fetchBgr('Zywiec city');

      setTimeout(() => {
        request.then((item) => {
          response = item;
        });
      }, 1);

      setTimeout(() => {
        expect(response.htmlSnippet).to.equal("Old <b>Town</b> - <b>Bielsko</b>-<b>Biala</b>");
        done();
      }, 2);

      fetchMock.restore();
    });

    it('return error', () => {
      let url = 'https://www.googleapis.com/customsearch/v1?key=' + Env.GOOGLE_KEY + '&cx=' + Env.GOOGLE_CX + '&q=Zywiec%20city&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json';
      let response = fetchMock.get(url, 500).routes[0];

      fetchBgr('Zywiec city');

      expect(response.name).to.equal('https://www.googleapis.com/customsearch/v1?key=AIzaSyC87rWFIceblB8SiPYRIVjTVDa4Ykg2B5k&cx=011489618918057685518:znkt_vgea0o&q=Zywiec%20city&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json');
      expect(response.response).to.equal(500);
      fetchMock.restore();
    });
  });

  describe('#getData', () => {
    it('is function', () => {
      expect(getData).to.to.be.a('function');
    });

    it('fetch station data', (done) => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      let response = undefined;

      fetchMock.get(url, { data: data });

      let request = getData(6535);

      setTimeout(() => {
        request.then((item) => {
          response = item;
        });
      }, 1);

      setTimeout(() => {
        expect(response.data.city.name).to.equal('Bielsko-Biała, ul. Kossak-Szczuckiej 19');
        done();
      }, 2);

      fetchMock.restore();
    });

    it('return error', () => {
      let url = 'http://api.waqi.info/feed/@6535/?token=' + Env.API_KEY;
      let response = fetchMock.get(url, 500).routes[0];

      getData(6535);

      expect(response.name).to.equal('http://api.waqi.info/feed/@6535/?token=a15ef567a5c1e6342c20de7ac3d473361dfbcb54');
      expect(response.response).to.equal(500);
      fetchMock.restore();
    });
  });

});
