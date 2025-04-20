import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Astrologers = () => {

  const { speciality } =useParams()

  const [filterDoc,setFilterDoc] = useState([])

  const navigate = useNavigate()

  const {astrologers} = useContext(AppContext)


  const applyFilter = () => {
    if (speciality) {
        setFilterDoc(astrologers.filter(astro => astro.speciality === speciality ))
    } else {
      setFilterDoc(astrologers)
    }
  }
  
   useEffect(()=>{
    applyFilter()
   },[astrologers,speciality])


  return (
    <div>
        <p className='text-gray-600'>Browse through the astrologers specialist.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> speciality === 'Vedic astrologer' ? navigate('/astrologers') : navigate('/astrologers/Vedic astrologer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Vedic astrologer" ? "bg-primary text-white" : ""}`}>Vedic astrologer</p>
            <p onClick={()=> speciality === 'Numerologist' ? navigate('/astrologers') : navigate('/astrologers/Numerologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Numerologist" ? "bg-primary text-white" : ""}`}>Numerologist</p>
            <p onClick={()=> speciality === 'Palmist' ? navigate('/astrologers') : navigate('/astrologers/Palmist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Palmist" ? "bg-primary text-white" : ""}`}>Palmist</p>
            <p onClick={()=> speciality === 'Tarot card reader' ? navigate('/astrologers') : navigate('/astrologers/Tarot card reader')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Tarot card reader" ? "bg-primary text-white" : ""}`}>Tarot card reader</p>
            <p onClick={()=> speciality === 'Face reader' ? navigate('/astrologers') : navigate('/astrologers/Face reader')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Face reader" ? "bg-primary text-white" : ""}`}>Face reader</p>
            <p onClick={()=> speciality === 'Kundali expert' ? navigate('/astrologers') : navigate('/astrologers/Kundali expert')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Kundali expert" ? "bg-primary text-white" : ""}`}>Kundali expert</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))

            }
          </div>
        </div>
    </div>
  )
}

export default Astrologers