const modalOverlay = document.querySelector(".create-modal-overlay")
const createColor = document.querySelector(".create-c-plus")
const close = document.querySelector(".close")
const modalOrg = document.querySelector(".create-color-modal")

createColor.addEventListener("click", () => {
    modalOverlay.style.display = "block"
})

function closeModal() {
    modalOrg.style.opacity = "0"
    modalOverlay.style.opacity = "0"
    setTimeout(() => {
        modalOverlay.style.display = "none"
        modalOrg.style.opacity = "1"
        modalOverlay.style.opacity = "1"
    }, 200);
}

document.addEventListener("mousedown", (e) => {
    if (e.target === modalOverlay || e.target === close) {
        closeModal()
    }
})

const generateBtn = document.querySelector(".generate-btn")
const colorBContainer = document.querySelector(".color-palette-container")
const red = document.querySelector(".red")
const gren = document.querySelector(".gren")
const ble = document.querySelector(".ble")
function generateColor() {
    const nodeContainer = document.createElement("div")
    nodeContainer.setAttribute("class", "color-container")
    
    function index() {      
        var colors = []
        for (let i = 0; i < 4; i++) {

            let hexColor = "#";
            for (let i = 0; i < 6; i++) {
                hexColor += Math.floor(Math.random() * 16).toString(16);
            }           
            const redV = hexColor.substring(1, 3);
            const greenV = hexColor.substring(3, 5);
            const blueV = hexColor.substring(5, 7);

         
            if (!red.checked) {
                hexColor = hexColor.replace(redV, "00")
       
            }
            if (!gren.checked) {
                hexColor = hexColor.replace(greenV, "00")
       
            }
            if (!ble.checked) {
                hexColor = hexColor.replace(blueV, "00")
          
            }

            colors[i] = hexColor;
        }
        

        nodeContainer.innerHTML = `
                <div style="background: ${colors[0]};" class="color">
                    <div class="color-text">${colors[0]}</div>
                </div>
                <div style="background:  ${colors[1]};" class="color">
                    <div class="color-text">${colors[1]}</div>
                </div>
                <div style="background:  ${colors[2]};" class="color">
                    <div class="color-text">${colors[2]}</div>
                </div>
                <div style="background:  ${colors[3]};" class="color">
                    <div class="color-text">${colors[3]}</div>
                </div>
    `         
        copyclipboard()
    }

    function copyclipboard() {
        const colorText = document.querySelectorAll(".color")
        const colorRText = document.querySelectorAll(".color-text")
        for (let i = 0; i < colorText.length; i++) {
            colorText[i].addEventListener("click", () => {
                navigator.clipboard.writeText(colorRText[i].textContent);
                colorText[i].classList.add("copied")
                setTimeout(() => {
                    colorText[i].classList.remove("copied")
                }, 1000);
            })
        }
    }

    colorBContainer.appendChild(nodeContainer)
    index()
    copyclipboard()
    closeModal()
    var reloadBtn = document.querySelector(".reload-btn")

    reloadBtn.addEventListener("click", () => {
        index()
    })

}


generateBtn.addEventListener("click", () => {

    generateColor();
    window.scrollTo(0, document.body.scrollHeight);
})



for (let i = 0; i < 10; i++) {
    generateColor();
}




