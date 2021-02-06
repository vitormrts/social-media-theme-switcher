// const root = document.querySelector(":root")
const checkbox = document.querySelector("input#switch")
console.log("a")
const getStyle = (style) => {
    // window.getComputedStyle(element).getPropertyValue(style)
    // window.getComputedStyle(document.documentElement).getPropertyValue(style)
    return window.getComputedStyle(document.documentElement).getPropertyValue(style)
    
}

const lightColors = {
    bg: getStyle("--color-l-bg"),
    card: getStyle("--color-l-card"),
    top: getStyle("--color-l-top"),
    textSecondary: getStyle("--color-l-text-secondary"),
    textPrimary: getStyle("--color-l-text-primary"),
    shadow: getStyle("--color-l-shadow"),
}

const darkColors = {
    bg: "hsl(230, 17%, 14%)",
    card: "hsl(228, 28%, 20%)",
    top: "hsl(232, 19%, 15%)",
    textSecondary: "hsl(228, 34%, 66%)",
    textPrimary: "hsl(0, 0%, 100%)",
    shadow: "rgb(15, 15, 15)",
}

const transformKey = key => "--color-l-" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        document.documentElement.style.setProperty(transformKey(key), colors[key])    
    )

    console.log(colors)
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkColors) : changeColors(lightColors)
})