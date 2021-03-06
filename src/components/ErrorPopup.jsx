import React from "react";
import styled, { css } from "styled-components";

import { FlexContainer } from "../components";

const ErrorPopup = ({ onCloseClick, message, active }) => {
	const popupBodyRef = React.useRef(null);

	React.useEffect(() => {
		const handleOutsideClick = (event) => {
			const path =
				event.path || (event.composedPath && event.composedPath());
			if (!path.includes(popupBodyRef.current)) {
				onCloseClick();
			}
		};
		document.body.addEventListener("click", handleOutsideClick);

		return () => {
			document.body.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<StyledErrorPopup active={active}>
			<FlexContainer height="100%" justify="center" align="center">
				<StyledBody ref={popupBodyRef} active={active}>
					<StyledHeader>
						<StyledCross onClick={onCloseClick}>
							<svg
								width="17"
								height="17"
								viewBox="0 0 13 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.6066 12.0216C10.9971 12.4122 11.6303 12.4122 12.0208 12.0216C12.4113 11.6311 12.4113 10.9979 12.0208 10.6074L7.77883 6.36547L12.022 2.1223C12.4125 1.73177 12.4125 1.09861 12.022 0.708083C11.6315 0.317559 10.9983 0.317559 10.6078 0.708083L6.36461 4.95125L2.12129 0.707932C1.73077 0.317408 1.0976 0.317408 0.707078 0.707932C0.316554 1.09846 0.316553 1.73162 0.707078 2.12215L4.9504 6.36547L0.708287 10.6076C0.317763 10.9981 0.317763 11.6313 0.708287 12.0218C1.09881 12.4123 1.73198 12.4123 2.1225 12.0218L6.36461 7.77968L10.6066 12.0216Z"
									fill="black"
									fillOpacity="0.3"
								/>
							</svg>
						</StyledCross>
					</StyledHeader>
					<StyledContent>
						<StyledText>{message}</StyledText>
					</StyledContent>
				</StyledBody>
			</FlexContainer>
		</StyledErrorPopup>
	);
};

const StyledErrorPopup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	display: none;
	${({ active }) =>
		active &&
		css`
			display: block;
		`}
`;

const StyledBody = styled.div`
	flex: 0 0 500px;
	background: #fff;
`;

const StyledHeader = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	padding: 10px 20px;
	display: flex;
	justify-content: flex-end;
`;

const StyledContent = styled.div`
	padding: 20px;
`;

const StyledText = styled.div`
	font-weight: 500;
	font-size: 20px;
	text-align: center;
	color: ${({ theme }) => theme.colors.red};
`;

const StyledCross = styled.div`
	cursor: pointer;
`;

export default ErrorPopup;
