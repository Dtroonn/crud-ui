import React from "react";

import {
	StyledTable,
	StyledHeadrow,
	StyledBody,
	StyledColumnTitle,
	StyledHeadcolumn,
} from "./StyledComponents.js";

import TableRow from "./TableRow.jsx";
import { FlexContainer } from "../../components";

const Table = ({ items, onUpdateItemSubmit, onRemoveItemClick }) => {
	return (
		<StyledTable>
			<StyledHeadrow>
				<FlexContainer>
					<StyledHeadcolumn>
						<StyledColumnTitle>Имя</StyledColumnTitle>
					</StyledHeadcolumn>
					<StyledHeadcolumn>
						<StyledColumnTitle>Возраст</StyledColumnTitle>
					</StyledHeadcolumn>
					<StyledHeadcolumn>
						<StyledColumnTitle>Email</StyledColumnTitle>
					</StyledHeadcolumn>
					<StyledHeadcolumn>
						<StyledColumnTitle>Редактировать</StyledColumnTitle>
					</StyledHeadcolumn>
					<StyledHeadcolumn>
						<StyledColumnTitle>Удалить</StyledColumnTitle>
					</StyledHeadcolumn>
				</FlexContainer>
			</StyledHeadrow>
			<StyledBody>
				{items.map((item, index) => (
					<TableRow
						onUpdateItemSubmit={onUpdateItemSubmit}
						onRemoveItemClick={onRemoveItemClick}
						key={item._id}
						item={item}
					/>
				))}
			</StyledBody>
		</StyledTable>
	);
};

export default Table;
