---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 3
---

<style>
/* ── Research page styles ── */
.research-section {
  margin-bottom: 3rem;
}
.research-section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
}
.research-section-header .icon {
  font-size: 1.8rem;
}
.research-section-header h2 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
.research-section p.description {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

/* Topic cards inside each research area */
.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
.topic-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #2563eb;
  border-radius: 8px;
  padding: 1rem 1.1rem;
  transition: box-shadow 0.2s;
}
.topic-card:hover {
  box-shadow: 0 3px 12px rgba(37,99,235,0.08);
}
.topic-card h4 {
  font-size: 0.92rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.3rem;
}
.topic-card p {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* Alternating accent colors */
.accent-blue  .topic-card { border-left-color: #2563eb; }
.accent-green .topic-card { border-left-color: #16a34a; }
.accent-amber .topic-card { border-left-color: #d97706; }
</style>

<div class="research-section accent-blue">
  <div class="research-section-header">
    <span class="icon">🎥</span>
    <h2>Multimodal Learning</h2>
  </div>
  <p class="description">
    We study the intersection of vision, language, and audio — building models that can jointly reason across multiple modalities.
    Our work includes understanding and generating descriptions of video content, localizing events in time, and grounding language in visual scenes.
  </p>

  <h3 style="font-size:1rem; color:#475569; margin-bottom:0.75rem;">Image / Video – Text</h3>
  <div class="topic-grid" style="margin-bottom:1.25rem;">
    <div class="topic-card">
      <h4>Dense Video Captioning</h4>
      <p>Generating natural language descriptions for all events within an untrimmed video.</p>
    </div>
    <div class="topic-card">
      <h4>Video Question Grounding</h4>
      <p>Localizing the temporal evidence in video that answers a natural language question.</p>
    </div>
    <div class="topic-card">
      <h4>Video Moment Retrieval</h4>
      <p>Retrieving the most relevant temporal segment from a video given a text query.</p>
    </div>
    <div class="topic-card">
      <h4>Change Captioning</h4>
      <p>Describing semantic changes between two images or video frames in natural language.</p>
    </div>
  </div>

  <h3 style="font-size:1rem; color:#475569; margin-bottom:0.75rem;">Image / Video – Audio</h3>
  <div class="topic-grid">
    <div class="topic-card">
      <h4>Sound Source Localization</h4>
      <p>Identifying and spatially localizing objects in a scene that produce audio signals.</p>
    </div>
  </div>
</div>

<div class="research-section accent-green">
  <div class="research-section-header">
    <span class="icon">🚗</span>
    <h2>Autonomous Driving</h2>
  </div>
  <p class="description">
    We develop perception and prediction algorithms for safe autonomous driving.
    Our research targets robust 3D scene understanding and socially-aware trajectory forecasting in complex real-world environments.
  </p>

  <div class="topic-grid">
    <div class="topic-card">
      <h4>Trajectory Prediction</h4>
      <p>Forecasting future motions of vehicles and pedestrians in dynamic traffic scenes.</p>
    </div>
    <div class="topic-card">
      <h4>3D Object Detection</h4>
      <p>Detecting and localizing objects in 3D space from LiDAR and camera sensors.</p>
    </div>
    <div class="topic-card">
      <h4>Pedestrian Detection</h4>
      <p>Reliably detecting pedestrians in diverse conditions for safety-critical applications.</p>
    </div>
  </div>
</div>

<div class="research-section accent-amber">
  <div class="research-section-header">
    <span class="icon">🔗</span>
    <h2>Multi-task Learning</h2>
  </div>
  <p class="description">
    We investigate how a single model can efficiently learn multiple visual tasks simultaneously,
    exploring shared representations, task interactions, and adaptive architectures that improve generalization.
  </p>

  <div class="topic-grid">
    <div class="topic-card">
      <h4>Shared Representation Learning</h4>
      <p>Learning a unified feature space that benefits multiple downstream tasks.</p>
    </div>
    <div class="topic-card">
      <h4>Task-Adaptive Architectures</h4>
      <p>Designing dynamic networks that route computation based on the target task.</p>
    </div>
    <div class="topic-card">
      <h4>Cross-task Knowledge Transfer</h4>
      <p>Leveraging task relationships to improve performance on data-scarce tasks.</p>
    </div>
  </div>
</div>
