const cards = document.querySelectorAll('.card');
const sections = document.querySelectorAll('.section');

// Create the observer, same as before:
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('swing-in-top-fwd')
            return;
        }

        entry.target.classList.remove('swing-in-top-fwd')

    });
});



cards.forEach((el) => observer.observe(el));
sections.forEach((el) => observer.observe(el));
