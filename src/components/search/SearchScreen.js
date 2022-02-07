import React, { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    let q = '';

    if (searchParams.get('q') !== null) {
        q = searchParams.get('q');
    }

    const [values, handleInputChange] = useForm({
        searchHero: q
    });

    const { searchHero } = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchHero}`)
        console.log(searchHero);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            autoComplete='off'
                            className='form-control'
                            name='searchHero'
                            onChange={handleInputChange}
                            placeholder='Find Your Hero'
                            type='text'
                            value={searchHero}
                        />
                        <div className='d-grid'>
                            <button
                                type='submit'
                                className='btn btn-outline-primary mt-2'
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '')
                        &&
                        <div className='alert alert-info animate__animated animate__slideInUp'>
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className='alert alert-danger animate__animated animate__tada'>
                            There is no heroes with: { q }
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
