import SearchInput from "./companents/SearchInput";
import CreateNote from "./companents/CreateNote";
import Notes from "./companents/Notes";

function App() {
  return (
    <div className="container bg-gray-400 mx-auto h-auto flex flex-col gap-2 items-center py-10 shadow-md shadow-gray-500">
      <h1 className="text-5xl mb-5 font-mono font-bold">Note Maker</h1>
      <SearchInput />
      <CreateNote />
      <Notes />

    </div>
  );
}

export default App;
