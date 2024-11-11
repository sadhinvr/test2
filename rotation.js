import {b as d, c as l} from "./chunk-TGCELFVQ.js";
import {j as c} from "./chunk-WEZIIHAB.js";
var h = class extends d {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.direction = "Clockwise";
        this.startRotation = 0;
        this.startTime = 0;
        this.speed = 1;
        this.raf = 0;
        this.tick = t => {
            this.startTime === 0 && (this.startTime = t);
            let r = t - this.startTime
              , halfWidth = this.width / 2 // i
              , halfheight = this.height / 2 //s
              , totalWidth = this.x + halfWidth //n
              , totalHeight = this.y + halfheight //o
              , maxDistance = Math.max(halfWidth, halfheight) //e
              , a = (this.startRotation + r * this.speed * (this.direction === "Clockwise" ? 1 : -1) / 4) * Math.PI / 180;
            this.el.setAttribute("x1", String(totalWidth + Math.cos(a) * maxDistance)),
            this.el.setAttribute("x2", String(totalWidth + Math.cos(a + Math.PI) * maxDistance)),
            this.el.setAttribute("y1", String(totalHeight + Math.sin(a) * maxDistance)),
            this.el.setAttribute("y2", String(totalHeight + Math.sin(a + Math.PI) * maxDistance)),
            this.raf = requestAnimationFrame(this.tick)
        }
    }
    connect() {
        return c(this, null, function*() {
            this.startRotation = this.el.dataset.jsStartRotation ? parseFloat(this.el.dataset.jsStartRotation) : 0,
            this.speed = this.el.dataset.jsSpeed ? parseFloat(this.el.dataset.jsSpeed) : 1
        })
    }
    disconnect() {
        this.pause()
    }
    setBounds(t, r, i, s) {
        this.x = t,
        this.y = r,
        this.width = i,
        this.height = s
    }
    play() {
        this.raf = requestAnimationFrame(this.tick)
    }
    pause() {
        cancelAnimationFrame(this.raf)
    }
}
;
l.register("RotatingGradient", h);

