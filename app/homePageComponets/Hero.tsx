import React from 'react'
import { Gradients } from './subComponets/Gradients'
import { PromptBar } from './subComponets/PromptBar'

export const Hero = () => {
  return (
    <div>
      {/* bg gradients */}
      <Gradients />

      {/* Prompt Bar */}
      <div className='w-full flex justify-center'>
        <PromptBar/>
      </div>
    </div>
  )
}
