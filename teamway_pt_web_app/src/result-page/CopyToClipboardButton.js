import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';

function CopyToClipboardButton() {
	const [show, setShow] = useState(false);
	const target = useRef(null);

	return (
		<>

			<OverlayTrigger
				placement="right"
				overlay={(props) => (
					<Tooltip id="button-tooltip" {...props}>
                        Copied!
					</Tooltip>
				)}
				trigger={'focus'}
			>
				<Button variant={'outline-dark'} className="rounded-0 border-0 mb-3" onClick={() => {
					navigator.clipboard.writeText(window.location.href);
					setShow(!show);
				}} ref={target}
				>
					<FontAwesomeIcon icon={solid('clipboard')} className={'me-1'}/> Copy Link to Clipboard
				</Button>
			</OverlayTrigger>
		</>
	);
}

export default CopyToClipboardButton;