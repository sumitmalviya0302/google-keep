import SideBar from "./sidebar/SideBar"
import NotesList from './Notes-list/NotesList'

const Body = () => {
  return (
    <div className="flex px-2">
        <SideBar />
        <NotesList />
    </div>
  )
}

export default Body