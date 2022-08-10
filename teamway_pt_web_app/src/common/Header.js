import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

function Header() {
	return (
		<div className="w-100 d-flex justify-content-between p-3">
			<Link to={'/'} className="text-decoration-none link-secondary">
				<img src={`${process.env.PUBLIC_URL}/images/logo-1.svg`} className="logo"/>
			</Link>
			<Link to={'/about'} className="text-decoration-none link-secondary">
				<FontAwesomeIcon icon={solid('address-card')} className={'me-1'}/> About
			</Link>
		</div>
	);
}

export default Header;