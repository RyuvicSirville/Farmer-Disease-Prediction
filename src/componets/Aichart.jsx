import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Aichart() {
const navigate = useNavigate();
  return (
    <div class="">
      <img  onClick={() => { navigate("/chat") }} src='src/assets/aiimg.webp' className='ai hover:scale-105 shadow-2xl place-self-center'/>
    </div>
  );
}
