export default function createHome() {
    const container = document.createElement('section');
    container.classList.add('home-section');

    const heading = document.createElement('h2');
    heading.textContent = 'Welcome to Teppan Yaki!';
    heading.classList.add('home-heading');

    const description = document.createElement('p');
    description.textContent = 'Experience authentic Japanese cuisine cooked live in front of you.';
    description.classList.add('home-description');

    container.appendChild(heading);
    container.appendChild(description);

    return container;
}