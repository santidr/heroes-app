import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { selectHeroById } from '../../selectors/selectHeroById'

export const HeroScreen = ({ history }) => {
    const { heroeId } = useParams()

    const hero = useMemo(() => selectHeroById(heroeId), [ heroeId ])

    if (!hero) return <Redirect to="/" />

    const handleReturn = () => {
        if (history.length <= 2) {
            hero.publisher === 'Marvel Comics' && history.push('/')
            hero.publisher === 'DC Comics' && history.push('/dc')
        } else {
            history.goBack()
        }
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero

    return (
        <div className="row mt-4">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroeId}.jpg`} 
                    alt={ superhero } 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>First appearance: </b>{ first_appearance }</li>
                </ul>

                <h5>Characters</h5>
                <p>{ characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
