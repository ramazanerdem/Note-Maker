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

  const borderGreen = "border-" + green
  const borderRed = "border-" + red
  const borderBlue = "border-" + blue
  const borderOrange = "border-" + orange
  const borderPink = "border-" + pink

  // const bgGreen = "bg-" + green
  // const bgRed = "bg-" + red
  // const bgBlue = "bg-" + blue
  // const bgOrange = "bg-" + orange
  // const bgPink = "bg-" + pink

  return (
    <div className='flex gap-2 ml-2'>
      <button onClick={() => dispatch(setIsItemColor(green))} className={`w-0 h-0 border-2 ${color !== green ? borderGreen : `border-black`} rounded-full p-3 bg-green`}></button>
      <button onClick={() => dispatch(setIsItemColor(red))} className={`w-0 h-0 border-2 ${color !== red ? borderRed : `border-black`} rounded-full p-3 bg-red`}></button>
      <button onClick={() => dispatch(setIsItemColor(blue))} className={`w-0 h-0 border-2 ${color !== blue ? borderBlue : `border-black`} rounded-full p-3 bg-blue`}></button>
      <button onClick={() => dispatch(setIsItemColor(orange))} className={`w-0 h-0 border-2 ${color !== orange ? borderOrange : `border-black`} rounded-full p-3 bg-orange`}></button>
      <button onClick={() => dispatch(setIsItemColor(pink))} className={`w-0 h-0 border-2 ${color !== pink ? borderPink : `border-black`} rounded-full p-3 bg-pink`}></button>
    </div>
  )
}

export default Color