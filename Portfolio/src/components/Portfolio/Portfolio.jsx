import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import portfolioData from '../../data/portfolio'
import './portfolio.scss'

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const renderPortfolio = portfolioData.portfolio.map((port, id) => {
    return (
      <div className="image__box" key={id}>
        <img className="port__image" src={port.cover} alt={port.title} />
        <div className="port__content">
          <h4 className="port__title">{port.title}</h4>
          <p className=" port__description">{port.description}</p>
          <button
            className="port__button"
            onClick={() => window.open(port.url)}
          >
            View
          </button>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="container portfolio__page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
          />
        </h1>

        <div className="image-container">{renderPortfolio}</div>
      </div>

      <Loader type="pacman" />
    </>
  )
}
