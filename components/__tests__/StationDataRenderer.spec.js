import 'react-native';
import React                          from 'react';

import { shallow }                    from 'enzyme';
import chai, { expect }               from 'chai';
import dirtyChai                      from 'dirty-chai';

import { data }                       from './mock/data'
import StationDataRenderer            from '../StationDataRenderer';

const originalExpect = global.expect;

chai.use(dirtyChai);

let wrapper, props;
props = { stationId: 1, dataStations: data };

describe.only('StationDataRenderer', () => {
  it('renders correctly', () => {
    wrapper = shallow(<StationDataRenderer {...props}/>);

    originalExpect(wrapper).toMatchSnapshot();
    expect(wrapper).to.exist();
  });

  it("it has child 'ScrollViewMock'", () => {
    wrapper = shallow(<StationDataRenderer {...props}/>);

    expect(wrapper.children().length).to.equal(1);
    expect(wrapper.children().type().name).to.equal('ScrollViewMock');
  });

  it("it has on child 'CityInfo', 'AirQualityIndex', 'PollutionValues' components", () => {
    wrapper = shallow(<StationDataRenderer {...props}/>);

    expect(wrapper.children().children().length).to.equal(3);
    expect(wrapper.children().children().first().type().name).to.equal('CityInfo');
    expect(wrapper.children().children().nodes[1].type.name).to.equal('AirQualityIndex');
    expect(wrapper.children().children().last().type().name).to.equal('PollutionValues');
  });
});

