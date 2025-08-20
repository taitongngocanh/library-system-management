export const Heros = () => {
     return (
          <div>
               <div className="d-none d-lg-block">
                    <div className="row g-0 mt-5">
                         <div className="col-sm-6 col-md-6">
                              <div className="col-image-left"></div>
                         </div>
                         <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                              <div className="ml-2">
                                   <h1>最近、何を読んでいますか</h1>
                                   <p className="lead">
                                        図書館チームは、あなたが読んでいる本を知りたいと思っています。
                                        学びにも成長にも役立つ最高のコンテンツをご用意します！
                                   </p>
                                   <a href="#" className="btn main-color btn-lg text-white reserve-btn">新規登録</a>
                              </div>
                         </div>
                    </div>

                    <div className="row g-0">
                         <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                              <div className="ml-2">
                                   <h1>蔵書はいつも新しくなっています！</h1>
                                   <p className="lead">
                                        毎日チェック！蔵書は常に新しく。
                                        東京大学の学生のために、正確で最適な本を厳選しています。
                                   </p>
                              </div>
                         </div>

                         <div className="col-sm-6 col-md-6">
                              <div className="col-image-right"></div>
                         </div>
                    </div>
               </div>

               {/* Start: Mobile */}
               <div className="d-lg-none">
                    <div className="container">
                         <div className="m-2">
                              <div className="col-image-left"></div>
                              <div className="mt-2">
                                   <h1>What have you been reading</h1>
                                   <p className="lead">
                                        The library team would love to know what you have been reading.
                                        Whether it is to learn a new skill or grow within one,
                                        we will be able to provide the top content for you!
                                   </p>
                                   <a href="#" className="btn main-color btn-lg text-white">Sign up</a>
                              </div>
                         </div>

                         <div className="m-2">
                              <div className="col-image"></div>
                              <div className="mt-2">
                                   <h1>Our collection is aways changing!</h1>
                                   <p className="lead">
                                        Try to check n daily as our collection is always changing!
                                        We work nonstop to provide the most accurate book selecction possible
                                        for our Luv 2 Read students! We are diligent about our book selection
                                        and our books are always going to be our top priority
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               {/* End: Mobile */}
          </div>
     );
}