const numberKeys = document.querySelectorAll(".key");
const gridKeys = document.querySelectorAll(".grid-item-keypad");
const display = document.querySelector("#input-display");
const toggle = document.querySelector(".toggle-icon");
const operations = document.querySelectorAll(".operation");
const hidden = document.querySelector("#hidden");


//  DEFAULT THEME
const themes = document.querySelector(".toggle-icon");
const body1 = document.querySelector(".body");
const gridHeader1 = document.querySelector(".grid-header");
const theme = document.querySelector(".theme");
const gridScreen = document.querySelector(".grid-calc-screen");
const calcKeys = document.querySelector(".grid-calc-keys");
const calcKeypad = document.querySelectorAll(".grid-item-keypad");
const delBtn = document.querySelector(".del");
const resetBtn = document.querySelector(".reset");
const equalBtn = document.querySelector(".equalTo");
const toggleIcon = document.querySelector(".toggle-icon");
const toggleContainer = document.querySelector(".toggle-container");



numberKeys.forEach(key => {
   key.addEventListener("click", ()=> {
      display.innerHTML += key.value
   })
});


operations.forEach(operation => {
   operation.addEventListener("click", () => {
      if (operation.value === "RESET") {
         display.innerHTML = ""
      }
      if (operation.value === "DEL") {
         display.innerHTML = display.innerHTML.slice(0 , -1)  
      }
      if (operation.value === "=") {
         if (display.innerHTML === ""){
            display.innerHTML = ""
         }else {
            try {
               let answer = eval(display.innerHTML)
               display.innerHTML = answer
            } catch {
               display.innerHTML = "ERROR!"
            }
         }
      }   
   })
});


themes.addEventListener("click", () => {
   let body = document.body;
   if (body.classList.contains("body")) {
      body1.classList.replace("body", "body-theme-2");
      gridHeader1.classList.replace("grid-header","grid-header-theme-2");
      theme.classList.replace("theme","theme-2");
      gridScreen.classList.replace("grid-calc-screen", "grid-calc-screen-theme-2");
      calcKeys.classList.replace("grid-calc-keys", "grid-calc-keys-theme-2");
      delBtn.classList.replace("del", "del-key-theme-2");
      resetBtn.classList.replace("reset", "reset-key-theme-2");
      equalBtn.classList.replace("equalTo", "equal-to-key-theme-2");
      toggleContainer.classList.replace("toggle-container", "toggle-container-theme-2");
   }   
   else if (body.classList.contains("body-theme-2")) {
      body1.classList.replace("body-theme-2", "body-theme-3");
      gridHeader1.classList.replace("grid-header-theme-2", "grid-header-theme-3");
      theme.classList.replace("theme-2", "theme-3");
      gridScreen.classList.replace( "grid-calc-screen-theme-2", "grid-calc-screen-theme-3");
      calcKeys.classList.replace("grid-calc-keys-theme-2", "grid-calc-keys-theme-3")
      delBtn.classList.replace("del-key-theme-2","del-key-theme-3");
      resetBtn.classList.replace("reset-key-theme-2","reset-key-theme-3");
      equalBtn.classList.replace("equal-to-key-theme-2","equal-to-key-theme-3");
      toggleContainer.classList.replace("toggle-container-theme-2","toggle-container-theme-3");
   }  
   else if (body.classList.contains("body-theme-3")) {
      body1.classList.replace("body-theme-3", "body");
      gridHeader1.classList.replace("grid-header-theme-3", "grid-header");
      theme.classList.replace("theme-3", "theme");
      gridScreen.classList.replace("grid-calc-screen-theme-3", "grid-calc-screen");
      calcKeys.classList.replace("grid-calc-keys-theme-3", "grid-calc-keys")
      delBtn.classList.replace("del-key-theme-3", "del");
      resetBtn.classList.replace("reset-key-theme-3", "reset");
      equalBtn.classList.replace("equal-to-key-theme-3", "equalTo");
      toggleContainer.classList.replace("toggle-container-theme-3", "toggle-container");
   }
})


calcKeypad.forEach(key => {
   themes.addEventListener("click", () => {
      let body = document.body;
      if (body.classList.contains(""))
         key.classList("grid-item-keypad");
         if (body.classList.contains("")) {
            toggleIcon.classList("toggle-icon")
         }
         
      else if (body.classList.contains("body-theme-2"))
         key.classList.replace("grid-item-keypad", "grid-item-keypad-theme-2")
         if (body.classList.contains("body-theme-2")) {
            toggleIcon.classList.replace("toggle-icon", "toggle-icon-theme-2")
         }
         
      else if (body.classList.contains("body-theme-3")) {
         key.classList.replace("grid-item-keypad-theme-2" ,"grid-item-keypad-theme-3");
         if (body.classList.contains("body-theme-3")) {
            toggleIcon.classList.replace("toggle-icon-theme-2", "toggle-icon-theme-3")
         }

      }
      else {
         key.classList.replace("grid-item-keypad-theme-3" ,"grid-item-keypad");
         toggleIcon.classList.replace("toggle-icon-theme-3", "toggle-icon")
      }
   })
   
});


















