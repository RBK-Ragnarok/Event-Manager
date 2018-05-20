import 'jsdom-global/register';
import React from 'react';
import { mount,shallow } from 'enzyme';
import {expect} from 'chai';
import login from '../../react-client/src/components/login'
import ShallowRenderer from 'react-test-renderer/shallow';



describe("<login /> Component",function(){

  it('Should render Login component',function(){
    const wrapper=shallow(<login />)
    // expect(wrapper.find('login').length).to.equal(1)
expect(React.Component.isPrototypeOf(login)).to.be.true;
  })

  it('Should have container class element',function(){
    const wrapper=shallow(
      <login>
      <div className="container"/>
      </login>
  )
    expect(wrapper.contains(<div className="container" />)).to.equal(true)


  })

  it('Should have two text input elements',function(){
    const wrapper=mount(<login />)
    expect(wrapper.contains('formcontrol').length).to.equal(2)
  })
})
