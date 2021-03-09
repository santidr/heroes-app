import queryString from 'query-string'
import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = ({ history }) => {
    const location = useLocation()
    
    const { q = '' } = queryString.parse(location.search)
    
    const [ formValues, handleInputChange ] = useForm({ heroSearch: q })
    const { heroSearch } = formValues
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ heroSearch }`)
    }
    
    return (
        <div>
            <h3>Search a hero</h3>
            <hr/>

            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find a hero..."
                            autoComplete="off"
                            className="form-control"
                            name="heroSearch"
                            value={ heroSearch }
                            onChange={ handleInputChange }
                        />

                        <div className="d-grid">
                            <button
                                type="submit"
                                className="btn btn-outline-primary my-2"
                            >
                                Search...
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-sm-12 col-md-7">
                    <h4>Results...</h4>
                    <hr/>

                    {   (q === '') &&
                            <div className="alert alert-info">
                                Search a hero...
                            </div>
                    }

                    {   (q !== '' && heroesFiltered.length === 0) &&
                            <div className="alert alert-danger">
                                There's no hero with "{ q }"
                            </div>
                    }

                    <div className="d-grid">
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
