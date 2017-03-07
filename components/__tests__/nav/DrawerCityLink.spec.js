import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import DrawerCityLink                 from '../../nav/DrawerCityLink';

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props, closeDrawerSpy;

describe('DrawerCityLink', () => {
  beforeEach(() => {
    props = {
      getCurrentStationId: () => 1,
      station: { id: 1, name: 'Zywiec' },
      closeDrawer: (stationId) => closeDrawerSpy = stationId
    };

    wrapper = shallow(<DrawerCityLink {...props}/>);
  });

  it('renders correctly', () => {
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  it('render staton name on html', () => {
    expect(wrapper.children().length).to.equal(1);
    expect(wrapper.children().children().length).to.equal(1);
    expect(wrapper.children().children().text()).to.equal('Zywiec')
  });

  describe('onPress', () => {
    it('change closeDrawer', () => {
      expect(closeDrawerSpy).to.be.an('undefined');
      wrapper.find('TouchableHighlight').simulate('press');
      expect(closeDrawerSpy).to.equal(1);
    });
  });

  describe('#isActive', () => {
    it('return true', () => {
      expect(wrapper.instance().isActive()).to.equal(true)
    });

    it('return false', () => {
      wrapper.setProps({ getCurrentStationId: () => 2 });
      expect(wrapper.instance().isActive()).to.equal(false)
    });
  });
});
