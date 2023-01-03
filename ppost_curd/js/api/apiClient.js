import axios from "axios";

const instance = axios.create({
    baseURL: 'https://js-post-api.herokuapp.com/api',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
  });

  // Thêm một bộ đón chặn request
  instance.interceptors.request.use(function (config) {
    // Làm gì đó trước khi request dược gửi đi
    console.log(config)
    return config;
  }, (error) => {
    console.log(error.message)
    // Làm gì đó với lỗi request
    return 
    return Promise.reject(error);
  });

// Thêm một bộ đón chặn response
instance.interceptors.response.use(function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  }, function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  });

  export default instance