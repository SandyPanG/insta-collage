const picture = document.querySelector('#pic');
const frame = document.querySelectorAll('.pic-frame');

// picture 'Listeners'.
picture.addEventListener('dragstart',dragStart);
picture.addEventListener('dragend',dragEnd);

// Drag functions
function dragStart() {
    console.log('star');
    
}

function dragEnd() {
    console.log('end');
    
}