import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import CityInfo                       from '../../city/CityInfo';

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('CityInfo', () => {
  it('renders correctly', () => {
    props = { city: { name: 'Zywiec, ul. Rynek 2' } };
    wrapper = shallow(<CityInfo {...props}/>);

    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  it('renders description on html', () => {
    props = { city: { name: 'Zywiec, ul. Rynek 2' } };
    wrapper = shallow(<CityInfo {...props}/>);

    expect(wrapper.children().children().length).to.equal(2);
    expect(wrapper.children().children().nodes[0].type.name).to.equal('AnimatedComponent');

    expect(wrapper.children().children().nodes[1].props.children.length).to.equal(3);
    expect(wrapper.children().children().nodes[1].props.children[0].type.name).to.equal('Component');
    expect(wrapper.children().children().nodes[1].props.children[1].type.name).to.equal('CityName');
    expect(wrapper.children().children().nodes[1].props.children[2].type.name).to.equal('CityDescription');
  });

});
