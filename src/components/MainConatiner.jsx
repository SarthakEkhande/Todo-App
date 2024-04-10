import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFormdata, clearformdata } from '../utils/AppSlice'
import { RiDeleteBin6Line } from "react-icons/ri";

const MainConatiner = () => {
    const AllFormdata=useSelector(store=>store.FormData.formdataList)
    console.log(AllFormdata);
    const dispatch=useDispatch()

    const removeformdata=()=>{
      dispatch(clearformdata(AllFormdata))

    }
  return (
    <div>
        {
         AllFormdata &&   AllFormdata.map((data,index)=>(
             <ul key={index} className="flex flex-wrap p-2 gap-5 items-center justify-center mt-5 border border-black border-1/2 ">
                 <li className='border border-black p-2 bg-green-200 rounded-lg'>{data.name}</li>
                 <li className='border border-black p-2 bg-green-200 rounded-lg'>{data.mobileNo}</li>
                 <li className='border border-black p-2 bg-green-200 rounded-lg'>{data.address}</li>
                 <button className='text-2xl' onClick={removeformdata}><RiDeleteBin6Line /></button>
             </ul>

         ))
        }
    </div>
  )
}

export default MainConatiner