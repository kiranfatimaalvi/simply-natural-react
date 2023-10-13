
import React from "react";

class featuredPlant extends React.Component {
    render() {
        return (
            <>
                <section className="section2 h-96 w-full flex flex-col items-center justify-center text-center" style={{ backgroundColor: "#F9F9F9" }}>
                    <h1 className="text-5xl font-medium">Featured Plants</h1>
                    <p className="pt-8" style={{ letterSpacing: "1px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </section>

                {/* ===================================================== */}
                <section className="section3 featured gap-5 sm:flex-wrap w-full flex h-auto py-10 2xl:px-24 xl:px-32 lg:px-12 md:px-8 sm:px-0 flex-wrap justify-center items-center " style={{ backgroundColor: "#F9F9F9" }}>
                    <div className="card1 showcard relative 2xl:w-1/5 lg:w-1/4 w-1/3 md:w-2/5 sm:w-3/4 w-4/5 sm:py-5">
                        <a href="#">
                            <img src="images/plant3-free-img.jpg" className="h-64 w-full" alt="" />
                            <div className="flex justify-center items-center iconshow h-7 w-7 bg-white absolute hover:text-black" style={{ top: "1.8em", borderRadius: "50%", left: "84%", color: "grey", boxShadow: "0 4px 4px rgba(0,0,0,0.15)" }}>
                                <i className=" fa-solid fa-bag-shopping"></i>
                            </div>
                        </a>
                        <div className="text">
                            <p className="font-medium pt-3" style={{ color: "lightgrey" }}>Plants</p>
                            <a href="#" className="cursor-pointer">
                                <h3>Boncellensis Secullant</h3>
                            </a>
                            <div style={{ color: "lightgrey" }} className="icons">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <h4 className="font-medium" style={{ color: "grey" }}>$34.00</h4>

                        </div>
                    </div>
                    <div className="card2 showcard relative 2xl:w-1/5 lg:w-1/4 w-1/3 md:w-2/5 sm:w-3/4 w-4/5 sm:py-5">
                        <a href="#">
                            <img src="images/cactus2-free-img.jpg" className="h-64 w-full" alt="" />
                            <button className="sale cursor-pointer absolute font-medium bg-white py-1 px-4 " style={{ top: "1.8em", color: "grey", width: "fit-content", boxShadow: "0 4px 4px rgba(0,0,0,0.15)", fontSize: ".87em", padding: " 0.4em 0.8e", borderRadius: "20px", left: "1.5em", }}>Sale!</button>
                            <div className="flex justify-center items-center iconshow h-7 w-7 bg-white absolute hover:text-black" style={{ top: "1.5em", borderRadius: "50%", left: "84%", color: "grey", boxShadow: "0 4px 4px rgba(0,0,0,0.15)" }}>
                                <i className=" fa-solid fa-bag-shopping"></i>
                            </div>
                        </a>
                        <div className="text">
                            <p className="font-medium pt-3" style={{ color: "lightgrey" }}>Plants</p>
                            <a href="#" className="cursor-pointer">
                                <h3>Boncellensis Secullant</h3>
                            </a>
                            <div style={{ color: "lightgrey" }} className="icons">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <h4 className="font-medium" style={{ color: "grey" }}>$34.00</h4>

                        </div>
                    </div>
                    <div className="card3 showcard relative 2xl:w-1/5 lg:w-1/4 w-1/3 md:w-2/5 sm:w-3/4 w-4/5 sm:py-5">
                        <a href="#">
                            <img src="images/plant5-free-img.jpg" className="h-64 w-full" alt="" />
                            <button className="sale cursor-pointer absolute font-medium bg-white py-1 px-4 " style={{ top: "1.8em", color: "grey", width: "fit-content", boxShadow: "0 4px 4px rgba(0,0,0,0.15)", fontSize: ".87em", padding: " 0.4em 0.8e", borderRadius: "20px", left: "1.5em", }}>Sale!</button>
                            <div className="flex justify-center items-center iconshow h-7 w-7 bg-white absolute hover:text-black" style={{ top: "1.5em", borderRadius: "50%", left: "84%", color: "grey", boxShadow: "0 4px 4px rgba(0,0,0,0.15)" }}>
                                <i className=" fa-solid fa-bag-shopping"></i>
                            </div>
                        </a>
                        <div className="text">
                            <p className="font-medium pt-3" style={{ color: "lightgrey" }}>Plants</p>
                            <a href="#" className="cursor-pointer">
                                <h3>Boncellensis Secullant</h3>
                            </a>
                            <div style={{ color: "lightgrey" }} className="icons">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <h4 className="font-medium" style={{ color: "grey" }}>$34.00</h4>

                        </div>
                    </div>
                    <div className="card4 showcard relative 2xl:w-1/5 lg:w-1/4 w-1/3 md:w-2/5 sm:w-3/4 w-4/5 sm:py-5">
                        <a href="#">
                            <img src="images/plant1-free-img.jpg" className="h-64 w-full" alt="" />
                            <button className="sale cursor-pointer absolute font-medium bg-white py-1 px-4 " style={{ top: "1.8em", color: "grey", width: "fit-content", boxShadow: "0 4px 4px rgba(0,0,0,0.15)", fontSize: ".87em", padding: " 0.4em 0.8e", borderRadius: "20px", left: "1.5em", }}>Sale!</button>
                            <div className="flex justify-center items-center iconshow h-7 w-7 bg-white absolute hover:text-black" style={{ top: "1.5em", borderRadius: "50%", left: "84%", color: "grey", boxShadow: "0 4px 4px rgba(0,0,0,0.15)" }}>
                                <i className=" fa-solid fa-bag-shopping"></i>
                            </div>
                        </a>
                        <div className="text">
                            <p className="font-medium pt-3" style={{ color: "lightgrey" }}>Plants</p>
                            <a href="#" className="cursor-pointer">
                                <h3>Boncellensis Secullant</h3>
                            </a>
                            <div style={{ color: "lightgrey" }} className="icons">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <h4 className="font-medium" style={{ color: "grey" }}>$34.00</h4>

                        </div>
                    </div>
                    <div className="card5 showcard relative 2xl:w-1/5 lg:w-1/4 w-1/3 md:w-2/5 sm:w-3/4 w-4/5 sm:py-5">
                        <a href="#">
                            <img src="images/cactus4-free-img.jpg" className="h-64 w-full" alt="" />
                            <button className="sale cursor-pointer absolute font-medium bg-white py-1 px-4 " style={{ top: "1.8em", color: "grey", width: "fit-content", boxShadow: "0 4px 4px rgba(0,0,0,0.15)", fontSize: ".87em", padding: " 0.4em 0.8e", borderRadius: "20px", left: "1.5em", }}>Sale!</button>
                            <div className="flex justify-center items-center iconshow h-7 w-7 bg-white absolute hover:text-black" style={{ top: "1.5em", borderRadius: "50%", left: "84%", color: "grey", boxShadow: "0 4px 4px rgba(0,0,0,0.15)" }}>
                                <i className=" fa-solid fa-bag-shopping"></i>
                            </div>
                        </a>
                        <div className="text">
                            <p className="font-medium pt-3" style={{ color: "lightgrey" }}>Plants</p>
                            <a href="#" className="cursor-pointer">
                                <h3>Boncellensis Secullant</h3>
                            </a>
                            <div style={{ color: "lightgrey" }} className="icons">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <h4 className="font-medium" style={{ color: "grey" }}>$34.00</h4>

                        </div>
                    </div>
                    <div className="card6 showcard relative 2xl:w-1/5 lg:w-1/4 w-1/3 md:w-2/5 sm:w-3/4 w-4/5 sm:py-5">
                        <a href="#">
                            <img src="images/plant4-free-img.jpg" className="h-64 w-full" alt="" />
                            <div className="flex justify-center items-center iconshow h-7 w-7 bg-white absolute hover:text-black" style={{ top: "1.5em", borderRadius: "50%", left: "84%", color: "grey", boxShadow: "0 4px 4px rgba(0,0,0,0.15)" }}>
                                <i className=" fa-solid fa-bag-shopping"></i>
                            </div>
                        </a>
                        <div className="text">
                            <p className="font-medium pt-3" style={{ color: "lightgrey" }}>Plants</p>
                            <a href="#" className="cursor-pointer">
                                <h3>Boncellensis Secullant</h3>
                            </a>
                            <div style={{ color: "lightgrey" }} className="icons">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <h4 className="font-medium" style={{ color: "grey" }}>$34.00</h4>

                        </div>
                    </div>
                    <div className="card7 showcard relative 2xl:w-1/5 lg:w-1/4 w-1/3 md:w-2/5 sm:w-3/4 w-4/5 sm:py-5">
                        <a href="#">
                            <img src="images/plant6-free-img.jpg" className="h-64 w-full" alt="" />
                            <div className="flex justify-center items-center iconshow h-7 w-7 bg-white absolute hover:text-black" style={{ top: "1.5em", borderRadius: "50%", left: "84%", color: "grey", boxShadow: "0 4px 4px rgba(0,0,0,0.15)" }}>
                                <i className=" fa-solid fa-bag-shopping"></i>
                            </div>
                        </a>
                        <div className="text">
                            <p className="font-medium pt-3" style={{ color: "lightgrey" }}>Plants</p>
                            <a href="#" className="cursor-pointer">
                                <h3>Boncellensis Secullant</h3>
                            </a>
                            <div style={{ color: "lightgrey" }} className="icons">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <h4 className="font-medium" style={{ color: "grey" }}>$34.00</h4>

                        </div>
                    </div>
                    <div className="card8 showcard relative 2xl:w-1/5 lg:w-1/4 w-1/3 md:w-2/5 sm:w-3/4 w-4/5 sm:py-5">
                        <a href="#">
                            <img src="images/cactus6-free-img.jpg" className="h-64 w-full" alt="" />
                            <button className="sale cursor-pointer absolute font-medium bg-white py-1 px-4 " style={{ top: "1.8em", color: "grey", width: "fit-content", boxShadow: "0 4px 4px rgba(0,0,0,0.15)", fontSize: ".87em", padding: " 0.4em 0.8e", borderRadius: "20px", left: "1.5em", }}>Sale!</button>
                            <div className="flex justify-center items-center iconshow h-7 w-7 bg-white absolute hover:text-black" style={{ top: "1.5em", borderRadius: "50%", left: "84%", color: "grey", boxShadow: "0 4px 4px rgba(0,0,0,0.15)" }}>
                                <i className=" fa-solid fa-bag-shopping"></i>
                            </div>
                        </a>
                        <div className="text">
                            <p className="font-medium pt-3" style={{ color: "lightgrey" }}>Plants</p>
                            <a href="#" className="cursor-pointer">
                                <h3>Boncellensis Secullant</h3>
                            </a>
                            <div style={{ color: "lightgrey" }} className="icons">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <h4 className="font-medium" style={{ color: "grey" }}>$34.00</h4>

                        </div>
                    </div>
                </section>

                {/* =================================================== */}

                <section className="lastfeature xl:pl-48 lg:px-32 md:px-16 sm:px-10 px-10 flex-wrap lg:flex-nowrap w-full bg-red-100 pt-64 pb-24 flex gap-5" style={{ borderBottom: "1px solid grey", backgroundColor: "#F9F9F9" }}>
                    <div className="sec1 w-96 md:w-full">
                        <h1 className="text-2xl font-medium text-center sm:text-start lg:pr-12" style={{ color: "#2B2F38" }}>Need help in choosing the right plants?</h1>
                        <div className="help justify-center sm:justify-start mt-16 flex text-red-500">
                            <i className="cursor-pointer fa-solid fa-phone-flip"></i>
                            <p className="cursor-pointer pl-2">ASK FOR HELP</p>
                        </div>
                    </div>
                    <div className="sec2 lg:w-3/5 w-full lg:pr-24 lg:ml-4 text-center" style={{ letterSpacing: ".5px", color: "#2B2F38" }}>
                        <p>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sedurna malesuada consectetuer.</p>
                        <p className="pt-8">Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.</p>
                    </div>
                </section>
            </>
        )
    }
}

export default featuredPlant;
