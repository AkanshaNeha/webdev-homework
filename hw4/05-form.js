let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here
  let elements = form.elements;
  event.preventDefault();
  let name = document.getElementById('Username').value;
  let email = document.getElementById('Email').value;
  let newsLetter = document.forms[0].elements['newsletter'].value;
  let date = document.getElementById('date').value;
  
  if(!name && !email && !date && !newsLetter) {
    console.warn("You must enter some data to submit this form");
  } else {
    console.group('=========Form Submission=========');
    if(!name) {
      console.log('Username: no submission');
    } else {
      console.log('Username: '+name);
    }
    if(!email) {
      console.log('Email: no submission');
    } else {
      console.log('Email: '+email);
    }
    if(!newsLetter) {
      console.log('Newsletter: no submission');
    } else {
      console.log('Newsletter: '+newsLetter);
    }
    if(!date) {
      console.log('Date: no submission');
    } else {
      console.log('Date: '+date);
    }
  }
  console.groupEnd();
  event.preventDefault();
}
