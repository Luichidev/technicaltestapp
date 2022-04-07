import UserBox from '../components/UserBox'

export default function UserComments({
  text,
  name,
  lastname,
  image,
  comments,
}) {
  return (
    <div className='more__experiences__user'>
      <UserBox
        src={image}
        name={text}
        description={`${name} ${lastname}`}
        className={'more__experiences__user-head'}
      />
      <div className='more__experiences__user-footer'>
        <p>{`${comments}`} comentarios</p>
        <p>Leer más &gt;</p>
      </div>
    </div>
  )
}
