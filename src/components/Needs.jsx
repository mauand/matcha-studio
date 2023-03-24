import React from 'react'

const Needs = () => {
  return (
    <div className='px-4'>
        <h1>Di cosa hai bisogno</h1>
        <div className="flex flex-col lg:flex-row text-center gap-12">
        <div>
                <img src="/matcha-studio/1yogi.png" alt="yogi uno" />
                <h4 className='uppercase'>IL DESIDERIO DI SENTIRTI BENE</h4>
            </div>
            <div>
                <img src="/matcha-studio/2yogi.png" alt="yogi uno" />
                <h4 className='uppercase'>UN PICCOLO SPAZIO TRANQUILLO</h4>
            </div>
            <div>
                <img src="/matcha-studio/3yogi.png" alt="yogi uno" />
                <h4 className='uppercase'>UN MOMENTO PER  IL TUO BENESSERE</h4>
            </div>
            <div>
                <img src="/matcha-studio/4yogi.png" alt="yogi uno" />
                <h4 className='uppercase'>UN DISPOSITIVO DAL QUALE CONETTERTI</h4>
            </div>
        </div>
    </div>
  )
}

export default Needs