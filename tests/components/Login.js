import React from 'react'
import {expect} from 'chai'
import {mount,shallow} from 'enzyme'
import Login from '../../react-client/src/components/login.jsx'

describe("<Login />",function(){
  it('should render Home component',function(){
    const wrapper=shallow(<Login />)
    expect(wrapper.find(Login).length).to.equal(1)
  })
})
