function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    
    /*  Man! I searched far and wide for this startWith Method
        I wanted to use a really easy and straight forward method 
        that will not complicate code for me */

// Probably easy, but I really searched! 
    if (input.startsWith('pet_')) {
        result = true;
    } else {
        result = false;
    }
    console.log()

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}
console.log(result);



