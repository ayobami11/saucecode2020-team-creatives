const hamburgerIcon = document.querySelector('.hamburger');

// Displays the navbar for smaller screens when hambugerIcon is clicked
const toggleMenu = () => {
    const hamburgerSection = document.querySelector('.hamburger-section');
    hamburgerSection.classList.toggle('toggle-hamburger');

    if (hamburgerIcon.classList.contains('fa-bars')) {
        hamburgerIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        hamburgerIcon.classList.replace('fa-times', 'fa-bars');
    }
};

hamburgerIcon.addEventListener('click', toggleMenu);

// const userDate = document.getElementById('start-date');
// const submitBtn = document.getElementById('submit-btn');

// const findDaysElapsed = (pregnancyDate) => {
//     const startDate = new Date(pregnancyDate.value).getTime();
//     const currentDate = new Date().getTime();

//     if (currentDate > startDate) {
//         const differenceInMs = currentDate - startDate;
//         const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
//         return differenceInDays;
//     } else {
//         // throw new Error('The current date must be greater than the start date.')
//     }
// };

// const aboutToConceive = () => {
//     const daysIntoPregnancy = findDaysElapsed(userDate);
//     return (daysIntoPregnancy >= 270 && daysIntoPregnancy <= 280);
// }

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(findDaysElapsed(userDate))
//     console.log(aboutToConceive());
// });
