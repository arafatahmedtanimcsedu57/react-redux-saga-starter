import React from 'react';
import { shallow } from 'enzyme';
import App from './../../App';
import NavBar from './../../App/components/NavBar';

import routes, { routePath } from './../../App/routes';


describe('App', () => {
    let wrapper;

    const navLinks = [
        { text: 'Github Repos', href: routePath('github.repos') }
    ];

    beforeEach(() => wrapper = shallow(<App />));

    it('should render a <h2 />', () => {
        expect(wrapper.find('h2').length).toEqual(1);
    });

    it('should render a h1', () => {
        expect(wrapper.find('h1').length).toEqual(1);
    })

    it('should render the NavBar Component', () => {
        expect(wrapper.containsMatchingElement(<NavBar links={navLinks} />)).toEqual(true);
    });
});