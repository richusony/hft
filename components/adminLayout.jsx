import Footer from './adfoot'
import Navbar from './adnav'

export default function layout({ children, user, logout ,keys}) {
  return (
    <>
      <Navbar user={user} logout={logout} keys={keys}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}