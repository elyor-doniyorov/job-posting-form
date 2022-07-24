const form = document.getElementById('myform');
const errorElement = document.getElementById('error');
const title = document.getElementById('title');
const writeBtn = document.getElementById("writeBtn");
const previewBtn = document.getElementById("previewBtn");
const showEditor = document.getElementById('editor');
const showPreview = document.getElementById('preview');



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

  let messages = [];

 

  if(messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
})