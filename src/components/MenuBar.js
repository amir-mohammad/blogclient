import React, { useState,useEffect, useContext } from "react";
import { Menu } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import UserContext from "../context/user/userContext";

const MenuBar = () => {
  



  const userContext = useContext(UserContext);
  const {user,authenticationUser,logout} =userContext;


  const [aciveItem, setActiveItem] = useState("home");
  
  useEffect(()=>{
    const pathname = window.location.pathname;
    const path = pathname.substr(1);
    console.log(path);
    setActiveItem(path || 'home');
    authenticationUser();
  },[])

  
  const onClickHandler = (e, { name }) => setActiveItem(name);
  return (
    <div>
      {user?(
         <Menu pointing secondary size="massive">
         <Menu.Item
           name={user.name}
           active={aciveItem === user.name}
           onClick={onClickHandler}
           as={Link}
           to='/'
         />
         <Menu.Menu position="right">
          
           <Menu.Item
             name="logout"
             active={aciveItem === "logout"}
             onClick={logout}
             as={Link}
             to="/login"
           />
         </Menu.Menu>
       </Menu>

      ): (<Menu pointing secondary size="massive">
        <Menu.Item
          name="home"
          active={aciveItem === "home"}
          onClick={onClickHandler}
          as={Link}
          to='/'
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={aciveItem === "login"}
            onClick={onClickHandler}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={aciveItem === "register"}
            onClick={onClickHandler}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Menu>)}
    </div>
  );
};

export default MenuBar;
