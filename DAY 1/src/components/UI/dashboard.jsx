import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUsers,
  faSignOutAlt,
  faTachometerAlt,
  faChalkboard,
  faMoneyBillAlt,
} from '@fortawesome/free-solid-svg-icons'
function Dashboard() {
  return (
    <div>
      <>
        <div className="sidebar">
          <Link to="/home">
            <h2>ZENVISTA</h2>
          </Link>
          <ul>
            <li>
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} />
                &nbsp; Dashboard
              </Link>
            </li>
            <li>
              <Link to="/users">
                <FontAwesomeIcon icon={faUsers} size="1x" /> &nbsp; Users
              </Link>
            </li>
            <li>
              <Link to="/adminclasses">
                <FontAwesomeIcon icon={faChalkboard} />
                &nbsp; Courses
              </Link>
            </li>
            {/* <li>
              <Link to="/payment&billing">
                <FontAwesomeIcon icon={faMoneyBillAlt} />
                &nbsp; Payment and Billing
              </Link>
            </li> */}
            <li className='logout-btn'>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignOutAlt} />
                &nbsp;Logout
              </Link>
            </li>
          </ul>
        </div>
        {/* Content */}
      </>
    </div>
  )
}

export default Dashboard