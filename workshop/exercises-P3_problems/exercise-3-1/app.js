// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener

// Grab ul element
const ul = document.querySelector('#btn-list');

// Create animate function
const animateBtn = (event) => {
    // Grab button element
    const btnID = event.target.id;
    const btnClicked = document.querySelector(`#${btnID}`);
    // Create switch for each button
    switch (btnID) {
        case 'btn-1':
            btnClicked.style.opacity = '0';
            break;
        case 'btn-2':
            btnClicked.style.backgroundColor = 'crimson';
            break;
        case 'btn-3':
            btnClicked.style.backgroundColor = 'lightblue';
            break;
        case 'btn-4':
            btnClicked.className = 'jitters';
            break;
        default:
            break;
    }
}

// Add event listener
ul.addEventListener('click', animateBtn);
