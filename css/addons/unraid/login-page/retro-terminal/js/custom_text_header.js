
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                __                        
 _      _____  / /________  ____ ___  ___ 
| | /| / / _ \\/ / ___/ __ \\/ __ `__ \\/ _ \\
| |/ |/ /  __/ / /__/ /_/ / / / / / /  __/
|__/|__/\\___/_/\\___/\\____/_/ /_/ /_/\\___/ </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
