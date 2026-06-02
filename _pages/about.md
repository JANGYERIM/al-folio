---
layout: home
title: Visual AI Lab
permalink: /
nav: false
---

<!-- ======= Hero Section ======= -->
<section class="hero-section">

  <div class="hero-inner">
    <div class="hero-col-text" data-aos="fade-up" data-aos-delay="100">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge">✨ Visual AI Lab @KHU</span>
        </div>
        <h1>Visual AI Lab.</h1>
        <div class="hero-buttons">
          <a href="{{ '/contact/' | relative_url }}" class="btn-hero btn-primary-hero">
            <span>How to Join</span>
            <i class="bi bi-arrow-right" style="margin-left:8px;"></i>
          </a>
          <a href="{{ '/publications/' | relative_url }}" class="btn-hero btn-outline-hero">
            <i class="bi bi-file-text" style="margin-right:8px;"></i>
            <span>Publications</span>
          </a>
        </div>
      </div>
    </div>
    <div class="hero-col-visual" data-aos="fade-up" data-aos-delay="200">
      <!-- visual placeholder — replace with lab image/video -->
    </div>
  </div>

  <div class="hero-background">
    <img src="{{ '/assets/img/home/monoWAD_result.gif' | relative_url }}" class="hero-bg-video" alt="" aria-hidden="true">
    <div class="hero-bg-overlay"></div>
    <div class="hero-bg-overlay"></div>
    <div class="hero-bg-overlay-grid"></div>
  </div>

</section>
<!-- End Hero Section -->

<!-- ======= About Section ======= -->
<section class="about-section light-background">

  <div class="about-inner">

    <div class="about-col-text" data-aos="fade-up" data-aos-delay="200">
      <div class="section-badge">About Us</div>
      <h2>We Build AI that Sees and Understands the World.</h2>
      <p class="lead">
        Our lab bridges the gap between visual perception and real-world understanding.
        Driven by advanced Computer Vision and Multimodal AI, our research equips machines to truly understand complex real-world environments.
        Our research spans <strong style="color:#fff;">Multimodal Learning</strong> for joint vision-language-audio understanding,
        <strong style="color:#fff;">Autonomous Driving Perception</strong> for safe scene understanding,
        and <strong style="color:#fff;">Multi-task Learning</strong> for efficient shared representations.
        Through these core technologies, we build intelligence that perceives, reasons, and interacts with the world.
      </p>
    </div>

    <div class="about-col-image" data-aos="fade-up" data-aos-delay="300">
      <div class="about-single-image">
        <img id="campus-img" src="" alt="Campus">
      </div>
    </div>

    <script>
      (function() {
        var base = '{{ site.baseurl }}';
        var imgs = [1,2,3,4,5,6,7].map(function(n) {
          return base + '/assets/img/home/campus' + n + '.jpg';
        });
        document.getElementById('campus-img').src = imgs[Math.floor(Math.random() * imgs.length)];
      })();
    </script>

  </div>

</section>
<!-- End About Section -->

<!-- ======= News Section ======= -->
<section class="news-section">

  <div class="news-inner">

    <div class="section-title" data-aos="fade-up">
      <h2>News</h2>
      <div><span>Our Latest</span> <span class="description-title">Updates</span></div>
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
      <div class="news-content">
        <table class="news-table">
          <tbody>
            {% assign sorted_news = site.news | sort: "date" | reverse %}
            {% for item in sorted_news %}
            <tr>
              <td class="news-date">
                <span class="month">{{ item.date | date: "%b" }}</span>
                <span class="year">{{ item.date | date: "%Y" }}</span>
              </td>
              <td class="news-details">
                {% if item.inline %}
                  {{ item.content }}
                {% else %}
                  <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
                {% endif %}
              </td>
            </tr>
            {% endfor %}
          </tbody>
        </table>
      </div>

      <div class="news-expand">
        <button id="news-toggle-btn" class="btn-news-toggle">Show More</button>
      </div>
    </div>

  </div>

</section>
<!-- End News Section -->

<!-- ======= Join Section ======= -->
<section id="join" class="join-section">

  <div class="join-inner">
    <div class="cta-banner" data-aos="fade-up">
      <div class="cta-text">
        <div class="cta-badge">Opportunities</div>
        <h3>We Are Recruiting Students &amp; Interns</h3>
        <p>
          We are looking for highly motivated <strong>MS / PhD students</strong> and <strong>research interns</strong>
          passionate about computer vision and multimodal AI research.
          Send your CV, transcripts, and a brief description of your research interests.
        </p>
      </div>
      <div class="cta-actions">
        <a href="mailto:{{ site.email }}" class="btn-cta-primary">
          <i class="bi bi-envelope"></i>
          Contact Us
        </a>
        <a href="{{ '/contact/' | relative_url }}" class="btn-cta-secondary">
          Learn More
        </a>
      </div>
    </div>
  </div>

</section>
<!-- End Join Section -->
