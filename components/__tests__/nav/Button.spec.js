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
  afterEach(() => {
    closeDrawerSpy = undefined
  });

  it('renders correctly', () => {
    props = {
      children: <image></image>,
      onPress: (onPress) => closeDrawerSpy = onPress,
      style: 45, //nr because its type of styles
    };

    wrapper = shallow(<Button {...props}/>);

    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  it('has one child', () => {
    props = {
      children: <image></image>,
      onPress: (onPress) => closeDrawerSpy = onPress,
      style: 45, //nr because its type of styles
    };

    wrapper = shallow(<Button {...props}/>);

    expect(wrapper.children().length).to.equal(1);
  });

  describe('#handlePress', () => {
    it('return props.onPress', () => {
      props = {
        children: <image></image>,
        onPress: (onPress) => closeDrawerSpy = onPress,
        style: 45, //nr because its type of styles
      };

      wrapper = shallow(<Button {...props}/>);

      expect(closeDrawerSpy).to.be.an('undefined');
      wrapper.instance().handlePress(12);
      expect(closeDrawerSpy).to.equal(12)
    });

    it('return nothing', () => {
      props = {
        children: <image></image>,
        style: 45, //nr because its type of styles
      };

      wrapper = shallow(<Button {...props}/>);
      expect(wrapper.instance().handlePress(12)).to.be.a('undefined');
      expect(closeDrawerSpy).to.be.a('undefined');

    });
  });

  describe('onPress', () => {
    it('change closeDrawer', () => {
      props = {
        children: <image></image>,
        onPress: (onPress) => closeDrawerSpy = 2,
        style: 45, //nr because its type of styles
      };

      wrapper = shallow(<Button {...props}/>);

      expect(closeDrawerSpy).to.be.an('undefined');
      wrapper.find('TouchableOpacity').simulate('press');
      expect(closeDrawerSpy).to.equal(2);
    });
  });
});
