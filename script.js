function playGifAndHide() {
    // Play the MP3 sound
    var clickSound = document.getElementById('clickSound');
    if (clickSound) {
        clickSound.play();
    } else {
        console.error('Error: clickSound not found.');
    }

    // Get the overlay image element
    var overlayImage = document.getElementById('overlayImage');

    // Slow down the touching motion by adding a transition class
    overlayImage.classList.add('touching');

    // Play the GIF by changing the source
    overlayImage.innerHTML = '<img src="./images/pop.gif" alt="GIF" style="opacity: 0.6;">';
    
    // Hide the overlay image after 3 seconds
    setTimeout(function () {
        overlayImage.style.display = 'none';

        // Show the image button after 0.5 seconds
        setTimeout(function () {
            var imageButton = document.getElementById('imageButton');
            imageButton.style.display = 'block';

            // Add the shaking effect
            imageButton.classList.add('shake');
        }, 500);
    }, 700);
}

// Add an event listener to remove the transition class after the transition ends
document.getElementById('overlayImage').addEventListener('transitionend', function() {
    this.classList.remove('touching');
});

// Function to show the next overlay
function showNextOverlay() {
    // Remove the shaking effect
    var imageButton = document.getElementById('imageButton');
    imageButton.classList.remove('shake');

    // Hide the image button
    imageButton.style.display = 'none';

    var buttonClickSound = document.getElementById('buttonClickSound');
    if (buttonClickSound) {
        buttonClickSound.play();
    } else {
        console.error('Error: buttonClickSound not found.');
    }

    // Add your logic to show the next overlay or perform any other action
    // For now, let's just show the overlay after 1 second
    setTimeout(function () {
        var overlayImage = document.getElementById('overlayImage');
        overlayImage.style.display = 'block';
        window.location.href = 'bubbles.html';
    }, 800);
}

function backSound(){
    var backClickSound = document.getElementById('backClickSound');
    if (backClickSound) {
        backClickSound.play();
    } else {
        console.error('Error: backClickSound not found.');
    }

    setTimeout(function () {
        window.location.href = 'bubbles.html';
    }, 800);
}

