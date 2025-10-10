import React from 'react'
import { Gradients } from './subComponets/Gradients'
import { PromptBar } from './subComponets/PromptBar'

export const Hero = () => {
  return (
    <div>
      {/* bg gradients */}
      <Gradients />
      {/* Prompt Bar */}
      <div className="w-full flex justify-center px-4 sm:px-6 mt-6 ">
        <PromptBar />
      </div>

    </div>
  )
}
