import  { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
}

const loadingSlice = createSlice({
    name:"loading",
    initialState,
    reducers: {
        setLoadingAuth: (state) => {
            state.loading = true;
        },
        unSetLoadingAuth: (state) => {
            state.loading = false;
        }
    }
});

export const { setLoadingAuth, unSetLoadingAuth } = loadingSlice.actions;
export default loadingSlice.reducer;