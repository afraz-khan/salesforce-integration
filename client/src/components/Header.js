import github0 from '../images/github0.png'

function Header() {
  return (
    <header>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">
          Salesforce
          <span> Server-to-Server </span>
          Integration Sample
        </h1>
        <h4 className="mb-3">Using OAuth2.0 JWT Bearer Flow</h4>
        <p id="codelink" className="lead">
          code@
          <a href="https://github.com/afraz-khan/salesforce-integration">
            github
            <img src={github0} alt="github repo link"></img>
          </a>
        </p>
      </div>
    </header>
  )
}

export default Header
