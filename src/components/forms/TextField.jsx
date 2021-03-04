import React from "react";
import styled, { css } from "styled-components";

const TextField = React.forwardRef((props, ref) => {
	return <StyledInput ref={ref} {...props} />;
});

const StyledInput = styled.input`
	width: 100%;
	display: block;
	appearance: none;
	padding: ${({ padding }) => padding || "5px 10px"};
	border: 1px solid ${({ theme }) => theme.colors.purple};
	border-radius: 0 !important;
	font-size: 16px;
	background: transparent;
	${({ notOutline }) =>
		notOutline &&
		css`
			border: 0;
		`}
`;

export default TextField;
