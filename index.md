---
title: Home
layout: home
---
{% include metadata %}

<section class="jbf-home-cover jbf-block-xlarge">
  {% for page in site.pages %}
  {% assign cover_name = paged-view-file-list.cover %}
  {% capture cover_url %}{{work-url-contents-directory}}/{{ cover_name | split: "." | first }}/{% endcapture %}
  {% capture page_url %}{{page.url| split: "." | first}}/{% endcapture %}
  {% if cover_url == page_url %}
  {{page.content|markdownify}}
  {% endif %}
  {% endfor %}
</section>
