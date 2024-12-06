const form = document.querySelector('form');
const emailField = document.querySelector('input[name="email_field"]');field name
const errorMessage = document.createElement('div');
errorMessage.style.color = 'red';
emailField.parentNode.appendChild(errorMessage);

form.addEventListener('submit', function (event) {
  const emailValue = emailField.value;

  if (!emailValue.includes('#')) {
    event.preventDefault();
    errorMessage.textContent = "The Discord tag must contain the '#' character.";
  } else {
    errorMessage.textContent = "";
    alert("Your request has been submitted successfully!");
  }
});

emailField.addEventListener('input', function () {
  const emailValue = emailField.value;

  if (!emailValue.includes('#')) {
    errorMessage.textContent = "The Discord tag must contain the '#' character.";
  } else {
    errorMessage.textContent = "";
  }
});
