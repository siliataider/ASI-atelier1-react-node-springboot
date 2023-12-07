import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'Shop',
  initialState: {
    current_card: {},
    cards: [],
  },
  reducers: {
    set_current_card: (state, action) => {
        state.current_card = action.payload
    },
    load_cards: (state, action) => {
        state.cards = action.payload
    },
}
})

export const { load_cards, set_current_card } = shopSlice.actions

export default shopSlice.reducer