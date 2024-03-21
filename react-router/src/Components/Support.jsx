import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();

  
  return (
    <div>
       <div>Support</div>
       <button onClick={() => {
        navigate("/about")
      }}>Go to About</button>
    </div>
   
  )
}

export default Support