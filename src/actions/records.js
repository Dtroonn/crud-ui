export const types = {
	SET_RECORDS: "SET_RECORDS",
	UPDATE_RECORD: "UPDATE_RECORD",
	ADD_RECORD: "ADD_RECORD",
	REMOVE_RECORD: "REMOVE_RECORD",
};

export const setRecords = (records) => ({
	type: types.SET_RECORDS,
	payload: records,
});

export const updateRecord = (id, data) => ({
	type: types.UPDATE_RECORD,
	payload: {
		id,
		data,
	},
});

export const addRecord = (record) => ({
	type: types.ADD_RECORD,
	payload: record,
});

export const removeRecord = (id) => ({
	type: types.REMOVE_RECORD,
	payload: id,
});
