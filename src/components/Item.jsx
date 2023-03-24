import React from 'react'

const Item = ({ name }) => {
  return (
    <div className='w-full py-8 px-6 bg-white rounded-md text-center mb-2'>
      <h5>{name}</h5>
    </div>
  )
}

export default Item