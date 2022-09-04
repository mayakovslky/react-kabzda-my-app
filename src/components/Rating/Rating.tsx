import React from 'react';

type RatingProps = {
	value: 1 | 2 | 3
}

export function Rating(props: RatingProps) {
	console.log('Rating rendering')

	if (props.value === 1) {
		return (
			<div>
			<Star selected={true}/>
			<Star selected={false}/>
			<Star selected={false}/>
			<Star selected={false}/>
			</div>
		);
	}
	if (props.value === 2) {
		return (
			<div>
			<Star selected={true}/>
			<Star selected={true}/>
			<Star selected={false}/>
			<Star selected={false}/>
			</div>
		);
	}
	if (props.value === 3) {
		return (
			<div>
			<Star selected={true}/>
			<Star selected={true}/>
			<Star selected={true}/>
			<Star selected={false}/>
			</div>
		);
	}
	return (
		<div>
		<Star selected={false}/>
		<Star selected={false}/>
		<Star selected={false}/>
		<Star selected={false}/>
		</div>
	);
}

type StarPropsType = {
	selected: boolean
}


function Star(props: StarPropsType) {
	console.log('Star rendering')

	if (props.selected === true ) {
		return <span><b>star </b> </span>	
	} else {
		return <span>star </span>	
	}
}