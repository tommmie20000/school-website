    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let stars = [];
    const STAR_COUNT = 400;

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.5 + 0.5 });
      }
    }

    function drawStars() {
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = 'white';
      ctx.beginPath();
      for (let s of stars) {
        ctx.moveTo(s.x,s.y);
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      }
      ctx.fill();
      updateStars();
    }

    function updateStars() {
      for (let s of stars) {
        s.y += 0.3;
        if (s.y > h) { s.x = Math.random()*w; s.y=0; }
      }
    }

    function animate() {
      drawStars();
      requestAnimationFrame(animate);
    }

    initStars();
    animate();

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initStars();
    });