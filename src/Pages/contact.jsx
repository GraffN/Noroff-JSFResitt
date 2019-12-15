import React from 'react';

class Contact extends React.Component {
	constructor(props) {
    	super(props)
    	this.state = {
			hideForm: false, 
			username: '',
			usernameError:'',
			phone: '',
			phoneError:'',
			message: '',
			messageError:'', 
			Topic: 'compliment',
			valid: false,
		}
  }
  	usernameChange = event => {
		this.setState({
		username: event.target.value
		})
  }
  	phoneChange = event => {
		this.setState({
		phone: event.target.value
		})
  }
	messageChange = event => {
		this.setState({
		message: event.target.value
		})
  }
	topicChange = event => {
		this.setState({
		query: event.target.value
		})
  }
	validate = () => {
		let usernameError='';
		let phoneError='';
		let messageError='';
		let regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})$/; 

		if(!this.state.username){
			usernameError = 'Name cannot be blank'
		}
		if(!this.state.message){
			messageError = 'Please enter a message'
		}
		if(!this.state.phone.match(regExp)){
			phoneError = 'please enter a number with 8 characters xxx-xx-xxx'
		}
		if(usernameError || messageError || phoneError){
			this.setState({usernameError, messageError, phoneError});
		return false;
		}
		return true;
	}

  	handleSubmit = event => {
    	event.preventDefault();
    	const isValid = this.validate();
    if(isValid){
      	this.setState({
        	hideForm: true
      	})
      	alert(`
		Thanks for your message. we have sendt the following
		Sendt by: ${this.state.username}
		Phone: ${this.state.phone}  
		Your message: ${this.state.message} 
		Query selected: ${this.state.query}`);
		console.log(this.state.hideForm, 'hide forms')
    }
    
    
  }
  	render() {
    	if(this.state.hideForm == true){
      		return(
				console.log(this.state.hideForm, 'render hide form'),
				<p>Thanks for your message!</p>
      		)
    		}else{
      			return(
					<form onSubmit={this.handleSubmit}>
						<div>
							<div>
								<label>Username:</label>
									<input 
									type='text'
									value={this.state.username}
									onChange={this.usernameChange}
								/>
								<div style={{color: "red"}}>{this.state.usernameError}</div>
							</div>
							<div>
								<label>Phone:</label>
									<input 
									type='text'
									value={this.state.phone}
									onChange={this.phoneChange}
								/>
								<div style={{color: "red"}}>{this.state.phoneError}</div>

							</div>
							<div>
								<label>Message:</label>
								<textarea 
									value={this.state.message}
									onChange={this.messageChange} 
								/>
								<div style={{color: "red"}}>{this.state.messageError}</div>

							</div>
							<div>
								<label>Topic:</label>
								<select 
									value={this.state.topic}
									onChange={this.topicChange}
									>
									<option value="enquiry">Enquiry</option>
									<option value="complaint">Complaint</option>
									<option value="compliment">Compliment</option>
									<option value="general message">General message</option>
					
								</select>
							</div>
							<button type='submit'>Submit</button>
						
					</div>
				</form>
      		);
    	}  
  	}
}
export default Contact