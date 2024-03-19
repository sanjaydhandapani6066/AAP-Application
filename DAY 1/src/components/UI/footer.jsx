
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import '../../assets/footer.css'
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                {/* <li>
                  <a href="#">our services</a>
                </li> */}
                <li>
                  <a href="#">privacy policy</a>
                </li>
                {/* <li>
                  <a href="#">affiliate program</a>
                </li> */}
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                {/* <li>
                  <a href="#">viewProducts</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li> */}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Courses</h4>
              <ul>
                <li>
                  <a href="#">Academies</a>
                </li>
                {/* <li>
                  <a href="#">Towels</a>
                </li>
                <li>
                  <a href="#">Yogashoes</a>
                </li>
                <li>
                  <a href="#">dresses</a>
                </li> */}
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer