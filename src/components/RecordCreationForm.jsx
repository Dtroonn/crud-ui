import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { TextField, Button, ErrorMessage } from "../components/forms";

const RecordCreationForm = React.memo(({ onCreateRecordSubmit, ...props }) => {
	const { handleSubmit, register, errors, reset } = useForm();
	const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

	const onFormSubmit = async (data) => {
		setIsButtonDisabled(true);
		await onCreateRecordSubmit(data);
		setIsButtonDisabled(false);
		reset();
	};
	return (
		<StyledForm onSubmit={handleSubmit(onFormSubmit)} {...props}>
			<StyledTitle>Создание новой записи</StyledTitle>
			<StyledBody>
				<StyledInputWrapper>
					<TextField
						placeholder="Введите имя"
						name="name"
						ref={register({
							required: true,
							minLength: 2,
							maxLength: 20,
						})}
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
				</StyledInputWrapper>
				<StyledInputWrapper>
					<TextField
						placeholder="Введите возраст"
						name="age"
						ref={register({
							required: true,
							max: 140,
							min: 1,
							pattern: {
								value: /^[0-9]*$/,
							},
						})}
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
				</StyledInputWrapper>
				<StyledInputWrapper>
					<TextField
						placeholder="Введите почту"
						name="email"
						ref={register({
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							},
						})}
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
				</StyledInputWrapper>
				<Button disable={isButtonDisabled} fw>
					сохранить
				</Button>
			</StyledBody>
		</StyledForm>
	);
});

const StyledForm = styled.form`
	display: block;
	max-width: 700px;
	margin: ${({ margin }) => margin || "0"};
`;

const StyledTitle = styled.div`
	font-weight: 500;
	font-size: 22px;
	text-align: center;
	margin: 0 0 12px 0;
`;

const StyledBody = styled.div``;

const StyledInputWrapper = styled.div`
	margin: 0 0 10px 0;
`;

export default RecordCreationForm;
