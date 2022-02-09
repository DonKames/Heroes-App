import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas <SearchScreen />', () => {


    test('Debe mostrarse correctamente', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Routes>
                    <Route path='/search' element={<SearchScreen />} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('.alert-info').exists()).toBe(true);
    });

    test('Debe mostrar a Batman y el input con el valor del queryString.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Routes>
                    <Route path='/search' element={<SearchScreen />} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper.find('h5').text()).toBe('Batman');
        expect(wrapper.find('HeroCard').exists()).toBe(true)
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar un error si no se encuentra el hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batmanFAKE']}>
                <Routes>
                    <Route path='/search' element={<SearchScreen />} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').exists()).toBe(true);
        expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no heroes with: batmanFAKE');
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe llamar el handleSubmit', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batmanFAKE']}>
                <Routes>
                    <Route path='/search' element={<SearchScreen />} />
                </Routes>
            </MemoryRouter>
        );

        console.log(wrapper.html());

        
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchHero',
                value: 'batman'
            }
        });
        
        
        act(() => {
            wrapper.find('form').prop('onSubmit')({
                preventDefault() { }
            })

        });

        expect(wrapper.render().find('h5').text()).toBe('Batman');
        expect(wrapper.find('input').prop('value')).toBe('batman');
    });
});
