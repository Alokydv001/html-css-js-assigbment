const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();

  function toggleImageVisibility() {
    var image = document.getElementById('toggleImage');
    var checkbox = document.getElementById('toggleCheckbox');

    // Toggle the visibility of the image based on the checkbox's checked state
    image.style.display = checkbox.checked ? 'block' : 'none';
}
function displayAlert(message) {
    alert(message);
}
// Simulate clicking the button
var button = document.getElementById('colorButton');
button.click();

// Simulate checking/unchecking the checkbox
var checkbox = document.getElementById('toggleCheckbox');
checkbox.checked = !checkbox.checked;
checkbox.dispatchEvent(new Event('change'));

// Simulate clicking the navigation menu links
var navLinks = document.querySelectorAll('nav ul li a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].click();
}

