"use client"
import React from 'react'
import Link from 'next/link';
import styles from './links.module.css'
import NavLink from './navLink/navLink';

const Links = () => {
    const links =[
        {
            title:"Homepage",
            path:'/',
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Contact",
            path:"/contact",
        },
        {
            title:"Blog",
            path:"/blog",
        },

    ];


    const Links=()=>{
        const [open,setOpen]=useState(false)
    }


const session =true
const isAdmin=true

  return (
    <div>
    <div className={styles.links}>
        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}
        {session? (
            <>
            {isAdmin && <NavLink item={{title:'Admin', path:"/admin"}}/>}
            <button className={styles.logout}>Logout</button>
            </>
        ):(
            <NavLink item ={{title:"Login", path:"/login"}}/>
        )}
        </div>
        </div>
  );
};
export default Links