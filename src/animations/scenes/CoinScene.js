/* eslint-disable no-undef */

import coinSprite from "../../assets/spritesf.png";
import { GameEvents } from "../events";

export class CoinScene extends Phaser.Scene {
  constructor() {
    super("CoinScene");
  }

  preload() {
    this.load.spritesheet("coin", coinSprite, {
      frameWidth: 563,
      frameHeight: 563,
    });
  }

  create() {
    this.anims.create({
      key: "flip",
      frames: this.anims.generateFrameNumbers("coin", {
        start: 0,
        end: 19,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.coin = this.add.sprite(850, 300, "coinAtlas").play("flip");

    this.game.events.on(GameEvents.GAME_START, (value) => {
      this.coin.anims.resume();
      if (value === "head") {
        this.tweens.add({
          targets: this.coin.anims,
          timeScale: { from: 3, to: 19 },
          ease: "Sine.inOut",
          yoyo: true,
          duration: 2000,
          onComplete: () => {
            // this.coin.stopOnFrame(this.coin.anims.currentAnim.getFrameAt(0));
            this.coin.anims.pause(this.coin.anims.currentAnim.frames[0]);
          },
        });
      }
      if (value === "tail") {
        this.tweens.add({
          targets: this.coin.anims,
          timeScale: { from: 3, to: 19 },
          ease: "Sine.inOut",
          yoyo: true,
          duration: 2000,

          onComplete: () => {
            // this.coin.stopOnFrame(this.coin.anims.currentAnim.getFrameAt(10));
            this.coin.anims.pause(this.coin.anims.currentAnim.frames[10]);
          },
        });
      }
    });
  }
}
