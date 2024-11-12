const style = document.createElement("style");
style.textContent = ` 
        h1{
            display: flex;
            
        }
        .text-slider-letter {
            display: inline-block;
        }

        .text-slider-word {
            display: inline-block;

        }

        .text-slider-wraper {
            display: inline-block;
            overflow: hidden;
            text-align:left;
        }

        .text-slider-swap {
            display: inline-flex;
            flex-direction: column;
        }
`;
document.head.appendChild(style);

const txtNode = document.querySelector(".text-slider"),
    txt = txtNode.innerText.trim();
txtNode.style = "";
txtNode.innerHTML = `<span class="text-slider-wraper">
            <span class="text-slider-swap">
                ${txt
                    .split(" ")
                    .map(
                        (cur, i) =>
                            `<span class="text-slider-word w${i}">${cur
                                .split("")
                                .map(
                                    (cur2) =>
                                        `<span class="text-slider-letter">${cur2}</span>`
                                )
                                .join("")}</span>`
                    )
                    .join("")} 
            </span>
            </span>`;

const words = document.querySelectorAll(".text-slider-word");
let h = words[0].getBoundingClientRect().height;

document.querySelector(".text-slider-wraper").style.height = h*.81 + "px";
words.forEach((e) => (e.style.height = h + "px"));

anime.timeline({ loop: true }).add({
    targets: ".text-slider-swap",
    keyframes: [
        { translateY: [h, 0] },
        { translateY: [0, -h] },
        { translateY: [-h, -2 * h] },
        { translateY: [-2 * h, -3 * h] },
    ],
    easing: "easeOutExpo",
    duration: 8000,
});
