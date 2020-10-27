import React from "react";
import {
	Button,
	Form,
	Grid,
	Header as SemanticHeader,
	Segment,
} from "semantic-ui-react";
import { Header } from "../../components";

const RegisterUI = ({ fields, onChange, isValid, onSubmit, isLoading, fieldErrors }) => {
	return (
		<>
			<Header />
			<Grid centered>
				<Grid.Column style={{ maxWidth: 550, marginLeft: 20 }}>
					<SemanticHeader>Signup Here</SemanticHeader>
					<Segment>
						<Form onSubmit={onSubmit}>
							<Form.Field>
								<Form.Input
									value={fields.username || ''}
									name="username"
									placeholder="Username"
									label="Username"
									onChange={onChange}
									error={fieldErrors.username && {
										content: fieldErrors.username,
										pointing: 'below'
									}}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={fields.firstName || ''}
									name="firstName"
									placeholder="First Name"
									label="First Name"
									onChange={onChange}
									error={fieldErrors.first_name && {
										content: fieldErrors.first_name,
										pointing: 'below'
									}}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={fields.lastName || ''}
									name="lastName"
									type="text"
									placeholder="Last Name"
									label="Last Name"
									onChange={onChange}
									error={fieldErrors.last_name && {
										content: fieldErrors.last_name,
										pointing: 'below'
									}}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={fields.email || ''}
									name="email"
									type="email"
									placeholder="Email"
									label="Email"
									onChange={onChange}
									error={fieldErrors.email && {
										content: fieldErrors.email,
										pointing: 'below'
									}}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={fields.password || ''}
									name="password"
									type="password"
									placeholder="Password"
									label="Password"
									onChange={onChange}
									error={fieldErrors.password && {
										content: fieldErrors.password,
										pointing: 'below'
									}}
								/>
							</Form.Field>
							<Button
								disabled={isValid || isLoading}
								fluid primary
								type="submit"
								loading={isLoading}
							>
								Submit
              </Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</>
	);
};

export default RegisterUI;