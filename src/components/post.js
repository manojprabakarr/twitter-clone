import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = 
    ({avatar,message,displayName,username,image}) => {
    return (
      <div className="post" >
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3 className="post__headerSpecial">
                {displayName}
                <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                  {username}
                </span>
               
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{message}</p>
            </div>
          </div>
          <img src={image} alt=""  width="400px" height="400px"/>
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    
    )

    }


export default Post;