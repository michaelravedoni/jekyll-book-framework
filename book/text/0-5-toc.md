---
title: Table of contents
type: toc
---
{% include metadata %}

<section class="toc">
<h1>Table of contents</h1>
<nav>
  <ul>
    {% for file in paged-view-file-list.body_matter %}
    {% if file.level != nil %}
    <li class="toc-{{file.level}}">
      <a href="#{{file.id}}">{{file.label}}</a>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</nav>
</section>
