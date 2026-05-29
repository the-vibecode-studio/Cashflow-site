// Minimal interaction: mobile nav, smooth scroll, active nav, reveal on scroll
(function(){
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const yearEl = document.getElementById('year');
  const showcaseTrack = document.querySelector('.showcase-track');
  const showcaseSlides = showcaseTrack ? Array.from(showcaseTrack.querySelectorAll('.showcase-slide')) : [];
  const showcaseDots = Array.from(document.querySelectorAll('.showcase-dot'));
  const showcasePrev = document.querySelector('.showcase-nav-prev');
  const showcaseNext = document.querySelector('.showcase-nav-next');

  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.style.display = expanded ? '' : 'flex';
      primaryNav.style.flexDirection = 'column';
      primaryNav.style.gap = '12px';
    });
  }

  // Smooth anchor scroll with respect for reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(!href || href === '#') return;
      if(href.startsWith('#')){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
          if(prefersReduced) window.scrollTo(0, top);
          else window.scrollTo({top,behavior:'smooth'});
          // close mobile nav if open
          if(navToggle && navToggle.getAttribute('aria-expanded') === 'true'){
            navToggle.click();
          }
        }
      }
    });
  });

  // Active nav while scrolling
  const navLinks = Array.from(document.querySelectorAll('.nav-list a'));
  const sections = navLinks.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  function onScroll(){
    const pos = window.pageYOffset + 100;
    let current = sections[0];
    for(const s of sections){
      if(s.offsetTop <= pos) current = s;
    }
    navLinks.forEach(l=>{
      l.classList.toggle('active', l.getAttribute('href') === ('#' + current.id));
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Reveal on scroll using IntersectionObserver
  const reveals = document.querySelectorAll('.feature-card, .screen-card, .testimonial, .hero-copy');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      for(const e of entries){
        if(e.isIntersecting){
          e.target.classList.add('reveal');
          obs.unobserve(e.target);
        }
      }
    },{threshold:0.12});
    reveals.forEach(r=>obs.observe(r));
  } else {
    reveals.forEach(r=>r.classList.add('reveal'));
  }

  // Showcase carousel
  if(showcaseTrack && showcaseSlides.length){
    let currentIndex = 0;
    let slideWidth = showcaseSlides[0].getBoundingClientRect().width;
    let slideGap = 18;

    function updateCarouselMetrics(){
      const firstSlide = showcaseSlides[0];
      if(!firstSlide) return;
      slideWidth = firstSlide.getBoundingClientRect().width;
      const secondSlide = showcaseSlides[1];
      slideGap = secondSlide ? Math.max(0, secondSlide.offsetLeft - firstSlide.offsetLeft - slideWidth) : 18;
    }

    function setActiveSlide(index){
      currentIndex = Math.max(0, Math.min(index, showcaseSlides.length - 1));
      showcaseDots.forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === currentIndex);
        dot.setAttribute('aria-current', dotIndex === currentIndex ? 'true' : 'false');
      });
      if(showcasePrev) showcasePrev.disabled = currentIndex === 0;
      if(showcaseNext) showcaseNext.disabled = currentIndex === showcaseSlides.length - 1;
    }

    function scrollToSlide(index){
      updateCarouselMetrics();
      setActiveSlide(index);
      const left = currentIndex * (slideWidth + slideGap);
      if(prefersReduced) showcaseTrack.scrollLeft = left;
      else showcaseTrack.scrollTo({left, behavior:'smooth'});
    }

    if(showcasePrev){
      showcasePrev.addEventListener('click', () => {
        scrollToSlide(currentIndex - 1);
      });
    }

    if(showcaseNext){
      showcaseNext.addEventListener('click', () => {
        scrollToSlide(currentIndex + 1);
      });
    }

    showcaseDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        scrollToSlide(index);
      });
    });

    let scrollTimer;
    showcaseTrack.addEventListener('scroll', () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        updateCarouselMetrics();
        const step = Math.max(1, slideWidth + slideGap);
        const index = Math.round(showcaseTrack.scrollLeft / step);
        setActiveSlide(index);
      }, 60);
    }, {passive:true});

    window.addEventListener('resize', () => {
      scrollToSlide(currentIndex);
    });

    updateCarouselMetrics();
    setActiveSlide(0);
  }

})();
