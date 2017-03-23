import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import Button                         from '../../nav/Button';

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props, closeDrawerSpy;

describe('Button', () => {
  beforeEach(() => {
    props = {
      style: 45, //nr because its type of styles
      onPress: (onPress) => closeDrawerSpy = 2
    };

    wrapper = shallow(<Button {...props}/>);
  });

  it('renders correctly', () => {
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  describe('onPress', () => {
    it('change closeDrawer', () => {
      expect(closeDrawerSpy).to.be.an('undefined');
      wrapper.find('TouchableOpacity').simulate('press');
      expect(closeDrawerSpy).to.equal(2);
    });
  });
});
