export default function createNavbar(homeCallback, menuCallback, contactCallback){
    const nav = document.createElement('nav');

    const brand = document.createElement('h1');
    brand.textContent = 'DashBites';

    const ul = document.createElement('ul');

    const tabs = [
        { name: 'Home', onclick: homeCallback },
        { name: 'Menu', onclick: menuCallback },
        { name: 'Contact', onclick: contactCallback },
    ];

    tabs.forEach(tab => {
        const li = document.createElement('li');
        li.textContent = tab.name;

        li.addEventListener('click', ()=> {
            document.getElementById('app').innerHTML = '';
            const navbar = createNavbar(homeCallback, menuCallback,contactCallback);
            document.getElementById('app').appendChild(navbar);
            tab.onclick();
        });

        ul.appendChild(li);
    });

    nav.appendChild(brand);
    nav.appendChild(ul);

    return nav;
}