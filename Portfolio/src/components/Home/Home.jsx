import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './home.scss'
import Logo from './Logo/Logo'
const LogoS =
  'https://raw.githubusercontent.com/bobangajicsm/react-portfolio-website/master/src/assets/images/logo-s.png'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['H', 'a', 'r', 's', 'h', 'i','t']
  const jobsArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    '-',
    'e',
    'n',
    'd',
    '',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <>
      <div className="container home__page">
        <div className="home__text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _12`}>I'</span>
            <span className={`${letterClass} _12`}>m</span>

            <img src={LogoS} alt="front-end-developer" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobsArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer</h2>
          <Link to="/contact" className="flat-button">
            {' '}
            Contact ME{' '}
          </Link>
        </div>

        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}
