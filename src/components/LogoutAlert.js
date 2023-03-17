import React, {useEffect} from 'react'
import {confirmAlert} from 'react-confirm-alert'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth, user, logout} from '../firebase';
import "../styles/LogoutAlert.css";

function LogoutAlert() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const submit = () => {
        confirmAlert({
          title: 'Logging out?',
          message: "You're sure about this?",
          buttons: [
            {
              label: 'Yes',
              onClick: logout
            },
            {
              label: 'No',
            }
          ]
        });
      };

      
    useEffect(() => {
        if (loading) {
            return;
        } if (!user) {
            return navigate("/");
        }
      }, [user, loading]);

        return (
            <div className='container'>
              <button onClick={submit}>Logout</button>
                        
                <i className="fas fa-sign-out-alt"></i>
            </div>
          )

}

export default LogoutAlert