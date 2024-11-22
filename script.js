window.addEventListener('scroll', function() {
    const staticNav = document.getElementById('static-nav');
    const floatingNav = document.getElementById('floating-nav');
    const footer = document.getElementById('footer');
    
    const staticNavBottom = staticNav.getBoundingClientRect().bottom;
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (staticNavBottom <= 0 && footerTop > windowHeight + 150) {
        floatingNav.classList.add('active');
    } else {
        floatingNav.classList.remove('active');
    }
});
