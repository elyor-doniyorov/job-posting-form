const form = document.getElementById('myform');
const title = document.getElementById('title');
const writeBtn = document.getElementById("writeBtn");
const previewBtn = document.getElementById("previewBtn");
const showEditor = document.getElementById('editor');
const showPreview = document.getElementById('preview');
const education = document.getElementById('education');
const skills = document.getElementById('skills');
const employmentType = document.getElementById('employmentType');
const remotePolicy = document.getElementById('remotePolicy');

// Markdown-i and showdownjs for Job Description field below
const converter = new showdown.Converter();

showEditor.addEventListener("keyup", evt => {
  const { value } = evt.target;

  const html = converter.makeHtml(value);

  showPreview.innerHTML = html;
})

writeBtn.addEventListener("click", () => {
  showEditor.style.display = "block";
  showPreview.style.display = "none";
});

previewBtn.addEventListener("click", () => {
  showPreview.style.display = "block";
  showEditor.style.display = "none";
});

// Boxicons
const headingIcon = document.getElementById('heading');
const boldIcon = document.getElementById('bold');
const italicIcon = document.getElementById('italic');
const chevronRIcon = document.getElementById('chevronR');
const expandHIcon = document.getElementById('expandH');
const linkQuoteIcon = document.getElementById('linkQuote');
const listUlIcon = document.getElementById('listUl');
const listOlIcon = document.getElementById('listOl');
const checkboxChIcon = document.getElementById('checkboxCh');
const atIcon = document.getElementById('at');
const messageIcon = document.getElementById('message');
const replyIcon = document.getElementById('reply');

headingIcon.addEventListener("click", () => {
  showEditor.innerHTML = '### ';
})
boldIcon.addEventListener("click", () => {
  showEditor.innerHTML = '****';
})
italicIcon.addEventListener("click", () => {
  showEditor.innerHTML = '__';
})
chevronRIcon.addEventListener("click", () => {
  showEditor.innerHTML = '> ';
})
expandHIcon.addEventListener("click", () => {
  showEditor.innerHTML = '``';
})
linkQuoteIcon.addEventListener("click", () => {
  showEditor.innerHTML = '[](url)';
})
listUlIcon.addEventListener("click", () => {
  showEditor.innerHTML = '- ';
})
listOlIcon.addEventListener("click", () => {
  showEditor.innerHTML = '1. ';
})


// Validate date input
function validatedate(inputText)
  {
  var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(inputText.value.match(dateformat))
  {
  document.form1.text1.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var mm  = parseInt(pdate[0]);
  var dd = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
  }
  else
  {
  alert("Invalid date format!");
  document.form1.text1.focus();
  return false;
  }
  }


// Submit Form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    value.topics = data.getAll("topics");
    console.log({ value });

    validateInputs();
})

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('#error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('#error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const validateInputs = () => {
  const titleValue = title.value.trim();
  const editorValue = showEditor.value.trim();
  const educationValue = education.value.trim();
  const skillsValue = skills.value.trim();



  // Title validation
  if(titleValue == "") {
    setError(title, ' ** Title is required');
  }
  else if((titleValue.length <= 2) || (titleValue.length > 20)) {
    setError(title, ' ** Title length must be between 2 and 20 characters')
  }
  else if(!isNaN(titleValue)) {
    setError(title, ' ** Only characters are allowed')
  }
  else{
    setSuccess(title);
  }

  localStorage.setItem("is_title", JSON.stringify(titleValue));
  const item = JSON.parse(localStorage.getItem('titleValue'));
  console.log(item)
   

  // Textarea validation
  if(editorValue == "") {
    setError(showEditor, ' ** Job description is required');
  }
  else if((editorValue.length <= 30) || (editorValue.length > 200)) {
    setError(showEditor, ' ** Job description length must be between 30 and 200 characters')
  }
  else{
    setSuccess(showEditor);
  }

  localStorage.setItem("is_showEditor", editorValue);

  // Education validation
  if(educationValue == "") {
    setError(education, ' ** Education is required');
  }
  else if((educationValue.length <= 10) || (educationValue.length > 50)) {
    setError(education, ' ** Education length must be between 10 and 50 characters')
  }
  else if(!isNaN(educationValue)) {
    setError(education, ' ** Only characters are allowed')
  }
  else{
    setSuccess(education);
  }

  localStorage.setItem("is_education", educationValue);

  // Skills validation
  if(skillsValue == "") {
    setError(skills, ' ** Skills are required');
  }
  else if((skillsValue.length <= 2) || (skillsValue.length > 20)) {
    setError(skills, ' ** Skills length must be between 2 and 20 characters')
  }
  else if(!isNaN(skillsValue)) {
    setError(skills, ' ** Only characters are allowed')
  }
  else{
    setSuccess(skills);
  }

  localStorage.setItem("is_skills", skillsValue);

  // Emplyment type validation
  if(employmentType.value === 'Select employment type') {
    setError(employmentType, ' ** Select employment type')
  }
  else{
    setSuccess(employmentType);
  }

  localStorage.setItem("is_employmentType", employmentType.value);

  // Remote Policy validation
  if(remotePolicy.value === 'Select remote policy') {
    setError(remotePolicy, ' ** Select remote policy')
  }
  else{
    setSuccess(remotePolicy);
  }

  localStorage.setItem("is_remotePolicy", remotePolicy.value);
}
