import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Kanishk Purohit</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>
            <li>
                <a href="#contact" className="footer__link">Contact Me</a>
            </li>
         
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/whoo_kanishkk_/" className="footer__social-link" target='_blank'>
       <i className="bx bxl-instagram"></i> 
    </a>

    <a href="https://github.com/KanishkPurohit" className="footer__social-link" target='_blank'>
        <i className="bx bxl-github"></i>   
    </a>
    <a href="https://www.linkedin.com/in/kanishk-purohit-17b257217/" className="footer__social-link" target='_blank'>
    <i class="bx bxl-linkedin"></i>
    </a>
        </div>

       <span className="footer__copy">&#169; Kanishk Purohit. Made with React🖤</span>
    </div>
  </footer>
  )
}

export default Footer
