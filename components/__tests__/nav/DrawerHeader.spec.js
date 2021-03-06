import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import DrawerHeader                 from '../../nav/DrawerHeader';

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('DrawerHeader', () => {
  beforeEach(() => {
    props = {
      text: 'Wybierz miejscowosc'
    };

    wrapper = shallow(<DrawerHeader {...props}/>);
  });
  it('renders correctly', () => {
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  it('render staton name on html', () => {
    expect(wrapper.children().text()).to.equal('Wybierz miejscowosc')
  });
});
