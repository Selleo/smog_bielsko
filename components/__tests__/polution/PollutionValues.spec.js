import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import PollutionValues                from '../../pollution/PollutionValues';
import { data }                       from './../mock/data'

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('PollutionValues', () => {
  beforeEach(() => {
    props = {
      dataset: data.iaqi
    };

    wrapper = shallow(<PollutionValues {...props}/>);
  });

  it('renders correctly', () => {
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  describe('#getDatasetItem', () => {
    it('return object', () => {
      expect(wrapper.instance().getDatasetItem('co')).to.eql({ v: 0.2 })
    });
  });
});
