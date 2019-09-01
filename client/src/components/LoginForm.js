import React from "react";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
	state = {
		username: "",
		password: ""
	};

	handle_change = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState((prevstate) => {
			const newState = { ...prevstate };
			newState[name] = value;
			return newState;
		});
	};

	render() {
		return (
			<div className='row'>
				<div className='col s4 offset-s4'>
					<div className='card row'>
						<form
							onSubmit={(e) => this.props.handle_login(e, this.state)}
							style={{ padding: "40px" }}>
							<h4>Log In</h4>
							<div class='input-field col s12'>
								<label htmlFor='username'>Username</label>
								<input
									type='text'
									name='username'
									value={this.state.username}
									onChange={this.handle_change}
								/>
							</div>
							<div class='input-field col s12'>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									name='password'
									value={this.state.password}
									onChange={this.handle_change}
								/>
							</div>
							<input class='btn waves' type='submit' />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginForm;

LoginForm.propTypes = {
	handle_login: PropTypes.func.isRequired
};
