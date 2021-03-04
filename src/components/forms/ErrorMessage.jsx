import React from "react";
import styled from "styled-components";

const StyledErrorMessage = styled.div`
	margin: ${({ margin }) => margin || "0"};
	font-size: ${({ fontSize }) => fontSize || "14px"};
	color: ${({ theme }) => theme.colors.red};
`;

const ErrorMessage = (props) => {
	return <StyledErrorMessage {...props} />;
};

export default ErrorMessage;
