import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-lime-300 text-lime-content p-7'>
      <div className='container mx-auto'>
        <div className='flex-none px-3 mx-3'>
          <FaGithub className='inline pr-3 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-outline btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn mx-2 btn-outline btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'User Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
