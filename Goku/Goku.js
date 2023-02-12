/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Goku extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Goku/costumes/costume1.png", { x: 32, y: 46 }),
      new Costume("w", "./Goku/costumes/w.png", { x: 36, y: 34 }),
      new Costume("w1", "./Goku/costumes/w1.png", { x: 44, y: 40 }),
      new Costume("w4", "./Goku/costumes/w4.png", { x: 96, y: 108 }),
      new Costume("w5", "./Goku/costumes/w5.png", { x: 96, y: 108 }),
      new Costume("w6", "./Goku/costumes/w6.png", { x: 96, y: 108 }),
      new Costume("w2", "./Goku/costumes/w2.png", { x: 36, y: 40 }),
      new Costume("w3", "./Goku/costumes/w3.png", { x: 38, y: 48 }),
      new Costume("w7", "./Goku/costumes/w7.png", { x: 30, y: 42 }),
      new Costume("w9", "./Goku/costumes/w9.png", { x: 36, y: 46 }),
      new Costume("w10", "./Goku/costumes/w10.png", { x: 32, y: 42 }),
      new Costume("w12", "./Goku/costumes/w12.png", { x: 46, y: 44 }),
      new Costume("w13", "./Goku/costumes/w13.png", { x: 52, y: 42 }),
      new Costume("w14", "./Goku/costumes/w14.png", { x: 50, y: 44 }),
      new Costume("w15", "./Goku/costumes/w15.png", { x: 32, y: 46 }),
      new Costume("w16", "./Goku/costumes/w16.png", { x: 52, y: 34 }),
      new Costume("w17", "./Goku/costumes/w17.png", { x: 28, y: 40 }),
      new Costume("w18", "./Goku/costumes/w18.png", { x: 30, y: 44 }),
      new Costume("w19", "./Goku/costumes/w19.png", { x: 32, y: 40 }),
      new Costume("w20", "./Goku/costumes/w20.png", { x: 28, y: 46 }),
      new Costume("w21", "./Goku/costumes/w21.png", { x: 42, y: 38 }),
      new Costume("w22", "./Goku/costumes/w22.png", { x: 46, y: 48 }),
      new Costume("w23", "./Goku/costumes/w23.png", { x: 62, y: 92 }),
      new Costume("w24", "./Goku/costumes/w24.png", { x: 76, y: 118 }),
      new Costume("w25", "./Goku/costumes/w25.png", { x: 84, y: 110 }),
      new Costume("w26", "./Goku/costumes/w26.png", { x: 38, y: 42 }),
      new Costume("w27", "./Goku/costumes/w27.png", { x: 36, y: 42 }),
      new Costume("w28", "./Goku/costumes/w28.png", { x: 44, y: 44 }),
      new Costume("w29", "./Goku/costumes/w29.png", { x: 28, y: 44 }),
      new Costume("w30", "./Goku/costumes/w30.png", { x: 46, y: 40 }),
      new Costume("w31", "./Goku/costumes/w31.png", { x: 38, y: 46 }),
      new Costume("w32", "./Goku/costumes/w32.png", { x: 40, y: 40 }),
      new Costume("w33", "./Goku/costumes/w33.png", { x: 38, y: 40 }),
      new Costume("w34", "./Goku/costumes/w34.png", { x: 46, y: 42 }),
      new Costume("w35", "./Goku/costumes/w35.png", { x: 48, y: 32 }),
      new Costume("w36", "./Goku/costumes/w36.png", { x: 30, y: 40 }),
      new Costume("w37", "./Goku/costumes/w37.png", { x: 32, y: 44 }),
      new Costume("w38", "./Goku/costumes/w38.png", { x: 34, y: 38 }),
      new Costume("w39", "./Goku/costumes/w39.png", { x: 28, y: 46 }),
      new Costume("w40", "./Goku/costumes/w40.png", { x: 36, y: 34 }),
      new Costume("w41", "./Goku/costumes/w41.png", { x: 36, y: 42 }),
      new Costume("w42", "./Goku/costumes/w42.png", { x: 74, y: 92 }),
      new Costume("w43", "./Goku/costumes/w43.png", { x: 88, y: 108 }),
      new Costume("w44", "./Goku/costumes/w44.png", { x: 90, y: 112 }),
      new Costume("w45", "./Goku/costumes/w45.png", { x: 42, y: 42 }),
      new Costume("w46", "./Goku/costumes/w46.png", { x: 28, y: 42 }),
      new Costume("w47", "./Goku/costumes/w47.png", { x: 24, y: 44 }),
      new Costume("w48", "./Goku/costumes/w48.png", { x: 32, y: 36 }),
      new Costume("w49", "./Goku/costumes/w49.png", { x: 40, y: 46 }),
      new Costume("w50", "./Goku/costumes/w50.png", { x: 38, y: 36 }),
      new Costume("w51", "./Goku/costumes/w51.png", { x: 40, y: 38 }),
      new Costume("w52", "./Goku/costumes/w52.png", { x: 40, y: 40 }),
      new Costume("w53", "./Goku/costumes/w53.png", { x: 42, y: 44 }),
      new Costume("w54", "./Goku/costumes/w54.png", { x: 42, y: 24 }),
      new Costume("w55", "./Goku/costumes/w55.png", { x: 28, y: 40 }),
      new Costume("w56", "./Goku/costumes/w56.png", { x: 26, y: 40 }),
      new Costume("w57", "./Goku/costumes/w57.png", { x: 30, y: 38 }),
      new Costume("w58", "./Goku/costumes/w58.png", { x: 34, y: 48 }),
      new Costume("w59", "./Goku/costumes/w59.png", { x: 36, y: 36 }),
      new Costume("w60", "./Goku/costumes/w60.png", { x: 40, y: 42 }),
      new Costume("w61", "./Goku/costumes/w61.png", { x: 64, y: 92 }),
      new Costume("w62", "./Goku/costumes/w62.png", { x: 78, y: 108 }),
      new Costume("w63", "./Goku/costumes/w63.png", { x: 78, y: 112 }),
      new Costume("w64", "./Goku/costumes/w64.png", { x: 52, y: 44 }),
      new Costume("w65", "./Goku/costumes/w65.png", { x: 38, y: 44 }),
      new Costume("w66", "./Goku/costumes/w66.png", { x: 38, y: 44 }),
      new Costume("w67", "./Goku/costumes/w67.png", { x: 46, y: 44 }),
      new Costume("w68", "./Goku/costumes/w68.png", { x: 44, y: 36 }),
      new Costume("w69", "./Goku/costumes/w69.png", { x: 34, y: 38 }),
      new Costume("w70", "./Goku/costumes/w70.png", { x: 52, y: 40 }),
      new Costume("w71", "./Goku/costumes/w71.png", { x: 48, y: 42 }),
      new Costume("w72", "./Goku/costumes/w72.png", { x: 46, y: 42 }),
      new Costume("w73", "./Goku/costumes/w73.png", { x: 36, y: 38 }),
      new Costume("w74", "./Goku/costumes/w74.png", { x: 30, y: 44 }),
      new Costume("w75", "./Goku/costumes/w75.png", { x: 46, y: 44 }),
      new Costume("w76", "./Goku/costumes/w76.png", { x: 38, y: 44 }),
      new Costume("w77", "./Goku/costumes/w77.png", { x: 30, y: 48 }),
      new Costume("w78", "./Goku/costumes/w78.png", { x: 28, y: 50 }),
      new Costume("w79", "./Goku/costumes/w79.png", { x: 28, y: 52 }),
      new Costume("w80", "./Goku/costumes/w80.png", { x: 28, y: 50 }),
      new Costume("w81", "./Goku/costumes/w81.png", { x: 28, y: 46 }),
      new Costume("w82", "./Goku/costumes/w82.png", { x: 28, y: 46 }),
      new Costume("w83", "./Goku/costumes/w83.png", { x: 28, y: 46 }),
      new Costume("w84", "./Goku/costumes/w84.png", { x: 24, y: 48 }),
      new Costume("w85", "./Goku/costumes/w85.png", { x: 24, y: 48 }),
      new Costume("w86", "./Goku/costumes/w86.png", { x: 22, y: 48 }),
      new Costume("w87", "./Goku/costumes/w87.png", { x: 26, y: 52 }),
      new Costume("w88", "./Goku/costumes/w88.png", { x: 28, y: 48 }),
      new Costume("w89", "./Goku/costumes/w89.png", { x: 30, y: 46 }),
      new Costume("w90", "./Goku/costumes/w90.png", { x: 30, y: 50 })
    ];

    this.sounds = [
      new Sound("trans", "./Goku/sounds/trans.wav"),
      new Sound("destrans", "./Goku/sounds/destrans.wav"),
      new Sound("charge", "./Goku/sounds/charge.wav"),
      new Sound("sound", "./Goku/sounds/sound.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goku_avance" },
        this.whenIReceiveGokuAvance
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "q" }, this.whenKeyQPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Goku_recule" },
        this.whenIReceiveGokuRecule
      )
    ];
  }

  *whenKeyDPressed() {
    this.restartTimer();
    this.broadcast("Goku_avance");
  }

  *whenIReceiveGokuAvance() {
    this.costume = "w";
    this.move(5);
    while (!(this.timer > 0.5)) {
      yield;
    }
    this.costume = "costume1";
  }

  *whenKeyQPressed() {
    this.restartTimer();
    this.broadcast("Goku_recule");
  }

  *whenIReceiveGokuRecule() {
    this.costume = "w1";
    this.move(-5);
    while (!(this.timer > 0.5)) {
      yield;
    }
    this.costume = "costume1";
  }
}
