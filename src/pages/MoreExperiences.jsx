import UserBox from '../components/UserBox'
export default function MoreExperiences() {
  return (
    <section className='more__experiences'>
      <div className='more__experiences__head'>
        <h2 className='more__experiences__head-title'>Más Experiencias</h2>
        <p className='more__experiences__head-seemore'>Ver todas</p>
      </div>
      <div className='more__experiences__users'>
        <div className='more__experiences__user'>
          <UserBox
            src={'./assets/images/avatar3.png'}
            name={
              'Me gustaría tener información sobre aumento de labios, de q...'
            }
            description={'car_9100'}
            className={'more__experiences__user-head'}
          />
          <div className='more__experiences__user-footer'>
            <p>7 comentarios</p>
            <p>Leer más &gt;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
