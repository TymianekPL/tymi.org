document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton') as HTMLButtonElement;

    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});
