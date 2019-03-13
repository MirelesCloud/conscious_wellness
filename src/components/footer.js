import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className="footer mb-4">
    <div className="container text-center">
      <div className="row ">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <a href="mailto:https://heatherwsonora@gmail.com" aria-label="e-mail"><FontAwesomeIcon icon={faEnvelope} className="fa-2x mr-3"/></a>
          <a href="https://www.linkedin.com/in/heather-watson-bab051180/" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} className="fa-2x mr-3"/></a>
          <a href="https://www.facebook.com/golivewell/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} className="fa-2x"/></a>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="copyright-text">&copy; 2019 <span>Conscious Wellness - </span> <span> Created by <a href="https://mirelescloud.com"><strong style={{color:"#000"}}>MirelesCloud</strong></a></span>.  All Rights Reserved</div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 mt-4">
          <small><strong>Disclaimer:</strong> Heather Watson does not claim to treat or heal specific conditions; the effectiveness of her services are based on an individual’s ability to heal, and the results will vary. Ultimately, if the body can, it will heal itself, and these services may accelerate that process. These services do not take the place of a visit to your medical doctor.</small>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
