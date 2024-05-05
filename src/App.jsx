import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import ChatScreen from './components/ChatScreen'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  const [isLogin,setIsLoggedIn] = useState(false)
  const [theme, setTheme] = useState({
    background: 'linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)',
    bubbleBackground: '#fff',
  });
  return (
    <div>
      { isLogin && <ThemeSwitcher theme={theme} setTheme={setTheme} />}
    {isLogin ? <ChatScreen theme={theme}/> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  )
}

export default App
