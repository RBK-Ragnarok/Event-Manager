import React, {Component} from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme';
import login from '../../react-client/src/components/login.jsx'
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() })

describe("<login />",function(){
  it('should render Home component',function(){
    const wrapper=mount(<login />)
    expect(wrapper.find(login).length).to.equal(1)
  })
})
