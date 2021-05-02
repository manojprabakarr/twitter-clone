import React,{useState} from 'react'
import {Button,Avatar} from '@material-ui/core'
import './tweet.css'
import db from '../firebase'
import firebase from 'firebase'
import {Usestatevalue} from '../stateprovider'

function Tweet() {
    const[{user},dispatch]=Usestatevalue();



    const [tweetMessage,setTweetMessage]=useState('')
    const [tweetImage,settweetImage]=useState('')

    const Senddata=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            message:tweetMessage,
            image:tweetImage,
            displayname:user.displayName,
            avatar:user.photoURL,
            username:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()


        })
        setTweetMessage('');
        settweetImage('')
    }
    
    

    
    return (
        <div className="tweet">
             <form>
        <div className="tweetBox__input">
          <Avatar src={user.photoURL} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => settweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
         
          type="submit"
          onClick={Senddata}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
           
            
       
    )
}

export default Tweet
