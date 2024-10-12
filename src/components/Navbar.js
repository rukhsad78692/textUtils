import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    // <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <nav className={`navbar navbar-expand-lg bg-${props.navClass} navbar-${props.navClass==='light'?'light':'dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={(e) => e.preventDefault()}>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${props.mode==='light'?'text-dark':'text-light'}`}>
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/#" onClick={(e) => e.preventDefault()}>Home</a> */}
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>

          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          <div className='d-flex'>
            <div className='bg-primary rounded mx-2' onClick={() => { props.paletteToggle('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer',border:'1px solid #fff' }}></div>

            <div className='bg-success rounded mx-2' onClick={()=>{props.paletteToggle('success')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid #fff'}}></div>
            <div className='bg-warning rounded mx-2' onClick={()=>{props.paletteToggle('warning')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid #fff'}}></div>
            <div className='bg-danger rounded mx-2' onClick={()=>{props.paletteToggle('danger')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid #fff'}}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'light' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title : "Title here",
//     aboutText : "About text here"
// };