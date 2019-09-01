import React, { Component } from "react";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayed_form: "",
			logged_in: localStorage.getItem("token") ? true : false,
			username: "",
			err: false
		};
	}

	componentDidMount() {
		if (this.state.logged_in) {
			fetch("http://localhost:8000/core/current_user/", {
				headers: {
					Authorization: `JWT ${localStorage.getItem("token")}`
				}
			})
				.then((res) => res.json())
				.then((json) => {
					this.setState({ username: json.username });
				});
		}
	}

	handle_login = (e, data) => {
		e.preventDefault();
		fetch("http://localhost:8000/token-auth/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((json) => {
				localStorage.setItem("token", json.token);
				this.setState({
					logged_in: true,
					displayed_form: "",
					username: json.user.username
				});
			})
			.catch((err) => {
				console.log(err);
				this.setState({ err: true });
			});
	};

	handle_logout = () => {
		localStorage.removeItem("token");
		this.setState({ logged_in: false, username: "" });
	};

	display_form = (form) => {
		this.setState({
			displayed_form: form
		});
	};

	render() {
		let form;
		switch (this.state.displayed_form) {
			case "login":
				form = <LoginForm handle_login={this.handle_login} />;
				break;
			default:
				form = null;
		}

		return (
			<div className='App'>
				<Nav
					logged_in={this.state.logged_in}
					display_form={this.display_form}
					handle_logout={this.handle_logout}
				/>
				{form}
				<h6>{this.state.err ? "Please enter valid details" : ""}</h6>
				<h3>
					{this.state.logged_in
						? `Hello, ${this.state.username}`
						: "Please Log In"}
				</h3>
			</div>
		);
	}
}

export default App;
