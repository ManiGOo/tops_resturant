export default function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.innerHTML = '&copy; 2025 Teppan Yaki | Built with ❤️ by Manish';

    footer.appendChild(copyright);

    return footer
}