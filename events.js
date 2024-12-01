console.log("This is event js")

const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}

// main used option function in the button called
function MainlyUse(){
    document.body.style.backgroundColor = 'green';
}

// addEventListener use this is the best option
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
})

// function call by another function
const makeRed = document.getElementById('make-red');
makeRed.onclick = makeRedFunction;

function makeRedFunction() {
    document.body.style.backgroundColor = 'red';
}