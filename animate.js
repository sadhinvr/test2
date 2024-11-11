
const style = document.createElement('style');
style.textContent = `
.text-slider-letter {
            display: inline-block;
        }

        .text-slider-word {
            display: inline-block;
            position: absolute;
            top: 0;
        }

        .text-slider-word:nth-child(2) {
            position: relative;
        }

        .text-slider-wraper {
            display: inline-flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }
`
document.head.appendChild(style)

const txtNode = document.querySelector('.text-slider'),
            txt = txtNode.innerText.trim();
        txtNode.style = '';
        txtNode.innerHTML = `<span class="text-slider-wraper">
            ${txt.split(' ').map((cur, i) => `<span class="text-slider-word">${cur.split('').map(cur2 => `<span class="text-slider-letter">${cur2}</span>`).join('')
            }</span>`).join('')} 
            </span>`


anime.timeline({ loop: true })
            .add({
                targets: '.text-slider-word',
                keyframes: [
                    { translateY: [60, 0], opacity: 1 },
                    { translateY: [0, 0], opacity: 1 },
                    { translateY: [0, -60], opacity: 0 }
                ],

                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 4400,
                delay: function (el, i) {
                    return i * 3000;
                },

})