import Env from '../../env'
import { Dimensions } from 'react-native';
let {height, width} = Dimensions.get('window');

export function fetchBgr(query) {
  url = 'https://www.googleapis.com/customsearch/v1?key=' + Env.GOOGLE_KEY + '&cx=' + Env.GOOGLE_CX + '&q=' + encodeURI(query) + '&imgType=photo&searchType=image&fileType=jpg&imgSize=large&num=1&alt=json';
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.items[0])
}
