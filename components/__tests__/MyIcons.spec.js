import 'react-native';
import React                          from 'react';

import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import glyphMap            from '../MyIcons';

const originalExpect = global.expect;

chai.use(dirtyChai);

describe.only('StationDataRenderer', () => {
  it('renders correctly', () => {
    originalExpect(glyphMap).toMatchSnapshot();
  });
});
