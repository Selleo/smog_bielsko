import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import Pollution                         from '../../stylesheets/Pollution';

const originalExpect = global.expect;

chai.use(dirtyChai);

describe('Pollution', () => {
  it('renders correctly', () => {
    originalExpect(Pollution).toMatchSnapshot();
    expect(Pollution).to.exist();
  });
});
