import { mount } from 'enzyme';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MarvelScreen } from '../../../components/marvel/MarvelScreen';

describe('Pruebas en <HeroScreen />', () => {


    // test('Debe mostrarse correctamente.', () => {
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/hero']}>
    //             <Routes>
    //                 <Route path='*' element={<Navigate to='/' />} />
    //             </Routes>
    //         </MemoryRouter>
    //     )
    // });


    test('Debe mostrar un hero si el parametro existe y se encuentra.', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('h3').text() ).toBe('Spider Man');
    });


    test('Debe regresar a la pantalla anterior', () => {
      ;
    });
    
});
