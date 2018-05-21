import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { configure } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Home from '../../react-client/src/components/Home'

describe("<Home /> Component",function(){

    it('Should render Home component',function(){
      const wrapper=shallow(<Home />)
  expect(React.Component.isPrototypeOf(Home)).to.be.true;
    })


  it('Should find a title in Home component',function(){
    const wrapper=shallow(<Home />)
    expect(wrapper.find('h1')).to.have.length(1);
  })

  it('renders <Carousel /> component', () => {
     const wrapper = shallow(<Home />);
     expect(wrapper.find('Carousel')).to.have.length(1);
   });

  it('Should have a footer element',function(){
    const wrapper=shallow(<Home />)
    expect(wrapper.find('footer').length).to.equal(1)
  })
})
