import { GoLightBulb, GoArchive } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { MdOutlineLabel } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";

const OpenSideBar = () => {
  return (
    <div className="border pt-2 w-60 h-auto">
      <div className="flex  h-12 rounded-r-full">
          <GoLightBulb size="25px" className="mx-[18px] my-auto" />
        <p className="my-auto ml-2">Notes</p>
      </div>
      <div className="flex  h-12 rounded-r-full mt-1">
        <IoMdNotificationsOutline size="25px" className="mx-[18px] my-auto" />
        <p className="my-auto ml-2">Reminders</p>
      </div>
      {/* <div className='w-10 h-10 mx-auto rounded-full my-3 cursor-pointer '>
      <MdOutlineLabel  size='25px' className='mx-auto mt-2'/>
      </div> */}
      <div className="flex  h-12 rounded-r-full mt-1">
        <FiEdit2 size="25px" className="mx-[18px] my-auto" />
        <p className="my-auto ml-2">Edit Label</p>
      </div>
      <div className="flex  h-12 rounded-r-full mt-1">
        <GoArchive size="25px" className="mx-[18px] my-auto" />
        <p className="my-auto ml-2">Archive</p>
      </div>
      <div className="flex  h-12 rounded-r-full mt-1">
        
        <BsTrash3 size="25px" className="mx-[18px] my-auto" />
        <p className="my-auto ml-2">Empty</p>
      </div>
    </div>
  );
};

export default OpenSideBar;
