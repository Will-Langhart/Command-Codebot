// Globals for user preferences
let beautifySettings = {
    indent_size: 4,
    indent_char: ' ',
    max_preserve_newlines: 2,
    preserve_newlines: true,
    keep_array_indentation: false,
    break_chained_methods: false,
    indent_scripts: 'normal',
    brace_style: 'collapse',
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: 0,
    indent_inner_html: false,
    comma_first: false,
    e4x: false,
    indent_empty_lines: false
};

// Beautify the user's code
function beautifyUserCode() {
    try {
        const userInput = document.getElementById("userCodeInput").value;
        const language = detectLanguage(userInput);

        let beautifiedCode;
        switch (language) {
            case 'javascript':
                beautifiedCode = js_beautify(userInput, beautifySettings);
                break;
            case 'css':
                beautifiedCode = css_beautify(userInput, beautifySettings);
                break;
            case 'html':
                beautifiedCode = html_beautify(userInput, beautifySettings);
                break;
            default:
                beautifiedCode = userInput;
        }

        document.getElementById("userCodeInput").value = beautifiedCode;
    } catch (error) {
        console.error('Error in beautifying code:', error);
        alert('An error occurred while beautifying the code.');
    }
}

// Detect language (placeholder function, replace with actual logic)
function detectLanguage(code) {
    // Implement actual language detection
    // This can be based on code analysis, file extensions, etc.
    return 'javascript'; // Default to JavaScript for the example
}

// Open settings for beautification
function openBeautifySettings() {
    document.getElementById('settingsModal').style.display = 'block';
}

// Apply settings from the user
function applySettings() {
    const indentSize = document.getElementById('indentSize').value;
    beautifySettings.indent_size = parseInt(indentSize, 10);

    // Close settings modal
    document.getElementById('settingsModal').style.display = 'none';
}
