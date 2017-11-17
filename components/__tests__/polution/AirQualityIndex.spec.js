import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import AirQualityIndex                 from '../../pollution/AirQualityIndex';

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;

describe('AirQualityIndex', () => {
  beforeEach(() => {
    props = {
      index: 1
    };

    wrapper = shallow(<AirQualityIndex {...props}/>);
  });

  it('renders correctly', () => {
    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  it('render staton name on html', () => {
    expect(wrapper.children().children().nodes[0].props.children).to.equal('Jakość powietrza:');
    expect(wrapper.children().children().nodes[1].props.children.length).to.equal(3);
    expect(wrapper.children().children().nodes[1].props.children[1].props.children).to.equal('Dobra')
  });

  describe('#getAirConditionIndex', () => {
    it('return 0', () => {
      expect(wrapper.instance().getAirConditionIndex(30)).to.equal(0)
    });

    it('return 1', () => {
      expect(wrapper.instance().getAirConditionIndex(80)).to.equal(1)
    });

    it('return 2', () => {
      expect(wrapper.instance().getAirConditionIndex(110)).to.equal(2)
    });

    it('return 3', () => {
      expect(wrapper.instance().getAirConditionIndex(160)).to.equal(3)
    });

    it('return 4', () => {
      expect(wrapper.instance().getAirConditionIndex(230)).to.equal(4)
    });

    it('return 5', () => {
      expect(wrapper.instance().getAirConditionIndex(350)).to.equal(5)
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
  })
});
