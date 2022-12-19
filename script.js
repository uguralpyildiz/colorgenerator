const modalOverlay = document.querySelector(".create-modal-overlay")
const createColor = document.querySelector(".create-c")
const close = document.querySelector(".close")
const modalOrg = document.querySelector(".create-color-modal")
createColor.addEventListener("click", ()=> {
    modalOverlay.style.display = "block"
})

function closeModal(){
    modalOrg.style.opacity = "0"
    modalOverlay.style.opacity = "0"
    setTimeout(() => {
        modalOverlay.style.display = "none"
        modalOrg.style.opacity = "1"
        modalOverlay.style.opacity = "1"
    }, 200);
}

document.addEventListener("mousedown", (e)=> {
    if (e.target === modalOverlay || e.target === close) {
        closeModal()
    } 
})

const generateBtn = document.querySelector(".generate-btn")
const colorBContainer = document.querySelector(".color-palette-container")

function generateColor() {    

    var colors0 = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');;
    var colors1 = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');;
    var colors2 = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');;
    var colors3 = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');;
    var colors4 = (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');;


    const nodeContainer = document.createElement("div")
    nodeContainer.setAttribute("class", "color-container")

    nodeContainer.innerHTML = `
                <div style="background: #${colors0};" class="color">
                    <div class="color-text">#${colors0}</div>
                </div>
                <div style="background:  #${colors1};" class="color">
                    <div class="color-text">#${colors1}</div>
                </div>
                <div style="background:  #${colors2};" class="color">
                    <div class="color-text">#${colors2}</div>
                </div>
                <div style="background:  #${colors3};" class="color">
                    <div class="color-text">#${colors3}</div>
                </div>
    `
colorBContainer.appendChild(nodeContainer)
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
    closeModal()
}

generateBtn.addEventListener("click", ()=> {
    generateColor();
})

