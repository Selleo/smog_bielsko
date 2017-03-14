import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import PollutionValues                 from '../../pollution/PollutionValues';

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('PollutionValues', () => {
  beforeEach(() => {
    props = {
      dataset: {
        co: {
          v: 0.1
        },
        h: {
          v: 88.2461
        }
      }
    };

    wrapper = shallow(<PollutionValues {...props}/>);
  });

  it('renders correctly', () => {
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });


  it('render component with 3 children', () => {
    expect(wrapper.children().first().children().nodes.join('')).to.equal('Tlenek Węgla: 0.1');
    expect(wrapper.children().last().children().nodes.join('')).to.equal('Wilgotność: 88.2461%');
    expect(wrapper.children().length).to.equal(2)
  });

  describe('#getDatasetKeys', () => {
    it('return keys', () => {
      expect(wrapper.instance().getDatasetKeys()).to.eql(['co', 'h'])
    });
  });

  describe('#getDatasetItem', () => {
    it('return object', () => {
      expect(wrapper.instance().getDatasetItem(0)).to.eql({ v: 0.1 })
    });
  });
});
