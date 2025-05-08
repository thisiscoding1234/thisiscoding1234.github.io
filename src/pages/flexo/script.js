var r = document.querySelector(':root');

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

s.oninput = function () { r.style.setProperty('--slant', this.value) }
w.oninput = function () { r.style.setProperty('--width', this.value) }
g.oninput = function () { r.style.setProperty('--grade', this.value) }
th_s.oninput = function () { r.style.setProperty('--thick_s', this.value) }
t_s.oninput = function () { r.style.setProperty('--thin_s', this.value) }
c_w.oninput = function () { r.style.setProperty('--counter_w', this.value) }
a_h.oninput = function () { r.style.setProperty('--asce_h', this.value) }
d_d.oninput = function () { r.style.setProperty('--desc_d', this.value) }
f_h.oninput = function () { r.style.setProperty('--figure_h', this.value) }
l_h.oninput = function () { r.style.setProperty('--lower_h', this.value) }
u_h.oninput = function () { r.style.setProperty('--upper_h', this.value) }
wh.oninput = function () { r.style.setProperty('--weight', this.value) }

// Preload the gentle click sound
const clickSound = new Audio('click.mp3'); // or replace with your own sound file

function animateSliderToValue(slider, targetValue, duration = 400, onComplete = null) {
    const startValue = parseFloat(slider.value);
    const change = targetValue - startValue;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const newValue = startValue + change * easedProgress;
        slider.value = newValue;

        // Update CSS variable if needed
        const cssVar = "--" + slider.id;
        r.style.setProperty(cssVar, newValue);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            slider.value = targetValue;  // Snap to final
            r.style.setProperty(cssVar, targetValue);
            if (onComplete) onComplete();
        }
    }

    requestAnimationFrame(animate);
}

function easeOutCubic(x) {
    const c4 = (2 * Math.PI) / 3;

    return x === 0
        ? 0
        : x === 1
            ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function resetSlider(sliderId, defaultValue) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        animateSliderToValue(slider, defaultValue, 250, () => {
            // Play click sound
            clickSound.currentTime = 0;
            clickSound.play();

            // Trigger color pulse
            slider.classList.add('pulse');
            setTimeout(() => {
                slider.classList.remove('pulse');
            }, 1000);  // Duration matches CSS animation
        });
    } else {
        console.warn(`Slider with ID ${sliderId} not found!`);
    }
}

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

function resetAllSliders() {
    c = 0;
    Object.keys(sliderDefaults).forEach(sliderId => {
        if (document.getElementById(sliderId).value == sliderDefaults[sliderId]) {
            c = c + 1;
        } else {
            resetSlider(sliderId, sliderDefaults[sliderId]);
        }
    });

    setTimeout(() => {
        const a = document.getElementById("resetAll");
        a.classList.remove('pulse');  // Ensure it's gone first
        void a.offsetWidth;
        a.classList.add('pulse');

        setTimeout(() => {
            a.classList.remove('pulse');
        }, 1000);
    }, 0);  // Delay by one tick
}