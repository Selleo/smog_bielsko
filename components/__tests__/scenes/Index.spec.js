import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import Index                          from '../../scenes/Index';

import { data }                       from './../mock/data'

const originalExpect = global.expect;

chai.use(dirtyChai);

describe('Index', () => {
  it('renders correctly', () => {
    props = { dataStations: data };

    wrapper = shallow(<Index {...props}/>);

    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });
});
