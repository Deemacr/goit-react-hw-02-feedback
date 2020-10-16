import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const OptionButton = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid blueviolet;
	border-radius: 3px;
`;

export default class FeedbackOptions extends Component {
	render() {
		const { onGoodIncrement, onNeutralIncrement, onBadIncrement } = this.props;
		return (
			<div>
				<OptionButton type="button" onClick={onGoodIncrement}>
					Good
				</OptionButton>
				<OptionButton type="button" onClick={onNeutralIncrement}>
					Neutral
				</OptionButton>
				<OptionButton type="button" onClick={onBadIncrement}>
					Bad
				</OptionButton>
			</div>
		);
	}
}

FeedbackOptions.propTypes = {
	onGoodIncrement: PropTypes.func.isRequired,
	onNeutralIncrement: PropTypes.func.isRequired,
	onBadIncrement: PropTypes.func.isRequired,
};
