import spinner from './assets/sp.gif'

function Spinner() {
  return (
    <div className='mt-24'>
      <img
        width={80}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner
