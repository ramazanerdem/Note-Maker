import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    item: {
      id: "",
      text: "",
      color: "bg-green"
    },
    filteredNotes: [],
    filteredText: ""
  },
  reducers: {

    // Set Items
    setIsItemId: (state, action) => {
      state.item.id = action.payload
    },
    setIsItemText: (state, action) => {
      state.item.text = action.payload
    },
    setIsItemColor: (state, action) => {
      state.item.color = action.payload
    },

    // Push and Clear
    setWillAdd: (state) => {
      state.items.push(state.item)
      state.filteredNotes = state.items
    },
    clearText: (state) => {
      state.item.text = ""
    },

    // Delete Note
    deleteItem: (state, action) => {
      const id = action.payload
      const filtered = state.items.filter(item => item.id !== id)
      state.items = filtered
      state.filteredNotes = state.items.filter((item) =>
        item.text.toLowerCase().includes(state.filteredText)
      )
    },

    // Search Notes
    searchNotes: (state, action) => {
      state.filteredText = action.payload.toLowerCase()
      state.filteredNotes = state.items.filter((item) =>
        item.text.toLowerCase().includes(state.filteredText)
      )
    }
  }
})

export const { setIsItemId, setIsItemText, setIsItemColor, setWillAdd, clearText, deleteItem, setGradColor, searchNotes } = notesSlice.actions
export default notesSlice.reducer