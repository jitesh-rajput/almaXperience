import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"; 


 const DoSignUp=(props)=> {
    const firestore = getFirestore();
    console.log(props);
    let err=''
        const { username, name,email, password1 ,error,loading } = props;
        console.log(username, name,email, password1,error,loading);
        const auth=getAuth();
        err= createUserWithEmailAndPassword(auth ,email, password1)
        .then((userCredential) => {
            const user = userCredential.user;
            // Create a document in Firestore to store additional details
            setDoc(doc(firestore, "users", user.uid),
            {
                              uid:user.uid,
                              profile_pic: "https://firebasestorage.googleapis.com/v0/b/pccoer-web-d4e66.appspot.com/o/icons%2Fprofile.png?alt=media&token=20ea9a22-db9b-421f-a48c-8d379cf23bee",
                              email: email,
                              username: username,
                              name: name,
                              bio: "",
                              website: "",
            }
            ).then(()=>{
                console.log(user)
                sendEmailVerification((user)=>{
                console.log("Check email")
                console.log(user.emailVerified)
                 //return "Account Created"
                return "Please Verify your Email.."
            }).catch((err)=>{
                console.log(err);
            })
            })   
            })
          .catch((error) => {
             console.log(error.message)
             return error.message
           }) 
           return err;
        }

export default DoSignUp;