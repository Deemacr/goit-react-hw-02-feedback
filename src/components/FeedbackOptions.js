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
		const { onButtonClick } = this.props;
		return (
			<div>
				<OptionButton type="button" onClick={onButtonClick} name="good">
					Good
				</OptionButton>
				<OptionButton type="button" onClick={onButtonClick} name="neutral">
					Neutral
				</OptionButton>
				<OptionButton type="button" onClick={onButtonClick} name="bad">
					Bad
				</OptionButton>
			</div>
		);
	}
}

FeedbackOptions.propTypes = {
	onButtonClick: PropTypes.func.isRequired,
};
