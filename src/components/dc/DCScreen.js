import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DCScreen = () => {
    const publisher = 'DC Comics'

    return (
        <>
            <h1>DC Screen</h1>
            <hr/>

            <HeroList publisher={ publisher } />
        </>
    )
}
