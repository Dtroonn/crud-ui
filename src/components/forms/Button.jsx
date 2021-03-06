import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, ...props }) => {
	return (
		<StyledButton {...props}>
			<span>{children}</span>
		</StyledButton>
	);
};

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 54px;
	padding: 0 10px;
	height: 32px;
	background: ${({ theme }) => theme.colors.purple};
	span {
		font-size: 18px;
		color: #fff;
	}

	${({ red }) =>
		red &&
		css`
			background: ${({ theme }) => theme.colors.red};
		`}

	${({ green }) =>
		green &&
		css`
			background: ${({ theme }) => theme.colors.green};
		`}

	${({ fw }) =>
		fw &&
		css`
			width: 100%;
		`}

	${({ disable }) =>
		disable &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`}
`;

export default Button;
