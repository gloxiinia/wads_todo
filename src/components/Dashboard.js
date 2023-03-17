import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "../styles/Dashboard.css";
import JokerBack from "../images/joker-back.png";


function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) {
        return;
    } if (!user) {
        return navigate("/");
    }
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
        <picture>
          < img className="joker-back" alt ="Joker Back" src={JokerBack}/>
        </picture>
       <div className="dashboard__container">
          <div className="logged-as">Logged in as:</div>
         <div className="user-name">{name}</div>
         <div className="user-email">{user?.email}</div>
         <picture>
            < img className="user-img" alt ="User Profile" src={user?.photoURL}/>
          </picture>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
         <button className="dashboard__btn dashboard__back" onClick={()=> navigate("/")}>
          Go Back
         </button>
       </div>
     </div>
  );
}
export default Dashboard;