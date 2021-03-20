import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {
	signInWithGoogle,
	auth,
	createUserProfileDocument,
} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						onChange={this.handleChange}
						value={this.state.email}
						type='email'
						label='email'
						required
					/>
					<FormInput
						name='password'
						value={this.state.password}
						type='password'
						onChange={this.handleChange}
						label='password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
