import React, {useState} from 'react';
import {Accordion, Button, Col, Container, Row} from 'react-bootstrap';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Footer from '../../common/Footer';
import QAModal from './QAModal';
import DeleteModal from './DeleteModal';
import Counters from './Counters';
import SearchForm from './SearchForm';

CRUDPage.propTypes = {};

function CRUDPage() {
	const [showQAModal, setShowQAModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);


	const handleQAModalClose = () => setShowQAModal(false);
	const handleQAModalShow = () => setShowQAModal(true);
	const handleDeleteModalClose = () => setShowDeleteModal(false);
	const handleDeleteModalShow = () => setShowDeleteModal(true);

	return (
		<div>
			<Container fluid={true} className={'py-3 bg-light'}>
				<Row>
					<Col className={'d-flex justify-content-between'}>
						<div>
							<a href="#" className="text-decoration-none link-secondary me-4">
								<img src={`${process.env.PUBLIC_URL}/images/logo-1.svg`} className="logo"/>
							</a>
						</div>
						<div>
							<a href="#" className="text-decoration-none link-secondary me-3">
								<FontAwesomeIcon icon={solid('question')} className={'me-1'}/>Help</a>
							<a href="#" className="text-decoration-none link-secondary">
								<FontAwesomeIcon icon={solid('sign-out')} className={'me-1'}/>Log Out</a>
						</div>
					</Col>
				</Row>
			</Container>
			<Container fluid={true} className="py-3 bg-light">
				<Row className="my-4">
					<Col className="text-center">
						<h1>Questions / Answers</h1>
					</Col>
				</Row>
				<Counters/>
				<Row className="mb-4">
					<Col md={true} className="d-flex justify-content-center align-items-stretch">
						<Button size={'lg'} variant={'primary'} type="button" className="me-3"
							onClick={handleQAModalShow}><FontAwesomeIcon icon={solid('plus-circle')}
								className={'me-1'}/> Add New
                            Question
						</Button>
						<SearchForm/>
					</Col>
				</Row>
				<div className="row">
					<div className="col">
						<Accordion defaultActiveKey="0" flush>
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									<small className="text-secondary me-3">2022-08-06 00:14:00</small> You crack a
                                    joke at work, but nobody seems to have noticed. You:
								</Accordion.Header>
								<Accordion.Body>
									<div className="d-flex mb-3">
										<div>
											<Button variant={'warning'} className="bg-gradient me-2"
												onClick={handleQAModalShow}>
												<FontAwesomeIcon icon={solid('pen')} className={'me-1'}/> Edit
											</Button>
											<Button variant={'danger'} className="bg-gradient"
												onClick={handleDeleteModalShow}>
												<FontAwesomeIcon icon={solid('pen')} className={'me-1'}/> Delete
											</Button>
										</div>
										<div className="ms-auto text-secondary">
                                            Answered by 100 person(s)
										</div>
									</div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item d-flex" aria-current="true">
											<div>
												<span className="badge bg-light text-dark me-3">1</span>
                                                Don’t dare to interrupt them
												<small className="text-secondary ms-3">+10 points</small>
											</div>
											<div className="text-secondary ms-auto">Answered by 70% (70 out of
                                                100)
											</div>
										</li>
										<li className="list-group-item d-flex" aria-current="true">
											<div>
												<span className="badge bg-light text-dark me-3">2</span>
                                                Think it’s more important to give them some of your time; work can
                                                wait
												<small className="text-secondary ms-3">-10 points</small>
											</div>
											<div className="text-secondary ms-auto">Answered by 10% (10 out of
                                                100)
											</div>
										</li>
										<li className="list-group-item d-flex" aria-current="true">
											<div>
												<span className="badge bg-light text-dark me-3">3</span>
                                                Listen, but with only with half an ear
												<small className="text-secondary ms-3">+5 points</small>
											</div>
											<div className="text-secondary ms-auto">Answered by 15% (15 out of
                                                100)
											</div>
										</li>
										<li className="list-group-item d-flex" aria-current="true">
											<div>
												<span className="badge bg-light text-dark me-3">4</span>
                                                Interrupt and explain that you are really busy at the moment
												<small className="text-secondary ms-3">-5 points</small>
											</div>
											<div className="text-secondary ms-auto">Answered by 5% (5 out of 100)
											</div>
										</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									<small className="text-secondary me-3">2022-08-06 00:14:00</small> You crack a
                                    joke at work, but nobody seems to have noticed. You:
								</Accordion.Header>
								<Accordion.Body>
									<div className="d-flex mb-3">
										<div>
											<Button variant={'warning'} className="bg-gradient me-2"
												onClick={handleQAModalShow}>
												<FontAwesomeIcon icon={solid('pen')} className={'me-1'}/> Edit
											</Button>
											<Button variant={'danger'} className="bg-gradient"
												onClick={handleDeleteModalShow}>
												<FontAwesomeIcon icon={solid('pen')} className={'me-1'}/> Delete
											</Button>
										</div>
										<div className="ms-auto text-secondary">
                                            Answered by 100 person(s)
										</div>
									</div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item d-flex" aria-current="true">
											<div>
												<span className="badge bg-light text-dark me-3">1</span>
                                                Don’t dare to interrupt them
												<small className="text-secondary ms-3">+10 points</small>
											</div>
											<div className="text-secondary ms-auto">Answered by 70% (70 out of
                                                100)
											</div>
										</li>
										<li className="list-group-item d-flex" aria-current="true">
											<div>
												<span className="badge bg-light text-dark me-3">2</span>
                                                Think it’s more important to give them some of your time; work can
                                                wait
												<small className="text-secondary ms-3">-10 points</small>
											</div>
											<div className="text-secondary ms-auto">Answered by 10% (10 out of
                                                100)
											</div>
										</li>
										<li className="list-group-item d-flex" aria-current="true">
											<div>
												<span className="badge bg-light text-dark me-3">3</span>
                                                Listen, but with only with half an ear
												<small className="text-secondary ms-3">+5 points</small>
											</div>
											<div className="text-secondary ms-auto">Answered by 15% (15 out of
                                                100)
											</div>
										</li>
										<li className="list-group-item d-flex" aria-current="true">
											<div>
												<span className="badge bg-light text-dark me-3">4</span>
                                                Interrupt and explain that you are really busy at the moment
												<small className="text-secondary ms-3">-5 points</small>
											</div>
											<div className="text-secondary ms-auto">Answered by 5% (5 out of 100)
											</div>
										</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
						<div className="text-center mt-3">
							<Button variant={'secondary'}><FontAwesomeIcon icon={solid('download')}
								className={'me-1'}/> Load more</Button>
						</div>
					</div>
				</div>
			</Container>
			<Footer/>

			<QAModal
				show={showQAModal}
				handleClose={handleQAModalClose}
				handleShow={handleQAModalShow}
			/>

			<DeleteModal
				show={showDeleteModal}
				handleClose={handleDeleteModalClose}
				handleShow={handleDeleteModalShow}
			/>
		</div>
	);
}

export default CRUDPage;