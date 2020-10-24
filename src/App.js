import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{routes.map(route => (
						<Route
							exact
							key={route.id}
							render={(props) => <route.component {...props} />}
							path={route.path}
						/>
					))}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
