import React from "react";
import {
	Button,
	Form,
	Grid,
	Header as SemanticHeader,
	Segment,
} from "semantic-ui-react";
import { Header } from "../../components";

const RegisterUI = ({ form, onChange, registerFormValid }) => {
	return (
		<>
			<Header />
			<Grid centered>
				<Grid.Column style={{ maxWidth: 550, marginLeft: 20 }}>
					<SemanticHeader>Signup Here</SemanticHeader>
					<Segment>
						<Form>
							<Form.Field>
								<Form.Input
									value={form.username || ''}
									name="username"
									placeholder="Username"
									label="Username"
									onChange={onChange}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.firstName || ''}
									name="firstName"
									placeholder="First Name"
									label="First Name"
									onChange={onChange}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.lastName || ''}
									name="lastName"
									type="text"
									placeholder="Last Name"
									label="Last Name"
									onChange={onChange}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.email || ''}
									name="email"
									type="email"
									placeholder="Email"
									label="Email"
									onChange={onChange}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.password || ''}
									name="password"
									type="password"
									placeholder="Password"
									label="Password"
									onChange={onChange}
								/>
							</Form.Field>
							<Button disabled={registerFormValid} fluid primary type="submit">
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