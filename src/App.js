import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { GlobalProvider } from './context';

function App() {
	return (
		<GlobalProvider>
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
		</GlobalProvider>
	);
}

export default App;