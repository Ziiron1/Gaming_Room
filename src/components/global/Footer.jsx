import React from 'react'
import './Footer.css'
import Logo from '../../img/Logo.png'


function Footer() {


  return (
    <footer>
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <img src={Logo} width="200px" className='logo_company' alt="Logo Company" />
          </div>
          <div className="footer-col">
          </div>
          <div className="footer-col">
            <h4>Online Store</h4>
            <ul>
              <li><a href="/">Games</a></li>
              <li><a href="#">Digital Games</a></li>
              <li><a href="#">Store</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Subscribe!</h4>
            <div className="form-sub">
              <form>
                <input type="email" placeholder="Send me an e-mail" required />
                <button className='btn-primary'>Submit</button>
              </form>
            </div>

            <div className="medias-socias">
              <a href="#"> <i className="fa fa-facebook"></i> </a>
              <a href="#"> <i className="fa fa-instagram"></i> </a>
              <a href="#"> <i className="fa fa-twitter"></i> </a>
              <a href="#"> <i className="fa fa-linkedin"></i> </a>
            </div>

          </div>

        </div>
      </div>
      <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>&copy;All rights reserved &reg;</h3>
    </footer>
  )
}

export default Footer