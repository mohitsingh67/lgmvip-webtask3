const registrationForm = document.getElementById('registrationForm');
const registeredData = document.getElementById('registeredData');

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const gender = document.getElementById('gender').value;
  const profileImage = document.getElementById('profileImage').value; // File input
  
  const skillsInputs = document.querySelectorAll('input[name="skill"]:checked');
  const skills = Array.from(skillsInputs).map(skillInput => skillInput.value).join(', ');

  const dataDiv = document.createElement('div');
  dataDiv.classList.add('data-entry');
  dataDiv.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Password:</strong> ${password}<br>
    <strong>Gender:</strong> ${gender}<br>
    <strong>Skills:</strong> ${skills}<br>
    
  `;
  
  registeredData.appendChild(dataDiv);
  
  registrationForm.reset();
});
