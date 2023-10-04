import { useNavigate } from 'react-router-dom'
import {auth,provider} from '../../config/firebase-config'
import {signInWithPopup} from 'firebase/auth'

function Auth() {

    const navigate = useNavigate();

    const signInWithGoogle = async ()=>{
        const results = await signInWithPopup(auth,provider)
        const authInfo = {
            userId: results.user.uid,
            name:results.user.displayName,
            profilePhoto : results.user.photoURL,
            isAuth:true,
        };
        localStorage.setItem("auth",JSON.stringify(authInfo));
        navigate('/expensetracker/')
    }

  return (
    <div className="login-page">
        <p>Sign in with google to continue</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Auth