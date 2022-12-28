import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        year: "Year",
        brand: "Brand",
        model: "Model",
        price: "Price",
    },
    reducers: {
        chooseYear: (state, action) => { state.year = action.payload },
        chooseBrand: (state, action) => {state.brand = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        choosePrice: (state, action) => {state.price = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseBrand, chooseModel, choosePrice } = rootSlice.actions;