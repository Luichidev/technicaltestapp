import ContentImages from '../components/ContentImages'
import UserBox from '../components/UserBox'
import { useRef, useState } from 'react'

export default function Experiences() {
  const linkYes = useRef()
  const linkNo = useRef()
  const inputTitle = useRef()
  const inputDescription = useRef()
  const errorInput = useRef()
  const errorTextArea = useRef()
  const [valueTitle, setValueTitle] = useState(0)
  const [valueDesc, setValueDesc] = useState(0)
  const [isYes, setIsYes] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if (!isYes) {
      linkYes.current.classList.add('active')
      linkNo.current.classList.remove('active')
      setIsYes(true)
    } else {
      linkYes.current.classList.remove('active')
      linkNo.current.classList.add('active')
      setIsYes(false)
    }
  }

  const toggleClass = (ele, status) => {
    if (status) {
      ele.current.classList.add('success')
      ele.current.classList.remove('error')
    } else {
      ele.current.classList.add('error')
      ele.current.classList.remove('success')
    }
  }

  const handleWriting = (obj) => {
    let content
    if (obj.target.tagName === 'INPUT') {
      content = inputTitle.current.value
      if (content.length > 20 && content.length < 90) {
        toggleClass(errorInput, true)
      } else {
        toggleClass(errorInput, false)
      }
      setValueTitle(content.length)
    } else if (obj.target.tagName === 'TEXTAREA') {
      content = inputDescription.current.value
      if (content.length > 300 && content.length < 18000) {
        toggleClass(errorTextArea, true)
      } else {
        toggleClass(errorTextArea, false)
      }
      setValueDesc(content.length)
    }
  }

  const resetForm = () => {
    inputTitle.current.value = ''
    inputDescription.current.value = ''
    errorInput.current.classList.remove('success')
    errorTextArea.current.classList.remove('success')
    linkYes.current.classList.remove('active')
    linkNo.current.classList.add('active')
    setValueDesc(0)
    setValueTitle(0)
    setIsYes(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let msg
    if (isYes) {
      if (
        valueTitle > 20 &&
        valueTitle < 90 &&
        valueDesc > 300 &&
        valueDesc < 18000
      ) {
        msg = 'Enviado 🚀'
        resetForm()
      } else {
        msg =
          'Error: \n El titulo debe tener entre 20 y 90 caracteres \n La descripcion entre 300 y 18000'
      }
      alert(msg)
    } else {
      msg = 'Enviado 🚀'
      alert(msg)
      resetForm()
    }
  }

  return (
    <section className='experiences'>
      <UserBox
        src='./assets/images/avatar4.png'
        name='Veris'
        description='Barcelona (Ciudad) * 8 sep 2019'
        className={'experiences__user'}
      />
      <div className='experiences__content'>
        <div className='experiences__content-title'>
          <h1>Muy orgullosa de mi nuevo abdomen</h1>
        </div>
        <div className='experiences__content-description'>
          <p className='experiences__content-description-like'>
            <span>
              <i className='fa-solid fa-thumbs-up'></i>
            </span>
            Vale la pena
          </p>
          <p className='experiences__content-description-price'>
            <span>€</span> Precio aproximado: 8500€
          </p>
        </div>
        <ContentImages />
        <div className='experiences__content-info'>
          <h2>Sobre el doctor</h2>
          <div className='experiences__content-info-doctor'>
            <div className='experiences__content-info-doctor-image'>
              <img src='./assets/images/doctor.png' alt='avatar del doctor' />
            </div>
            <div className='experiences__content-info-doctor-text'>
              <h2>Dorsia Clinica Estética</h2>
              <p>81 sedes en Madrid, Lleida, Tarragona...</p>
            </div>
          </div>
          <button className='experiences__content-info-button'>
            Contactar al doctor
          </button>
        </div>
        <div className='experiences__content-ratings'>
          <div className='experiences__content-ratings-content'>
            <h2>Valoración:</h2>
            <p>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-regular fa-star'></i>
            </p>
          </div>
          <div className='experiences__content-ratings-text'>
            <p>
              Es un excelente cirujano que se merece con creces la buena fama
              tiene, pero para estas cosas no hay que escatimar! El post
              operatorio ha sido un poco difícil. Aún no me adapto a caminar sin
              sentir molestia y opresión, pero supongo que es cuestión de
              tiempo.
            </p>
          </div>
        </div>
        <div className='experiences__content-form'>
          <h2>Cuentanos tu experriencia</h2>
          <form onSubmit={handleSubmit}>
            <div className='experiences__content-form-content'>
              <label htmlFor='name'>¿Qué tratamiento te has realizado?</label>
              <select name='experience' id='experience'>
                <option value='AS'>Aumento de senos</option>
              </select>
              <label htmlFor='name'>¿Recomendarias el tratamiento?</label>
              <div>
                <button
                  ref={linkYes}
                  onClick={handleClick}
                  className='experiences__content-form-content-button'
                >
                  Si
                </button>
                <button
                  ref={linkNo}
                  onClick={handleClick}
                  className='experiences__content-form-content-button active'
                >
                  No
                </button>
              </div>
              {isYes && (
                <div className='experiences__content-form-content-yes'>
                  <h2>Cuentanos tu experriencia</h2>
                  <div className='experiences__content-form-content-yes-box'>
                    <input
                      type='text'
                      ref={inputTitle}
                      onChange={handleWriting}
                      placeholder='Título resumen de tu experiencia'
                      required
                    />
                    <p
                      ref={errorInput}
                      className='experiences__content-form-content-yes-box-notify'
                    >
                      <span>{`${valueTitle}`}</span>/90 (min. 20)
                    </p>
                  </div>
                  <div className='experiences__content-form-content-yes-comment'>
                    <textarea
                      ref={inputDescription}
                      onChange={handleWriting}
                      name='experience'
                      id='experience'
                      required
                    ></textarea>
                    <p
                      ref={errorTextArea}
                      className='experiences__content-form-content-yes-comment-notify'
                    >
                      <span>{`${valueDesc}`}</span>/18000 (min. 300)
                    </p>
                  </div>
                </div>
              )}

              <button className='experiences__content-form-submit'>
                ¡Compartir Experiencia!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
