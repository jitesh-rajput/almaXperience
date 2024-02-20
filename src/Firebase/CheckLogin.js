import {getAuth,signInWithEmailAndPassword,sendEmailVerification  } from "firebase/auth"

const CheckLogin=async(data,login)=> {
    const auth = getAuth();
    console.log(auth);
    console.log(auth+" Authentication ");
    let err;
    const { email, password } = data;
    await signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.emailVerified)
            login(user);
            err="Login"
            /*
            if(!user.emailVerified) {
                
                sendEmailVerification(auth.currentUser)
                .then(() => {
                console.log(user+"Verify Your Email ..")
               })
               //err="Verify Your Email .."
           }
           */
        })
        .catch((error) => {
            if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                err="No User Found";
                //setLoading(false)
            }
            else if (error.message === "The email address is badly formatted.") {
                err="Please enter valid mail"
            }
            else {
                console.log(error)
                err=error.message;
                //setLoading(false)
            }
        })
        return err;
}

export default CheckLogin;