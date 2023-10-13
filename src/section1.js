import React from "react";

class section1 extends React.Component {
    render() {
        return (
            <>
                <main className="md:h-[87vh] sm:h-[50vh] h-[45vh]">
                    <nav className="flex justify-between 2xl:w-4/5 lg:w-full">
                        <a href="#" className="logo h-full w-2/5 md:w-2/6 lg:w-1/5  ml-4  flex justify-start gap-3 items-center">
                            <img className="sm:h-[50px] h-[30px] sm:w-[50px] w-[30px]" src="images/logo.svg" />
                            <h3 className="sm:text-[20px] text-[15px]">Simply Natural</h3>
                        </a>
                        <ul style={{ letterSpacing: ".3px", }} className="h-full w-3/5 lg:w-4/5 2xl:w-3/5 flex justify-end gap-2 lg:justify-evenly items-center text-base">
                            <a href="#" className="check h-full hidden lg:flex flex items-center">
                                <li className="cursor-pointer text-red-400">Home</li>
                            </a>
                            <a href="#" className="check h-full hidden lg:flex flex items-center">
                                <li style={{ transitionDuration: '.3s',position:"relative" }} className="storeli cursor-pointer h-full flex items-center">Store
                                    <i className="cursor-pointer fa-solid fa-chevron-down text-xs pl-4"></i>
                                    <ul className="dropdown w-64 bg-white py-5">
                                        <li className="pl-4">Plants</li>
                                        <li className="pl-4 pt-5">Cactus</li>
                                    </ul>
                                </li>
                            </a>
                            <a href="#" className="check h-full hidden lg:flex flex items-center">
                                <li style={{ transitionDuration: '.3s' }} className="cursor-pointer">About Us</li>
                            </a>
                            <a href="#" className="check h-full hidden lg:flex flex items-center">
                                <li style={{ transitionDuration: '.3s' }} className="cursor-pointer">Contact Us</li>
                            </a>
                            <a href="#" className="check h-full hidden lg:flex flex items-center">
                                <li style={{ transitionDuration: '.3s' }} className="cursor-pointer">My Account</li>
                            </a>
                            <a href="#" className="checking h-full flex items-center">
                                <li style={{ transitionDuration: '.3s' }} className="cursor-pointer text-red-400">$0.00
                                    <i className="cursor-pointer fa-solid fa-bag-shopping pl-4 font-bold"></i>
                                </li>
                            </a>
                            <a href="#" className="check"><i className=" hidden lg:flex fa-solid fa-user font-bold"></i></a>
                            <div className="lg:hidden inline mr-3 toshow px-2 py-2 border flex justify-center items-center" style={{border:"2px solid red"}}>
                            <i className="bi bi-list text-red-500 text-[25px]"></i>
                            </div>
                        </ul>
                    </nav>
                    <div className="heading w-5/6 py-5 sm:w-4/5 md:w-3/5 xl:w-3/5 2xl:w-2/5 lg:w-3/5  w-2/5 2xl:ml-40 md:mt-0 sm:mt-6 mt-4 lg:mt-20">
                        <p className="lg:text-lg md:font-bold md:text-md sm:mt-0" >Best Quality Plants</p>
                        <h1 className="md:text-[65px] text-[20px] sm:font-bold sm:text-[40px]">Amazing Variety Of Plants Starting Just $6</h1>
                        <a href="#"><button className=" -mt-5">SHOP NOW</button></a>
                    </div>
                </main>
            </>
        )
    }
}

export default section1;
