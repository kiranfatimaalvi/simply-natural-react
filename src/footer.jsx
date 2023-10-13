import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer w-full gap-5 flex-col sm:flex-row flex pt-20 pb-24 2xl:pl-60 2xl:pr-60 lg:pl-24 lg:pr-24 md:pr-16 md:pl-16 pl-4 pr-4 md:gap-5 md:flex-nowrap sm:flex-wrap justify-between" style={{borderBottom:"1px solid lightgrey"}}>
                    <div className="sec1 w-full sm:w-2/5 flex flex-col md:items-center">
                        <img src="images/logo.svg" className="h-24 w-24" alt="" />
                        <h1 className="pt-8 text-2xl font-bold" style={{color:"#5D6167"}}>Simply Natural</h1>
                        <div className="lasticons mt-5 flex text-white gap-2">
                            <a href="#">
                                <i className="cursor-pointer fa-brands py-3 px-3 fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="cursor-pointer fa-brands py-3 px-3 fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="cursor-pointer fa-brands py-3 px-3 fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="cursor-pointer fa-brands py-3 px-3 fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="sec2 seclast  sm:w-2/5 text-2xl">
                        <h1 className=" text-black">Quick Links</h1>
                        <p style={{fontSize:"16px"}} className="cursor-pointer  pt-5">Introduction</p>
                        <p style={{fontSize:"16px"}} className="cursor-pointer ">know more About Us</p>
                        <p style={{fontSize:"16px"}} className="cursor-pointer ">Visit Store</p>
                        <p style={{fontSize:"16px"}} className="cursor-pointer ">Let’s Connect</p>
                    </div>
                    <div className="sec3 seclast sm:w-2/5 text-2xl">
                        <h1 className=" text-black text-2xl">Important Links</h1>
                        <p style={{fontSize:"16px"}} className="cursor-pointer  pt-5">Privacy Policy</p>
                        <p style={{fontSize:"16px"}} className="cursor-pointer ">Shipping Details</p>
                        <p style={{fontSize:"16px"}} className="cursor-pointer ">Terms & Conditions</p>
                        <p style={{fontSize:"16px"}} className="cursor-pointer ">Media Kit</p>
                    </div>
                    <div className="sec4 w-72 sm:w-2/5 w-full md:pl-3">
                        <h1 className="text-2xl text-black">Get In Touch With Us For The Best Quality Plants & Succulents</h1>
                        <p className="pt-6 text-md">Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
                    </div>
                </footer>

            {/* ==================================================== */}

                <footer className="lastone w-full py-7 flex justify-between 2xl:px-48 flex-col items-center text-center gap-3 lg:px-32 md:px-16 sm:px-2" style={{letterSpacing:".3px"}}>
                    <p>Copyright © 2023 Simply Natural</p>
                    <p>Powered by Simply Natural</p>
                </footer>
            </>
        )
    }
}

export default Footer;
