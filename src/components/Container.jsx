import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 1248px;
	margin: 0 auto;
	padding: 0 12px;
`;

const Container = (props) => {
	return <StyledContainer {...props} />;
};

export default Container;
