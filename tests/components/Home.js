import 'jsdom-global/register';
import React from 'react';
import { mount,shallow } from 'enzyme';
import {expect} from 'chai';
import { chai } from 'chai';
import Home from '../../react-client/src/components/Home.jsx'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import jsdom from 'jsdom'

const wrapper=mount(<Home />)

describe("<Home /> Component",function(){

  it('Should render Home component',function(){
    // const wrapper=shallow(<Home />)
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
  })

  it('Should have form element',function(){
    // const wrapper=shallow(<form />)
    expect(wrapper.find('form').length).to.equal(1)
  })

  it('Should have two text input elements',function(){
    // const wrapper=shallow(<Home />)
    expect(wrapper.find('formcontrol').length).to.equal(2)
  })
})
