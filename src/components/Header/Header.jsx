import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Posts',
      slug: '/add-posts',
      active: authStatus
    }
  ]
  return (
  <header className="py-3 shadow-md bg-gray-900 text-white border-b border-gray-700">
  <Container>
    <nav className="flex gap-5">
      <div className="flex items-center md:w-1/4 lg:w-1/5">
        <Link to="/">
          <Logo noPadding width="100%" />
        </Link>
      </div>

      <ul className="flex ml-auto flex-shrink">
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className="inline-block px-3 sm:px-4 md:px-5 py-2 rounded-full text-sm sm:text-base hover:bg-gray-700 transition duration-200"
              >
                {item.name}
              </button>
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

  )
}

export default Header
