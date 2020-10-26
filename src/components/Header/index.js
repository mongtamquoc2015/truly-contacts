import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Icon, Image, Menu } from 'semantic-ui-react';

const Header = () => {
	const { pathname } = useLocation();
	return (
		<Menu secondary pointing>
			<Image size="tiny" src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png" />
			<Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>TrulyContacts</Menu.Item>
			{pathname === '/' && (
				<>
					<Menu.Item position="right">
						<Button as={Link} to="/contacts/create" primary basic icon>
							<Icon name="add"></Icon>
					Create Contact
				</Button>
					</Menu.Item>
					<Menu.Item>
						<Button color="red" basic icon>
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