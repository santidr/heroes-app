import { useMemo } from 'react'
import { selectHeroesByPublisher } from '../../selectors/selectHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => selectHeroesByPublisher(publisher), [ publisher ])

    return (
        <div 
            className="row animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
