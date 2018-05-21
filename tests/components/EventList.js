import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { configure } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import EventList from '../../react-client/src/components/EventList.jsx'
import EventItem from '../../react-client/src/components/EventItem.jsx'


describe("<EventList /> Component",function(){

  it('Should render EventList component',function(){
    const wrapper=shallow(<EventList events={[]}/>)
    expect(React.Component.isPrototypeOf(EventList)).to.be.true;
  })

  it('Should have div element',function(){
    const wrapper=shallow(<EventList events={[]}/>)
    expect(wrapper.find('div')).to.have.length(1);
  })

})
