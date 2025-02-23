document.addEventListener("DOMContentLoaded", function () {
  const heartIcon = document.querySelector(".heart");

  // Add click event listener to the heart icon
  heartIcon.addEventListener("click", calculateLove);

  // Add keypress event listener to the document
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector(".heart").click();
    }
  });

  function calculateLove() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    // Regular expression pattern to match alphabetic characters
    const pattern = /^[a-zA-Z\s]*$/;

    // Check if both names are filled
    if (name1 && name2) {
      // Check if names contain special symbols or numbers
      if (!pattern.test(name1) || !pattern.test(name2)) {
        alert("Please enter only alphabetic characters for names.");
      } else {
        var bold1 = name1.toUpperCase();
        var bold2 = name2.toUpperCase();

        // Custom condition for specific names
        if (
          (name1.toLowerCase() === "sachin" || name1.toLowerCase() === "sam" || name1.toLowerCase() === "sachinanand") &&
          name2.toLowerCase() === "riddhi" ||
          (name2.toLowerCase() === "sachin" || name2.toLowerCase() === "sam" || name2.toLowerCase() === "sachinanand") &&
          name1.toLowerCase() === "riddhi"
        ) {
          alert("Aap Mumbai aasake hai, you guys are the best couple!");
        } else {
          var Calculate = Math.random();
          Calculate = Calculate * 100;
          Calculate = Math.ceil(Calculate) + 1;

          if (Calculate < 20) {
            alert(
              `Love percentage between ${bold1} and ${bold2} is too low \n i.e ${Calculate}%`
            );
          } else if (Calculate < 50) {
            alert(
              `Love percentage between ${bold1} and ${bold2} is okishh, \n i.e ${Calculate}%`
            );
          } else if (Calculate < 80) {
            alert(
              `You might fall for each other ${bold1} and ${bold2}. \n Your Love is ${Calculate}%`
            );
          } else {
            alert(
              `You are purely soulmates ${bold1} and ${bold2}! \n Your love is ${Calculate}%`
            );
          }
        }
      }
    } else {
      alert("Please fill in both names before calculating love percentage.");
    }
  }
});
