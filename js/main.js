/* ============================================================
   VIVANTO — shared behaviour
   Language state lives in the URL (?lang=it|en) rather than any
   browser storage, so it survives page-to-page navigation even
   inside sandboxed previews.
   ============================================================ */
(function(){
  "use strict";

  var params = new URLSearchParams(window.location.search);
  var lang = params.get('lang') === 'en' ? 'en' : 'it';

  function applyLang(l){
    lang = l;
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.setAttribute('lang', l === 'en' ? 'en' : 'it');
    document.querySelectorAll('.lang-switch button').forEach(function(b){
      b.classList.toggle('is-active', b.dataset.lang === l);
    });
    // carry the chosen language across internal links
    document.querySelectorAll('a[href$=".html"], a[href*=".html#"], a[href*=".html?"]').forEach(function(a){
      try{
        var url = new URL(a.getAttribute('href'), window.location.href);
        var qs = new URLSearchParams();
        qs.set('lang', l);
        a.setAttribute('href', url.pathname.split('/').pop() + '?' + qs.toString() + (url.hash || ''));
      }catch(e){ /* ignore malformed */ }
    });
    var newUrl = window.location.pathname + '?lang=' + l + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }

  document.addEventListener('DOMContentLoaded', function(){
    applyLang(lang);

    document.querySelectorAll('.lang-switch button').forEach(function(b){
      b.addEventListener('click', function(){ applyLang(b.dataset.lang); });
    });

    /* ---------------- header solid-on-scroll ---------------- */
    var header = document.querySelector('.site-header');
    function onScroll(){
      if(!header) return;
      if(window.scrollY > 60){ header.classList.add('is-solid'); }
      else{ header.classList.remove('is-solid'); }
      var toTop = document.querySelector('.to-top');
      if(toTop){ toTop.classList.toggle('show', window.scrollY > 700); }
    }
    document.addEventListener('scroll', onScroll, { passive:true });
    onScroll();

    /* ---------------- mobile nav ---------------- */
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    var scrim = document.querySelector('.nav-scrim');
    function closeNav(){ document.body.classList.remove('nav-open'); if(nav) nav.classList.remove('is-open'); }
    if(navToggle && nav){
      navToggle.addEventListener('click', function(){
        var open = document.body.classList.toggle('nav-open');
        nav.classList.toggle('is-open', open);
      });
    }
    if(scrim){ scrim.addEventListener('click', closeNav); }
    document.querySelectorAll('.main-nav a').forEach(function(a){ a.addEventListener('click', closeNav); });

    /* ---------------- scroll reveal ---------------- */
    var revealEls = document.querySelectorAll('[data-reveal]');
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold:0.16, rootMargin:'0px 0px -6% 0px' });
      revealEls.forEach(function(el){ io.observe(el); });
    } else {
      revealEls.forEach(function(el){ el.classList.add('is-visible'); });
    }
    // stagger children automatically inside [data-reveal-group]
    document.querySelectorAll('[data-reveal-group]').forEach(function(group){
      Array.prototype.forEach.call(group.children, function(child, i){
        child.style.setProperty('--rd', i);
      });
    });

    /* ---------------- hero parallax ---------------- */
    var parallaxEls = document.querySelectorAll('.parallax-img');
    function onParallax(){
      parallaxEls.forEach(function(el){
        var rect = el.parentElement.getBoundingClientRect();
        var speed = parseFloat(el.dataset.speed || 0.25);
        var offset = rect.top * speed;
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0) scale(1.12)';
      });
    }
    if(parallaxEls.length){
      document.addEventListener('scroll', onParallax, { passive:true });
      window.addEventListener('resize', onParallax);
      onParallax();
    }

    /* ---------------- locations: scroll-driven sequence ----------------
       Pure function of scroll position — no autoplay. The wrapper is tall
       (N * viewport height) and the stage pins via position:sticky; as the
       user scrolls through that tall wrapper we compute how far through it
       we are and swap which slide carries .is-active accordingly. */
    var locWrap = document.querySelector('.loc-stage-wrap');
    if(locWrap){
      var locSlides = locWrap.querySelectorAll('.loc-slide');
      var locDots = locWrap.querySelectorAll('.loc-dot');
      var locCurrent = 0;
      function setLocActive(idx){
        if(idx === locCurrent) return;
        locCurrent = idx;
        locSlides.forEach(function(s){ s.classList.toggle('is-active', +s.dataset.i === idx); });
        locDots.forEach(function(d){ d.classList.toggle('is-active', +d.dataset.i === idx); });
      }
      function onLocScroll(){
        var rect = locWrap.getBoundingClientRect();
        var total = rect.height - window.innerHeight;
        if(total <= 0) return;
        var scrolled = -rect.top;
        var progress = Math.min(1, Math.max(0, scrolled / total));
        var idx = Math.min(locSlides.length - 1, Math.floor(progress * locSlides.length));
        setLocActive(idx);
      }
      document.addEventListener('scroll', onLocScroll, { passive:true });
      window.addEventListener('resize', onLocScroll);
      onLocScroll();
      locDots.forEach(function(dot){
        dot.addEventListener('click', function(){
          var idx = +dot.dataset.i;
          var rect = locWrap.getBoundingClientRect();
          var total = rect.height - window.innerHeight;
          var targetProgress = (idx + 0.5) / locSlides.length;
          var targetY = window.scrollY + rect.top + targetProgress * total;
          window.scrollTo({ top: targetY, behavior:'smooth' });
        });
      });
    }

    /* ---------------- page curtain intro ---------------- */
    var curtain = document.querySelector('.curtain');
    if(curtain){
      window.setTimeout(function(){ curtain.classList.add('hide'); }, 500);
    }

    /* ---------------- back to top ---------------- */
    var toTopBtn = document.querySelector('.to-top');
    if(toTopBtn){
      toTopBtn.addEventListener('click', function(){ window.scrollTo({ top:0, behavior:'smooth' }); });
    }

    /* ---------------- counters ---------------- */
    var counters = document.querySelectorAll('[data-count]');
    if(counters.length && 'IntersectionObserver' in window){
      var cio = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(!entry.isIntersecting) return;
          var el = entry.target;
          cio.unobserve(el);
          var target = parseFloat(el.dataset.count);
          var suffix = el.dataset.suffix || '';
          var decimals = (el.dataset.count.split('.')[1] || '').length;
          var start = 0, dur = 1600, t0 = null;
          function step(ts){
            if(!t0) t0 = ts;
            var p = Math.min(1, (ts - t0) / dur);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (start + (target - start) * eased).toFixed(decimals) + suffix;
            if(p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }, { threshold:0.6 });
      counters.forEach(function(c){ cio.observe(c); });
    }

    /* ---------------- simple form feedback (no backend) ---------------- */
    document.querySelectorAll('form[data-inquiry]').forEach(function(f){
      f.addEventListener('submit', function(e){
        e.preventDefault();
        var note = f.querySelector('.form-note');
        if(note){
          note.classList.add('show');
        }
        f.reset();
      });
    });
  });
})();
