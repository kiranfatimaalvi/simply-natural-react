import React from "react";

class plantsCollection extends React.Component {
    render() {
        return (
            <>

                <section className="main h-auto w-full py-10" style={{ backgroundColor: "#F9F9F9" }}>
                    <div className="firstcollection py-10 xl:px-48 lg:px-32 md:px-8 2xl:flex-row sm:flex-row flex-col flex gap-3 items-center ">
                        <div className="sec1 py-5 w-3/3 sm:w-1/3 flex">
                            <div className="logo w-1/5 pt-8 pl-4">
                                <i className="fa-solid fa-spa" style={{ fontSize: "30px", color: "#75C32C" }}></i>
                            </div>
                            <div className="text w-4/5 ml-4">
                                <h1 style={{ fontSize: "20px" }} className="mt-4">Plants Collection</h1>
                                <p>Any plants for your space</p>
                            </div>
                        </div>
                        <div className="sec2 py-5 w-3/3 sm:w-1/3 flex">
                            <div className="logo w-1/5 pt-8 pl-4">
                                <i className="fa-solid fa-box" style={{ fontSize: "30px", color: "#75C32C" }}></i>
                            </div>
                            <div className="text w-4/5 ml-4">
                                <h1 style={{ fontSize: "20px" }} className="mt-4">Free Shipping</h1>
                                <p>Free shipping on order</p>
                            </div>
                        </div>
                        <div className="sec3 py-5 w-3/3 sm:w-1/3 flex">
                            <div className="logo w-1/5 pt-8 pl-4">
                                <i className="fa-solid fa-rotate" style={{ fontSize: "30px", color: "#75C32C" }}></i>
                            </div>
                            <div className="text w-4/5 ml-4">
                                <h1 style={{ fontSize: "20px" }} className="mt-4">100% Money Back</h1>
                                <p>If the item didn't suit you</p>
                            </div>
                        </div>
                    </div>
                    <div className="secondCollection flex gap-5 sm:gap-8 md:gap-4 lg:py-10 md:py-5 sm:py-3 py-0 2xl:flex-row sm:flex-row sm:flex-wrap md:flex-nowrap md:flex-row flex-col items-center mt-5 xl:px-48 lg:px-10 md:px-4 sm:justify-center">
                        <div className="collection1 collection w-2/3 sm:w-2/5 md:w-1/3" style={{ backgroundColor: "#EEEDF3", borderRadius: "15px", }}>
                            <img src="images/plant6-free-img.jpg" className="lg:h-96 md:h-80 sm:h-56 h-80 w-full px-6" />
                            <div className="text md:pb-5 lg:pb-12 pb-10 sm:pt-4 md:pt-10 pl-8">
                                <h2 style={{ fontSize: "22px" }} className="">Beautiful Plant Varieties</h2>
                                <p className="lg:pr-24 pr-4" style={{ color: "#5D6167" }}>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <a href="#"><p className="text-red-400 mt-6 font-bold">SEE COLLECTION</p>
                                </a>
                            </div>
                        </div>
                        <div className="collection2 collection w-2/3 sm:w-2/5 md:w-1/3" style={{ backgroundColor: "#EEEDF3", borderRadius: "15px", }}>
                            <img src="images/plant6-free-img.jpg" className="lg:h-96 md:h-80 sm:h-56 h-80 w-full px-6" />
                            <div className="text md:pb-5 lg:pb-12 pb-10 sm:pt-4 md:pt-10 pl-8">
                                <h2 style={{ fontSize: "22px" }} className="">Beautiful Plant Varieties</h2>
                                <p className="lg:pr-24 pr-4" style={{ color: "#5D6167" }}>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <a href="#"><p className="text-red-400 mt-6 font-bold">SEE COLLECTION</p>
                                </a>
                            </div>
                        </div>
                        <div className="collection3 collection w-2/3 sm:w-2/5 md:w-1/3" style={{ backgroundColor: "#EEEDF3", borderRadius: "15px", }}>
                            <img src="images/plant6-free-img.jpg" className="lg:h-96 md:h-80 sm:h-56 h-80 w-full px-6" />
                            <div className="text md:pb-5 lg:pb-12 pb-10 sm:pt-4 md:pt-10 pl-8">
                                <h2 style={{ fontSize: "22px" }} className="">Beautiful Plant Varieties</h2>
                                <p className="lg:pr-24 pr-4" style={{ color: "#5D6167" }}>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <a href="#"><p className="text-red-400 mt-6 font-bold">SEE COLLECTION</p>
                                </a>
                            </div>
                        </div>
                    </div>






                    {/* <section className=" sm:ml-0 plantcollection1 section1 h-screen w-3/4" style={{ margin: "0 auto" }}>
                        <div className="secondCollection h-2/3 w-full flex gap-12">
                            <div className="collection1 collection h-full w-1/3" style={{ backgroundColor: "#EEEDF3", borderRadius: "15px", }}>
                                <img src="images/plant6-free-img.jpg" className="h-64 w-full pl-12 pr-12" />
                                <div className="text h-44 w-full mt-16 pl-8">
                                    <h2 style={{ fontSize: "22px" }} className="">Beautiful Plant Varieties</h2>
                                    <p className="pr-24" style={{ color: "#5D6167" }}>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    <a href="#"><p className="text-red-400 mt-6 font-bold">SEE COLLECTION</p>
                                    </a>                        </div>
                            </div>
                            <div className="collection2 collection h-full w-1/3" style={{ backgroundColor: "#EEEDF3", borderRadius: "15px", }}>
                                <img src="images/cactus2-free-img.jpg" className="h-64 w-full pl-12 pr-12" />
                                <div className="text h-44 w-full mt-16 pl-8">
                                    <h2 style={{ fontSize: "22px" }} className="">Trendy Cactus Varieties</h2>
                                    <p className="pr-24" style={{ color: "#5D6167" }}>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    <a href="#"><p className="text-red-400 mt-5 font-bold">SEE COLLECTION</p>
                                    </a>                        </div>
                            </div>
                            <div className="collection3  collection h-full w-1/3 hover:" style={{ backgroundColor: "#EEEDF3", borderRadius: "15px", }}>
                                <img src="images/plant4-free-img.jpg" className="h-64 w-full pl-12 pr-12" />
                                <div className="text h-44 w-full mt-16 pl-8">
                                    <h2 style={{ fontSize: "22px" }} className="">Gardening Accessories</h2>
                                    <p className="pr-24" style={{ color: "#5D6167" }}>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    <a href="#"><p className="text-red-400 mt-8 font-bold">VISIT THE STORE</p></a>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </section>

            </>
        )
    }
}

export default plantsCollection;
