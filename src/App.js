import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import routes from './routes';
import { GlobalProvider } from './context';
import isAuthenticated from './utils/isAuthenticated';

const RenderRouter = (route) => {
	const history = useHistory();
	if (route.isNeedsAuth && !isAuthenticated()) {
		history.push('/auth/login');
	}
	return (
		<Route
			path={route.path}
			exact
			render={(props) => <route.component {...props} />}
		/>
	);
}

function App() {
	return (
		<GlobalProvider>
			<Router>
				<Switch>
					{routes.map(route => (
						<RenderRouter
							{...route}
							key={route.id}
						/>
					))}
				</Switch>
			</Router>
		</GlobalProvider>
	);
}

export default App;