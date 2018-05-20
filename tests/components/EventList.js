import 'jsdom-global/register';
import React from 'react';
import { mount,shallow } from 'enzyme';
import {expect} from 'chai';
import EventList from '../../react-client/src/components/EventList.jsx'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Eventitems from '../../react-client/src/components/Eventitems.jsx'


//
// const doc = jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView


describe("<EventList /> Component",function(){

  it('Should render EventList component',function(){
    const wrapper=shallow(<EventList />)
    expect(wrapper.find('EventList').length).to.equal(1)
  })

  it('Should have form element',function(){
    const wrapper=shallow(<EventList />)
    expect(wrapper.find(Eventitems)).to.have.length(1);
  })

  it('Should have two text input elements',function(){
    const wrapper=shallow(<EventList />)
    expect(wrapper.contains('formcontrol').length).to.equal(2)
  })
})
