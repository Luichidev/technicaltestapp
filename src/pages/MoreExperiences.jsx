import ListOfComments from '../components/ListOfComments'

export default function MoreExperiences() {
  return (
    <section className='more__experiences'>
      <div className='more__experiences__head'>
        <h2 className='more__experiences__head-title'>Más Experiencias</h2>
        <p className='more__experiences__head-seemore'>Ver todas</p>
      </div>
      <div className='more__experiences__users'>
        <ListOfComments />
      </div>
    </section>
  )
}
