import { useEffect, useRef, useState } from 'react'
import './contact.scss'
import '../Layout/index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_nu5xbef',
        'template_lm3u2co',
        refForm.current,
        '6erxuzpQKcpdldRxhl-YX'
      )
      .then(
        () => {
          alert('Send email successfully')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, Plese try again')
        }
      )
  }

  return (
    <>
      <div className="container contact__page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'M', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>

          <div className="contact-form">
            <form rel={refForm} onSubmit={(e) => sendEmail(e)}>
              <ul>
                <div className="half__group">
                  <li className="half">
                    <input
                      placeholder="Input Your Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Input Your Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                </div>
                <li className="half">
                  <input
                    placeholder="Input Your Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Input Your Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info__map">
          Harshit Sharma
          <br />
          India,
          <br />
          New Delhi <br />
          Saket
          <br />
          <span>harshitsharma7222@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>
                Ebayyou lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}
