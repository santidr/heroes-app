import React, { useContext, useEffect } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const NavBar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const { name } = user

    const history = useHistory()

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })

        history.replace('/login')
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [ user ])

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-lg-0">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </ul>

                    <ul className="navbar-nav">
                        <span className="nav-item nav-link text-info">
                            { name }
                        </span>

                        <button
                            className="nav-item nav-link btn"
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
