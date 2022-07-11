import React from 'react'
import './home.css'
import CTA from '../../components/CTA'
import ME from '../../assets/assets/noback.png'
import HeaderSocials from '../../components/HeaderSocials'

const Home = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Sofia Wong</h1>
        <h5 className='text-light'>Developer and Designer</h5>
        <CTA />
        <HeaderSocials />
      

      <div className="me">
        <img src={ME} alt='me' />
      </div>
      

      <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Home