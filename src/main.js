import './style.css';
import createHeader from './components/header';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    //create basic layour
    const pageWrapper = document.createElement('div');
    pageWrapper.classList.add('page-wrapper');

    //Header
    const header = createHeader();

    //Placeholder for rest of the page
    const mainSection = document.createElement('main');
    mainSection.classList.add('main-section');
    pageWrapper.appendChild(mainSection);

    content.appendChild(pageWrapper)
})