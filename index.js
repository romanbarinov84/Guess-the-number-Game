document.addEventListener('DOMContentLoaded',()=> {
    const min = 1;
    const max = 100;
    let secretNumber = Math.floor(Math.random()*(max - min + 1)) + min;
    const resultDiv = document.getElementById('result');
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');

    function checkGuess (){
        const guess = parseInt(guessInput.value,10 );

        if (isNaN(guess) || guess<min||guess>max) {
            resultDiv.textContent = `please enter a number between ${min} and ${max}`;
            resultDiv.className = "result error";
            return;
        }
        if (guess === secretNumber) {
            resultDiv.textContent = 'Congratulations You guessed the number';
            resultDiv.className = 'result succes';
        }else if (guess < secretNumber) {
            resultDiv.textContent = 'Too low Try again';
            resultDiv.className = 'result warning';
        }else {
            resultDiv.textContent = 'Too high! Try again';
            resultDiv.className = 'result warning';
        }  
     }
     submitButton.addEventListener('click',checkGuess);
})