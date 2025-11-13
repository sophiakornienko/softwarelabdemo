let particles = [];

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  c.elt.style.touchAction = 'none'; // prevent page scroll on touch
}

function draw() {
  background("CornflowerBlue");

  // spawn particles at each current touch
  for (const t of touches) {
    // add one (or a small burst) per touch
    particles.push(new Particle(t.x, t.y));
    // for a burst: for (let k=0;k<3;k++) particles.push(new Particle(t.x, t.y));
  }

  // update & draw, remove dead ones
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.move();
    p.render();
    if (p.isDead()) particles.splice(i, 1);
  }
}

// (Optional) If you only want to spawn once per tap (not continuously while holding):
function touchStarted() {
  particles.push(new Particle(mouseX, mouseY));
  return false; // also prevents default
}
