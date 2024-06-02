import { configureStore, createSlice } from "@reduxjs/toolkit";

const presentationSlice = createSlice({
    name: "presentation",
    initialState: { visiblePresentationId: null },
    reducers: {
        setVisiblePresentation: (state, action) => {
            state.visiblePresentationId = action.payload;
        },
    }
});

export const { setVisiblePresentation } = presentationSlice.actions;

export const store = configureStore({
    reducer: {
        presentation: presentationSlice.reducer,
    }
});