import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};
	countTotalFeedback = () => {
		this.setState((prevState) => {
			const total = prevState.good + prevState.neutral + prevState.bad;
			return { total };
		});
		this.countPositiveFeedbackPercentage();
	};

	countPositiveFeedbackPercentage = () => {
		this.setState((prevState) => {
			return {
				positivePercentage: Math.trunc(
					(prevState.good /
						(prevState.good + prevState.neutral + prevState.bad)) *
						100
				),
			};
		});
	};

	handleButton = ({ target }) => {
		const { name } = target;
		this.setState((prevState) => {
			return {
				[name]: prevState[name] + 1,
			};
		});
		this.countTotalFeedback();
	};

	render() {
		const { good, neutral, bad, positivePercentage, total } = this.state;
		return (
			<>
				<h1> Please leave Feedback</h1>
				<FeedbackOptions onButtonClick={this.handleButton} />

				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={total}
					positivePercentage={positivePercentage}
				/>
			</>
		);
	}
}
