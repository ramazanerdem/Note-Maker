import { useDispatch, useSelector } from "react-redux"
import { setIsItemColor } from "../../redux/notesSlice"


const Color = () => {

  const dispatch = useDispatch()
  const color = useSelector(state => state.notes.item.color)

  const green = "green"
  const red = "red"
  const blue = "blue"
  const orange = "orange"
  const pink = "pink"

  return (
    <div className='flex gap-1 md:gap-2 ml-2'>
      <button onClick={() => dispatch(setIsItemColor(green))} className={`w-0 h-0 border-2 ${!color ? "border-white" : color !== green ? "border-green" : "border-white"} rounded-full p-3 bg-green`}></button>
      <button onClick={() => dispatch(setIsItemColor(red))} className={`w-0 h-0 border-2 ${color !== red ? "border-red" : "border-white"} rounded-full p-3 bg-red`}></button>
      <button onClick={() => dispatch(setIsItemColor(blue))} className={`w-0 h-0 border-2 ${color !== blue ? "border-blue" : "border-white"} rounded-full p-3 bg-blue`}></button>
      <button onClick={() => dispatch(setIsItemColor(orange))} className={`w-0 h-0 border-2 ${color !== orange ? "border-orange" : "border-white"} rounded-full p-3 bg-orange`}></button>
      <button onClick={() => dispatch(setIsItemColor(pink))} className={`w-0 h-0 border-2 ${color !== pink ? "border-pink" : "border-white"} rounded-full p-3 bg-pink`}></button>
    </div>
  )
}

export default Color