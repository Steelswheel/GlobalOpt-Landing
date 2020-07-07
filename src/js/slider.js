const wrapper = document.querySelector(".slider__wrapper");
const prev = document.querySelector(".slider__prev");
const next = document.querySelector(".slider__next");
const items = wrapper.children;

class Slider {
    width = 601;
    count = 1;
    position = 0;

    constructor(wrapper, prev, next, items) {
        this.wrapper = wrapper;
        this.prev = prev;
        this.next = next;
        this.items = items;
        this.prev.addEventListener('click', ()=>{
            this.prevSlide();
        });
        this.next.addEventListener('click', ()=>{
            this.nextSlide();
        });
    }

    prevSlide() {
        this.position += this.width * this.count;
        this.position = Math.min(this.position, 0);
        this.wrapper.style.marginLeft = this.position + 'px';
    }

    nextSlide() {
        this.position -= this.width * this.count;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        this.position = Math.max(this.position, -this.width * (this.items.length - this.count));
        this.wrapper.style.marginLeft = this.position + 'px';
    }
}

const slider = new Slider(wrapper, prev, next, items);