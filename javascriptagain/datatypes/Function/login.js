function login(name,status){
    if(status==true){
        return "Login Successfully"

    }
    else{
        return "Login Failed"
    }
}
let value =login("Sneha",true)
console.log(value)

let v1=login("vamsi",false)
console.log(v1)