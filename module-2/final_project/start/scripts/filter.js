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
        animal = clickedItem.getAttribute('animal');
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
    searchString = event.target.value;
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

// Need to watch the recording again and find out what this code above is doing...feel like I'm missing some fundamental information about variables and functions that I need to learn because I'm quite confused by the code above.