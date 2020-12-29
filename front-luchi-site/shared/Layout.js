import Footer from "./Footer"
import Navigation from "./Navigation"
import Staff from "./Staff"

const Layout = ({ children }) => {
  return (
    <>
    <div className="container">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Layout
