import React from 'react'
import Resume from '../../assets/sampada sandip kuveskar.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Résumé</a>
        <a href='#contact' className='btn btn-primary'>Connect</a>
    </div>
  )
}

export default CTA