/*
  Web Design II
  Ex. 03
  JavaScript
  António Castro, nº201206754
*/

let font;
let novo;
let size;
let slc;
let txt;
let interactionx;
let btn;
let prmpt;
let clr;
let allreset;
let allvalue;
let rstbox;
let vlr;
let vlrinpt;
let tmn;
let tmninpt;
let slnt;
let slntinpt;
let showint;
let showtest;
let displaysec;
let grid;

// FONT CHOICE

// Using an index to determine the option (font) and returning the value in the specific box, converting the main text to the specific choice

slc = document.querySelector("#input-font");
txt = document.querySelector("#fox");

slc.addEventListener("change", function () {
  font = slc.options[slc.selectedIndex].value;
  txt.style.fontFamily = font;
});

// FONT INPUT

// Prompt to determine the value presented in the main text frame

btn = document.querySelector("#cfm");
prmpt = document.querySelector("#ipt");

btn.addEventListener("click", function () {
  novo = prmpt.value;
  txt.innerText = novo;

  // If no value is specified, an alert is shown indicating the need to use at least one character

  if (novo == "" || novo == null) {
    alert("You must fill the input box with text!");
    txt.innerText = "The quick brown fox jumps over the lazy dog";
    return false;
  }
});

clr = document.querySelector("#clr");

clr.addEventListener("click", function () {
  txt.innerText = "The quick brown fox jumps over the lazy dog";
});

// RESET PARAMETERS

// Using a for loop that goes through every parameter (both the actual font properties and the text spans that indicate the numeric value below the corresponding slider) and resets them to the default values given in the HTML

allreset = document.querySelectorAll("input[type='range']");

allvalue = document.querySelectorAll("span");

rstbox = document.querySelector("#rst");

rstbox.addEventListener("click", function () {
  for (i = 0; i < allreset.length; i++) {
    allreset[i].value = allreset[i].defaultValue;
    allvalue[i].innerText = allreset[i].defaultValue;
  }

  let newsizereset = document.querySelector(":root");

  vlr.innerHTML = allreset[0].defaultValue;
  newsizereset.style.setProperty(
    "--font-size",
    allreset[0].defaultValue + "pt"
  );

  let newweightreset = document.querySelector(":root");
  tmn.innerHTML = allreset[1].defaultValue;
  newweightreset.style.setProperty("--font-weight", allreset[1].defaultValue);

  let newslantreset = document.querySelector(":root");
  slnt.innerHTML = allreset[2].defaultValue;
  newslantreset.style.setProperty("--font-slant", allreset[2].defaultValue);
});

// SIZE;

// Change size numeric value below the slider, correspond that value to the main text font size

vlrinpt = document.querySelector(".flex-item input#size");
vlr = document.querySelector(".value_size");

vlrinpt.addEventListener("input", function () {
  let newsize = document.querySelector(":root");
  vlr.innerHTML = vlrinpt.value;
  newsize.style.setProperty("--font-size", vlrinpt.value + "pt");
});

// Regarding the text size of the second div ("Test me!" text), adapat the font size value to the width of the screen (using onload and onresize attributes to automatically refresh the width value) to avoid collapse

window.onload = showViewport;
window.onresize = showViewport;

function showViewport() {
  let fontsecond = document.querySelector("#second");
  let truewidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  fontsecond.style.setProperty("--font-size", truewidth / 7 + "pt");
}

// WEIGHT

// Change weight numeric value below the slider, correspond that value to the main text font weight

tmninpt = document.querySelector(".flex-item input#weight");
tmn = document.querySelector(".value_weight");

tmninpt.addEventListener("input", function () {
  let newweight = document.querySelector(":root");
  tmn.innerHTML = tmninpt.value;
  newweight.style.setProperty("--font-weight", tmninpt.value);
});

// SLANT

// Change slant numeric value below the slider, correspond that value to the main text font slant

slntinpt = document.querySelector(".flex-item input#slant");
slnt = document.querySelector(".value_slant");

slntinpt.addEventListener("input", function () {
  let newslant = document.querySelector(":root");
  slnt.innerHTML = slntinpt.value;
  newslant.style.setProperty("--font-slant", slntinpt.value);
});

// NEXT DIV + TYPE INTERACTION

// Transition between div's and displays regarding arrow click

showint = document.querySelector(".img");
showtest = document.querySelector(".imgup");
displaysec = document.querySelector("#second");
grid = document.querySelector("#gridsystem");

showint.addEventListener("click", function () {
  displaysec.style.display = "block";
  showtest.style.display = "block";
  displaysec.scrollIntoView({ behavior: "smooth" });
  showint.style.display = "none";
});

showtest.addEventListener("click", function () {
  grid.scrollIntoView({ behavior: "smooth" });
  showint.style.display = "block";
  showtest.style.display = "none";
});

// Interaction regarding mouse events and changes between vertical and horizontal movement and font weight and slant properties

interactionx = document.querySelector("#type");

interactionx.addEventListener("mousemove", function (hzntl) {
  let newinteractionx = document.querySelector(":root");
  newinteractionx.style.setProperty("--font-weight", hzntl.clientX / 2);
});

interactionx.addEventListener("mousemove", function (vrtcl) {
  let newinteractionx = document.querySelector(":root");
  newinteractionx.style.setProperty("--font-slant", -vrtcl.clientY / 100);
});
