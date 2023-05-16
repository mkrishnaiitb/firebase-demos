import AuthProvider from "./AuthProvider"
import HomePage from "./HomePage"

function App() {
  return (
    <>
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    </>
  )
}

export default App
