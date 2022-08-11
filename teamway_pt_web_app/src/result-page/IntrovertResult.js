import React from 'react';

function IntrovertResult() {
	return (
		<div className="row w-100">
			<div className="col d-flex flex-column justify-content-center align-items-center border-end">
				<p className="text-secondary fw-light">you are more of an</p>
				<h1 className="display-1 text-primary fw-normal">Introvert</h1>
			</div>
			<div className="col">
				<p>you tend to…</p>
				<ul>
					<li>Look at life from the inside out.</li>
					<li>Gain energy through inner reflection and solitude.</li>
					<li>Get more excited by ideas than by external activities.</li>
					<li>Prefer a few deep, close relationships to many casual ones.</li>
					<li>Feel tired and drained after socializing, even if you enjoyed it.</li>
					<li>Listen well and expect others to do the same.</li>
					<li>Think first and talk later.</li>
					<li>Express yourself well in writing.</li>
				</ul>
			</div>
		</div>
	);
}

export default IntrovertResult;