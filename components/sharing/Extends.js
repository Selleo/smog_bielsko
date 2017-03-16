import { Dimensions } from 'react-native'

import Env            from '../../env'

export default stationIdx = 6535;

export function fetchBgr(query) {
  url = 'https://www.googleapis.com/customsearch/v1?key=' + Env.GOOGLE_KEY + '&cx=' + Env.GOOGLE_CX + '&q=' + encodeURI(query) + '&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json';
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.items[0])
}

export function getData() {
  return fetch('http://api.waqi.info/feed/@' + stationIdx + '/?token=' + Env.API_KEY)
    .then((response) => response.json())
}
