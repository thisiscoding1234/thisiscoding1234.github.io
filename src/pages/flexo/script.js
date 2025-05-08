client:only="vue"

// Select root
const root = document.querySelector(':root');

var s = document.getElementById("slant")
var w = document.getElementById("width")
var g = document.getElementById("grade")
var th_s = document.getElementById("thick_s")
var t_s = document.getElementById("thin_s")
var c_w = document.getElementById("counter_w")
var a_h = document.getElementById("asce_h")
var d_d = document.getElementById("desc_d")
var f_h = document.getElementById("figure_h")
var l_h = document.getElementById("lower_h")
var u_h = document.getElementById("upper_h")
var wh = document.getElementById("weight")

s.oninput = function () { root.style.setProperty('--slant', s.value) }
w.oninput = function () { root.style.setProperty('--width', warn.value) }
g.oninput = function () { root.style.setProperty('--grade', g.value) }
th_s.oninput = function () { root.style.setProperty('--thick_s', th_s.value) }
t_s.oninput = function () { root.style.setProperty('--thin_s', t_s.value) }
c_w.oninput = function () { root.style.setProperty('--counter_w', c_w.value) }
a_h.oninput = function () { root.style.setProperty('--asce_h', a_h.value) }
d_d.oninput = function () { root.style.setProperty('--desc_d', d_d.value) }
f_h.oninput = function () { root.style.setProperty('--figure_h', f_h.value) }
l_h.oninput = function () { root.style.setProperty('--lower_h', l_h.value) }
u_h.oninput = function () { root.style.setProperty('--upper_h', u_h.value) }
wh.oninput = function () { root.style.setProperty('--weight', wh.value) }

// Slider IDs
const sliderIds = [
    "slant", "width", "grade", "thick_s", "thin_s", 
    "counter_w", "asce_h", "desc_d", "figure_h", 
    "lower_h", "upper_h", "weight"
];

// Connect individual reset buttons
sliderIds.forEach(id => {
    const resetBtn = document.getElementById(`r-${id}`);
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resetSlider(id, sliderDefaults[id]);
        });
    }
});

document.getElementById(`resetAll`).addEventListener('click', () => {resetAllSliders()})

// Preload the gentle click sound
const clickSound = new Audio('click.mp3');

// Animate slider value
function animateSliderToValue(slider, targetValue, duration = 400, onComplete = null) {
    const startValue = parseFloat(slider.value);
    const change = targetValue - startValue;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const newValue = startValue + change * eased;

        slider.value = newValue;
        root.style.setProperty(`--${slider.id}`, newValue);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            slider.value = targetValue;
            root.style.setProperty(`--${slider.id}`, targetValue);
            if (onComplete) onComplete();
        }
    }

    requestAnimationFrame(animate);
}

// Easing function
function easeOutCubic(x) {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

// Reset a single slider
function resetSlider(sliderId, defaultValue) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        animateSliderToValue(slider, defaultValue, 250, () => {
            clickSound.currentTime = 0;
            clickSound.play();

            slider.classList.add('pulse');
            setTimeout(() => slider.classList.remove('pulse'), 1000);
        });
    }
}

// Default values
const sliderDefaults = {
    slant: 0,
    width: 100,
    grade: 0,
    thick_s: 96,
    thin_s: 79,
    counter_w: 468,
    asce_h: 750,
    desc_d: -203,
    figure_h: 738,
    lower_h: 514,
    upper_h: 712,
    weight: 400
};

// Reset all sliders
function resetAllSliders() {
    let unchangedCount = 0;

    Object.entries(sliderDefaults).forEach(([id, defaultValue]) => {
        const slider = document.getElementById(id);
        if (slider) {
            if (parseFloat(slider.value) != defaultValue) {
                resetSlider(id, defaultValue);
            } else {
                unchangedCount++;
            }
        }
    });

   const resetBtn = document.getElementById("resetAll");
if (resetBtn) {
    resetBtn.classList.remove('pulse');
    void resetBtn.offsetWidth;  // force reflow
    resetBtn.classList.add('pulse');

    setTimeout(() => resetBtn.classList.remove('pulse'), 1000);
} else {
    console.warn("Reset button with ID 'resetAll' not found!");
}
}
