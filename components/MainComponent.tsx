import React, { useState } from 'react'
import Folder from './Folder'
import explorer from '@/data/data'

function MainComponent() {
  return (
   <>
    <div>MainComponent</div>
    {
       explorer.map(item=><Folder explorer={item} />) 
    }
    
   </>
  )
}

export default MainComponent