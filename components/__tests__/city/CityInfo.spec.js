import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import CityInfo                       from '../../city/CityInfo';

chai.use(dirtyChai);

let wrapper, props;

describe('CityInfo', () => {
  it('renders correctly', () => {
    props = { city: { name: 'Zywiec, ul. Rynek 2' } };
    wrapper = shallow(<CityInfo {...props}/>);

    expect(wrapper).to.exist();
  });

  it('renders description on html', () => {
    props = { city: { name: 'Zywiec, ul. Rynek 2' } };
    wrapper = shallow(<CityInfo {...props}/>);

    expect(wrapper.children().length).to.equal(2);
    expect(wrapper.children().nodes[0].type.name).to.equal('CityName');
    expect(wrapper.children().nodes[1].type.name).to.equal('CityDescription');
  });

});
