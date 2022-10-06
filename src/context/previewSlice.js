const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	text: {},
	previewedText: {},
};

const previewSlice = createSlice({
	name: "previewSlice",
	initialState,
	reducers: {
		createText: (state, action) => {
			state.text = action.payload;
		},
	},
	extraReducers: {},
});

export default previewSlice.reducer;
