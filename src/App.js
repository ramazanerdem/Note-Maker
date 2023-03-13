import SearchInput from "./companents/SearchInput";
import CreateNote from "./companents/CreateNote";
import Notes from "./companents/Notes";

function App() {
  return (
    <div className="container font-mono bg-black mx-auto h-auto flex flex-col gap-2 items-center py-5">
      <div className="w-10/12 md:w-6/12 flex justify-between items-center">
        <h1 className="text-xl md:text-3xl text-white font-bold">Note Maker</h1>
        <SearchInput />
      </div>
      <CreateNote />
      <Notes />
      <footer className="text-white absolute bottom-2">
        <p>Created by RamazanErdem </p>
      </footer>

    </div>
  );
}

export default App;
