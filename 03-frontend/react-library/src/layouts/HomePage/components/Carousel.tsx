import { ReturnBook } from "./ReturnBook";

export const Carousel = () => {
     return (
          <div className="container mt-5" style={{ height: 550 }}>
               <div className="homepage-carousel-title">
                    <h3>次の「夢中になって夜更かししちゃう本」を見つけよう.</h3>
               </div>

               {/* Start: Desktop */}
               <div id="carouselExampleControls"
                    className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval="false">
                    <div className="carousel-inner">
                         <div className="carousel-item active">
                              <div className="row d-flex justify-content-center align-items-center">
                                   <ReturnBook />
                                   <ReturnBook />
                                   <ReturnBook />
                              </div>
                         </div>

                         <div className="carousel-item active">
                              <div className="row d-flex justify-content-center align-items-center">
                                   <ReturnBook />
                                   <ReturnBook />
                                   <ReturnBook />
                              </div>
                         </div>

                         <div className="carousel-item active">
                              <div className="row d-flex justify-content-center align-items-center">
                                   <ReturnBook />
                                   <ReturnBook />
                                   <ReturnBook />
                              </div>
                         </div>
                    </div>

                    <div className="carousel-control-prev" typeof="button" data-bs-target="#carouselExampleControls"
                         data-bs-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                    </div>

                    <div className="carousel-control-next" typeof="button" data-bs-target="#carouselExampleControls"
                         data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                    </div>
               </div>
               {/* End: Desktop */}

               {/* Start: Mobile */}
               <div className="d-lg-none mt-3">
                    <div className="row d-flex justify-content-center align-items-center">
                         <ReturnBook />
                    </div>
               </div>
               {/* End: Mobile */}
          </div>
     );
}