document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const skill = document.getElementById('skill').value;
  const portfolio = document.getElementById('portfolio').value.trim();

  if (!name || !email || !skill || !portfolio) {
    alert("Please fill in all fields.");
    return;
  }

  // Optional email format validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Optional portfolio link validation
  const urlPattern = /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.*)?$/;
  if (!urlPattern.test(portfolio)) {
    alert("Please enter a valid portfolio URL.");
    return;
  }

  alert("Form submitted successfully!");
  console.log({ name, email, skill, portfolio });

  // Reset the form
  document.getElementById('signupForm').reset();
});
