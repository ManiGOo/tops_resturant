export default function loadContact() {
    const content = document.getElementById('app');

    const section = document.createElement('section');
    section.classList.add('contact');

    const title = document.createElement('h2');
    title.loadContent = 'Contact Us';

    const address = document.createElement('p');
    address.textContent = "123 Foodie Lane, Yumtown, YT 12345";

    const phone = document.createElement('p');
    phone.textContent = '{123} 456-7899';

    const form = document.createElement('form');
    form.classList.add('contact-form')

    const name = document.createElement('input');
    name.type = 'text';
    name.placeholder = 'Your Name';

    const message = document.createElement('textarea');
    message.rows = 4;
    message.placeholder = 'Your Message';

    const submit = document.createElement('button');
    submit.textContent = 'Send Message';
    
    form.append(name, message, submit);
    section.append(title, address, phone, form);
    content.appendChild(section);
}