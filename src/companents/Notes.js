import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/notesSlice";

const Notes = () => {

  const filteredNotes = useSelector(state => state.notes.filteredNotes)
  const dispatch = useDispatch()

  if (filteredNotes.length > 0) {
    return (
      <ul className='h-72 md:h-96 overflow-auto text-white w-11/12 lg:w-8/12 grid grid-cols-2 md:grid-cols-3 gap-2 bg-black border-4 border-gray-300 my-1 rounded-xl p-3 shadow-lg text-xs md:text-sm lg:text-base lg:p-4'>
        {filteredNotes.map(item => (
          <li key={item.id} className={`h-40 overflow-hidden hover:overflow-y-auto bg-${item.color ? item.color : "green"} rounded-md px-2 py-1 lg:px-3 lg:py-2 border-2 border-gray-300 shadow-md shadow-gray-400`} >
            <div onClick={() => dispatch(deleteItem(item.id))} className="float-right flex justify-center items-center font-bold mt-1 text-white bg-gray-800 w-7 h-7 rounded-full cursor-pointer" >X</div>
            <p className="overflow-y-auto">{item.text}</p>
          </li>
        ))}
      </ul>
    )
  }


}

export default Notes