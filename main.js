document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.getElementById('switch-button');
    const body = document.querySelector('body');
    const headerTitle = document.querySelectorAll('.title-dark');
    const bigCardDark = document.querySelectorAll('.big-card-dark')
    const smallCardDark = document.querySelectorAll('.small-card-dark');
    const darkP = document.querySelectorAll('.dark-p')


    switchButton.addEventListener('click', () => {
        body.classList.toggle('active');

        bigCardDark.forEach((card) => {
            card.classList.toggle('active');
        });

        darkP.forEach((p) => {
            p.classList.toggle('active');
        });

        smallCardDark.forEach((smallCard) => {
            smallCard.classList.toggle('active');
        });

        headerTitle.forEach((title) => {
            title.classList.toggle('active')
        });

    });
});


