

class Http {
    constructor()
    {
         this.instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 10000,
            headers: {'Content-Type': 'application/json'}
          });
          this.checkRefreshToken = null
          // Thêm một bộ đón chặn request
          this.instance.interceptors.request.use(function (config) {
                // Làm gì đó trước khi request dược gửi đi
                let token = localStorage.getItem('access_token')
                config.headers.Authorization = `Bearer ${token}`
                return config;
            }, function (error) {
                // Làm gì đó với lỗi request
                return Promise.reject(error);
            });

            // Thêm một bộ đón chặn response
            this.instance.interceptors.response.use(function (response) {
                // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
                // Làm gì đó với dữ liệu response
                return response.data;
            }, (error) => {
                if(error.message === 'Request failed with status code 401' && error.response.status === 401)
                {
                    this.checkRefreshToken = this.checkRefreshToken ? this.checkRefreshToken : refreshTokenFun()
                  return this.checkRefreshToken.then((token) => {
                        error.config.headers.Authorization = `Bearer ${token}`
                        return this.instance(error.response.config)
                    }).catch((error) => {
                        throw new(error)
                    }).finally(() => {
                        this.checkRefreshToken = null
                    })
                } 
                // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
                // Làm gì đó với lỗi response
                return Promise.reject(error);
            });
    }

    login(url  , body)
    {
        return this.instance.post(url  , body)
    }

    get(url  , params)
    {
        return this.instance.get(url  , {params})
    }

    refreshToken(url , body)
    {
        return this.instance.post(url  , body)
    }
}
const http = new Http
document.getElementById('form_login').addEventListener('submit' , function(e){
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
   
    let dataLogin = http.login('login', {username , password})
    dataLogin
    .then((result) => {
        localStorage.setItem('access_token' , result.data.access_token)
        localStorage.setItem('refresh_token' , result.data.refresh_token)
        alert("Dang nhap thanh cong")
    }).catch((err) => {
        console.log(err)
    });
})

async function refreshTokenFun()
{
    let refresh_token = localStorage.getItem('refresh_token')
    try {
         let freshToken = await http.refreshToken('/refresh-token' , {refresh_token})
         const {access_token} = freshToken.data
         localStorage.setItem('access_token' , access_token)
         return access_token
    } catch (error) {
        console.log(err)
    }
}

function getProfile()
{
    let getProfile = http.get('/profile')
    getProfile
    .then((result) => {
         console.log(result)
    }).catch((err) => {
      return err
    });
}

function getProduct()
{
    let getProduct = http.get('/products')
    getProduct
    .then((result) => {
         console.log(result)
    }).catch((err) => {
     console.log(err)
    });
}
// getProfile
document.getElementById('get_profile').addEventListener('click' , function(){
    getProfile()
})

// getProduct
document.getElementById('get_product').addEventListener('click' , function(){
    getProduct()
 })

 // getProduct/profile
document.getElementById('get_both').addEventListener('click' , function(){
    getProfile()
    getProduct()
 })

//  get token
document.getElementById('refresh_token').addEventListener('click' , function(){
    refreshTokenFun()
 })