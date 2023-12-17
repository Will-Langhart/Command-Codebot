  function saveToFile() {
                const data = generatedCodeArea.textContent;
                if (!data.trim()) {
                    alert("Please generate some code before saving!");
                    return;
                }
                const blob = new Blob([data], { type: 'text/html' });
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'generated_code.html';
                link.click();
            }
