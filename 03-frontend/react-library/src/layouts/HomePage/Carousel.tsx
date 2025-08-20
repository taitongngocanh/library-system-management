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
                                   <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                        <div className="text-center">
                                             <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                                  alt="book" width="151" height="233" />
                                             <h6 className="mt-2">本</h6>
                                             <p>プログラミングが大好き.</p>
                                             <a href="#" className="btn main-color text-white reserve-btn">予約</a>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="carousel-item active">
                              <div className="row d-flex justify-content-center align-items-center">
                                   <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                        <div className="text-center">
                                             <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                                  alt="book" width="151" height="233" />
                                             <h6 className="mt-2">本</h6>
                                             <p>プログラミングが大好き.</p>
                                             <a href="#" className="btn main-color text-white reserve-btn">予約</a>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="carousel-item active">
                              <div className="row d-flex justify-content-center align-items-center">
                                   <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                                        <div className="text-center">
                                             <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                                                  alt="book" width="151" height="233" />
                                             <h6 className="mt-2">本</h6>
                                             <p>プログラミングが大好き.</p>
                                             <a href="#" className="btn main-color text-white reserve-btn">予約</a>
                                        </div>
                                   </div>
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
                         <div className="text-center">
                              <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')} alt="book" width="151" height="233" />
                              <h6 className="mt-2"><b>本</b></h6>
                              <p>プログラミングが大好き.</p>
                              <a className="btn main-color text-white reserve-btn" href="#">予約</a>
                         </div>
                    </div>
               </div>
               {/* End: Mobile */}
          </div>
     );
}