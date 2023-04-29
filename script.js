let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButttons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

// List of fontlist
let fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "cursive"]

// Initial Settings
const initializer = () = {
    // function calls for highlighting buttons
    // No highlights for link, unlink, lists, undo, redo since they are one operations
    highlighter(alignButtons, true);
    highlighter(spacingButttons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);
}

// Highlight clicked button
const highlighter = (classname, needsRemoval) => {
    classname.forEach((button) => {
        button.addEventListener("click", () => {
            // needsRemoval = true means only one button should be highlight and other would be normal
            if(needsRemoval) {
                let alreadyActive = false;

                // If currently clicked button is already active
                if(button.classList.contains("active")) {
                    alreadyActive = true;
                }

                // Remove highlight from other buttons
                highlighterRemover(classname);
                if(!alreadyActive) {
                    // highlight clicked button
                    button.classList.add("active");
                }
            }
            else {
                // if other buttons can be highlighted
                button.classList.toggle("active");
            }
        })
    })
}

window.onload = initializer();

// Remove highlight from other buttons
// const highlighterRemover = (className) => {
//     className.forEach((button) => {
//         if(button.classList.contains("active")) {
//             button.classList.remove("active");
//         }
//     })
// }
