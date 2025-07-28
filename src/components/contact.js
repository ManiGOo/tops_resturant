export default function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-page');

    const heading = document.createElement('h2');
    heading.textContent = 'Get in Touch';

    const subheading = document.createElement('p');
    subheading.classList.add('contact-sub');
    subheading.textContent = "We'd love to hear from you, Whether it's feedback, queries, or just a hello 👋";

    const form = document.createElement('form');
    form.classList.add('contact-from');


    const nameGroup = document.createElement('div');
    nameGroup.classList.add('input-group');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.placeholder = 'Your Name';
    nameInput.required = true;
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);

    // Email input
    const emailGroup = document.createElement('div');
    emailGroup.classList.add('input-group');
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'you@example.com';
    emailInput.required = true;
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    // Message
    const msgGroup = document.createElement('div');
    msgGroup.classList.add('input-group');
    const msgLabel = document.createElement('label');
    msgLabel.setAttribute('for', 'message');
    msgLabel.textContent = 'Message';
    const msgInput = document.createElement('textarea');
    msgInput.id = 'message';
    msgInput.placeholder = 'Tell us what’s on your mind...';
    msgInput.rows = 5;
    msgInput.required = true;
    msgGroup.appendChild(msgLabel);
    msgGroup.appendChild(msgInput);

    // Button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Send Message';
    submitBtn.classList.add('submit-btn');

    // Assemble the form
    form.appendChild(nameGroup);
    form.appendChild(emailGroup);
    form.appendChild(msgGroup);
    form.appendChild(submitBtn);

    // Append everything to the contact div
    contact.appendChild(heading);
    contact.appendChild(subheading);
    contact.appendChild(form);

    return contact;
}