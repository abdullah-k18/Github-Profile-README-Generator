document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const linkedin = document.getElementById('linkedin').value;
  const skills = [];
  const checkboxes = document.querySelectorAll('input[name="skills"]:checked');
  checkboxes.forEach(function(checkbox) {
    skills.push(checkbox.value);
  });
  const skillsHTML = skills.map(skill => `<img src="${skill}" width="30px" height="30px">`).join('');
  const htmlCode = 
  `<h1 align="center">Hi 👋, I'm ${name}</h1>
<h3 align="center">${profession}</h3>
<h3 align="left">Connect with me:</h3>
<a align="left" href="${linkedin}" target="_blank">
<img src="https://github.com/abdullah-k18/Github-Profile-README-Generator/blob/main/images/linked-in.svg" alt="LinkedIn Profile" height="30px" width="30px">
</a>
<h3 align="left">Languages & Tools</h3>
<p>${skillsHTML} </p>`;
  document.open();
  document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated HTML Code</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
        }
        textarea {
          width: 100%;
          height: 300px;
          resize: vertical;
        }
      </style>
    </head>
    <body>
      <h1>Generated HTML Code</h1>
      <textarea readonly id="code">${htmlCode}</textarea>
      <button id="copyButton">Copy HTML</button>
      <button id="downloadButton">Download README</button>
      <script>
        const code = document.getElementById("code");
        const copyButton = document.getElementById("copyButton");
        const downloadButton = document.getElementById("downloadButton");
        copyButton.onclick = function(){
          code.select();
          document.execCommand("copy");
        }
        downloadButton.onclick = function(){
          const content = code.value;
          const blob = new Blob([content], { type: 'text/plain' });
          const fileName = 'README.md';
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      </script>
    </body>
    </html>
  `);
  document.close();
}); 