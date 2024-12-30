const form = document.getElementById('trainBookingForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  document.querySelectorAll('.error').forEach(error => error.textContent = '');


  const name = document.getElementById('name').value.trim();
  if (name === '' || name.length < 3) {
    isValid = false;
    document.getElementById('nameError').textContent = 'Please enter a valid name (at least 3 characters).';
  }


  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
  }

  
  const phone = document.getElementById('phone').value.trim();
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    isValid = false;
    document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
  }

  
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    isValid = false;
    document.getElementById('genderError').textContent = 'Please select your gender.';
  }


  const people = document.getElementById('people').value;
  if (people === '' || people < 1) {
    isValid = false;
    document.getElementById('peopleError').textContent = 'Please enter the number of people (at least 1).';
  }


  const train = document.getElementById('train').value;
  if (train === '') {
    isValid = false;
    document.getElementById('trainError').textContent = 'Please select a train.';
  }

 
  const date = document.getElementById('date').value;
  if (date === '') {
    isValid = false;
    document.getElementById('dateError').textContent = 'Please select a travel date.';
  }

  if (isValid) {
    alert('Train booking successful!');
    form.reset();
  }
});
