console.log("Test");

let buttons = document.querySelectorAll('.animalFilter');
let images = document.querySelectorAll('.imageFilter');
console.log(buttons);
console.log(images);

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(event){
        // console.log(event.target);
        let clickedItem = event.target;
        let animal = clickedItem.getAttribute('animal');
        // console.log(animal);
        images.forEach(function(image){
            image.parentElement.classList.add('hide');
            if(image.classList.contains(animal) || animal == 'all'){
                console.log(image);
                if(image.parentElement.classList.contains('hide'));
                image.parentElement.classList.remove('hide');
            }
        });
    });
});

// buttons.forEach(function(button){
//     console.log(button);
// });