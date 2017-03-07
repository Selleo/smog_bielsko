import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import CityName                       from '../../city/CityName';

chai.use(dirtyChai);

let wrapper, props;

describe('CityName', () => {
  it('renders correctly', () => {
    props = { text: 'Zywiec' };
    wrapper = shallow(<CityName {...props}/>);

    expect(wrapper).to.exist();
  });

  it('renders description on html', () => {
    props = { text: 'Zywiec' };
    wrapper = shallow(<CityName {...props}/>);
    expect(wrapper.children().length).to.equal(1);

    expect(wrapper.children().children().text()).to.equal('Zywiec');
  });

});
