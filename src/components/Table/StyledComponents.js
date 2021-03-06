import styled from "styled-components";

export const StyledTable = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.purple};
`;

export const StyledBody = styled.div``;

export const StyledRow = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	position: relative;
`;

export const StyledHeadrow = styled(StyledRow)`
	border-color: ${({ theme }) => theme.colors.purple};
`;

export const StyledRowForm = styled.form``;

export const StyledColumn = styled.div`
	flex: 0 0 20%;
	height: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 5px 10px;
	&:nth-child(3) {
		border-right: 1px solid ${({ theme }) => theme.colors.gray};
	}
`;

export const StyledHeadcolumn = styled(StyledColumn)`
	&:nth-child(3) {
		border-color: ${({ theme }) => theme.colors.purple};
	}
`;

export const StyledColumnTitle = styled.div`
	font-weight: 500;
	font-size: 20px;
`;

export const StyledForm = styled.form``;

export const StyledLoadingBlock = styled.div`
	position: absolute;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.7);
	height: 100%;
	width: 60%;
	color: #fff;
	top: 0;
	left: 0;
`;
