let clickCount = 0;

function thanksgivingMessage() {

    let messages = [
        "Be thankful for your family and friends!",
        "Enjoy the little things in life!",
        "Wishing you a wonderful Thanksgiving!",
        "Good food, good friends, and great memories!",
        "There is always something to be thankful for!",
        "Make memories that will last forever!",
        "Home is where Thanksgiving begins!"
    ];

    let randomNumber = Math.floor(Math.random() * messages.length);

    document.getElementById("message").innerHTML =
        messages[randomNumber];

    clickCount++;

    document.getElementById("clicks").innerHTML =
        "Thanksgiving messages shown: " + clickCount;
}