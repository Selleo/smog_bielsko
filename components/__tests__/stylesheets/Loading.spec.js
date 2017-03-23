import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import Loading                         from '../../stylesheets/Loading';

const originalExpect = global.expect;

chai.use(dirtyChai);

describe('Loading', () => {
  it('renders correctly', () => {
    originalExpect(Loading).toMatchSnapshot();
    expect(Loading).to.exist();
  });
});
