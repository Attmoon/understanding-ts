const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('Clicked!' + message);
}

if(button) {
    button.addEventListener('click', () => {
        console.log('click',clickHandler.bind(null, "good"));
    });
}