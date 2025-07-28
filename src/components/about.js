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

    

    about.appendChild(heading);
    about.appendChild(description);
    about.appendChild(chefImage);

    return about;
}