import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React from 'react';

class App extends React.Component {
	// constructor() {
	// 	super();
	// 	// this.state = {
	// 	// 	currentUser: null,
	// 	// };
	// }

	unSubscribeFromAuth = null;
	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					this.props.onSetCurrentUser({
						
							id: snapshot.id,
							...snapshot.data(),
					
					});
				});
			} else {
				this.props.onSetCurrentUser(userAuth);
			}

			// this.props.onSetCurrentUser({ currentUser: user });
			// console.log(user);
		});
	}
	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={Shop} />
					<Route path='/signin' component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export const mapDispatchToProps = (dispatch) => ({
	onSetCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
