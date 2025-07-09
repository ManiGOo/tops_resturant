export default function loadHome() {
    const content = document.getElementById('app');

    const hero = document.createElement('section');
    hero.classList.add('hero');

    const title = document.createElement('h2');
    title.textContent = "Hungry? we deliver fast. ";

    const subtitle = document.createElement('p');
    subtitle.textContent = "Delicious meals from your favorite restaurants. Delivered to your door.";

    const cta = document.createElement("button");
    cta.textContent = "Order Now";

    hero.append(title, subtitle, cta);
    content.appendChild(hero);
};
