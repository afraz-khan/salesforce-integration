import twitter from '../images/twitter.png'
import dev from '../images/dev.png'
import mmm from '../images/mmm.png'
import github from '../images/github.png'

function Footer() {
  return (
    <footer>
      @2021 afraz-khan.github.io
      <ul>
        <li>
          <a href="https://twitter.com/afrazkhan_">
            <img className="social-icon" src={twitter} alt="twitter link" />
          </a>
        </li>
        <li>
          <a href="https://github.com/afraz-khan">
            <img className="social-icon" src={github} alt="github link" />
          </a>
        </li>
        <li>
          <a href="https://mmm.page/afrazkhan.main">
            <img className="social-icon" src={mmm} alt="mmm link" />
          </a>
        </li>
        <li>
          <a href="https://dev.to/afrazkhan">
            <img className="social-icon" src={dev} alt="dev.to link" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
