import React from 'react';
import "./Chats.css";
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat 
              name="Yamini"
              message="Hey! how are you 🤗" 
              timestamp="35 minutes ago"
              profilePic="https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            />

              <Chat 
              name="Lavanya"
              message="Ola! 🖐"
              timestamp="2 hours ago"
              profilePic="https://data.whicdn.com/images/248454399/original.jpg"
            />

              <Chat 
              name="Zoya"
              message="hello 💋"
              timestamp="2 days ago"
              profilePic="https://wallup.net/wp-content/uploads/2019/09/720018-women-woman-model-female-girl-girls-style-models-fashion.jpg"
            />

             <Chat 
              name="Natasha"
              message="Oops there he is...👀"
              timestamp="2 weeks ago"
              profilePic="https://www.emmasedition.com/wp-content/uploads/2018/11/DSC_3605-1440x2156.jpg"
            />

              
            
        </div>
    )
}

export default Chats
