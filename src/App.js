import { useState } from "react";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import Alert from "./components/Alert"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [navClass, setNavClass] = useState(
    () => {
      return localStorage.getItem('navbarClass') || 'primary'
    }
  )


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  // for palette 
  const paletteToggle = (cls) => {
    // document.body.style.backgroundColor = 'light'

    // for set class in the body
    if (cls && cls !== '') {
      setNavClass(cls)
      localStorage.setItem('navbarClass', cls)
      document.body.classList.remove('text-primary')
      document.body.classList.remove('text-success')
      document.body.classList.remove('text-warning')
      document.body.classList.remove('text-primary')
      document.body.classList.remove('text-danger')
      document.body.classList.add('text-' + cls)
    }
  }

  // for toggle mode
  const toggleMode = (cls) => {
    document.body.style.backgroundColor = 'light'

    // for set class in the body

    // for set state mode
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = 'grey'
      document.title = "TextUtils - Dark mode enabled"
    } else {
      setMode('light')
      showAlert("Light mode has been enabled", "success")
      document.body.style.backgroundColor = 'white'
      document.title = "TextUtils - Light mode enabled"

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} navClass={navClass} paletteToggle={paletteToggle} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Could you please provide the text you'd like me to refine?" mode={mode} showAlert={showAlert} navClass={navClass} />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          {/* <TextForm heading="Could you please provide the text you'd like me to refine?" mode={mode} showAlert={showAlert} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
