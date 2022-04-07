import Button from './components/Button.jsx'

function App() {
  return (
    <section className='experiences'>
      <div className='experiences__user'>
        <div className='experiences__user-image'>
          <img src='./assets/images/avatar4.png' alt='avatar' />
        </div>
        <div className='experiences__user-info'>
          <h2>Veris</h2>
          <p>Barcelona (Ciudad) * 8 sep 2019</p>
        </div>
      </div>
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
        <div className='experiences__content-images'>
          <div className='experiences__content-images-img'>
            <img src='./assets/images/gallery2.png' alt='abdomen plano' />
          </div>
          <div className='experiences__content-images-img'>
            <img src='./assets/images/gallery1.png' alt='belleza' />
          </div>
          <div className='experiences__content-images-img'>
            <img src='./assets/images/gallery2.png' alt='abdomen plano' />
          </div>
          <div className='experiences__content-images-img'>
            <img src='./assets/images/gallery1.png' alt='belleza' />
          </div>
          <div className='experiences__content-images-img'>
            <img src='./assets/images/gallery2.png' alt='abdomen plano' />
          </div>
          <div className='experiences__content-images-img'>
            <img src='./assets/images/gallery1.png' alt='belleza' />
          </div>
        </div>
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
          <Button
            title='Contactar al doctor'
            value='experiences__content-info-button'
          />
        </div>
        <div className='experiences__content-ratings'>
          <div className='experiences__content-ratings-content'>
            <h2>Valoración:</h2>
            <p>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-regular fa-star'></i>
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
          <form>
            <div className='experiences__content-form-input'>
              <label htmlFor='name'>¿Qué tratamiento te has realizado</label>
              <select name='experience' id='experience'>
                <option value='AS'>Aumento de senos</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default App
