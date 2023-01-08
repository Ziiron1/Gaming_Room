import React from 'react'
import './Footer.css'
import GamingRoom from '../../img/GamingRoom.png'


function Footer() {


  return (
    <footer>
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <img src={GamingRoom} width="200px" className='logo_company' alt="Logo Company" />
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
              <form action="https://formcarry.com/s/ChvCzDJuf" method="POST" acceptCharset="UTF-8">
                <input style={{ margin: '10px 0 0px 0' }} type="name" name="Name" placeholder='Your Name' />
                <input style={{ margin: '10px 0 0px 0' }} type="text" className='texto' name="text" placeholder='Write me a message' />
                <button className='btn-primary'>Submit</button>
                <input type="hidden" name="_gotcha" />

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
      <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Api caught on&nbsp;<a href="https://rawg.io" target="_blank">Rawg.io</a> </h5>
    </footer>
  )
}

export default Footer