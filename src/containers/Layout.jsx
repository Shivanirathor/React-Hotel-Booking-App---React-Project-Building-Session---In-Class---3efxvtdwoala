import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router';
import { auth } from '../firebase';

const Layout = (props) => {
    console.log(props);
    const  navigate = useNavigate();

    useEffect(()=>{
        // check if the user is logged in, if not redirect them back
        auth.onAuthStateChanged((user)=>{
            if(!user){
                navigate("/");
            }
            console.log("user",user);
        });
    },[]);
  return (
    <div>
        <NavBar/>
        {props.children}
        <footer>Copyright</footer>
        {/* dynamic component */}
    </div>
  )
}

export default Layout
