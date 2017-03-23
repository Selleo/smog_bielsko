import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import Menu                           from '../../stylesheets/Menu';

const originalExpect = global.expect;

chai.use(dirtyChai);

describe('Menu', () => {
  it('renders correctly', () => {
    originalExpect(Menu).toMatchSnapshot();
    expect(Menu).to.exist();
  });
});
