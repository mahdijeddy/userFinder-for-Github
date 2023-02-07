function About() {
  return (
    <div className="bg-lime-300 p-11 rounded shadow-lg ">
      <h1 className='text-6xl mb-4'>Github Users Finder</h1>
      <p className=' text-2xl my-8 font-light'>
        an app to search GitHub profiles and see profile details 
        <br />
        <div className="mt-4 text-4xl">
          created by React
        </div>

      </p>
      <p className='text-lg text-lime-500 '>
        Version <span className='text-lime-600'>1.0.0</span>
      </p>
      <p>
        this app inspired from brad traversy (udemy courses)
      </p>
     
    </div>
  )
}

export default About
