import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import PollutionValues                from '../../pollution/PollutionValues';
import { data }                       from './../mock/data'
import { colors }                     from '../../sharing/PollutionTypes'

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
      expect(wrapper.instance().getDatasetItem('co')).to.eql({ v: 0.223 });
      expect(wrapper.instance().getDatasetItem('h')).to.eql({ v: 9.2444 });
      expect(wrapper.instance().getDatasetItem('no2')).to.eql({ v: 7.2131 });
      expect(wrapper.instance().getDatasetItem('o3')).to.eql({ v: 4.2242 });
      expect(wrapper.instance().getDatasetItem('p')).to.eql({ v: 122.2567 });
      expect(wrapper.instance().getDatasetItem('pm10')).to.eql({ v: 5.2788 });
      expect(wrapper.instance().getDatasetItem('so2')).to.eql({ v: 2.299 });
      expect(wrapper.instance().getDatasetItem('t')).to.eql({ v: 0.434 });
      expect(wrapper.instance().getDatasetItem('w')).to.eql({ v: 12.2234 });
      expect(wrapper.instance().getDatasetItem('wd')).to.eql({ v: 20.201 });
    });
  });

  describe('#onLayout', () => {
    it('state has width and height', () => {
      expect(Object.keys(wrapper.state()).length).to.equal(2);
      expect(Object.keys(wrapper.state())[0]).to.equal('height');
      expect(Object.keys(wrapper.state())[1]).to.equal('width');
    });

    it('set new width and height', () => {
      let customWidth = 1;
      let customHeight = 2;

      wrapper.setState({'height': customHeight});
      wrapper.setState({'width': customWidth});

      let oldState = wrapper.state();
      wrapper.instance().onLayout();

      expect(wrapper.state().height).to.not.equal(oldState.height);
      expect(wrapper.state().width).to.not.equal(oldState.width);
    })
  });

  describe('#formatValue', () => {
    it('round integer to two decimals', () => {
      expect(wrapper.instance().formatValue('co')).to.equal(0.22);
      expect(wrapper.instance().formatValue('h')).to.equal(9.24);
      expect(wrapper.instance().formatValue('no2')).to.equal(7.21);
      expect(wrapper.instance().formatValue('o3')).to.equal(4.22);
      expect(wrapper.instance().formatValue('p')).to.equal(122.26);
      expect(wrapper.instance().formatValue('pm10')).to.equal(5.28);
      expect(wrapper.instance().formatValue('so2')).to.equal(2.3);
      expect(wrapper.instance().formatValue('t')).to.equal(0.43);
      expect(wrapper.instance().formatValue('w')).to.equal(12.22);
      expect(wrapper.instance().formatValue('wd')).to.equal(20.20);
    });
  });


  describe('#pm10Condition', () => {
    it('return first color', () => {
      expect(wrapper.instance().pm10Condition(0)).to.equal(colors['1'])
      expect(wrapper.instance().pm10Condition(49)).to.equal(colors['1'])
    });

    it('return second color', () => {
      expect(wrapper.instance().pm10Condition(50)).to.equal(colors['2'])
      expect(wrapper.instance().pm10Condition(99)).to.equal(colors['2'])
    });

    it('return third color', () => {
      expect(wrapper.instance().pm10Condition(100)).to.equal(colors['3'])
      expect(wrapper.instance().pm10Condition(149)).to.equal(colors['3'])
    });

    it('return fourth color', () => {
      expect(wrapper.instance().pm10Condition(150)).to.equal(colors['4'])
      expect(wrapper.instance().pm10Condition(199)).to.equal(colors['4'])
    });

    it('return fifth color', () => {
      expect(wrapper.instance().pm10Condition(200)).to.equal(colors['5'])
      expect(wrapper.instance().pm10Condition(900)).to.equal(colors['5'])
    });
  });
  
  describe('#so2Condition', () => {
    it('return first color', () => {
      expect(wrapper.instance().so2Condition(0)).to.equal(colors['1'])
      expect(wrapper.instance().so2Condition(49)).to.equal(colors['1'])
    });

    it('return second color', () => {
      expect(wrapper.instance().so2Condition(50)).to.equal(colors['2'])
      expect(wrapper.instance().so2Condition(199)).to.equal(colors['2'])
    });

    it('return third color', () => {
      expect(wrapper.instance().so2Condition(200)).to.equal(colors['3'])
      expect(wrapper.instance().so2Condition(349)).to.equal(colors['3'])
    });

    it('return fourth color', () => {
      expect(wrapper.instance().so2Condition(350)).to.equal(colors['4'])
      expect(wrapper.instance().so2Condition(499)).to.equal(colors['4'])
    });

    it('return fifth color', () => {
      expect(wrapper.instance().so2Condition(500)).to.equal(colors['5'])
      expect(wrapper.instance().so2Condition(900)).to.equal(colors['5'])
    });
  });
  
  describe('#no2Condition', () => {
    it('return first color', () => {
      expect(wrapper.instance().no2Condition(0)).to.equal(colors['1'])
      expect(wrapper.instance().no2Condition(39)).to.equal(colors['1'])
    });

    it('return second color', () => {
      expect(wrapper.instance().no2Condition(40)).to.equal(colors['2'])
      expect(wrapper.instance().no2Condition(149)).to.equal(colors['2'])
    });

    it('return third color', () => {
      expect(wrapper.instance().no2Condition(151)).to.equal(colors['3'])
      expect(wrapper.instance().no2Condition(249)).to.equal(colors['3'])
    });

    it('return fourth color', () => {
      expect(wrapper.instance().no2Condition(250)).to.equal(colors['4'])
      expect(wrapper.instance().no2Condition(399)).to.equal(colors['4'])
    });

    it('return fifth color', () => {
      expect(wrapper.instance().no2Condition(400)).to.equal(colors['5'])
      expect(wrapper.instance().no2Condition(900)).to.equal(colors['5'])
    });
  });
});
