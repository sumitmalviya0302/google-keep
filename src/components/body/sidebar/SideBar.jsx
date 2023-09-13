import {GoLightBulb, GoArchive} from 'react-icons/go'
import {IoMdNotificationsOutline} from 'react-icons/io'
// import {MdOutlineLabel} from 'react-icons/md'
import {FiEdit2} from 'react-icons/fi'
import {BsTrash3} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import OpenSideBar from './OpenSideBar'
const SideBar = () => {


  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  if(isMenuOpen) return <OpenSideBar />

  return (
    <div className='border pt-2 w-16 h-auto'>
      <div className='w-10 h-10 mx-auto rounded-full my-3 cursor-pointer '>
      <GoLightBulb  size='25px' className='mx-auto mt-2'/>
      </div>
      <div className='w-10 h-10 mx-auto rounded-full my-3 cursor-pointer '>
      <IoMdNotificationsOutline  size='25px' className='mx-auto mt-2'/>
      </div>
      {/* <div className='w-10 h-10 mx-auto rounded-full my-3 cursor-pointer '>
      <MdOutlineLabel  size='25px' className='mx-auto mt-2'/>
      </div> */}
      <div className='w-10 h-10 mx-auto rounded-full my-3 cursor-pointer '>
      <FiEdit2  size='25px' className='mx-auto mt-2'/>
      </div>
      <div className='w-10 h-10 mx-auto rounded-full my-3 cursor-pointer '>
      <GoArchive  size='25px' className='mx-auto mt-2'/>
      </div>
      <div className='w-10 h-10 mx-auto rounded-full my-3 cursor-pointer '>
      <BsTrash3  size='25px' className='mx-auto mt-2'/>
      </div>
        
    </div>
  )
}

export default SideBar