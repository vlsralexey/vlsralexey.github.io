if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.getElementById('mobile-warning').style.display = 'flex';
  document.querySelector('.container').style.display = 'none';
} else {
  document.getElementById('mobile-warning').style.display = 'none';
}

gsap.registerPlugin(ScrollTrigger);
const blocks = gsap.utils.toArray(".block");
gsap.set(blocks[0], { opacity: 1 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

const segment = 1 / blocks.length;

blocks.forEach((block, index) => {
  if (index === 0) {
    tl.to(block, { opacity: 0, duration: segment, ease: "power1.inOut" }, 0);
  } else if (index < blocks.length - 1) {
    tl.to(block, { opacity: 1, duration: segment / 2, ease: "power1.inOut" }, segment * index)
      .to(block, { opacity: 0, duration: segment / 2, ease: "power1.inOut" }, segment * index + segment / 2);
  } else {
    tl.to(block, { opacity: 1, duration: segment / 2, ease: "power1.inOut" }, segment * index);
  }
});