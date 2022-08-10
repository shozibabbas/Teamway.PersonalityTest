import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';

Counters.propTypes = {};

function Counters() {
	return (
		<Row className="mb-4">
			<Col md={2}>
				<Card>
					<Card.Body className={'text-center'}>
						<Card.Title as={'h3'} className={'text-primary'}>
                            45
						</Card.Title>
						<Card.Text as={'small'}>
                            tests taken
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Body className={'text-center'}>
						<Card.Title as={'h3'} className={'text-primary'}>
                            150
						</Card.Title>
						<Card.Text as={'small'}>
                            answers given
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Body className={'text-center'}>
						<Card.Title as={'h3'} className={'text-primary'}>
                            30
						</Card.Title>
						<Card.Text as={'small'}>
                            tests completed
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Body className={'text-center'}>
						<Card.Title as={'h3'} className={'text-primary'}>
                            25
						</Card.Title>
						<Card.Text as={'small'}>
                            Introverts
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Body className={'text-center'}>
						<Card.Title as={'h3'} className={'text-primary'}>
                            5
						</Card.Title>
						<Card.Text as={'small'}>
                            Extroverts
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2}>
				<Card>
					<Card.Body className={'text-center'}>
						<Card.Title as={'h3'} className={'text-primary'}>
                            15
						</Card.Title>
						<Card.Text as={'small'}>
                            tests incomplete
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>

	);
}

export default Counters;