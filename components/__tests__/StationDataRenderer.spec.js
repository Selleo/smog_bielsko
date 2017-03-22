import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';
import fetchMock                      from 'fetch-mock'

import {data}                         from './mock/data'
import StationDataRenderer            from '../StationDataRenderer';
import Env                            from '../../env'


const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe.only('StationDataRenderer', () => {
  it('renders correctly', () => {
    props = { stationId: 1, dataStations: data };
    wrapper = shallow(<StationDataRenderer {...props}/>);

    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });
});

