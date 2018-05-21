import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { configure } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import login from '../../react-client/src/components/login'



describe("<login /> Component",function(){

  it('Should render Login component',function(){
    const wrapper=shallow(<login />)
    expect(React.Component.isPrototypeOf(login)).to.be.true;
  })

  it('Should have a form element',function(){
    const wrapper=shallow(<login />)
    expect(wrapper.find('h3').text()).to.equal('Login')
  })

  it('Should have two text input elements',function(){
    const wrapper=shallow(<login />)
    expect(wrapper.find('FormControl').length).to.equal(1)
  })

})
