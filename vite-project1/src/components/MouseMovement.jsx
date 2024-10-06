// import React from 'react'
// import { useState,useEffect } from 'react'

// export default function MouseMovement() {
//   const [x, setX] = useEffect({x:0 , y:0})
//   useEffect(()=>{
//     const MovementHandle = (event) =>{
//         setX({x:event.clientX , y:event.clientY})
    
//          console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    
//       }
// window.addEventListener(x,MovementHandle)
//   return  ()=>{
//      window.removeEventListener(x,MovementHandle)
//   }
//   },[])
 
  
  
//   return (
//     <>
//     <div>MouseMovement</div>
//     <div>X: {x.x} Y: {x.y}</div>
//     </>
    
//   )
// }
import React, { useEffect } from 'react';

const MouseMovement = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Move your mouse around!</h1>
    </div>
  );
};

export default MouseMovement;

