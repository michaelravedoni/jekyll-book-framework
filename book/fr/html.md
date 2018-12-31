---
title: "HTML view"
layout: html-view
---
{% include metadata %}

<section class="cover" id="cover" data-type="cover">
		{% for page in site.pages %}
			{% if page.type == 'cover' %}
{{page.content|markdownify}}
			{% endif %}
		{% endfor %}
</section>

<section class="front-matter">
		{% for page in site.pages %}
			{% for file in site.data.meta.work.products['paged-view'].front_matter %}
			{% capture file_url %}{{work-url-contents-directory}}/{{ file.file | split: "." | first }}/{% endcapture %}
			{% if file_url == page.url %}
		<section class="{{file.class}}" id="{{file.id}}" data-type="{{page.type}}">
{{page.content|markdownify}}
		</section>
		<div class="break"></div>
			{% endif %}
			{% endfor %}
		{% endfor %}
</section>
<section class="body-matter">
	{% for page in site.pages %}
		{% for file in site.data.meta.work.products['paged-view'].body_matter %}
		{% capture file_url %}{{work-url-contents-directory}}/{{ file.file | split: "." | first }}/{% endcapture %}
		{% if file_url == page.url %}
	<section class="{{file.class}}" id="{{file.id}}" data-type="{{page.type}}">
		<h{{file.level}} class="{{file.class}} {% if file.level == 1 %}chapter-title{% endif %}" id="{{file.id}}">{{file.label}}</h{{file.level}}>
{{page.content|markdownify}}
	</section>
		{% endif %}
		{% endfor %}
	{% endfor %}
</section>
<section class="back-matter">

	{% for page in site.pages %}
		{% for file in site.data.meta.work.products['paged-view'].back_matter %}
		{% capture file_url %}{{work-url-contents-directory}}/{{ file.file | split: "." | first }}/{% endcapture %}
		{% if file_url == page.url %}
	<section class="{{file.class}}" id="{{file.id}}" data-type="{{page.type}}">
{{page.content|markdownify}}
	</section>
		{% endif %}
		{% endfor %}
	{% endfor %}

</section>
