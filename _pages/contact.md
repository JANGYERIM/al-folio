---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 4
---

<style>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}
@media (max-width: 640px) {
  .contact-grid { grid-template-columns: 1fr; }
}
.contact-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}
.contact-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}
.contact-card p, .contact-card a {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.7;
}
.contact-card a {
  color: #2563eb;
  text-decoration: none;
}
.contact-card a:hover { text-decoration: underline; }

.apply-section {
  background: #f0f7ff;
  border: 1px solid #bfdbfe;
  border-radius: 14px;
  padding: 2rem;
  margin-bottom: 2rem;
}
.apply-section h2 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.75rem;
}
.apply-section p {
  color: #1e3a8a;
  font-size: 0.93rem;
  line-height: 1.75;
  margin-bottom: 1rem;
}
.apply-section ul {
  color: #1e3a8a;
  font-size: 0.92rem;
  padding-left: 1.2rem;
  margin-bottom: 1rem;
}
.apply-section ul li { margin-bottom: 0.3rem; }
.btn-apply {
  display: inline-block;
  background: #2563eb;
  color: #fff !important;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.btn-apply:hover { background: #1d4ed8; }
</style>

<div class="contact-grid">

  <div class="contact-card">
    <h3>📍 Location</h3>
    <p>
      Electronic Information College, Room 325-3<br>
      Kyung Hee University<br>
      Yongin-si, Gyeonggi-do, South Korea
    </p>
  </div>

  <div class="contact-card">
    <h3>✉ Email</h3>
    <p>
      General inquiries:<br>
      <a href="mailto:visualai@khu.ac.kr">visualai@khu.ac.kr</a>
    </p>
    <p style="margin-top:0.5rem;">
      Prof. Jung Uk Kim:<br>
      <a href="mailto:visualai@khu.ac.kr">visualai@khu.ac.kr</a>
    </p>
  </div>

</div>

<div class="apply-section">
  <h2>Prospective Students & Interns</h2>
  <p>
    We are always looking for highly motivated students and researchers to join our lab.
    If you are interested in computer vision, multimodal AI, or autonomous driving research, we would love to hear from you.
  </p>
  <ul>
    <li><strong>MS / PhD applicants</strong> — Send your CV, transcripts, and a brief research statement.</li>
    <li><strong>Research interns</strong> — Send your CV and a description of your research interests.</li>
    <li><strong>Undergraduate researchers</strong> — We welcome motivated undergraduates for research opportunities.</li>
  </ul>
  <a href="mailto:visualai@khu.ac.kr" class="btn-apply">Send Application</a>
</div>
