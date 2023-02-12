import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Goku from "./Goku/Goku.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Goku: new Goku({
    x: -166,
    y: -83,
    direction: 90,
    costumeNumber: 1,
    size: 100.00000002328306,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
