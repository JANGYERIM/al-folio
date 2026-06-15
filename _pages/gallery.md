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

    <!-- ── Post Cards Grid ── -->
    <div class="gallery-grid">

      {% for post in site.data.gallery %}
      <div class="gallery-item {{ post.category }}" data-aos="fade-up">
        <div class="gallery-card" data-post="{{ forloop.index0 }}">
          <div class="gallery-thumb">
            <img src="{{ post.cover | relative_url }}" alt="{{ post.title }}" loading="lazy">
            <div class="gallery-overlay">
              <span class="gallery-photo-count"><i class="bi bi-images"></i> {{ post.images | size }} photos</span>
              <button class="gallery-view-btn">View Post</button>
            </div>
            <span class="gallery-tag">{{ post.category | capitalize }}</span>
          </div>
          <div class="gallery-card-info">
            <h4>{{ post.title }}</h4>
          </div>
        </div>
      </div>
      {% endfor %}

      {% if site.data.gallery.size == 0 %}
      <div class="gallery-empty">
        <i class="bi bi-images"></i>
        <p>No posts yet.</p>
      </div>
      {% endif %}

    </div><!-- end gallery-grid -->

  </div>

</section>

<!-- ── Lightbox ── -->
<div class="gallery-lightbox" id="galleryLightbox">
  <div class="lightbox-header">
    <span class="lightbox-title" id="lightboxTitle"></span>
    <span class="lightbox-counter" id="lightboxCounter"></span>
    <button class="lightbox-close" id="lightboxClose"><i class="bi bi-x-lg"></i></button>
  </div>
  <button class="lightbox-prev" id="lightboxPrev"><i class="bi bi-chevron-left"></i></button>
  <button class="lightbox-next" id="lightboxNext"><i class="bi bi-chevron-right"></i></button>
  <div class="lightbox-img-wrap">
    <img src="" alt="" id="lightboxImg">
  </div>
  <div class="lightbox-dots" id="lightboxDots"></div>
</div>

<!-- Post data for JS -->
<script>
var GALLERY_POSTS = [
  {% for post in site.data.gallery %}
  {
    title: {{ post.title | jsonify }},
    category: {{ post.category | jsonify }},
    images: [{% for img in post.images %}{{ img | relative_url | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %}]
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
</script>

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
        item.style.display = (filter === '*' || item.classList.contains(filter)) ? '' : 'none';
        item.classList.add('aos-animate');
      });
    });
  });

  /* ── Lightbox ── */
  var lightbox   = document.getElementById('galleryLightbox');
  var lbImg      = document.getElementById('lightboxImg');
  var lbTitle    = document.getElementById('lightboxTitle');
  var lbCounter  = document.getElementById('lightboxCounter');
  var lbDots     = document.getElementById('lightboxDots');
  var lbClose    = document.getElementById('lightboxClose');
  var lbPrev     = document.getElementById('lightboxPrev');
  var lbNext     = document.getElementById('lightboxNext');
  var currentPost = null;
  var currentIdx  = 0;

  function renderDots(total, active) {
    lbDots.innerHTML = '';
    for (var i = 0; i < total; i++) {
      var d = document.createElement('span');
      d.className = 'lb-dot' + (i === active ? ' active' : '');
      (function(idx) { d.addEventListener('click', function() { goTo(idx); }); })(i);
      lbDots.appendChild(d);
    }
  }

  function goTo(idx) {
    currentIdx = idx;
    lbImg.src = currentPost.images[currentIdx];
    lbCounter.textContent = (currentIdx + 1) + ' / ' + currentPost.images.length;
    renderDots(currentPost.images.length, currentIdx);
  }

  function openPost(postIdx) {
    currentPost = GALLERY_POSTS[postIdx];
    currentIdx  = 0;
    lbTitle.textContent = currentPost.title;
    goTo(0);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('.gallery-card').forEach(function (card) {
    card.addEventListener('click', function () {
      openPost(parseInt(this.getAttribute('data-post')));
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  lbPrev.addEventListener('click', function () {
    goTo((currentIdx - 1 + currentPost.images.length) % currentPost.images.length);
  });

  lbNext.addEventListener('click', function () {
    goTo((currentIdx + 1) % currentPost.images.length);
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  lbPrev.click();
    if (e.key === 'ArrowRight') lbNext.click();
  });
})();
</script>
