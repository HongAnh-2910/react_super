import apiPost from "./api/apiPost"


const main = async () => {
   const response = await apiPost.getAll({_page:2 , _limit:10})
   .then((res)=>{
        console.log(res)
   })
   
}

main()
