import React from "react";
import {
	Button,
	Form,
	Grid,
	Header as SemanticHeader,
	Segment,
	Message
} from "semantic-ui-react";
import { Header } from "../../components";

const LoginUI = ({ fields, onChange, isValid, onSubmit, isLoading, error }) => {
	return (
		<>
			<Header />
			<Grid centered>
				<Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
					<SemanticHeader>Login to your account</SemanticHeader>
					<Segment>
						<Form onSubmit={onSubmit}>
							{error && <Message negative content={error?.detail} />}
							<Form.Field>
								<Form.Input
									value={fields?.username || ''}
									name="username"
									placeholder="Username"
									label="Username"
									onChange={onChange}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={fields?.password || ''}
									name="password"
									type="password"
									placeholder="Password"
									label="Password"
									onChange={onChange}
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

export default LoginUI;