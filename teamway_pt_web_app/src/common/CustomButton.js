import React from 'react';
import PropTypes from 'prop-types';
import {Button, Spinner} from 'react-bootstrap';

CustomButton.propTypes = {
	children: PropTypes.any,
	isLoading: PropTypes.bool,
	loadingText: PropTypes.string
};

function CustomButton({children, isLoading, loadingText, ...buttonProps}) {
	return (
		<Button {...buttonProps} disabled={isLoading}>
			{isLoading ? (
				<>
					<Spinner
						as="span"
						animation="border"
						role="status"
						size={'sm'}
						aria-hidden="true"
						className={loadingText ? 'me-2' : ''}
					/>
					{loadingText}
				</>
			) : children}
		</Button>
	);
}

export default CustomButton;