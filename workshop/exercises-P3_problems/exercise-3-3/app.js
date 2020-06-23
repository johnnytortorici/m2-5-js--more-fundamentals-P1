// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

// Grab ul
const ul = document.querySelector('#btn-list');

// Create a reset function
const reset = (id) => {
    let btn = document.querySelector(`#${id}`);
    btn.className = 'gold';
}

// Create a toggleColor function
const toggleColor = (event) => {
    // Grab ID and button element
    const btnID = event.target.id;
    const btnClicked = document.querySelector(`#${btnID}`);

    // Create switch for each button
    switch (btnID) {
        case 'btn-1':
            btnClicked.classList.toggle('opacity');
            break;
        case 'btn-2':
            btnClicked.classList.toggle('gold');
            btnClicked.classList.toggle('crimson');
            break;
        case 'btn-3':
            btnClicked.classList.toggle('gold');
            btnClicked.classList.toggle('lightblue');
            break;
        case 'btn-4':
            btnClicked.classList.toggle('jitters');
            break;
        case 'reset':
            reset('btn-1');
            reset('btn-2');
            reset('btn-3');
            reset('btn-4');
            break;
        default:
            break;
    }

    console.log(btnClicked);
}

// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
const newStyles = document.createElement('style');
newStyles.innerHTML = 
'.opacity { opacity: 0; } \
.crimson { background-color: crimson; } \
.lightblue { background-color: lightblue; } \
.gold { background-color: gold; }';
document.body.appendChild(newStyles);

// initialize the background color for all of the buttons in here. (for loop)
for (let i = 1; i <= 4; i++) {
    let btn = document.querySelector(`#btn-${i}`);
    btn.className = 'gold';
}

// Add event listener
ul.addEventListener('click', toggleColor);
