import React, { Component } from 'react';

export default class CustomInput extends Component {
	constructor(props) {
    super(props)
    
    
  }

	render(){
			console.log(this.props.data);

		return( 
			<input
			className={this.props.data["className"]}
        	type={this.props.data["type"]}
        	placeholder={this.props.data["placeholder"]}>
        	</input>
			
				);

	}
}