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

 // Function to handle file upload
        function uploadFiles() {
            const htmlFile = document.getElementById("html-file").files[0];
            const cssFile = document.getElementById("css-file").files[0];
            const jsFile = document.getElementById("js-file").files[0];

            if (htmlFile) {
                readAndDisplayFile(htmlFile, "html-code");
            }
            if (cssFile) {
                readAndDisplayFile(cssFile, "css-code");
            }
            if (jsFile) {
                readAndDisplayFile(jsFile, "js-code");
            }
        }
