import React, {useState, useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {auth, sendPasswordReset} from "../firebase";
import "../styles/Reset.css";
import JokerThumbsUp from "../images/joker-thumbsup.png";

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) {
            return;
        }if (user) {
            navigate("/dashboard");
        }
    }, [user, loading])

  return (
    <div className="reset">
      <picture>
        < img className="joker-thumbsup" alt ="Joker Thumbs Up" src={JokerThumbsUp}/>
      </picture>
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  )
}

export default Reset