import React, { Component } from 'react'
import CustomInput from '../demo'

export default class CustomLogin extends Component {

	constructor(props) {
    super(props) 
       this.state = {
		info:[{
				"className":'form-control',
	        	"type":'text', 
	        	"placeholder":"Demo"
        	},{
        		"className":'form-control',
	        	"type":'text', 
	        	"placeholder":"Pwd"

        	},{
        		"className":'customeBtn',
	        	"type":'submit', 
	        	"placeholder":"Name"
        	}]
     }
    this.add = this.add.bind(this)

  }
add(title) {
	console.log(this.state.info);
    this.setState({
      data: this.state.info
    })
  }
	render(){

		return (
			<div>
			{this.state.info.map((data, index) => {
					return <CustomInput data={data}></CustomInput>
				})
			}
			
			 </div>
			 );

	}
}