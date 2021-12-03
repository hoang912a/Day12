import React from 'react'
import PropTypes from 'prop-types'
import NavbarPublic from '../Components/NavbarPublic'
import Banner from '../Components/Banner'
import CityIndex from '../Components/CityIndex'

const Home = props => {
    return (
        <div>
            <NavbarPublic />
            <Banner />
            <CityIndex />
        </div>
    )
}

Home.propTypes = {

}

export default Home
