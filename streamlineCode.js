function streamlineCode() {
                let code = generatedCodeArea.textContent;
                code = code.replace(/\s\s+/g, ' ').trim();
                generatedCodeArea.textContent = code;
            }
