document.querySelectorAll('.present-hitbox').forEach(hitbox => {
    const wrapper = hitbox.closest('.present-wrapper');
    const visual = wrapper.querySelector('.present-visual');
    const color = hitbox.dataset.color;

    const normalSrc = `assets/${color}-present.png`;
    const hoverSrc = `assets/${color}-present-hover.png`;

    hitbox.addEventListener('mouseenter', () => {
        visual.src = hoverSrc;
    });

    hitbox.addEventListener('mouseleave', () => {
        visual.src = normalSrc;
    });
});

// ---

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 900;
const VISUAL_SCALE = 0.9; // tu decisión estética

function scaleScene() {
  const scaleX = window.innerWidth / BASE_WIDTH;
  const scaleY = window.innerHeight / BASE_HEIGHT;

  const scale = Math.min(scaleX, scaleY) * VISUAL_SCALE;

  const scene = document.querySelector('.scene');
  scene.style.transform = `
    translate(-50%, -50%)
    scale(${scale})
  `;
}

window.addEventListener('resize', scaleScene);
scaleScene();

// ---
document.querySelectorAll('.present-hitbox').forEach(hitbox => {
  const wrapper = hitbox.closest('.present-wrapper');
  const visual = wrapper.querySelector('.present-visual');
  const color = hitbox.dataset.color;

  const normalSrc = `assets/${color}-present.png`;
  const hoverSrc  = `assets/${color}-present-hover.png`;

  hitbox.addEventListener('mouseenter', () => {
    visual.src = hoverSrc;
  });

  hitbox.addEventListener('mouseleave', () => {
    visual.src = normalSrc;
  });
});

const overlay = document.querySelector('.overlay');

const contents = {
  green: document.querySelector('.green-present-content'),
  pink:  document.querySelector('.pink-present-content'),
  blue:  document.querySelector('.blue-present-content'),
};

function closeAll() {
  Object.values(contents).forEach(content => {
    content.classList.remove('present-content-show');
  });
  overlay.classList.remove('overlay-show');
}

document.querySelectorAll('.present-hitbox').forEach(hitbox => {
  const color = hitbox.dataset.color;
  const content = contents[color];

  hitbox.addEventListener('click', () => {

    closeAll();

    content.classList.add('present-content-show');
    overlay.classList.add('overlay-show');
  });
});

Object.values(contents).forEach(content => {
  content.addEventListener('click', closeAll);
});

overlay.addEventListener('click', closeAll);
