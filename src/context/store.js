import { configureStore } from "@reduxjs/toolkit";
import previewSlice from "./previewSlice";

export const store = configureStore({
	reducer: {
		preview: previewSlice,
	},
});
