import React from 'react'

const Needs = () => {
  return (
    <div className='px-4 py-16'>
        <h1 className='mb-16'>Di cosa hai bisogno</h1>
        <div className="flex flex-col lg:flex-row text-center gap-12">
        <div>
                <img src="/matcha-studio/1yogi.png" alt="yogi uno" className='w-4/5 mx-auto mb-4'/>
                <h5 className='uppercase mb-8'>IL DESIDERIO DI SENTIRTI BENE</h5>
            </div>
            <div>
                <img src="/matcha-studio/2yogi.png" alt="yogi uno" className='w-4/5 mx-auto mb-4'/>
                <h5 className='uppercase mb-8'>UN PICCOLO SPAZIO TRANQUILLO</h5>
            </div>
            <div>
                <img src="/matcha-studio/3yogi.png" alt="yogi uno" className='w-4/5 mx-auto mb-4'/>
                <h5 className='uppercase mb-8'>UN MOMENTO PER  IL TUO BENESSERE</h5>
            </div>
            <div>
                <img src="/matcha-studio/4yogi.png" alt="yogi uno" className='w-4/5 mx-auto mb-4'/>
                <h5 className='uppercase mb-8'>UN DISPOSITIVO DAL QUALE CONETTERTI</h5>
            </div>
        </div>
    </div>
  )
}

export default Needs