import { useDispatch } from "react-redux"
import { searchNotes } from "../redux/notesSlice"

const SearchInput = () => {

  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch(searchNotes(e.target.value))
  }

  return (
    <>
      <input onChange={(text) => handleSearch(text)} placeholder="Searching your notes..." className="text-sm rounded-full border-2 border-gray-400 shadow-lg px-4 py-2 focus:outline-none" />
    </>
  )
}

export default SearchInput