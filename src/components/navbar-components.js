function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">hommmy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/WorkExperience">Work Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Skills">Skills</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }
  
  export default Navbar;