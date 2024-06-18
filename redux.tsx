import { configureStore, createSlice } from "@reduxjs/toolkit";

interface DataDropDownState {
    data: string[];
}

const initialDataState: DataDropDownState = { data: [] };

const dataSlice = createSlice({
    name: "dataDropDown",
    initialState: initialDataState,
    reducers : {
        addData: (state, action) => {
            
            state.data = action.payload;
            console.log(state.data);
        },
        getData : (state) => {
            return state;
        }
    }
})

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
export const { addData, getData } = dataSlice.actions;

export const store = configureStore({
    reducer: {
        presentation: presentationSlice.reducer,
        dataDropDown: dataSlice.reducer
    }
});