import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import PropTypes from 'prop-types';

QAModal.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

function QAModal({show, handleClose}) {
	return (
		<Modal backdrop={'static'} keyboard={false} show={show} onHide={handleClose} centered={true} size={'lg'}>
			<Modal.Header>
				<Modal.Title>Add Question / Answers</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form>
					<div className="mb-3">
						<label htmlFor="question" className="form-label">Question</label>
						<input type="email" className="form-control" id="question"
							placeholder="Type question here"/>
					</div>
					<label className="form-label">Answers</label>
					<div className="mb-3 row">
						<div className="col-md-6">
							<input type="text" className="form-control" placeholder="Type answer here"/>
						</div>
						<div className="col-md-4">
							<div className="input-group">
								<span className="input-group-text" id="score-addon1"><FontAwesomeIcon
									icon={solid('plus-minus')} className={'me-1'}/></span>
								<input type="number" className="form-control" placeholder="Type score here"
									step="0.1"/>
							</div>
						</div>
						<div className="col-md-2 btn-group btn-group-sm">
							<button className="btn btn-danger"><FontAwesomeIcon icon={solid('trash')}
								className={'me-1'}/>
							</button>
							<button className="btn btn-secondary"><FontAwesomeIcon icon={solid('arrow-up')}
								className={'me-1'}/>
							</button>
							<button className="btn btn-secondary"><FontAwesomeIcon
								icon={solid('arrow-down')} className={'me-1'}/></button>
						</div>
					</div>
					<div className="mb-3 row">
						<div className="col-md-6">
							<input type="text" className="form-control" placeholder="Type answer here"/>
						</div>
						<div className="col-md-4">
							<div className="input-group">
								<span className="input-group-text" id="score-addon2
"><FontAwesomeIcon icon={solid('plus-minus')} className={'me-1'}/></span>
								<input type="number" className="form-control" placeholder="Type score here"
									step="0.1"/>
							</div>
						</div>
						<div className="col-md-2 btn-group btn-group-sm">
							<button className="btn btn-danger"><FontAwesomeIcon icon={solid('trash')}
								className={'me-1'}/>
							</button>
							<button className="btn btn-secondary"><FontAwesomeIcon icon={solid('arrow-up')}
								className={'me-1'}/>
							</button>
							<button className="btn btn-secondary"><FontAwesomeIcon
								icon={solid('arrow-down')} className={'me-1'}/></button>
						</div>
					</div>
					<div className="text-center mb-2">
						<button type="button" className="btn btn-primary"><FontAwesomeIcon
							icon={solid('plus')} className={'me-1'}/> Add answer
						</button>
					</div>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					<FontAwesomeIcon icon={solid('times')}
						className={'me-1'}/> Cancel
				</Button>
				<Button variant="primary">
					<FontAwesomeIcon icon={solid('save')}
						className={'me-1'}/> Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default QAModal;