import React from 'react'

export default function About() {
  return (
    <div>
      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className='section-title'>ABOUT US</h2>
              <p className='section-subtitle'>Welcome to AETHERIAL, where innovation meets safety on the open road. We are more than just a helmet; we are a commitment to the well-being of riders. AETHERIAL is a cutting-edge helmet and technology product meticulously crafted to redefine the standards of rider safety.At AETHERIAL, our vision is clear. To provide an unparalleled level of safety for riders who navigate the bustling streets and winding roads. We understand the risks associated with riding, and we are on a mission to eliminate preventable accidents caused by negligence. Our goal is to make every journey on two wheels not just an exhilarating adventure but a safe and secure experience</p>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='team-item'>
                <img src='../' className='team-img' alt='picture'/>
                <h3>Anirudha Udupanvrgbnrb</h3>
                <div className='team-info'>
                  <p>Team Lead</p>
                  <ul className='team-icon'>
                    <li><a href='#' className='instagram'>
                    <iframe className='fa fa-instagram'></iframe>
                    </a></li>
                    <li><a href='#' className='github'>
                    <iframe className='fa fa-github'></iframe>
                    </a></li>
                    <li><a href='#'className='linkedin'>
                    <iframe className='fa fa-linkedin'></iframe>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
