console.log("Test");

let buttons = document.querySelectorAll('.animalFilter');
let images = document.querySelectorAll('.imageFilter');
let textSearchInput = document.querySelector('.textSearchInput');
let searchString;
let animal = 'all';
console.log(buttons);
console.log(images);
console.log(textSearchInput);

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(event){
        // console.log(event.target);
        let clickedItem = event.target;
        let animal = clickedItem.getAttribute('animal');
        // console.log(animal);
        images.forEach(function(image){ // creating and using
            image.parentElement.classList.add('hide');
            if(image.classList.contains(animal) || animal == 'all'){
                console.log(image);
                if(image.parentElement.classList.contains('hide'));
                    image.parentElement.classList.remove('hide');
            }
        });
    });
});

textSearchInput.addEventListener('keyup',function(event){
    let searchString = event.target.value;
    console.log(searchString);
    images.forEach(function(image){
        let captionElement = image.parentElement;
        let caption = captionElement.textContent.trim();
        image.parentElement.classList.add('hide');
        if(caption.indexOf(searchString)!== -1){
            console.log(caption.indexOf(searchString));
            // show current image
            if(image.parentElement.classList.contains('hide')){
                image.parentElement.classList.remove('hide');
            }
        }
    });
});

