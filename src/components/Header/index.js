import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, Icon, Image, Menu } from 'semantic-ui-react';
import { logout } from '../../context/actions/auth/logout';
import { GlobalContext } from '../../context';

const Header = () => {
	const { pathname } = useLocation();
	const { contactsDispatch } = useContext(GlobalContext);
	const history = useHistory();

	const handleUserLogout = () => {
		logout(history)(contactsDispatch);
	}
	return (
		<Menu secondary pointing>
			<Image
				size="tiny"
				src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png"
			/>
			<Menu.Item
				as={Link}
				to="/"
				style={{ fontSize: 24 }}
			>
				TrulyContacts
			</Menu.Item>
			{pathname === '/' && (
				<>
					<Menu.Item position="right">
						<Button as={Link} to="/contacts/create" primary basic icon>
							<Icon name="add"></Icon>
							Create Contact
						</Button>
					</Menu.Item>
					<Menu.Item>
						<Button onClick={handleUserLogout} color="red" basic icon>
							<Icon name="log out"></Icon>
							Logout
						</Button>
					</Menu.Item>
				</>
			)}
		</Menu>
	)
}

export default Header;