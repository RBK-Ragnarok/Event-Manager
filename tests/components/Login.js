import 'jsdom-global/register';
import React from 'react';
import { mount,shallow } from 'enzyme';
import {expect} from 'chai';
import login from '../../react-client/src/components/login.jsx'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


//
// const doc = jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView


describe("<login /> Component",function(){

  it('Should render Home component',function(){
    const wrapper=shallow(<login />)
    expect(wrapper.find('login').length).to.equal(1)
  })

  it('Should have container class element',function(){
    const wrapper=shallow(<login />)
    expect(wrapper.find('.container').length).to.equal(1)
  })

  it('Should have two text input elements',function(){
    const wrapper=mount(<login />)
    expect(wrapper.contains('formcontrol').length).to.equal(2)
  })
})
