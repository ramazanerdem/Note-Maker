import { useDispatch, useSelector } from "react-redux"
import { setWillAdd, setIsItemId, clearText } from "../../redux/notesSlice"
import { v4 as uuidv4 } from 'uuid';

const Add = () => {

  const dispatch = useDispatch()
  const text = useSelector(state => state.notes.item.text)


  const handleClick = () => {
    if (text) {
      dispatch(setIsItemId(uuidv4()))
      dispatch(setWillAdd(true))
      dispatch(clearText())
    } else {
      alert("Please enter note ")
    }
  }


  return (
    <button onClick={() => handleClick()} className='bg-gray-800 rounded-lg border-2 border-gray-400 px-6 py-1 mr-2 text-white hover:bg-gray-600'>Add</button>
  )
}

export default Add