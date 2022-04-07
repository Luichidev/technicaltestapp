export default function UserBox({ src, name, description, className }) {
  return (
    <div className={`${className}`}>
      <div className={`${className}-image`}>
        <img src={`${src}`} alt='avatar' />
      </div>
      <div className={`${className}-info`}>
        <h2>{`${name}`}</h2>
        <p>{`${description}`}</p>
      </div>
    </div>
  )
}
