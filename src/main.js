import './style.css';
import createHeader from './components/header.js';
import createHome from './components/home.js';
import createMenu from './components/menu.js';
import createAbout from './components/about.js';
import createFooter from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    //create basic layour
    const pageWrapper = document.createElement('div');
    pageWrapper.classList.add('page-wrapper');

    //Header
    const header = createHeader();
    pageWrapper.appendChild(header);

    //Placeholder for rest of the page
    const mainSection = document.createElement('main');
    mainSection.classList.add('main-section');
    pageWrapper.appendChild(mainSection);
    
    //Footer
    const footer = createFooter();
    pageWrapper.appendChild(footer);


    //Append layout to content
    content.appendChild(pageWrapper)


    // Initial page load (Home)
    renderPage('Home');

    //home content by default
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            const page = e.target.textContent.trim();
            renderPage(page);
        }
    });

    // Page rendering logic
    function renderPage(page) {
        mainSection.innerHTML = ''; // Clear previous page

        let pageContent;
        switch (page) {
            case 'Home':
                pageContent = createHome();
                break;
            case 'Menu':
                pageContent = createMenu();
                break;
            case 'About':
                pageContent = createAbout();
                break;
            case 'Contact':
                pageContent = createContact();
                break;
            default:
                pageContent = document.createElement('div');
                pageContent.textContent = 'Page not found';
        }

        mainSection.appendChild(pageContent);
    }
})