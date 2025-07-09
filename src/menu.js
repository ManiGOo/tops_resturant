export default function loadMenu() {
    const content = document.getElementById('app');

    const section = document.createElement('section');
    section.classList.add('menu-grid');

    const items = [
        {
            name: "Depresso Espresso",
            description: "Sadness in a cup. Served with a breakdown.",
            price: "$3.33",
            img: "/assets/espresso.jpg"
        },
        {
            name: "iCe wAter™",
            description: "Artisanal H₂O, handcrafted by unpaid interns.",
            price: "$0.69",
            img: "/assets/icewater.jpg"
        },
        {
            name: "Emotional Support Taco",
            description: "Taco that listens. May fall apart emotionally.",
            price: "$4.44",
            img: "/assets/tacco.jpg"
        },
        {
            name: "Bluetooth Stew",
            description: "Pairs perfectly with your hunger. Lag included.",
            price: "$8.08",
            img: "/assets/stew.jpg"
        },
        {
            name: "Certified Side Eye Salad 🥗",
            description: "Judgmental. Lettuce not talk about it.",
            price: "$6.66",
            img: "/assets/salad.jpg"
        },
        {
            name: "Boneless Thoughts",
            description: "For when thinking is too crunchy.",
            price: "$2.22",
            img: "/assets/bonelessChicken.jpg"
        },
        {
            name: "Hotdog Water Soup",
            description: "Michelin-starred in Ohio. Not FDA approved.",
            price: "$13.37",
            img: "/assets/waterSoup.jpg"
        },
        {
            name: "HTML Sandwich",
            description: "<div>With extra <span>flavor</span></div>",
            price: "$1.00",
            img: "/assets/sandwich.jpg"
        }
    ];
    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add("menu-card");

        const img = document.createElement('img');
        img.src = item.img;

        const cardContent = document.createElement('div');
        cardContent.classList.add('menu-card-content');

        const name = document.createElement('h3');
        name.textContent = item.name;

        const desc = document.createElement('p');
        desc.textContent = item.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        const btn = document.createElement('button');
        btn.textContent = 'Add to Order';

        cardContent.append(name, desc, price, btn);
        card.append(img, cardContent);
        section.appendChild(card);
    });

    content.appendChild(section);

}