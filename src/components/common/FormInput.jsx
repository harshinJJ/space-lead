import React from 'react'

const FormInput = ({className, ...props}) => {
  return <input className={`bg-[#F6F6F6] w-full py-3 px-3.5 text-xs rounded-lg ${className}`} {...props} />
}

export default FormInput
