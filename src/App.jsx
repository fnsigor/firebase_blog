import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { AuthProvider } from "./context/AuthContext"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useAuthentication } from "./hooks/useAuthentication"

function App() {

  const [user, setUser] = useState(undefined)

  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])


  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (

    <AuthProvider value={{ user }}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div >
      <Footer />
    </AuthProvider>
  )
}

export default App
