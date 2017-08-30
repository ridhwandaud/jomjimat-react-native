import React from 'react';
import LoginForm from './components/LoginForm';
import TransactionsList from './components/scene/TransactionsList';
import TransactionsCreate from './components/scene/TransactionsCreate';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{ paddingTop:65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
				<Scene
					key="dashboard"
					component={TransactionsList} 
					title="Dashboard" 
					intial
				/>
				<Scene
					key="add"
					component={TransactionsCreate} 
					intial
					hideNavBar={true}
					direction="vertical"
				/>
			</Scene>
		</Router>	
	);
};

export default RouterComponent;