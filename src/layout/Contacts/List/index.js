import React from 'react';
import { Container, Image, List, Placeholder } from 'semantic-ui-react';
import { Header } from '../../../components';

const ContactsListUI = ({ isLoading, error, data }) => {
	console.log('data', data);
	return (
		<>
			<Header />
			<Container>
				{isLoading && (
					<Placeholder>
						<Placeholder.Header image>
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder.Header>
						<Placeholder.Paragraph>
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder.Paragraph>
					</Placeholder>
				)}
				<List>
					{data.length && data.map(contact => (
						<List.Item key={contact.id}>
							<List.Content floated="right">
								<span>{contact.phone_number}</span>
							</List.Content>
							<List.Content style={{ display: 'flex', alignItems: 'center' }}>
								<Image circular width={45} height={45} src={contact.contact_picture} />
								<span>{contact.first_name} {contact.last_name}</span>
							</List.Content>
						</List.Item>
					))}
				</List>
			</Container>
		</>
	)
}

export default ContactsListUI;