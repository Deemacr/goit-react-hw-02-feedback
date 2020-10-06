import React, { Component } from "react";
import Notification from "./Notification";

export default class Statistics extends Component {
	render() {
		const { good, neutral, bad, total, positivePercentage } = this.props;
		return (
			<div>
				{total > 0 ? (
					<div>
						<h2> Statistics</h2>
						<p>Good: {good}</p>
						<p>Neutral: {neutral}</p>
						<p>Bad: {bad}</p>
						<p>Total {total}</p>
						<p>Positive Feedback: {positivePercentage}%</p>
					</div>
				) : (
					<Notification message="No feedback given" />
				)}
			</div>
		);
	}
}
