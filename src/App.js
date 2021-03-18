import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
	<div>
		<h1>Hats PAGE</h1>
	</div>
);

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route  path='/' component={HomePage} />
				<Route path='/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
