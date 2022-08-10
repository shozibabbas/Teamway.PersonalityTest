import React from 'react';
import {Alert, Button, Col, Container, FormControl, Row} from 'react-bootstrap';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

LoginPage.propTypes = {};

function LoginPage() {
	return (
		<Container fluid={true}>
			<Row
				className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light bg-gradient">
				<Col lg={3} md={5} className="p-3">
					<div className="text-center mb-4">
						<img src={`${process.env.PUBLIC_URL}/images/logo-1.svg`} className="logo"/>
					</div>
					<div>
						<form>
							<Alert variant={'danger'}>Incorrect username / password</Alert>
							<FormControl type={'text'} placeholder={'Username'} className={'mb-2'}/>
							<FormControl type={'password'} placeholder={'Password'}/>
							<div className="text-center mt-3 d-grid">
								<Button variant={'primary'} type={'submit'}>
									<FontAwesomeIcon icon={solid('sign-in')} className={'me-1'}/> Login
								</Button>
							</div>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default LoginPage;