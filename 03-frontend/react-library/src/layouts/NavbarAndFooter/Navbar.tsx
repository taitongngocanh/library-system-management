export const Navbar = () => {
     return(
          <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
               <div className="container-fluid">
                    <span className="navbar-brand">東京図書館</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" ari-controls="navbarNavDropdown"
                    aria-expanded="false" arial-label="Toggle Navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                         <ul className="navbar-nav">
                              <li className="nav-item">
                                   <a className="nav-link" href="#">ホーム</a>
                              </li>

                              <li className="nav-item">
                                   <a className="nav-link" href="#">本を検索</a>
                              </li>
                         </ul>

                         <ul className="navbar-nav ms-auto">
                              <li className="nav-item m-1">
                                   <a className="btn btn-outline-light" href="#" type="button">ログイン</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
}