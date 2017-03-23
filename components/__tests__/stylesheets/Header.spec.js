import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import Header                         from '../../stylesheets/Header';

const originalExpect = global.expect;

chai.use(dirtyChai);

describe('Header', () => {
  it('renders correctly', () => {
    originalExpect(Header).toMatchSnapshot();
    expect(Header).to.exist();
  });
});
