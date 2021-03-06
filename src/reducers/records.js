import { types } from "../actions/records.js";

const records = (state, action) => {
	switch (action.type) {
		case types.SET_RECORDS:
			return action.payload;
		case types.UPDATE_RECORD:
			const records = [...state];
			const index = records.findIndex(
				(record) => record._id === action.payload.id
			);
			records[index] = { ...records[index], data: action.payload.data };
			return records;
		case types.ADD_RECORD:
			return [...state, action.payload];
		case types.REMOVE_RECORD:
			return state.filter((item) => item._id !== action.payload);
		default:
			return state;
	}
};

export default records;
