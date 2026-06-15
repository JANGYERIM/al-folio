---
layout: home
title: Gallery
permalink: /gallery/
nav: true
nav_order: 6
---

<section class="gallery-section section">

  <div class="lab-container section-title" data-aos="fade-up">
    <h2>Gallery</h2>
    <div><span>Lab</span> <span class="description-title">Moments</span></div>
  </div>

  <div class="lab-container">

    <!-- ── Filter Tabs ── -->
    <ul class="gallery-filters" data-aos="fade-up">
      <li class="filter-active" data-filter="*">All</li>
      <li data-filter="daily">Daily</li>
      <li data-filter="study">Study</li>
    </ul>

    <!-- ── Image Grid ── -->
    <div class="gallery-grid">

      {% assign daily_images = site.static_files | where_exp: "file", "file.path contains '/assets/img/gallery/daily/'" %}
      {% assign study_images = site.static_files | where_exp: "file", "file.path contains '/assets/img/gallery/study/'" %}

      {% for image in daily_images %}
        {% unless image.name == '.gitkeep' %}
        <div class="gallery-item daily" data-aos="fade-up">
          <div class="gallery-thumb">
            <img src="{{ image.path | relative_url }}" alt="Daily {{ forloop.index }}" loading="lazy">
            <div class="gallery-overlay">
              <button class="gallery-zoom-btn" data-src="{{ image.path | relative_url }}" data-alt="Daily {{ forloop.index }}">
                <i class="bi bi-arrows-fullscreen"></i>
              </button>
            </div>
            <span class="gallery-tag">Daily</span>
          </div>
        </div>
        {% endunless %}
      {% endfor %}

      {% for image in study_images %}
        {% unless image.name == '.gitkeep' %}
        <div class="gallery-item study" data-aos="fade-up">
          <div class="gallery-thumb">
            <img src="{{ image.path | relative_url }}" alt="Study {{ forloop.index }}" loading="lazy">
            <div class="gallery-overlay">
              <button class="gallery-zoom-btn" data-src="{{ image.path | relative_url }}" data-alt="Study {{ forloop.index }}">
                <i class="bi bi-arrows-fullscreen"></i>
              </button>
            </div>
            <span class="gallery-tag">Study</span>
          </div>
        </div>
        {% endunless %}
      {% endfor %}

      {% assign total_daily = daily_images | size %}
      {% assign total_study = study_images | size %}
      {% assign total = total_daily | plus: total_study %}
      {% if total == 0 %}
      <div class="gallery-empty">
        <i class="bi bi-images"></i>
        <p>Images coming soon.</p>
      </div>
      {% endif %}

    </div><!-- end gallery-grid -->

  </div>

</section>

<!-- ── Lightbox ── -->
<div class="gallery-lightbox" id="galleryLightbox">
  <button class="lightbox-close" id="lightboxClose"><i class="bi bi-x-lg"></i></button>
  <button class="lightbox-prev" id="lightboxPrev"><i class="bi bi-chevron-left"></i></button>
  <button class="lightbox-next" id="lightboxNext"><i class="bi bi-chevron-right"></i></button>
  <div class="lightbox-img-wrap">
    <img src="" alt="" id="lightboxImg">
  </div>
</div>

<script>
(function () {
  /* ── Filter ── */
  var filters = document.querySelectorAll('.gallery-filters li');
  var items   = document.querySelectorAll('.gallery-item');

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelector('.gallery-filters .filter-active').classList.remove('filter-active');
      this.classList.add('filter-active');
      var filter = this.getAttribute('data-filter');
      items.forEach(function (item) {
        if (filter === '*') {
          item.style.display = '';
        } else {
          item.style.display = item.classList.contains(filter) ? '' : 'none';
        }
        item.classList.add('aos-animate');
      });
    });
  });

  /* ── Lightbox ── */
  var lightbox  = document.getElementById('galleryLightbox');
  var lbImg     = document.getElementById('lightboxImg');
  var lbClose   = document.getElementById('lightboxClose');
  var lbPrev    = document.getElementById('lightboxPrev');
  var lbNext    = document.getElementById('lightboxNext');
  var visibleSrcs = [];
  var currentIdx  = 0;

  function getVisible() {
    return Array.from(document.querySelectorAll('.gallery-item'))
      .filter(function (el) { return el.style.display !== 'none'; })
      .map(function (el) {
        var btn = el.querySelector('.gallery-zoom-btn');
        return { src: btn.getAttribute('data-src'), alt: btn.getAttribute('data-alt') };
      });
  }

  function openLightbox(idx) {
    visibleSrcs = getVisible();
    currentIdx  = idx;
    lbImg.src   = visibleSrcs[currentIdx].src;
    lbImg.alt   = visibleSrcs[currentIdx].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('.gallery-zoom-btn').forEach(function (btn, idx) {
    btn.addEventListener('click', function () { openLightbox(idx); });
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  lbPrev.addEventListener('click', function () {
    currentIdx = (currentIdx - 1 + visibleSrcs.length) % visibleSrcs.length;
    lbImg.src = visibleSrcs[currentIdx].src;
    lbImg.alt = visibleSrcs[currentIdx].alt;
  });

  lbNext.addEventListener('click', function () {
    currentIdx = (currentIdx + 1) % visibleSrcs.length;
    lbImg.src = visibleSrcs[currentIdx].src;
    lbImg.alt = visibleSrcs[currentIdx].alt;
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   lbPrev.click();
    if (e.key === 'ArrowRight')  lbNext.click();
  });
})();
</script>
