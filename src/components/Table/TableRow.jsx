import React from "react";
import { useForm } from "react-hook-form";

import {
	StyledRow,
	StyledColumn,
	StyledForm,
	StyledLoadingBlock,
} from "./StyledComponents.js";

import { FlexContainer } from "../../components";
import { TextField, Button, ErrorMessage } from "../../components/forms";

const TableRow = React.memo(
	({ item, onUpdateItemSubmit, onRemoveItemClick }) => {
		const [isReadonlyInputs, setIsReadonlyInputs] = React.useState(true);
		const [isUpdatingItem, setIsUpdatingItem] = React.useState(false);
		const [isRemovingItem, setIsRemovingItem] = React.useState(false);

		const toggleIsReadonlyInputs = (e) => {
			setIsReadonlyInputs((setIsReadonlyInputs) => !setIsReadonlyInputs);
			e.preventDefault();
		};

		const { register, handleSubmit, errors } = useForm();

		const onFormSubmit = async (data) => {
			try {
				setIsUpdatingItem(true);
				await onUpdateItemSubmit(item._id, data);
				setIsUpdatingItem(false);
				setIsReadonlyInputs(true);
			} catch (e) {
				setIsUpdatingItem(false);
			}
		};

		const onRemoveItem = async (e) => {
			try {
				e.preventDefault();
				setIsRemovingItem(true);
				await onRemoveItemClick(item._id);
			} catch (e) {
				setIsRemovingItem(false);
			}
		};

		return (
			<StyledRow>
				<StyledForm onSubmit={handleSubmit(onFormSubmit)}>
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
									maxLength: 20,
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
								<Button
									disable={isRemovingItem}
									onClick={toggleIsReadonlyInputs}
								>
									изменить
								</Button>
							) : (
								<Button
									disable={isUpdatingItem || isRemovingItem}
									green
								>
									сохранить
								</Button>
							)}
						</StyledColumn>
						<StyledColumn>
							<Button
								disable={isRemovingItem}
								onClick={onRemoveItem}
								red
							>
								удалить
							</Button>
						</StyledColumn>
					</FlexContainer>
				</StyledForm>
				{isUpdatingItem && !isRemovingItem && (
					<StyledLoadingBlock>Обновление...</StyledLoadingBlock>
				)}
				{isRemovingItem && (
					<StyledLoadingBlock>Удаление...</StyledLoadingBlock>
				)}
			</StyledRow>
		);
	}
);

export default TableRow;
