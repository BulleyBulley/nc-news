import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <section className='logo_section_class'>
            <Link to="/">
            <h1>Read It.</h1>
            </Link>
        </section>
    )
}

export default Logo;