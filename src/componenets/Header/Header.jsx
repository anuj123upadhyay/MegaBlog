
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <section className='text-[4vw] md:text-[2.2vw]'> 

      <header className='bg-gray-500 h-[10vw] md:h-[4.5vw] flex items-center'>
        <Container>
          <nav className='flex justify-between items-center'>
            <div className='w-[25%]'>
              <Link to='/'>
                <Logo  />
              </Link>
            </div>
            <ul className='flex justify-evenly w-[60%] md:w-[40%]'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className='text-[0.85em] flex items-center
                  md:text-[0.55em] text-[#f8f8ff] px-[0.75em] py-[0.25em] rounded-full duration-200
                  hover:bg-blue-100 hover:text-gray-700 font-semibold'>
                    <Link to={`${item.slug}`}
                   
                      className='inline-bock '
                    >{item.name}</Link>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    </section>
  )
}

export default Header