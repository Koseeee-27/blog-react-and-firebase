import React from "react";
import { auth, provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    // Googleログアウトの処理をここに実装
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate('/login');
      })
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>Googleでログアウト</button>
    </div>
  );
};

export default Logout;
