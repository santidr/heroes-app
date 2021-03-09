import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { DCScreen } from '../components/dc/DCScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'

import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
           <NavBar />

           <div className="container mt-2">
               <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DCScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />

                    <Redirect to="/marvel" />
               </Switch>
           </div>
        </>
    )
}
