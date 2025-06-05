import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    windowInnerWidth: window.innerWidth,
    isOpenMenu: false,
    isPhoneModalOpen: false,
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setWindowInnerWidth: (state, action) => {
            state.windowInnerWidth = action.payload;
        },
        setIsPhoneModalOpen: (state, action) => {
            state.isPhoneModalOpen = action.payload;
        },
        setIsMenuOpen: (state, action) => {
            state.isOpenMenu = action.payload;
        },
        
    },
})

export const { setWindowInnerWidth, setIsPhoneModalOpen, setIsMenuOpen } = userSlice.actions

export default userSlice.reducer