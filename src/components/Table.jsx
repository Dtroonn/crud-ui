import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { FlexContainer } from "../components";
import { TextField, Button, ErrorMessage } from "../components/forms";

const TableRow = ({ item }) => {
	const [isReadonlyInputs, setIsReadonlyInputs] = React.useState(true);
	const toggleIsReadonlyInputs = (e) => {
		setIsReadonlyInputs((setIsReadonlyInputs) => !setIsReadonlyInputs);
		e.preventDefault();
	};

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	console.log(errors);

	return (
		<StyledRow>
			<StyledRowForm onSubmit={handleSubmit(onSubmit)}>
				<FlexContainer>
					<StyledColumn>
						<TextField
							notOutline={isReadonlyInputs}
							readOnly={isReadonlyInputs}
							padding={isReadonlyInputs ? "0" : null}
							name="name"
							ref={register({
								required: true,
								minLength: 2,
								maxLength: 15,
							})}
							defaultValue={item.data.name}
						/>
						{errors.name?.type === "minLength" && (
							<ErrorMessage margin="2px 0 0 0">
								Имя слишком короткое
							</ErrorMessage>
						)}
						{errors.name?.type === "maxLength" && (
							<ErrorMessage margin="2px 0 0 0">
								Имя слишком длинное
							</ErrorMessage>
						)}
						{errors.name?.type === "required" && (
							<ErrorMessage margin="2px 0 0 0">
								Заполните поле
							</ErrorMessage>
						)}
					</StyledColumn>
					<StyledColumn>
						<TextField
							notOutline={isReadonlyInputs}
							readOnly={isReadonlyInputs}
							padding={isReadonlyInputs ? "0" : null}
							name="age"
							ref={register({
								required: true,
								max: 140,
								min: 1,
								pattern: {
									value: /^[0-9]*$/,
								},
							})}
							defaultValue={item.data.age}
						/>
						{(errors.age?.type === "pattern" ||
							errors.age?.type === "max" ||
							errors.age?.type === "min") && (
							<ErrorMessage margin="2px 0 0 0">
								Некорректный возраст
							</ErrorMessage>
						)}
						{errors.age?.type === "required" && (
							<ErrorMessage margin="2px 0 0 0">
								Заполните поле
							</ErrorMessage>
						)}
					</StyledColumn>
					<StyledColumn>
						<TextField
							notOutline={isReadonlyInputs}
							readOnly={isReadonlyInputs}
							padding={isReadonlyInputs ? "0" : null}
							name="email"
							ref={register({
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								},
							})}
							defaultValue={item.data.email}
						/>
						{errors.email?.type === "pattern" && (
							<ErrorMessage margin="2px 0 0 0">
								Некорректный email
							</ErrorMessage>
						)}
						{errors.email?.type === "required" && (
							<ErrorMessage margin="2px 0 0 0">
								Заполните поле
							</ErrorMessage>
						)}
					</StyledColumn>
					<StyledColumn>
						{isReadonlyInputs ? (
							<Button onClick={toggleIsReadonlyInputs}>
								изменить
							</Button>
						) : (
							<Button green>сохранить</Button>
						)}
					</StyledColumn>
					<StyledColumn>
						<Button red>удалить</Button>
					</StyledColumn>
				</FlexContainer>
			</StyledRowForm>
		</StyledRow>
	);
};

const Table = ({ items }) => {
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
					<TableRow key={item._id} item={item} />
				))}
			</StyledBody>
		</StyledTable>
	);
};

const StyledTable = styled.div``;

const StyledBody = styled.div``;

const StyledRow = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const StyledHeadrow = styled(StyledRow)`
	border-color: ${({ theme }) => theme.colors.purple};
`;

const StyledRowForm = styled.form``;

const StyledColumn = styled.div`
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

const StyledHeadcolumn = styled(StyledColumn)`
	&:nth-child(3) {
		border-color: ${({ theme }) => theme.colors.purple};
	}
`;

const StyledColumnTitle = styled.div`
	font-weight: 500;
	font-size: 20px;
`;

export default Table;
