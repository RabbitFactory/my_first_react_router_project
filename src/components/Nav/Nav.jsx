import { NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='flex justify-between container mx-auto mt-10 items-center'>

      <div className='text-4xl font-bold'>Book Vibe</div>
      <div className='space-x-10 font-semibold text-2xl'>
        <NavLink
        to="/"
        className={
            ({isActive}) => isActive? 'text-primary' : '' 
        }
        >Home</NavLink>
        <NavLink to="/listed_books" className={
            ({isActive}) => isActive? 'text-primary' : '' 
        }>Listed Books</NavLink>
        <NavLink to="/pages_to_read" className={
            ({isActive}) => isActive? 'text-primary' : '' 
        }>Page to Read</NavLink>
        <NavLink to="/our_favorites" className={
            ({isActive}) => isActive? 'text-primary' : '' 
        }>Our Favorites</NavLink>
        <NavLink to="/contact_us" className={
            ({isActive}) => isActive? 'text-primary' : '' 
        }>Contact us</NavLink>
      </div>
      <div className='space-x-4'>
        <button className='btn bg-green-400'>Sign in</button>
        <button className='btn bg-blue-400'>Sign up</button>
      </div>

    </div>
  )
}

export default Nav