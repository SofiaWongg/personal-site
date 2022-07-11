import React from 'react'
import Resume from '../assets/assets/WordpressDeveloper.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    {/*check if resume link works*/}
    <a href={Resume} download className='btn'>Download Resume</a>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA