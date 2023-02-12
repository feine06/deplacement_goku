/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrière-plan1", "./Stage/costumes/arrière-plan1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Namek", "./Stage/costumes/Namek.png", { x: 480, y: 270 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.maVariable = 0;
  }
}
