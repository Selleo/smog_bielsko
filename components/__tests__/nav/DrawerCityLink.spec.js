import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import DrawerCityLink                 from '../../nav/DrawerCityLink';

chai.use(dirtyChai);

let wrapper, props;

describe('DrawerCityLink', () => {
  beforeEach(() => {
    props = {
      getCurrentStationId: () => 1,
      station: { id: 1, name: 'Zywiec' },
      closeDrawer: () => true
    };

    wrapper = shallow(<DrawerCityLink {...props}/>);
  });
  it('renders correctly', () => {
    expect(wrapper).to.exist();
  });

  it('render staton name on html', () => {
    expect(wrapper.children().children().text()).to.equal('Zywiec')
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
