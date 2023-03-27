import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children, user, logout ,keys}) {
  return (
    <>
      <Navbar user={user} logout={logout} keys={keys}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}