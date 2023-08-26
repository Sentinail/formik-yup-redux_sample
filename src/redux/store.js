import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeSlice";
import statusSlice from "./status/statusSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        status: statusSlice
    }
})

export default store