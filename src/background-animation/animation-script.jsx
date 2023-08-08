import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p5) {
  let vectors = [];
  let amount = 700;
  let speed = 10000;
  let size = 1;

  p5.setup = () => {
    p5.createCanvas(2 * p5.windowWidth, p5.windowHeight);
    
    p5.stroke(1, 1, 1, 100);
    
    for ( var i = 0; i < amount; i++ ) {
      vectors.push(p5.createVector(p5.random(p5.width), p5.random(p5.height)))
    }
  };

  p5.draw = () => {
    for (const vector of vectors) {
      let randomisation = p5.noise(vector.x/100, vector.y/100) * p5.TAU;
      
      vector.add(p5.cos(randomisation), p5.sin(randomisation))
      
      p5.point(
        p5.constrain(vector.x, 0, p5.width),
        p5.constrain(vector.y, 0, p5.height)
      )
    }
  }
};

const AnimationBg = () => {
  return (
      <ReactP5Wrapper sketch={sketch} />
    )
}

export default AnimationBg;