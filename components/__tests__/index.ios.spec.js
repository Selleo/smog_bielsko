import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import smog_bielsko                   from '../../index.ios';
import { data }                       from './mock/data'

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('smog_bielsko', () => {

  it('renders correctly', () => {
    wrapper = shallow(<smog_bielsko />);
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

});
