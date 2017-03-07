import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import CityDescription                from '../../city/CityDescription';

chai.use(dirtyChai);

let wrapper, props;

describe('CityDescription', () => {
  it('renders correctly', () => {
    props = {text: 'ul. Rynek 2'};
    wrapper = shallow(<CityDescription {...props}/>);

    expect(wrapper).to.exist();
  });

  it('renders description on html', () => {
    props = {text: 'ul. Rynek 2'};
    wrapper = shallow(<CityDescription {...props}/>);
    expect(wrapper.children().length).to.equal(1);

    expect(wrapper.children().children().text()).to.equal('ul. Rynek 2');
  });

});

