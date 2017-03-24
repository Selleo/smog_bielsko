import { Dimensions } from 'react-native'

import Env            from '../../env'

let handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const stationId = 6535;

export function fetchBgr(query) {
  url = 'https://www.googleapis.com/customsearch/v1?key=' + Env.GOOGLE_KEY + '&cx=' + Env.GOOGLE_CX + '&q=' + encodeURI(query) + '&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json';
  return fetch(url)
    .then(handleErrors)
    .then((response) => response.json())
    .then((response) => response.items[0])
    .catch((response) => {
      return response
    })
}

export function getData(station) {
  return fetch('http://api.waqi.info/feed/@' + station + '/?token=' + Env.API_KEY)
    .then(handleErrors)
    .then((response) => response.json())
    .catch((response) => {
      return response
    })

}
