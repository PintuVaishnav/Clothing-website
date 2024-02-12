const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const card = document.getElementsByClassName('product');

if (bar) {
    bar.addEventListener('click', () =>{
        navbar.classList.add('active');  
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

function redirectToSProductPage(clickedProduct) {
    const imageSrc = clickedProduct.querySelector('img#c1').src;
    const title = clickedProduct.querySelector('#des h5').textContent;
    sessionStorage.setItem('selectedImage', imageSrc);
    sessionStorage.setItem('selectedTitle', title);
    window.location.href = 'sproduct.html';
}

document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById('mainimg');
    const selectedImage = sessionStorage.getItem('selectedImage');
    if (selectedImage) {
        mainImage.src = selectedImage;
        sessionStorage.removeItem('selectedImage');
    }

    const selectedTitle = sessionStorage.getItem('selectedTitle');
    if (selectedTitle) {
        document.getElementById('s-details').querySelector('h3').textContent = selectedTitle;
        sessionStorage.removeItem('selectedTitle');
    }
});
