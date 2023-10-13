import React from 'react'

class Interested extends React.Component{
    render(){
        return(
            <>
            <section className='section5 interested  pt-16 pb-40 lg:pt-24 md:pt-24 sm:pt-20 lg:pb-96 md:pb-52 sm:pb-44 flex items-center flex-col xl:px-80 lg:px-64 md:px-40'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl px-12 sm:px-32 font-medium text-center'>Interested? Shop This Plant Collection!</h1>
                <p className='pt-5 md:pt-10 sm:pt-8  text-center px-4 sm:px-28' style={{lineHeight:"30px",color:"#5D6167"}}>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                <button className='px-8 py-3 text-white font-medium text-sm sm:font-medium mt-6 sm:mt-10' style={{borderRadius:"25px"}}>GO TO SHOP</button> 
            </section>
            </>
        )
    }
}

export default Interested;