import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        year: "Year",
        brand: "Brand",
        model: "Model",
        price: "Price",
        zero_to_sixty: "0-60",
        top_speed: "Top Speed",
        gas: "Gas"
    },
    reducers: {
        chooseYear: (state, action) => { state.year = action.payload },
        chooseBrand: (state, action) => {state.brand = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        choosePrice: (state, action) => {state.price = action.payload},
        chooseZeroToSixty: (state, action) => {state.zero_to_sixty = action.payload},
        chooseTopSpeed: (state, action) => {state.top_speed = action.payload},
        chooseGas: (state, action) => {state.gas = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseBrand, chooseModel, choosePrice, chooseZeroToSixty, chooseTopSpeed, chooseGas } = rootSlice.actions;