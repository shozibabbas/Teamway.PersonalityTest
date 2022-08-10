import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import PropTypes from 'prop-types';

DeleteModal.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

function DeleteModal({show, handleClose}) {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header>
				<Modal.Title>Delete Question</Modal.Title>
			</Modal.Header>
			<Modal.Body>
                Are you sure you want to delete the question titled<br/> <em>You crack a joke at work, but
                nobody seems to have noticed. You:</em>?
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					<FontAwesomeIcon icon={solid('times')}
						className={'me-1'}/> No
				</Button>
				<Button variant="danger">
					<FontAwesomeIcon icon={solid('trash')}
						className={'me-1'}/> Yes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default DeleteModal;