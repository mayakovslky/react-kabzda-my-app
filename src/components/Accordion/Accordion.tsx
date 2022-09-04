import React from 'react';

type AccordionPropsType = {
	titleValue: string,
	
}

function Accordion(props: AccordionPropsType) {
	console.log('Accordion rendering')

	return (
	<div>
		<AccordionTitle title={props.titleValue}/>
		<AccordionBody/>
	</div>
	)
}

type AccordionTitlePropsType = {
	title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
	console.log('Accordion rendering')
	return (
	<div>
		<h3>---{props.title}---</h3>
	</div>
	)
}

function AccordionBody(props: any) {
	console.log('Accordion rendering')
	return (
	<div>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	</div>
	)
}

export default Accordion;