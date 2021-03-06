import React from "react";
import styled from "styled-components";

const StyledFlexContainer = styled.div`
	display: flex;
	font-size: 0;
	height: ${({ height }) => height || "auto"};
	flex: ${({ flex }) => flex || "0 1 auto"};
	flex-direction: ${({ direction }) => direction || "row"};
	align-items: ${({ align }) => align || "stretch"};
	justify-content: ${({ justify }) => justify || "stretch"};
`;

const FlexContainer = (props) => {
	return <StyledFlexContainer {...props} />;
};

export default FlexContainer;
