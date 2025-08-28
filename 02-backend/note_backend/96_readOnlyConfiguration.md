# Giải Thích Chi Tiết MydataRestConfig.java

Dưới đây là giải thích chi tiết từng phần của mã code Java trong file `MydataRestConfig.java`, được sử dụng trong một ứng dụng Spring Boot với Spring Data REST để cấu hình API REST và quản lý truy cập dữ liệu.

## Nội Dung Mã Code
```java
package com.tokyo.spring_boot_library.config;

import com.tokyo.spring_boot_library.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MydataRestConfig implements RepositoryRestConfigurer {
    private String theAllowedOrigins = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] theUnsupportedActions = {HttpMethod.POST, HttpMethod.PATCH, HttpMethod.DELETE, HttpMethod.PUT};

        config.exposeIdsFor(Book.class);

        disableHttpMethods(Book.class, config, theUnsupportedActions);

        /* Configure CORS Mapping */
        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(theAllowedOrigins);
    }

    private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config,
                                    HttpMethod[] theUnsupportedActions) {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure((metdata, httpMethods) ->
                        httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure(((metdata, httpMethods) ->
                        httpMethods.disable(theUnsupportedActions)));
    }
}
```

## Phân Tích Chi Tiết

### 1. **Dòng `package com.tokyo.spring_boot_library.config;`**
- **Ý nghĩa**: 
  - Khai báo gói (package) mà file `MydataRestConfig.java` thuộc về, cụ thể là `com.tokyo.spring_boot_library.config`.
  - Package `config` thường được sử dụng để chứa các lớp cấu hình trong ứng dụng Spring Boot, chẳng hạn như cấu hình bean, REST, hoặc các thành phần khác.
- **Mục đích**: Đặt file cấu hình này vào gói `config` để tổ chức mã code liên quan đến cấu hình của ứng dụng.

### 2. **Các dòng `import`**
- **Danh sách import**:
  - `com.tokyo.spring_boot_library.entity.Book`: Nhập lớp thực thể `Book`, đại diện cho bảng `Book` trong cơ sở dữ liệu.
  - `org.springframework.context.annotation.Configuration`: Nhập annotation `@Configuration` để đánh dấu lớp này là một lớp cấu hình Spring.
  - `org.springframework.data.rest.core.config.RepositoryRestConfiguration`: Nhập lớp cấu hình cho Spring Data REST, dùng để tùy chỉnh hành vi của các API REST.
  - `org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer`: Nhập giao diện `RepositoryRestConfigurer`, cho phép tùy chỉnh cấu hình Spring Data REST.
  - `org.springframework.http.HttpMethod`: Nhập enum `HttpMethod` để chỉ định các phương thức HTTP (GET, POST, PUT, v.v.).
  - `org.springframework.web.servlet.config.annotation.CorsRegistry`: Nhập lớp `CorsRegistry` để cấu hình CORS (Cross-Origin Resource Sharing).
- **Mục đích**: Nhập các lớp và giao diện cần thiết để cấu hình Spring Data REST và CORS trong ứng dụng.

### 3. **Dòng `@Configuration`**
- **Ý nghĩa**: 
  - Annotation `@Configuration` đánh dấu lớp `MydataRestConfig` là một lớp cấu hình Spring.
  - Spring Boot sẽ tự động quét và xử lý lớp này để đăng ký các bean hoặc cấu hình tùy chỉnh trong ứng dụng.
- **Mục đích**: Xác định rằng lớp này cung cấp cấu hình cho Spring Data REST và CORS.

### 4. **Dòng `public class MydataRestConfig implements RepositoryRestConfigurer`**
- **Ý nghĩa**: 
  - Khai báo một lớp công khai (public class) có tên `MydataRestConfig`, kế thừa giao diện `RepositoryRestConfigurer`.
  - Giao diện `RepositoryRestConfigurer` cung cấp các phương thức để tùy chỉnh hành vi của Spring Data REST, chẳng hạn như cấu hình API REST, CORS, hoặc các phương thức HTTP được phép.
- **Mục đích**: Cho phép lớp này tùy chỉnh cách Spring Data REST hoạt động, đặc biệt liên quan đến thực thể `Book`.

### 5. **Dòng `private String theAllowedOrigins = "http://localhost:3000";`**
- **Ý nghĩa**: 
  - Khai báo một biến instance `theAllowedOrigins` kiểu `String`, chứa URL của nguồn (origin) được phép truy cập API REST.
  - Ở đây, `http://localhost:3000` thường là URL của một ứng dụng frontend (ví dụ: ứng dụng React, Angular) chạy cục bộ trong quá trình phát triển.
- **Mục đích**: Xác định nguồn được phép gửi yêu cầu đến API REST của ứng dụng, hỗ trợ cấu hình CORS.

### 6. **Phương thức `configureRepositoryRestConfiguration`**
- **Cú pháp**:
  ```java
  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
      HttpMethod[] theUnsupportedActions = {HttpMethod.POST, HttpMethod.PATCH, HttpMethod.DELETE, HttpMethod.PUT};
      config.exposeIdsFor(Book.class);
      disableHttpMethods(Book.class, config, theUnsupportedActions);
      cors.addMapping(config.getBasePath() + "/**")
              .allowedOrigins(theAllowedOrigins);
  }
  ```
- **Ý nghĩa**:
  - Đây là phương thức được ghi đè (override) từ giao diện `RepositoryRestConfigurer`, dùng để tùy chỉnh cấu hình Spring Data REST.
  - **Biến `theUnsupportedActions`**: Một mảng các phương thức HTTP (POST, PATCH, DELETE, PUT) bị vô hiệu hóa để ngăn các thao tác tạo, cập nhật, hoặc xóa dữ liệu thông qua API REST.
  - **Dòng `config.exposeIdsFor(Book.class);`**:
    - Yêu cầu Spring Data REST hiển thị trường `id` của thực thể `Book` trong các phản hồi API REST.
    - Mặc định, Spring Data REST không trả về trường `id` trong các phản hồi JSON, nhưng dòng này đảm bảo rằng `id` của `Book` được bao gồm.
  - **Dòng `disableHttpMethods(Book.class, config, theUnsupportedActions);`**:
    - Gọi phương thức tùy chỉnh `disableHttpMethods` để vô hiệu hóa các phương thức HTTP không được phép cho thực thể `Book`.
  - **Dòng `cors.addMapping(config.getBasePath() + "/**").allowedOrigins(theAllowedOrigins);`**:
    - Cấu hình CORS để cho phép các yêu cầu từ `http://localhost:3000` truy cập vào tất cả các endpoint REST (được chỉ định bởi `/**`).
    - `config.getBasePath()` trả về đường dẫn cơ sở của API REST (thường là `/api` hoặc tùy chỉnh trong cấu hình).
- **Mục đích**:
  - Tùy chỉnh Spring Data REST để:
    - Hiển thị trường `id` trong phản hồi JSON.
    - Vô hiệu hóa các phương thức HTTP không mong muốn (POST, PATCH, DELETE, PUT) để chỉ cho phép truy cập chỉ đọc (GET).
    - Cấu hình CORS để cho phép frontend tại `http://localhost:3000` gửi yêu cầu đến API.

### 7. **Phương thức `disableHttpMethods`**
- **Cú pháp**:
  ```java
  private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config,
                                  HttpMethod[] theUnsupportedActions) {
      config.getExposureConfiguration()
              .forDomainType(theClass)
              .withItemExposure((metdata, httpMethods) ->
                      httpMethods.disable(theUnsupportedActions))
              .withCollectionExposure(((metdata, httpMethods) ->
                      httpMethods.disable(theUnsupportedActions)));
  }
  ```
- **Ý nghĩa**:
  - Đây là một phương thức private dùng để vô hiệu hóa các phương thức HTTP không được phép cho một thực thể cụ thể (`theClass`, ở đây là `Book`).
  - **Dòng `config.getExposureConfiguration()`**: Lấy đối tượng cấu hình để kiểm soát việc hiển thị (exposure) các endpoint REST.
  - **Dòng `.forDomainType(theClass)`**: Chỉ định thực thể (ở đây là `Book`) mà cấu hình này áp dụng.
  - **Dòng `.withItemExposure(...)`**: Cấu hình các phương thức HTTP bị vô hiệu hóa cho các thao tác trên một bản ghi riêng lẻ (item).
  - **Dòng `.withCollectionExposure(...)`**: Cấu hình các phương thức HTTP bị vô hiệu hóa cho các thao tác trên tập hợp bản ghi (collection).
  - **Lambda `(metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)`**: Vô hiệu hóa các phương thức HTTP được liệt kê trong `theUnsupportedActions` (POST, PATCH, DELETE, PUT).
- **Mục đích**: 
  - Đảm bảo rằng các thao tác tạo, cập nhật, hoặc xóa dữ liệu không thể thực hiện được thông qua API REST cho thực thể `Book`.
  - Chỉ cho phép các thao tác chỉ đọc (GET) để tăng cường bảo mật, phù hợp với ứng dụng chỉ cung cấp dữ liệu mà không cho phép chỉnh sửa qua API REST.

## Bối Cảnh Sử Dụng
- **Spring Data REST**: Là một phần của Spring Data, tự động tạo các API REST từ các repository (như `BookRepository` trong ví dụ trước). Mỗi repository sẽ tạo ra các endpoint REST như `/books` (cho danh sách) hoặc `/books/{id}` (cho một bản ghi cụ thể).
- **Ứng dụng**: 
  - File `MydataRestConfig.java` được sử dụng để tùy chỉnh các endpoint REST do Spring Data REST tạo ra.
  - Ví dụ, trong ứng dụng `spring_boot_library`, cấu hình này đảm bảo:
    - Các API REST chỉ cho phép truy cập chỉ đọc (GET).
    - Trường `id` của `Book` được hiển thị trong phản hồi JSON.
    - Chỉ frontend chạy tại `http://localhost:3000` được phép gửi yêu cầu đến API (do cấu hình CORS).
- **Tích hợp**: 
  - Lớp này được Spring Boot tự động nhận diện nhờ annotation `@Configuration`.
  - Nó hoạt động cùng với các repository như `BookRepository` để cung cấp API REST cho thực thể `Book`.

## Ví Dụ Minh Họa
- **API REST**: Với cấu hình này, Spring Data REST sẽ tạo các endpoint như:
  - `GET /api/books`: Lấy danh sách tất cả sách (trả về JSON bao gồm trường `id`).
  - `GET /api/books/{id}`: Lấy thông tin một cuốn sách theo `id`.
  - Các yêu cầu như `POST /api/books` hoặc `DELETE /api/books/{id}` sẽ bị chặn (trả về lỗi 405 Method Not Allowed).
- **CORS**: Chỉ các yêu cầu từ `http://localhost:3000` được chấp nhận. Nếu một frontend khác (ví dụ: `http://localhost:4000`) gửi yêu cầu, nó sẽ bị chặn bởi trình duyệt do vi phạm chính sách CORS.

## Kết Luận
- File `MydataRestConfig.java` là một lớp cấu hình quan trọng trong ứng dụng Spring Boot sử dụng Spring Data REST.
- Nó thực hiện ba nhiệm vụ chính:
  1. Hiển thị trường `id` trong phản hồi JSON của thực thể `Book`.
  2. Vô hiệu hóa các phương thức HTTP tạo/cập nhật/xóa (POST, PATCH, DELETE, PUT) để đảm bảo API chỉ đọc.
  3. Cấu hình CORS để chỉ cho phép yêu cầu từ `http://localhost:3000`.
- Cấu hình này tăng cường bảo mật và kiểm soát truy cập, phù hợp cho các ứng dụng mà API REST chỉ dùng để cung cấp dữ liệu.