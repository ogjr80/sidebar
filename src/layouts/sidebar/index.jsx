import {motion} from 'framer-motion'; 
import { useState } from 'react';



//react icons 
import {IoIosArrowBack} from 'react-icons/io'; 
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink } from 'react-router-dom';

import SubMenu from './SubMenu'; 


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true); 

    //system settings for framer motion
    const sidebar_animation = {
        open : {
            width: "16rem", 
            transition: {
                damping: 40,
            }
        }, 
        closed: {
            width: "4rem", 
            transiction: {
                damping: 40, 
            }
        }
    }
    return (
        <div> 
           <motion.div variants={sidebar_animation} animate={isOpen ? "open": "closed"} className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] 
           h-screen overflow-hidden md:relative fixed">


           {/* Controll Logo and info */}
           <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
            <img src="https://img.icons8.com/color/512/firebase.png" alt="..." width={45} /> 
            <span className="text-xl whitespace-pre">Firebase</span>
           </div>
           
            {/*  Menus */}
            <div className="flex flex-col h-full">
                <ul className="whitespace-pre px-2.5 text-[0.9rem py-5 flex flex-col gap-1 font-medium overflow-x-hidden">
                    <li>
                        <NavLink className={"link"} to="/">
                            <AiOutlineAppstore size={23} className="min-w-max"/>
                            AllApps        
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"link"} to="/authentication">
                            <BsPerson size={23} className="min-w-max"/>
                            Authentication        
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"link"} to="/storage">
                            <HiOutlineDatabase size={23} className="min-w-max"/>
                            Storage        
                        </NavLink>
                    </li>

                    {/* with Submenu */}
                    <div className="border-y py-5 border-slate-300"> 
                        <small className="pl-3 text-slate-500 inline-block">
                            Product Categories
                        </small>
                        <SubMenu /> 
                    </div>

                    <li>
                        <NavLink className={"link"} to="/settings">
                            <SlSettings size={23} className="min-w-max"/>
                            Settings        
                        </NavLink>
                    </li>
                </ul>
            </div>

           {/* controll button */}
           <motion.div
            animate = {
                isOpen ? {
                    x: 0,
                    y:0, 
                    rotate: 0,
                }: 
                {
                    x: -10, 
                    y:-200, 
                    rotate: 180
                }
            }
            transition={{
                duration: 0,
            }}
           onClick={()=> { setIsOpen(!isOpen)}} 
           className="absolute w-fit h-fit right-2 bottom-5 z-50 cursor_pointer md:block hidden">
             <IoIosArrowBack size={25} />
            </motion.div> 
           </motion.div>


        </div>
    )
}

export default Sidebar; 
