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
                              document.getElementById("userInput").value = fileContent;
                    } else if (language === 'java' && file.name.endsWith('.java')) {
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
            const pyFile = document.getElementById("py-file").files[0];
            const csharpFile = document.getElementById("cs-file").files[0];
            const javaFile = document.getElementById("java-file").files[0];
            const cppFile = document.getElementById("cpp-file").files[0];
            const cFile = document.getElementById("c-file").files[0];
            const rubyFile = document.getElementById("ruby-file").files[0];
            const phpFile = document.getElementById("php-file").files[0];
            const jsonFile = document.getElementById("json-file").files[0];
            const xmlFile = document.getElementById("xml-file").files[0];

            f (htmlFile) {
                readAndDisplayFile(htmlFile, "html-code");
            }
          if (cssFile) {
                readAndDisplayFile(cssFile, "css-code");
            }
          if (jsFile) {
                readAndDisplayFile(jsFile, "js-code");
            }
          if (pyFile) {
                readAndDisplayFile(pyFile, "py-code");
            }
          if (csharpFile) {
                readAndDisplayFile(csFile, "cs-code");
            }
          if (javaFile) {
                readAndDisplayFile(javaFile, "java-code");
            }
          if (cppFile) {
                readAndDisplayFile(cppFile, "cpp-code, cxx-code, cc-code");
            }
          if (cFile) {
                readAndDisplayFile(cFile, "c-code");
            }
          if (rubyFile) {
                readAndDisplayFile(rubyFile, "rb-code");
            }
          if (phpFile) {
                readAndDisplayFile(phpFile, "php-code");
            }
          if (jsonFile) {
                readAndDisplayFile(jsonFile, "json-code");
            }
          if (xmlFile) {
                readAndDisplayFile(xmlFile, "xml-code");
            }
          if (markdownFile) {
                readAndDisplayFile(markdownFile, "md-code");
            }
          if (yamlFile) {
                readAndDisplayFile(yamlFile, "yaml-code, yml-code");
            }
          if (shellFile) {
                readAndDisplayFile(shellFile, "sh-code");
            }
          if (pdfFile) {
                readAndDisplayFile(pdfFile, "pdf-code");
            }
          if (zipFile) {
                readAndDisplayFile(zipFile, "zip-code");
            }
          if (videoFile) {
                readAndDisplayFile(videoFile, "mov-code, mp4-code");
            }
        }

function languageMatchesFile(language, fileExtension) {
    const extensionMap = {
        // Programming and Markup Languages
        'html': ['html', 'htm'],
        'javascript': ['js', 'mjs'],
        'css': ['css'],
        'python': ['py'],
        'java': ['java'],
        'csharp': ['cs'],
        'cpp': ['cpp', 'cxx', 'cc'],
        'c': ['c'],
        'ruby': ['rb'],
        'php': ['php'],
        'perl': ['pl', 'pm'],
        'swift': ['swift'],
        'kotlin': ['kt', 'kts'],
        'typescript': ['ts'],
        'json': ['json'],
        'xml': ['xml'],
        'markdown': ['md', 'markdown'],
        'yaml': ['yaml', 'yml'],
        'shell': ['sh'],
        'sql': ['sql'],

        // Document Formats
        'pdf': ['pdf'],

        // Compressed Files
        'zip': ['zip'],

        // Video Formats
        'video': ['mp4', 'mov'],

        // Add more language and format mappings as needed
    };

    // Check if the provided file extension matches any in the language's or format's array
    return extensionMap[language] && extensionMap[language].includes(fileExtension);
}
