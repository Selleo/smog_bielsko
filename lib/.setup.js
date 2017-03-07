'use strict';var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);
var _path=require('path');var _path2=_interopRequireDefault(_path);
var _register=require('babel-core/register');var _register2=_interopRequireDefault(_register);
var _chai=require('chai');var _chai2=_interopRequireDefault(_chai);
var _chaiEnzyme=require('chai-enzyme');var _chaiEnzyme2=_interopRequireDefault(_chaiEnzyme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var modulesToCompile=[
  'react-native',
  'apsl-react-native-button',
  'react-native-router-flux',
  'react-native-tabs',
  'react-native-vector-icons',
  'react-native-mock',
  'react-native-parallax-scroll-view',
  'react-native-simple-store'].
map(function(moduleName){return new RegExp('/node_modules/'+moduleName);});
var rcPath=_path2.default.join(__dirname,'..','.babelrc');
var source=_fs2.default.readFileSync(rcPath).toString();
var config=JSON.parse(source);
config.ignore=function(filename){
  if(!/\/node_modules\//.test(filename)){
    return false;
  }else{
    var matches=modulesToCompile.filter(function(regex){return regex.test(filename);});
    var shouldIgnore=matches.length===0;
    return shouldIgnore;
  }
};
(0,_register2.default)(config);

global.__DEV__=true;
global.expect=_chai2.default.expect;
_chai2.default.use((0,_chaiEnzyme2.default)());

require('react-native-mock/mock');
var React=require('react-native');
React.NavigationExperimental={
  AnimatedView:React.View};
