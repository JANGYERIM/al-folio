---
layout: page
title: Professor
permalink: /professor/
nav: false
---

<style>
.people-section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  margin: 2.5rem 0 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}
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
