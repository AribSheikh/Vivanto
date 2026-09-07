'use client';

/* ============================================================
   VIVANTO — shared behaviour (ported from the static site's js/main.js)
   Renders the page-wide chrome (curtain, nav scrim, back-to-top) and
   wires up all the same DOM-driven interactions the static site used:
   language toggle, header-solid-on-scroll, mobile nav, scroll reveal,
   hero parallax, the locations scroll sequence, counters, and the
   client-only fake form submit. Runs once per full page load, exactly
   like the original script tag did.
   ============================================================ */

import { useEffect } from 'react';

export default function GlobalEffects() {
  useEffect(() => {
    var params = new URLSearchParams(window.location.search);
    var lang = params.get('lang') === 'en' ? 'en' : 'it';

    function applyLang(l) {
      lang = l;
      document.documentElement.setAttribute('data-lang', l);
      document.documentElement.setAttribute('lang', l === 'en' ? 'en' : 'it');
      document.querySelectorAll('.lang-switch button').forEach(function (b) {
        b.classList.toggle('is-active', b.dataset.lang === l);
      });
      // carry the chosen language across internal links (clean Next.js routes, no .html)
      document.querySelectorAll('a[href]').forEach(function (a) {
        var href = a.getAttribute('href');
        if (!href || href.charAt(0) !== '/') return; // only internal, path-rooted links
        try {
          var url = new URL(href, window.location.href);
          var qs = new URLSearchParams(url.search);
          qs.set('lang', l);
          a.setAttribute('href', url.pathname + '?' + qs.toString() + (url.hash || ''));
        } catch (e) {
          /* ignore malformed */
        }
      });
      var newUrl = window.location.pathname + '?lang=' + l + window.location.hash;
      window.history.replaceState(null, '', newUrl);
    }

    applyLang(lang);

    var langButtons = document.querySelectorAll('.lang-switch button');
    function onLangClick(e) {
      applyLang(e.currentTarget.dataset.lang);
    }
    langButtons.forEach(function (b) {
      b.addEventListener('click', onLangClick);
    });

    /* ---------------- header solid-on-scroll ---------------- */
    var header = document.querySelector('.site-header');
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
      var toTop = document.querySelector('.to-top');
      if (toTop) {
        toTop.classList.toggle('show', window.scrollY > 700);
      }
    }
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------------- mobile nav ---------------- */
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    var scrim = document.querySelector('.nav-scrim');
    function closeNav() {
      document.body.classList.remove('nav-open');
      if (nav) nav.classList.remove('is-open');
    }
    function onNavToggleClick() {
      var open = document.body.classList.toggle('nav-open');
      if (nav) nav.classList.toggle('is-open', open);
    }
    if (navToggle && nav) {
      navToggle.addEventListener('click', onNavToggleClick);
    }
    if (scrim) scrim.addEventListener('click', closeNav);
    var navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    /* ---------------- scroll reveal ---------------- */
    var revealEls = document.querySelectorAll('[data-reveal]');
    var io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: '0px 0px -6% 0px' }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
    // stagger children automatically inside [data-reveal-group]
    document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.style.setProperty('--rd', i);
      });
    });

    /* ---------------- hero parallax ---------------- */
    var parallaxEls = document.querySelectorAll('.parallax-img');
    function onParallax() {
      parallaxEls.forEach(function (el) {
        var rect = el.parentElement.getBoundingClientRect();
        var speed = parseFloat(el.dataset.speed || 0.25);
        var offset = rect.top * speed;
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0) scale(1.12)';
      });
    }
    if (parallaxEls.length) {
      document.addEventListener('scroll', onParallax, { passive: true });
      window.addEventListener('resize', onParallax);
      onParallax();
    }

    /* ---------------- locations: scroll-driven sequence ---------------- */
    var locWrap = document.querySelector('.loc-stage-wrap');
    var locDots = [];
    var onLocDotClick = [];
    function onLocScroll() {}
    if (locWrap) {
      var locSlides = locWrap.querySelectorAll('.loc-slide');
      locDots = locWrap.querySelectorAll('.loc-dot');
      var locCurrent = 0;
      var setLocActive = function (idx) {
        if (idx === locCurrent) return;
        locCurrent = idx;
        locSlides.forEach(function (s) {
          s.classList.toggle('is-active', +s.dataset.i === idx);
        });
        locDots.forEach(function (d) {
          d.classList.toggle('is-active', +d.dataset.i === idx);
        });
      };
      onLocScroll = function () {
        var rect = locWrap.getBoundingClientRect();
        var total = rect.height - window.innerHeight;
        if (total <= 0) return;
        var scrolled = -rect.top;
        var progress = Math.min(1, Math.max(0, scrolled / total));
        var idx = Math.min(locSlides.length - 1, Math.floor(progress * locSlides.length));
        setLocActive(idx);
      };
      document.addEventListener('scroll', onLocScroll, { passive: true });
      window.addEventListener('resize', onLocScroll);
      onLocScroll();
      locDots.forEach(function (dot) {
        var handler = function () {
          var idx = +dot.dataset.i;
          var rect = locWrap.getBoundingClientRect();
          var total = rect.height - window.innerHeight;
          var targetProgress = (idx + 0.5) / locSlides.length;
          var targetY = window.scrollY + rect.top + targetProgress * total;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        };
        onLocDotClick.push(handler);
        dot.addEventListener('click', handler);
      });
    }

    /* ---------------- page curtain intro ---------------- */
    var curtain = document.querySelector('.curtain');
    var curtainTimeout;
    if (curtain) {
      curtainTimeout = window.setTimeout(function () {
        curtain.classList.add('hide');
      }, 500);
    }

    /* ---------------- back to top ---------------- */
    var toTopBtn = document.querySelector('.to-top');
    function onToTopClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (toTopBtn) toTopBtn.addEventListener('click', onToTopClick);

    /* ---------------- counters ---------------- */
    var counters = document.querySelectorAll('[data-count]');
    var cio;
    if (counters.length && 'IntersectionObserver' in window) {
      cio = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            cio.unobserve(el);
            var target = parseFloat(el.dataset.count);
            var suffix = el.dataset.suffix || '';
            var decimals = (el.dataset.count.split('.')[1] || '').length;
            var start = 0,
              dur = 1600,
              t0 = null;
            function step(ts) {
              if (!t0) t0 = ts;
              var p = Math.min(1, (ts - t0) / dur);
              var eased = 1 - Math.pow(1 - p, 3);
              el.textContent = (start + (target - start) * eased).toFixed(decimals) + suffix;
              if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach(function (c) {
        cio.observe(c);
      });
    }

    /* ---------------- simple form feedback (no backend) ---------------- */
    var forms = document.querySelectorAll('form[data-inquiry]');
    function onFormSubmit(e) {
      e.preventDefault();
      var f = e.currentTarget;
      var note = f.querySelector('.form-note');
      if (note) note.classList.add('show');
      f.reset();
    }
    forms.forEach(function (f) {
      f.addEventListener('submit', onFormSubmit);
    });

    return function cleanup() {
      langButtons.forEach(function (b) {
        b.removeEventListener('click', onLangClick);
      });
      document.removeEventListener('scroll', onScroll);
      if (navToggle) navToggle.removeEventListener('click', onNavToggleClick);
      if (scrim) scrim.removeEventListener('click', closeNav);
      navLinks.forEach(function (a) {
        a.removeEventListener('click', closeNav);
      });
      if (io) io.disconnect();
      if (parallaxEls.length) {
        document.removeEventListener('scroll', onParallax);
        window.removeEventListener('resize', onParallax);
      }
      if (locWrap) {
        document.removeEventListener('scroll', onLocScroll);
        window.removeEventListener('resize', onLocScroll);
        locDots.forEach(function (dot, i) {
          dot.removeEventListener('click', onLocDotClick[i]);
        });
      }
      window.clearTimeout(curtainTimeout);
      if (toTopBtn) toTopBtn.removeEventListener('click', onToTopClick);
      if (cio) cio.disconnect();
      forms.forEach(function (f) {
        f.removeEventListener('submit', onFormSubmit);
      });
    };
  }, []);

  return (
    <>
      <div className="curtain">
        <img src="/img/logo-trim.png" alt="Vivanto" />
      </div>
      <div className="nav-scrim"></div>
      <button className="to-top" aria-label="Back to top">
        ↑
      </button>
    </>
  );
}
