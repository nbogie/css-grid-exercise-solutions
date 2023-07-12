const mainGridEl = document.getElementsByClassName("mainGrid")[0];
mainGridEl.addEventListener("click", randomiseLayout);

function randomiseLayout() {
    const layoutStr = pick(possibleLayouts);
    mainGridEl.style.gridTemplateAreas = layoutStr;
}

const possibleLayouts = [
    `
    ". . . a" 
    ". . . a" 
    ". . b b"
    `,
    `
    "a . . ."
    "a . b b"
    ". . . ."
    `,

    `
    ". b b ." 
    ". a . ." 
    ". a . ."
    `,
];

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
