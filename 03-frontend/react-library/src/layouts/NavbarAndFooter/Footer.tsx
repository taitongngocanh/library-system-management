import { Link } from "react-router-dom";

export const Footer = () => {
     return (
          <div className="main-color">
               <footer className="container py-5 main-color">
                    <div className="row align-items-center">
                         <div className="col-md-6">
                              <p className="mb-0 text-white">© Example library app, Inc</p>
                         </div>
                         <div className="col-md-6">
                              <ul className="nav justify-content-end">
                                   <li className="nav-item">
                                        <Link href="#" className="nav-link px-2 text-white" to="/home">
                                             Home
                                        </Link>
                                   </li>
                                   <Link className="nav-item" to="/search">
                                        <a href="#" className="nav-link px-2 text-white">
                                             Search Books
                                        </a>
                                   </Link>
                              </ul>
                         </div>
                    </div>
               </footer>
          </div>
     );
};
