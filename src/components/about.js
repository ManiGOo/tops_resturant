export default function createAbout() {
    const about = document.createElement('div');
    about.classList.add('about');

    const heading = document.createElement('h2');
    heading.textContent = 'About Teppan Yakki';

    const description = document.createElement('p');
    description.textContent = `Teppan Yaki is more than just food – it's an experience. 
  We serve authentic Japanese cuisine prepared with the freshest ingredients, right before your eyes. 
  From sizzling meats to vibrant veggies, our chefs put on a show that's as tasty as it is entertaining.`;

    const chefImage = document.createElement('img');
    chefImage.src = 'assets/image.png';
    chefImage.alt = 'Chef performing teppanyaki';
    chefImage.classList.add('chef-img');

    const timeline = document.createElement('div');
    timeline.classList.add('timeline', 'fade-in');

    const events = [
        { year: '1995', text: 'Opened our first location in Kyoto, Japan.' },
        { year: '2005', text: 'Expanded internationally to the U.S. and Europe.' },
        { year: '2015', text: 'Awarded Best Japanese Restaurant by Global Foodies.' },
        { year: '2023', text: 'Opened 100th branch worldwide.' },
    ];

    events.forEach(event => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');

        const year = document.createElement('h3');
        year.textContent = event.year;

        const desc = document.createElement('p');
        desc.textContent = event.text;

        item.appendChild(year);
        item.appendChild(desc);
        timeline.appendChild(item);
    });

    about.appendChild(heading);
    about.appendChild(description);
    about.appendChild(chefImage);
    about.appendChild(timeline);

    return about;
}