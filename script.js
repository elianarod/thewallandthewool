function checkPassword() {
  let enteredPassword = document.getElementById("passwordInput").value;

  if (enteredPassword === "19") {
    alert("Yes you were");

    // Hide the password input and submit button
    document.getElementById("passwordContainer").style.display = "none";

    // Display the content container
    document.getElementById("contentContainer").style.display = "block";
  } else {
    alert("No you were not");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function getRandomPosition() {
    const maxWidth = window.innerWidth - 200;
    const maxHeight = window.innerHeight - 100;

    const randomLeft = Math.floor(Math.random() * maxWidth);
    const randomTop = Math.floor(Math.random() * maxHeight);

    return { left: randomLeft, top: randomTop };
  }

  function addDragListeners(element) {
    let mouseX, mouseY;
    let isDragging = false;
    let initialLeft, initialTop;

    element.addEventListener("mousedown", function (e) {
      e.preventDefault(); // Prevents image dragging behavior in some browsers

      // Get the initial mouse position
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Get the initial position of the element
      initialLeft = element.offsetLeft;
      initialTop = element.offsetTop;

      // Set dragging to true
      isDragging = true;

      // Change cursor style
      element.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", function (e) {
      // Check if dragging is true
      if (isDragging) {
        // Calculate the distance moved
        let deltaX = e.clientX - mouseX;
        let deltaY = e.clientY - mouseY;

        // Update the element position
        element.style.left = initialLeft + deltaX + "px";
        element.style.top = initialTop + deltaY + "px";
      }
    });

    document.addEventListener("mouseup", function () {
      // Set dragging to false
      isDragging = false;

      // Reset cursor style
      element.style.cursor = "grab";
    });
  }

  // Get all paragraph elements
  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    const randomPosition = getRandomPosition();
    paragraph.style.left = randomPosition.left + "px";
    paragraph.style.top = randomPosition.top + "px";

    // Add event listener to each paragraph
    addDragListeners(paragraph);
  });

  // Get all image elements
  let images = document.querySelectorAll("img");
  images.forEach((image) => {
    const randomPosition = getRandomPosition();
    image.style.position = "absolute";
    image.style.left = randomPosition.left + "px";
    image.style.top = randomPosition.top + "px";

    // Add event listener to each image
    addDragListeners(image);
  });

  document.getElementById("button1").addEventListener("click", function () {
    window.location.href = "eheh.html";
  });
});
