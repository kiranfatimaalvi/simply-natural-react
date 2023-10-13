import React from "react";

class testimonials extends React.Component {
    render() {
        return (
            <>
                <section className="section4 testimonials w-full md:pt-36 md:pb-24" style={{ backgroundColor: "#F9F9F9" ,color:"#2B2F38"}}>
                    <div className="main xl:w-4/5 w-full py-5 flex lg:flex-nowrap flex-wrap lg:justify-start xl:px-8" style={{ margin: "0 auto" }}>
                        <div className="inner1 innerchild1 py-10 innerchild3 md:w-full lg:w-2/4" style={{ color:"#2B2F38"}}>
                            <h1 className="lg:ml-0 ml-12 text-5xl font-medium" style={{ color:"#2B2F38"}}>Testimonials</h1>
                            <p className="lg:ml-0 ml-12 pt-6" style={{ letterSpacing: ".4px", color: "#2B2F38" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="flex inner1 inner13 flex-wrap md:flex-nowrap px-5 md:px-0">
                                <img src="images/user1-free-img.jpg" className="h-96 md:h-72 lg:w-2/5 sm:w-100 w-full md:w-2/4 border mt-20 lg:ml-0 md:ml-12 " />
                                <div className="text lg:pr-12 sm:pr-6 w-4/5 sm:w-full md:mt-32 mt-10  pl-8 h-1/5 md:ml-8 ml-0" style={{ color: "#2B2F38" }}>
                                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                                    <h1 className="font-medium text-xl pt-6">Sarah Jones</h1>
                                    <h5 className="text-sm">Interior Designer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="inner1 lg:w-3/6 md:w-full sm:w-full lg:ml-6 py-10 innerchild3 innerchild2 flex flex-col">
                            <div className="inner11 inner13 w-auto flex flex-wrap md:flex-nowrap  px-5 md:px-0">
                                <img src="images/testimonial-2.jpg" className="w-full lg:w-60 md:w-72 lg:h-72 h-96 lg:ml-0 md:ml-12 " alt="" />
                                <div className="text sm:pr-6 md:w-full lg:w-80 pl-8 pt-12">
                                <p style={{color:"#2B2F38",letterSpacing:".3px"}}>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                                <h1 className=" font-medium text-xl pt-4">Jessica Foxx</h1>
                                <p className="text-sm">Student</p>
                                </div>
                            </div>
                            <div className="inner12 inner13  w-full flex flex-wrap md:flex-nowrap  px-5 md:px-0 mt-12">
                            <img src="images/user3-free-img.jpg" className="w-full lg:w-60 md:w-72  lg:h-72 h-96 lg:ml-0 md:ml-12  " alt="" />
                                <div className="text md:w-full lg:w-80 pl-8 pt-12">
                                <p style={{color:"#2B2F38",letterSpacing:".3px"}}>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                                <h1 className=" font-medium text-xl pt-4">Jessica Foxx</h1>
                                <p className="text-sm">Student</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default testimonials;
