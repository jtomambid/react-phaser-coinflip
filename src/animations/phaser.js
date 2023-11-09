import Phaser from "phaser";
import { CoinScene } from "./scenes/CoinScene";

export function phaser(params) {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 2000,
    height: 600,
    backgroundColor: "#87ceeb",
    scene: CoinScene,
    ...params,
  });

  return game;
}
