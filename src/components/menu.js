
export default function createMenu() {
    const container = document.createElement('section');
    container.classList.add('menu-section');

    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';
    heading.classList.add('menu-heading');

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const items = [
        { name: 'Chicken Teppanyaki', description: 'Grilled chicken with vegetables and teriyaki sauce' },
        { name: 'Beef Udon', description: 'Thick wheat noodles in a rich beef broth' },
        { name: 'Salmon Sushi', description: 'Fresh salmon sushi rolls with wasabi and soy sauce' },
        { name: 'Miso Soup', description: 'Classic Japanese soup with tofu, seaweed, and scallions' },
    ];

    items.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemName.classList.add('menu-item-name');

        const itemDescription = document.createElement('id');
        itemDescription.textContent = item.description;
        itemDescription.classList.add('menu-item-description');

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuList.appendChild(menuItem);
    });

    container.appendChild(heading);
    container.appendChild(menuList);

    return container;
}