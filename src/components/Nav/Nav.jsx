import { NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex justify-between container mx-auto mt-10 items-center'>

      <div className='text-4xl font-bold'>Book Vibe</div>
      <div className='space-x-10'>
        <NavLink
        to="/homepage"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        >Home</NavLink>
        <NavLink>Listed Books</NavLink>
        <NavLink>Page to Read</NavLink>
        <NavLink>Our Favorites</NavLink>
        <NavLink>Contact us</NavLink>
      </div>
      <div className='space-x-4'>
        <button className='btn bg-green-400'>Sign in</button>
        <button className='btn bg-blue-400'>Sign up</button>
      </div>

    </div>
  )
}

export default Nav