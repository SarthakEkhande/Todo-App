import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addFormdata } from '../utils/AppSlice'

const Body = () => {
    const dispatch=useDispatch()
    const [Formdata,setFormdata]=useState({
        name:"",
        mobileNo:"",
        address:"",

    })

    const handleinputchange=(e)=>{
        const {name,value}=e.target
        console.log(name);
        setFormdata({...Formdata,[name]:value})
    }

    const handlesubmit=()=>{
        dispatch(addFormdata(Formdata))
        setFormdata({
            name:"",
        mobileNo:"",
        address:"",

        })
        console.log("Submit called");
        
    }
  return (
    <div className='flex flex-col '>
       <div className='flex flex-col p-2 m-2 text-2xl mx-auto gap-3 font-semibold'>
          <label htmlFor="name" className=''>Name:</label> <input className='border rounded-lg border-black' type="name" id="name" name="name" value={Formdata.name} onChange={handleinputchange}></input>
          <label  htmlFor="mobileNo">Mobile No:</label> <input className='border rounded-lg border-black' type="number" id="mobileNo" name="mobileNo" value={Formdata.mobileNo} onChange={handleinputchange}></input>
          <label htmlFor="address">Address:</label> <input className='border rounded-lg border-black' type="address"  id="address" name="address" value={Formdata.address} onChange={handleinputchange} ></input>
       </div>
       <div className='mx-auto mt-5 border border-black rounded-lg p-2 m-2 bg-red-600 font-extrabold'>
           <button onClick={handlesubmit}>Add Item</button>
       </div>
    </div>
  )
}

export default Body