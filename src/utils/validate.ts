type LoginData={
    email: string ,
    password: string 
}

export const checkValidateData =(props:LoginData)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(props.email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(props.password)

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid"

    return null;
}