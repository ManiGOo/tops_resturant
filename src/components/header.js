export default function createHeader() {
    const header = document.createElement('header');
    header.classList.add('site-header');

    const logo = document.createElement('h1');
    logo.textContent = 'Teppan Yaki';
    logo.classList.add('logo');

    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');

    const ul = document.createElement('ul');
    const pages = ['Home', 'Menu', 'About', "Contact"];

    pages.forEach(page => {
        const li = document.createElement('li');
        li.textContent = page;
        li.classList.add('nav-link');
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(logo);
    header.appendChild(nav);

    return header;
}