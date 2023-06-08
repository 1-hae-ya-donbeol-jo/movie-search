const DEFAULT_SPEED = 5000;

export class Snail {
  constructor() {
    this.interval = null;
    this.speed = DEFAULT_SPEED;
    this.snail = null;
    this.snailBox = document.querySelector(".snail-box");
  }

  add() {
    const snail = document.createElement("img");
    snail.className = "snail";
    snail.src = "assets/snail.png";

    snail.addEventListener("click", () => {
      this.setSnailMoveSpeed(100);

      setTimeout(() => {
        this.setSnailMoveSpeed(DEFAULT_SPEED);

        const newSnail = new Snail();
        newSnail.add();
      }, DEFAULT_SPEED);
    });

    this.snail = snail;
    this.snailBox.insertAdjacentElement("afterbegin", snail);

    this.snailMove();
  }

  setSnailPos() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    this.snail.style.transition = `${this.speed}ms`;
    this.snail.style.top = `${x}px`;
    this.snail.style.left = `${y}px`;
  }

  setSnailMoveSpeed(speed) {
    this.speed = speed;
    clearInterval(this.interval);
    this.snailMove();
  }

  snailMove() {
    this.setSnailPos();

    this.interval = setInterval(() => {
      this.setSnailPos();
    }, this.speed);
  }
}
