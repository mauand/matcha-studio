import React from 'react'

const Button = ({title}) => {
  return (
    <button className='w-full py-4 bg-green-600 text-white font-semibold rounded-md uppercase'>{title}</button>
  )
}

export default Button