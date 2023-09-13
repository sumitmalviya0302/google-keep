import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {TfiViewList} from 'react-icons/tfi'
import {MdGridView, MdViewCompact,MdAccountCircle} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'

import {LOGO_URL} from '../../utils/constants'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../utils/appSlice'


const Header = () => {

    const [showButton, setShowButton] = useState(false)

    const handleInputClick = () => {
        setShowButton(true)
    }

    const handleCloseButton = () => {
        setShowButton(false)
    }

    const dispatch = useDispatch()

    const handleToggle = () => {
        dispatch(toggleMenu())
    }

  return (
    <div className='flex justify-between p-2 border-b'>
        <div className='flex border px-4 '>
            <AiOutlineMenu size='22px' className='my-auto mx-1 'onClick={()=>handleToggle()}/>
            <img src={LOGO_URL} alt='logo' className='w-12 h-12 my-auto mx-1'/>
            <h2 className='text-xl my-auto mx-1'>Keep</h2>
        </div>
        <div className='flex border px-4'>
            <BiSearch size='22px' className='my-auto mx-1 '/>
            <input type='text' placeholder='Search' className='w-96 h-10 my-auto mx-1  outline-none' onClick={handleInputClick}/>
            {showButton && <AiOutlineClose size='22px' className='my-auto mx-1 'onClick={handleCloseButton}/>}
        </div>
        <div className='flex border'>
            <TfiViewList size='22px' className='my-auto mx-2 '/>
            <MdGridView size='22px' className='my-auto mx-2 '/>
            <FiSettings size='22px' className='my-auto mx-2 '/>
        </div>
        <div className='flex border'>
            <MdViewCompact size='25px' className='my-auto mx-2 '/>
            <MdAccountCircle size='25px' className='my-auto mx-2 '/>
        </div>
    </div>
  )
}

export default Header