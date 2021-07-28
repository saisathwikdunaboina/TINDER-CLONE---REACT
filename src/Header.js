import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';


function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (

                <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header_icon" />
                </IconButton>
            ) : (

                <IconButton>
             <PersonIcon className="header_icon" fontSize="large" />
             </IconButton>

            )}
            

             <Link to="/">
             <img className="header_logo"
             src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png" alt="tinder logo"/>
             </Link>
             
             <Link to="/Chats">
             <IconButton>
             <QuestionAnswerIcon className="header_icon" fontSize="large" />
             </IconButton>
             </Link>
        </div>
    )
}

export default Header
