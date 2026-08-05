import { LuUpload } from "react-icons/lu";
import { ImSearch } from "react-icons/im";
import { BiSort } from "react-icons/bi";

const FileUpload = () => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-primary p-4 gap-2 mt-6 bg-foreground h-40 hover:translate-y-1 hover:shadow-xl cursor-pointer">
        <span><LuUpload /></span>
        <p className="font-mono font-semibold text-sm">Drop files here or click to upload.</p>
        <p className="text-xs tracking-widest text-secondary ">Supported formats: PDF, DOC, DOCX. Up to 50 MB each</p>
    </div>
  )
}

const SearchBar = () => {
  return (
    <div className="flex border-2 py-0.5 w-100 bg-foreground"> 
    <input className="ml-2 mr-2 text-xs tracking-widest flex-1 focus:outline-none" placeholder="Search by title, author..."></input>
    <span className="bg-accent p-1 ml-auto mr-0.5 border"><ImSearch /></span>
    </div>
    )
}

const SortMenu = () => {
  return (
    <div className="flex border-2  py-0.5 bg-accent-secondary items-center  ">
      <BiSort />
      <select className=" w-12 text-xs tracking-widest focus:outline-none bg-transparent">
        <option value="" disabled>Sort</option>
        <option>Newest</option>
        <option>Latest</option>
        <option value="name">Name (A–Z)</option>
      </select>
    </div>
  )
}

const DocumentCard = () => {
  return (
    <div className="flex flex-col border-2 mt-4 w-150 p-2 bg-card hover:shadow-xl cursor-pointer shadow-[6px_6px_0px_0px_black]">
        <div>
        <div>
            <p>Neurips</p>
            <p>2020</p>
            </div>
            <p>Retrival Augumented Generation for knoweldge Intensive NLP tasks</p>
            <p className="text-sm text-secondary">John Doe</p>
        </div>

        <div className="flex gap-2 mt-2">
            <button>View</button>
            <button> Delete</button>
        </div>
    </div>
  )
}

const LibraryPage = () => {
  return (
    <div>
        <div>
            <p className="text-xs tracking-widest uppercase text-secondary font-sans">CORPUS</p>
            <h1 className="text-2xl pt-1">Paper Library</h1>
            <p className="text-sm text-secondary pt-2">
                Everything here is indexed and searchable by the agent.<br />
                Remove a paper and it drops out of scope immediately
            </p>
        </div>
        
        <FileUpload />
        <div className="flex mt-8 gap-2">
            <SearchBar />
            <SortMenu />
        </div>

        <DocumentCard />

    </div>
  )
}

export default LibraryPage