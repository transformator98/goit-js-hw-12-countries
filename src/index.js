import { data } from 'autoprefixer';
import './styles.css';
import cauntriesTpl from './templates/countries.hbs'


const refs={
    countriesContainer: document.querySelector('[data-value="cauntries"]')
}

// switzerland


fetch('https://restcountries.eu/rest/v2/name/ukraine')
    .then(res => res.json())
    .then((date) => {
        const markup = cauntriesTpl(date);
        console.log(markup);
        refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
    });

// fetch('https://restcountries.eu/rest/v2/name/switzerland')
//     .then(res => res.json())
//     .then((date) => {
//         console.log(date);
//     });
    