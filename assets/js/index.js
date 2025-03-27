// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});



AOS.init();


document.querySelectorAll('.whatido-image img:nth-child(1)').forEach(box => {
  box.addEventListener('mouseenter', () => {
    document.querySelectorAll('.whatido-image img:nth-child(2)').forEach(sibling => {
      if (sibling !== box) {
        sibling.style.opacity = '0';
      }
    });

  });

  box.addEventListener('mouseleave', () => {
    document.querySelectorAll('.whatido-image img:nth-child(2)').forEach(sibling => {
      sibling.style.opacity = '1';
    });

  });
});