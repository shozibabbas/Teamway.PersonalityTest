import React from 'react';
import {Alert, Button} from 'react-bootstrap';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';

function ErrorAlertBox(error) {
	const navigate = useNavigate();
	return (
		<div className={'d-flex flex-column justify-content-between align-items-center'}>
			<Alert variant={'danger'} className={'text-center p-5'}>
				<h3 className={'display-5'}>Error {error.status}</h3>
				{error?.data?.message}
			</Alert>
			<Button variant={'outline-primary'} onClick={() => navigate('/')}>
				<FontAwesomeIcon icon={solid('home')} className={'me-2'}/>Go to Home
			</Button>
		</div>
	);
}

export default ErrorAlertBox;