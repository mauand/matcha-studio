import React from 'react'

const Item = ({ name, className }) => {
  return (
    <div className={`w-full py-8 px-6 rounded-md text-center mb-2 ${className}`}>
      <h5>{name}</h5>
    </div>
  )
}

export default Item