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
// document.getElementById('overlayImage').addEventListener('transitionend', function() {
//     this.classList.remove('touching');
// });

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

function playGifAndRedirect() {
    var bubbleClickSound = document.getElementById('bubbleClickSound');
    var saBubble = document.getElementById('saBubble');
    var internBubble = document.getElementById('internBubble');
    var fearBubble = document.getElementById('fearBubble');

    saBubble.addEventListener('click', function() {
        console.log("clicked");
        bubbleClickSound.play();

        setTimeout(function () {
            saBubble.innerHTML = '<img src="./images/pop.gif" alt="GIF" style="opacity: 0.95;">';
        },700);
        setTimeout(function () {
            window.location.href = 'studyabroad.html';
        }, 1400);
    });

    internBubble.addEventListener('click', function() {
        console.log("clicked");
        bubbleClickSound.play();
        setTimeout(function () {
            internBubble.innerHTML = '<img src="./images/pop.gif" alt="GIF" style="opacity: 0.95;">';
        },700);
        setTimeout(function () {
            window.location.href = 'internship.html';
        }, 1000);
    });

    fearBubble.addEventListener('click', function() {
        console.log("clicked");
        bubbleClickSound.play();
        setTimeout(function () {
            fearBubble.innerHTML = '<img src="./images/pop.gif" alt="GIF" style="opacity: 0.95;">';
        },700);
        setTimeout(function () {
            window.location.href = 'fears.html';
        }, 1000);
    });
}

function flip() {
    var flipSound = document.getElementById('flipSound');

    if (flipSound) {
        flipSound.play();
    } else {
        console.error('Error: flipSound not found.');
    }

    setTimeout(function () {
    }, 650);
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 650 );
}

function viewAgain() {
    var againSound = document.getElementById('againSound');

    if (againSound) {
        againSound.play();
    } else {
        console.error('Error: flipSound not found.');
    }

    setTimeout(function () {
        window.location.href = 'index.html';
    }, 800);
}

function bubbles(){
    var moreBubblesSound = document.getElementById('moreBubblesSound');
    var bubblesimg = document.getElementById('bubblesimg');

    if (moreBubblesSound) {
        moreBubblesSound.play();
    } else {
        console.error('Error: moreBubblesSound not found.');
    }

    setTimeout(function () {
        bubblesimg.innerHTML = '<img src="./images/bubtrans2.png">';
    }, 200);
    setTimeout(function () {
        bubblesimg.innerHTML = '<img src="./images/bubtrans3.png">';
    }, 400);

    setTimeout(function () {
        window.location.href = 'connect.html';
    }, 1000);
}