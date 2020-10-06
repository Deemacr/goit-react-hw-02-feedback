import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

export default class Section extends Component {
	static defaultProps = {
		good: 2,
		neutral: 0,
		bad: 0,
	};

	state = {
		good: this.props.good,
		neutral: this.props.neutral,
		bad: this.props.bad,
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

	handleGoodIncrement = () => {
		this.setState((prevState) => {
			return {
				good: prevState.good + 1,
			};
		});
		this.countTotalFeedback();
	};

	handleNeutralIncrement = () => {
		this.setState((prevState) => {
			return {
				neutral: prevState.neutral + 1,
			};
		});
		this.countTotalFeedback();
	};

	handleBadIncrement = () => {
		this.setState((prevState) => {
			return {
				bad: prevState.bad + 1,
			};
		});
		this.countTotalFeedback();
	};

	render() {
		const { good, neutral, bad, total, positivePercentage } = this.state;
		return (
			<>
				<h1> Please leave Feedback</h1>
				<FeedbackOptions
					onGoodIncrement={this.handleGoodIncrement}
					onNeutralIncrement={this.handleNeutralIncrement}
					onBadIncrement={this.handleBadIncrement}
				/>

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
