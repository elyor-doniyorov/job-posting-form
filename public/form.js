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



const converter = new showdown.Converter();

showEditor.addEventListener("keyup", evt => {
  const { value } = evt.target;

  const html = converter.makeHtml(value);

  showPreview.innerHTML = html;
})

writeBtn.addEventListener("click", () => {
  console.log("show editor")
  showEditor.style.display = "block";
  showPreview.style.display = "none";
});

previewBtn.addEventListener("click", () => {
  console.log("show preview")
  showPreview.style.display = "block";
  showEditor.style.display = "none";
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

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

  // Emplyment type validation
  if(employmentType.value === 'Select employment type') {
    setError(employmentType, ' ** Select employment type')
  }
  else{
    setSuccess(employmentType);
  }

  // Remote Policy validation
  if(remotePolicy.value === 'Select remote policy') {
    setError(remotePolicy, ' ** Select remote policy')
  }
  else{
    setSuccess(remotePolicy);
  }
}
