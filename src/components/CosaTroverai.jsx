import React from 'react'
import Button from './Button'
import Item from './Item'

const CosaTroverai = () => {
  return (
    <div className='px-4'>
        <h1 className='font-black'>
            Cosa troverai all'interno
        </h1>
        <p>
            Tanti professionisti pronti a farti immergere nel loro mondo.
        </p>
        <Item name="Yoga e Meditazione"/>
        <Item name="Pranayama e respirazione"/>
        <Item name="Corso introduttivo per principianti"/>
        <Item name="Mini corsi per obiettivi specifici"/>
        <Item name="Sound Healing"/>
        <Item name="Aroma terapia"/>
        <Item name="Alimentazione consapevole"/>
        <Item name="e molto altro..."/>
        <p>Tutto questo in un unico abbonamento!</p>
        <Button title="Attiva ora la tua prova gratuita" />
    </div>
  )
}

export default CosaTroverai