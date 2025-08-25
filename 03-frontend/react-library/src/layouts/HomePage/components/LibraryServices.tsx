export const LibraryService = () => {
     return (
          <div className="container my-5">
               <div className="row p-4 align-items-center border shadow-lg">
                    <div className="col-lg-7 p-3">
                         <h1 className="display-4 fw-bold">
                              お探しの本が見つかりませんか？
                         </h1>
                         <p className="lead">
                              お探しの本が見つからない場合は、図書館の管理者へお気軽にメッセージをお送りください！
                         </p>
                         <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                              <a className="btn main-color btn-lg text-white reserve-btn" href="#">
                                   新規登録
                              </a>
                         </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
               </div>
          </div>
     );
}