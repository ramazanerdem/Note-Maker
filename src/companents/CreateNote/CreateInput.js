import { useDispatch, useSelector } from "react-redux";
import { setIsItemText } from "../../redux/notesSlice";

const CreateInput = () => {

  const dispatch = useDispatch()
  const text = useSelector(state => state.notes.item.text)

  const handleChange = (e) => {
    dispatch(setIsItemText(e.target.value))
  }

  return (
    <textarea onChange={(text) => handleChange(text)} value={text} placeholder='Enter your note here...' className='bg-zinc-900 text-white focus:outline-none text-base md:text-lg rounded-xl border-2 border-gray-200 h-32 sm:h-52 shadow-2xl p-3' />
  )
}

export default CreateInput