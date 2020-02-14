function updateGreeting() {
    var greetingContainerElement = document.getElementById('greetingContainer');
    var nameInputElement = document.getElementById('nameInput');
    var name = nameInputElement.value;
    var colorInputElement = document.getElementById('colorInput');
    var colorName = colorInputElement.value;
    greetingContainerElement.innerHTML = 
        "<p style='color: " + sanitize(colorName) + "'>Hello, " + sanitize(name) + "!</p>";
}

function sanitize(str) {
    str = str.replace("<", "&lt;")
    str = str.replace(">", "&gt;")
    return str;
}