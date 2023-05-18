import React from 'react'

import * as IoIcons from "react-icons/io";
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text", 
    },

    {
        title: "Pokesearch",
        path: "/pokesearch",
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text", 
    },
    
    {
        title: "Favorites",
        path: "/favorites",
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text", 
    },


];