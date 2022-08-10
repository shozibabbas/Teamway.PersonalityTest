import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';

SearchForm.propTypes = {};

function SearchForm() {
	return (
		<>
			<div className="flex-grow-1 form-floating">
				<input type="text" className="form-control" id="floatingInput"
					placeholder="Enter text here"/>
				<label htmlFor="floatingInput">Search by question / answer text</label>
			</div>
			<button type="submit" className="btn btn-secondary"><FontAwesomeIcon icon={solid('search')}
				className={'me-1'}/> Search
			</button>
		</>
	);
}

export default SearchForm;