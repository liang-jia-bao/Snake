import '../style/index.less'
import GameControls from './moduls/GameControls'
const gc =new GameControls()
setInterval(() => {
  console.log(gc.direction);
  
},1000)