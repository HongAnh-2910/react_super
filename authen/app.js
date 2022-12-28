class Http {
    constructor()
    {
        this.instance = axios.create({
            baseURL: 'http://localhost:4000',
            timeout: 1000,
        })

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
          }, function (error) {
            console.log(error)
            // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
            // Làm gì đó với lỗi response
            return Promise.reject(error);
          });
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
    http.get('/profile')
    .then((res)=>{
        console.log(res)
    })
})