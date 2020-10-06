import React, { Component } from "react";
import Section from "./Section";

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	render() {
		const { good, neutral, bad } = this.state;
		return (
			<>
				<Section good={good} neutral={neutral} bad={bad} />
			</>
		);
	}
}
