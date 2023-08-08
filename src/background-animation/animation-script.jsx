import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";


function sketch(p5) {
  let vectors = [];
  let amount = 8000;
  let speed = 1;
  let size = 10;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    
    p5.stroke(200,200,200, 10)
    
    for ( var i = 0; i < amount; i++ ) {
      vectors.push(p5.createVector(p5.random(p5.width), p5.random(p5.height)))
    }
  };

  p5.draw = () => {
    for (const vector of vectors) {
      let randomisation = p5.noise(vector.x/99, vector.y/99) * p5.TAU;
      
      vector.add(p5.cos(randomisation), p5.sin(randomisation))
      
      p5.point(
        p5.constrain(vector.x, 100, p5.width-100),
        p5.constrain(vector.y, 100, p5.height-100)
      )
    }
  }
};

const AnimationBg = () => {
  return <ReactP5Wrapper sketch={sketch} />
}

export default AnimationBg;