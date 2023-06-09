import CreateInput from "./CreateNote/CreateInput"
import Color from "./CreateNote/Color"
import Add from "./CreateNote/Add"

const CreateNote = () => {

  return (
    <div className={`w-11/12 md:w-8/12 lg:w-6/12 flex flex-col gap-3 border-4 border-gray-300 bg-black my-3 rounded-xl p-3 shadow-lg`}>
      <CreateInput />
      <div className="flex justify-between items-center">
        <Color />
        <Add />
      </div>
    </div>
  )
}

export default CreateNote