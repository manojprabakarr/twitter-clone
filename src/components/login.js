import React from 'react'
import './login.css'
import {actionTypes} from '../reducer'
import {Usestatevalue} from '../stateprovider'
import {auth,provider} from '../firebase'


function Login() {
    const[{},dispatch]=Usestatevalue()
    const SignIn =()=> {
        auth 
        .signInWithPopup(provider)
        .then ((result)=> {
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user,
           })
        })
        .catch((err)=> {
            console.log(err)
        })

    }
    return (
        <div className="login">
            <div className="loginlogo">
                <img src="https://turbologo.com/articles/wp-content/uploads/2019/07/twitter-bird-logo.png.webp" alt="twitter"/>

                <img src="https://i2.wp.com/animationvisarts.com/wp-content/uploads/2016/10/logo-1-2.jpg?resize=500%2C500" alt="twitter"/>

                 <button type="submit" onClick={SignIn}>SignUP With Google</button>

            </div>
            
        </div>
    )
}

export default Login
