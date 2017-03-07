import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import DrawerMenu                 from '../../nav/DrawerMenu';

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('DrawerMenu', () => {
  beforeEach(() => {
    props = {
      closeDrawer: () => true,
      getCurrentStationId: () => true
    };

    wrapper = shallow(<DrawerMenu {...props}/>);
  });

  it('renders correctly', () => {
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  it('render staton name on html', () => {
    expect(wrapper.children().nodes.length).to.equal(9)
  });
});
