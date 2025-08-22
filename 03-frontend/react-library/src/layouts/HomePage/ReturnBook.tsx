import React from "react";

export const ReturnBook = () => {
     return (
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
               <div className="text-center">
                    <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')}
                         alt="book" width="151" height="233" />
                    <h6 className="mt-2">本</h6>
                    <p>プログラミングが大好き.</p>
                    <a href="#" className="btn main-color text-white">予約</a>
               </div>
          </div>
     );

}