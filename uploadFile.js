  function uploadFile() {
            const fileInput = document.getElementById("fileInput");
            const language = document.getElementById("language").value;

            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const reader = new FileReader();

                reader.onload = function (e) {
                    const fileContent = e.target.result;
                    if (language === 'html' && file.name.endsWith('.html')) {
                        document.getElementById("userInput").value = fileContent;
                    } else if (language === 'javascript' && file.name.endsWith('.js')) {
                        document.getElementById("userInput").value = fileContent;
                    } else if (language === 'css' && file.name.endsWith('.css')) {
                        document.getElementById("userInput").value = fileContent;
                    } else {
                        alert("Invalid file format or language selection.");
                    }
                };

                reader.readAsText(file);
            }
        }
          let undoStack = [];
        let redoStack = [];
