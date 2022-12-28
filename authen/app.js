class Http {
    constructor()
    {
        this.instance = axios.create({
            baseURL: 'http://localhost:4000',
            timeout: 1000,
        })
        this.refresh_token = null
        this.instance.interceptors.request.use(function (config) {
            const getToken = localStorage.getItem('access_token')
            if(getToken)
            {
                config.headers.authorization = `Bearer ${getToken}`
            }
            return config;
          }, function (error) {
            // Làm gì đó với lỗi request
            return Promise.reject(error);
          });

          this.instance.interceptors.response.use(function (response) {
            // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
            // Làm gì đó với dữ liệu response
            return response.data;
          }, (error) => {
            if(error.response.status === 401)
            {
                this.refresh_token = this.refresh_token ? this.refresh_token : refreshToken().finally(()=> {
                    this.refresh_token = null
                })
               return this.refresh_token.then((access_token) => {
                    error.response.config.Authorization = access_token
                   return this.instance(error.response.config)
                })
            }
            return
        // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
        // Làm gì đó với lỗi response
        return Promise.reject(error);
          })
    }

    /**
     * 
     * @param {*} url 
     * @returns 
     */

    get(url){
        return this.instance.get(url)
    }

    /**
     * 
     * @param {*} url 
     * @param {*} body 
     * @returns 
     */

    login(url , body)
    {
        return this.instance.post(url , body)
    }

    refresh(url , body)
    {
        return this.instance.post(url , body)
    }
}

function profile()
{
    http.get('/profile')
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        return error
    })
}

function product()
{
    http.get('/products')
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        return error
    })
}

async function refreshToken() 
{
    const refresh_token = localStorage.getItem('refresh_token')
    try {
       const res = await http.refresh('/refresh-token' , {
            refresh_token
        })
        const {access_token} = res.data
        localStorage.setItem('access_token' , access_token)
        return access_token
    } catch (error) {
        return error
    }
}

 const http = new Http()
document.getElementById('form_login').addEventListener('submit' , function(event){
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    http.login('/login' , {
        username,
        password
    }).then((res) => {
       localStorage.setItem('access_token' , res.data.access_token)
       localStorage.setItem('refresh_token' , res.data.refresh_token)
    }).catch((error)=>{
        console.log(error)
    })
})

document.getElementById('get_profile').addEventListener('click' , function(){
    profile()
})

document.getElementById('get_product').addEventListener('click' , function(){
    product()
})

document.getElementById('get_both').addEventListener('click' , function(){
    profile()
    product()
})

document.getElementById('refresh_token').addEventListener('click' , function(){
    refreshToken()
})