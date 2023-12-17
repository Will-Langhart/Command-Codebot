function generateSpecificCode(type) {
    const generatedCodeArea = document.getElementById("generatedCode");
    let generatedCode = "";

    switch (type) {
        // Basic HTML elements
        case 'paragraph':
            generatedCode = '<p>This is a sample paragraph.</p>\n';
            break;
        case 'link':
            generatedCode = '<a href="https://www.example.com">Visit Example</a>\n';
            break;
        case 'image':
            generatedCode = '<img src="path-to-your-image.jpg" alt="Sample Image">\n';
            break;
        case 'header1':
            generatedCode = '<h1>Sample Header 1</h1>\n';
            break;
        case 'unorderedList':
            generatedCode = '<ul>\n\t<li>Item 1</li>\n\t<li>Item 2</li>\n</ul>\n';
            break;
        case 'orderedList':
            generatedCode = '<ol>\n\t<li>First Item</li>\n\t<li>Second Item</li>\n</ol>\n';
            break;
        case 'table':
            generatedCode = '<table>\n\t<tr>\n\t\t<th>Column 1</th>\n\t\t<th>Column 2</th>\n\t</tr>\n\t<tr>\n\t\t<td>Data 1</td>\n\t\t<td>Data 2</td>\n\t</tr>\n</table>\n';
            break;
        case 'form':
            generatedCode = '<form action="#submit">\n\t<input type="text" placeholder="Name">\n\t<input type="submit" value="Submit">\n</form>\n';
            break;
        case 'codeBlock':
            generatedCode = '<pre><code>// Sample code here</code></pre>\n';
            break;
        case 'quote':
            generatedCode = '<blockquote>Sample quote here.</blockquote>\n';
            break;
        case 'horizontalRule':
            generatedCode = '<hr>\n';
            break;

        // HTML5 elements
        case 'html5Article':
            generatedCode = '<article><h2>Article Title</h2><p>Article content...</p></article>\n';
            break;
        case 'html5Section':
            generatedCode = '<section><h2>Section Title</h2><p>Section content...</p></section>\n';
            break;
        case 'html5Footer':
            generatedCode = '<footer><p>Footer content here...</p></footer>\n';
            break;

        // JavaScript functions
        case 'jsAlert':
            generatedCode = '<script>alert("Hello World!");</script>\n';
            break;
        case 'jsFunction':
            generatedCode = `
<script>
function myFunction() {
    console.log("Function called!");
}
</script>
            `;
            break;
        case 'jsEventListener':
            generatedCode = `
<script>
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button clicked!");
});
</script>
            `;
            break;
        case 'jsAsyncFunction':
            generatedCode = `
<script>
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
</script>
            `;
            break;
        case 'jsDOMManipulation':
            generatedCode = `
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
            `;
            break;

        // CSS styles
        case 'cssBasicStyle':
            generatedCode = '<style>body { font-family: Arial, sans-serif; }</style>\n';
            break;
        case 'cssResponsive':
            generatedCode = `
<style>
@media only screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
</style>
            `;
            break;
        case 'cssFlexbox':
            generatedCode = `
<style>
.flex-container {
    display: flex;
    justify-content: space-around;
}
.flex-item {
    padding: 10px;
}
</style>
            `;
            break;
        case 'css3DTransform':
            generatedCode = `
<style>
.transformedElement {
    transform: rotate(45deg) translateX(100px);
}
</style>
            `;
            break;
        case 'cssAnimation':
            generatedCode = `
<style>
@keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
}

.animatedElement {
    animation-name: example;
    animation-duration: 4s;
}
</style>
            `;
            break;
        case 'cssMediaQuery':
            generatedCode = `
<style>
@media screen and (min-width: 600px) {
    .responsiveElement {
        background-color: blue;
    }
}
</style>
            `;
            break;
        default:
            alert('Unknown type selected!');
            break;
    }

    generatedCodeArea.textContent += generatedCode;
}
