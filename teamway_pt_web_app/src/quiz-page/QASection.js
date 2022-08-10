import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

QASection.propTypes = {};

function QASection() {
	return (
		<div className="w-75 d-flex flex-column">
			<div className="flex-grow-1 d-flex flex-column justify-content-evenly">
				<ProgressBar now={20} label={'1 / 5'} variant={'secondary'}/>
				<h2 className="display-5">You’re really busy at work and a colleague is telling you their life story
                    and personal woes. You:</h2>
			</div>
			<div className="flex-grow-1">
				<div className="list-group list-group-flush">
					<button className="list-group-item list-group-item-action p-3" aria-current="true">
						<span className="badge bg-light text-dark me-3">1</span>
                        Don’t dare to interrupt them
					</button>
					<button className="list-group-item list-group-item-action p-3" aria-current="true">
						<span className="badge bg-light text-dark me-3">2</span>
                        Think it’s more important to give them some of your time; work can wait
					</button>
					<button className="list-group-item list-group-item-action p-3 active" aria-current="true">
						<span className="badge bg-light text-dark me-3">3</span>
                        Listen, but with only with half an ear
					</button>
					<button className="list-group-item list-group-item-action p-3" aria-current="true">
						<span className="badge bg-light text-dark me-3">4</span>
                        Interrupt and explain that you are really busy at the moment
					</button>
				</div>
				<div className="mt-4 d-flex flex-column justify-content-ends align-items-end">
					<button className="btn btn-outline-primary">Submit answer <FontAwesomeIcon
						icon={solid('arrow-right')}/></button>
				</div>
			</div>
		</div>
	);
}

export default QASection;