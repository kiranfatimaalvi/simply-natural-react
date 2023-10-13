import React, { Component } from 'react'
import PlantsCollection from './PlantsCollection'
import FeaturedPlant from './featuredPlant'
import Testimonials from './testimonials'
import Interested from './interested'
import Footer from './footer'
import Section1 from './section1'
export default class App extends Component {
    render() {
        return (
            <div  >
                <Section1 />
                <PlantsCollection />
                <FeaturedPlant />
                <Testimonials />
                <Interested />
                <Footer />
            </div>
        )
    }
}
