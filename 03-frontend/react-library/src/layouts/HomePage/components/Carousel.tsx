import { ReturnBook } from "./ReturnBook";
import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";

export const Carousel = () => {

     const [books, setBooks] = useState<BookModel[]>([]);
     const [isLoading, setIsLoading] = useState(true);
     const [httpError, setHttpError] = useState(null);

     useEffect(() => {
          const fetchBooks = async () => {
               const baseUrl: string = "localhost:8080/api/books";
               const url: string = `${baseUrl}?page=0&size=9`;
               const response = await fetch(url);
               if (!response.ok) { 
                    throw new Error("Something went wrong!")
               }
               const responseJson = await response.json();
               const responseData = responseJson._embedded.books;
               const loadedBooks: BookModel[] = [];
               for (const key in responseData) {
                    loadedBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description: responseData[key].description,
                    copies: responseData[key].copies,
                    copiesAvailable: responseData[key].copiesAvailable,
                    category: responseData[key].category,
                    img: responseData[key].img,
                    });
               }
               setBooks(loadedBooks);
               setIsLoading(false);

          };

          fetchBooks().catch((error: any) => {
               setIsLoading(false);
               setHttpError(error.message);
          })
     }, []);

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