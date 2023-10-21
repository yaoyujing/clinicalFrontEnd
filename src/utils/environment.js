let baseurl;
let env = "production"


switch(env){
    case "local":
        baseurl = "http://localhost:8000/"
        break
    case "production":
        baseurl = "https://clinicalnode.onrender.com/"
        break
}


export default baseurl;