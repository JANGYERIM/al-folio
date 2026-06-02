---
layout: page
permalink: /people/
title: People
nav: true
nav_order: 2
---

<style>
/* ── People page styles ── */
.people-section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin: 2.5rem 0 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

/* Professor card */
.professor-card {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 2rem;
  margin-bottom: 1rem;
}
.professor-card img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e2e8f0;
  flex-shrink: 0;
}
.professor-info h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.3rem;
}
.professor-info .prof-title {
  color: #2563eb;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.professor-info .prof-affil {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}
.professor-info p {
  color: #475569;
  font-size: 0.92rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}
.prof-links a {
  display: inline-block;
  margin-right: 0.75rem;
  color: #2563eb;
  font-size: 0.85rem;
  text-decoration: none;
  font-weight: 500;
}
.prof-links a:hover { text-decoration: underline; }

/* Member grid */
.member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.25rem;
  margin-bottom: 0.5rem;
}
.member-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem 1rem;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
}
.member-card:hover {
  box-shadow: 0 4px 16px rgba(37,99,235,0.08);
  transform: translateY(-2px);
}
.member-card img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
  margin-bottom: 0.75rem;
}
.member-card .member-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.2rem;
}
.member-card .member-degree {
  font-size: 0.78rem;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.member-card .member-topic {
  font-size: 0.78rem;
  color: #64748b;
  line-height: 1.4;
}

/* Placeholder avatar */
.avatar-placeholder {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 0.75rem;
  border: 2px solid #e2e8f0;
}
.avatar-placeholder-lg {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  flex-shrink: 0;
  border: 3px solid #e2e8f0;
}

@media (max-width: 640px) {
  .professor-card { flex-direction: column; align-items: center; text-align: center; }
  .prof-links { text-align: center; }
}
</style>

<h2 class="people-section-title">Professor</h2>

<div class="professor-card">
  <div class="avatar-placeholder-lg">👨‍🏫</div>
  <div class="professor-info">
    <h2>Jung Uk Kim</h2>
    <div class="prof-title">Assistant Professor</div>
    <div class="prof-affil">Dept. of Artificial Intelligence, Kyung Hee University</div>
    <p>
      Prof. Jung Uk Kim leads the Visual AI Lab at Kyung Hee University.
      His research spans multimodal learning, autonomous driving perception, and multi-task learning —
      with a focus on building AI systems that can see, understand, and reason about the visual world.
    </p>
    <div class="prof-links">
      <a href="mailto:visualai@khu.ac.kr">✉ Email</a>
      <a href="#">Google Scholar</a>
      <a href="#">CV</a>
    </div>
  </div>
</div>

<h2 class="people-section-title">PhD Students</h2>

<div class="member-grid">

  <div class="member-card">
    <div class="avatar-placeholder">👤</div>
    <div class="member-name">Student Name</div>
    <div class="member-degree">Ph.D. Candidate</div>
    <div class="member-topic">Multimodal Learning</div>
  </div>

  <div class="member-card">
    <div class="avatar-placeholder">👤</div>
    <div class="member-name">Student Name</div>
    <div class="member-degree">Ph.D. Candidate</div>
    <div class="member-topic">Autonomous Driving</div>
  </div>

  <div class="member-card">
    <div class="avatar-placeholder">👤</div>
    <div class="member-name">Student Name</div>
    <div class="member-degree">Ph.D. Student</div>
    <div class="member-topic">Video Understanding</div>
  </div>

</div>

<h2 class="people-section-title">MS Students</h2>

<div class="member-grid">

  <div class="member-card">
    <div class="avatar-placeholder">👤</div>
    <div class="member-name">Student Name</div>
    <div class="member-degree">M.S. Student</div>
    <div class="member-topic">Sound Source Localization</div>
  </div>

  <div class="member-card">
    <div class="avatar-placeholder">👤</div>
    <div class="member-name">Student Name</div>
    <div class="member-degree">M.S. Student</div>
    <div class="member-topic">3D Object Detection</div>
  </div>

  <div class="member-card">
    <div class="avatar-placeholder">👤</div>
    <div class="member-name">Student Name</div>
    <div class="member-degree">M.S. Student</div>
    <div class="member-topic">Trajectory Prediction</div>
  </div>

  <div class="member-card">
    <div class="avatar-placeholder">👤</div>
    <div class="member-name">Student Name</div>
    <div class="member-degree">M.S. Student</div>
    <div class="member-topic">Multi-task Learning</div>
  </div>

</div>

<h2 class="people-section-title">Alumni</h2>

<div class="member-grid">

  <div class="member-card">
    <div class="avatar-placeholder">👤</div>
    <div class="member-name">Alumni Name</div>
    <div class="member-degree">M.S. (2024)</div>
    <div class="member-topic">→ Industry / Academy</div>
  </div>

</div>
