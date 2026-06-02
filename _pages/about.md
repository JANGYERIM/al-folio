---
layout: page
title: Visual AI Lab
permalink: /
nav: false
---

<style>
/* ── Lab homepage custom styles ── */

/* Hero section */
.lab-hero {
  text-align: center;
  padding: 3rem 1rem 2.75rem;
}
.lab-hero-badge {
  display: inline-block;
  background: #f0fdf4;
  color: #15803d;
  border: 1px solid #bbf7d0;
  border-radius: 20px;
  padding: 0.3rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}
.lab-hero-title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 0.75rem;
  line-height: 1.15;
}
.lab-hero-tagline {
  font-size: 1.1rem;
  color: #334155;
  max-width: 580px;
  margin: 0 auto 2rem;
  line-height: 1.75;
}
.lab-hero-btns {
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-hero-primary {
  display: inline-block;
  background: #1e293b;
  color: #fff !important;
  padding: 0.7rem 1.75rem;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s;
}
.btn-hero-primary:hover { background: #0f172a; }
.btn-hero-secondary {
  display: inline-block;
  background: transparent;
  color: #1e293b !important;
  padding: 0.68rem 1.75rem;
  border-radius: 8px;
  border: 2px solid #cbd5e1;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: border-color 0.2s, background 0.2s;
}
.btn-hero-secondary:hover { border-color: #94a3b8; background: #f8fafc; }
.lab-divider {
  border: none;
  border-top: 2px solid #e2e8f0;
  margin: 2.5rem 0;
}
.section-heading {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

/* Research area cards */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-bottom: 0.5rem;
}
.research-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
}
.research-card:hover {
  box-shadow: 0 6px 24px rgba(37,99,235,0.09);
  transform: translateY(-2px);
}
.research-card-icon {
  font-size: 2rem;
  margin-bottom: 0.6rem;
}
.research-card h3 {
  color: #1e293b;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}
.research-card .card-sub {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
}
.research-card ul {
  color: #475569;
  font-size: 0.88rem;
  padding-left: 1.1rem;
  margin: 0;
}
.research-card ul li {
  margin-bottom: 0.25rem;
}

/* News section */
.news-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.news-list li {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.93rem;
}
.news-list li:last-child {
  border-bottom: none;
}
.news-date {
  min-width: 90px;
  color: #94a3b8;
  font-size: 0.82rem;
  font-weight: 600;
  white-space: nowrap;
}
.news-badge {
  display: inline-block;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  font-size: 0.73rem;
  font-weight: 700;
  white-space: nowrap;
}
.badge-conf   { background: #dbeafe; color: #1d4ed8; }
.badge-award  { background: #fef9c3; color: #b45309; }
.badge-misc   { background: #f0fdf4; color: #15803d; }

/* Recruiting banner */
.recruiting-banner {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: #fff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  margin-top: 0.5rem;
}
.recruiting-banner h2 {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.recruiting-banner p {
  color: #94a3b8;
  font-size: 0.97rem;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}
.btn-contact {
  display: inline-block;
  background: #2563eb;
  color: #fff !important;
  padding: 0.65rem 1.75rem;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s;
}
.btn-contact:hover { background: #1d4ed8; }
</style>

<div class="lab-hero">
  <div class="lab-hero-badge">✨ Visual AI Lab @ Kyung Hee University</div>
  <h1 class="lab-hero-title">Visual AI Lab</h1>
  <p class="lab-hero-tagline">
    We advance multimodal AI to <strong>see</strong>, <strong>understand</strong>, and <strong>reason</strong> about the visual world — bridging vision, language, audio, and autonomous perception.
  </p>
  <div class="lab-hero-btns">
    <a href="{{ '/contact/' | relative_url }}" class="btn-hero-primary">How to Join</a>
    <a href="{{ '/publications/' | relative_url }}" class="btn-hero-secondary">Publications</a>
  </div>
</div>

<hr class="lab-divider">

<h2 class="section-heading">Research Areas</h2>

<div class="research-grid">

  <div class="research-card">
    <div class="research-card-icon">🎥</div>
    <h3>Multimodal Learning</h3>
    <p class="card-sub">Vision · Language · Audio</p>
    <ul>
      <li>Dense Video Captioning</li>
      <li>Video Question Grounding</li>
      <li>Video Moment Retrieval</li>
      <li>Change Captioning</li>
      <li>Sound Source Localization</li>
    </ul>
  </div>

  <div class="research-card">
    <div class="research-card-icon">🚗</div>
    <h3>Autonomous Driving</h3>
    <p class="card-sub">Perception · Prediction · Safety</p>
    <ul>
      <li>Trajectory Prediction</li>
      <li>3D Object Detection</li>
      <li>Pedestrian Detection</li>
    </ul>
  </div>

  <div class="research-card">
    <div class="research-card-icon">🔗</div>
    <h3>Multi-task Learning</h3>
    <p class="card-sub">Shared Representation · Efficiency</p>
    <ul>
      <li>Shared Representation Learning</li>
      <li>Task-Adaptive Architectures</li>
      <li>Cross-task Knowledge Transfer</li>
    </ul>
  </div>

</div>

<hr class="lab-divider">

<h2 class="section-heading">Latest News</h2>

<ul class="news-list">
  {% assign sorted_news = site.news | sort: "date" | reverse %}
  {% for item in sorted_news limit: 8 %}
  <li>
    <span class="news-date">{{ item.date | date: "%b %Y" }}</span>
    <span>
      {% if item.inline %}
        {{ item.content | strip_html | truncatewords: 25 }}
      {% else %}
        <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
      {% endif %}
    </span>
  </li>
  {% endfor %}
</ul>

<hr class="lab-divider">

<div class="recruiting-banner">
  <h2>We Are Recruiting!</h2>
  <p>
    We are looking for motivated <strong style="color:#fff;">MS / PhD students</strong> and <strong style="color:#fff;">research interns</strong><br>
    who are passionate about computer vision and multimodal AI research.
  </p>
  <a href="mailto:visualai@khu.ac.kr" class="btn-contact">Contact Us</a>
</div>
