import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControls{
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  direction=''
  isLive = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(10,2)
    this.init()
  }
  init() {
    document.addEventListener('keydown',this.keydownHandler.bind(this))
    this.run()
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
        Y -= 10;
        break;
      case 'ArrowDown':
        Y += 10;
        break;
      case 'ArrowLeft':
        X -= 10;
        break;
      case 'ArrowRight':
        X += 10;
        break;
      
    }
    this.checkEat(X, Y);
    try{
      this.snake.X = X;
    this.snake.Y = Y;
    }catch (e) {
      alert('Your snake is died!')
      this.isLive = false
    }
    this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)

  }
  checkEat(X: number, Y:number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}
export default GameControls