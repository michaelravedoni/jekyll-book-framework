---
title: Colophon
type: colophon
---

{% include metadata %}

<div class="colophon-meta">
<div class="colophon-title">{{title}}</div>
<div class="colophon-creators">by {% for creator in creators %}{{creator.firstName}} {{creator.lastName}}{% if forloop.last == true %}{% else %}, {% endif %}{% endfor %}</div>
<div class="colophon-published-by">Published by {{work.publisher.name}}, {{work.publisher.location}}</div>
<div class="colophon-rights">{{work.rights}}</div>
</div>

{% if work.contributors %}
<div class="colophon-contributors">
<div class="colophon-contributors-item">{% for contributor in work.contributors %}<span class="colophon-contributors-role">{{contributor.role}}:</span> {{contributor.firstName}} {{creator.lastName}}{% endfor %}</div>
</div>
{% endif %}

<!--<div class="colophon-cip">
<div class="colophon-cip-text">Inspired from the <i>Library and Archives Canada Cataloguing in Publication</i></div>

<strong>Title</strong>: {{title}}:{{subtitle}} / {{creators-line}}.<br>
<strong>Names</strong>: {% for creator in work.creators %}{{creator.firstName}} {{creator.lastName}}.{% if forloop.last == true %}{% else %} | {% endif %}{% endfor %} | {% for contributor in work.contributors %}{{contributor.firstName}} {{contributor.lastName}} {{contributor.role}}.{% if forloop.last == true %}{% else %} | {% endif %}{% endfor %} | {{publisher.name}}.<br>
<strong>Identifiers</strong>:
{% if isbn != nil %}ISBN: {{isbn}}{% endif %}
{% if issn != nil %}ISSN: {{issn}}{% endif %}
{% if doi != nil %}DOI: {{doi}}{% endif %}
{% if pid != nil %}{{pid}}{% endif %}<br>
<strong>Subjects</strong>: {% for s in work.subjects %}{{i.type}}: {{s.name}}.{% if forloop.last == true %}{% else %} | {% endif %}{% endfor %}<br>
</div>-->

<div class="colophon-citation">
<div class="colophon-citation-heading">Suggested citation</div>
<div class="colophon-citation-item">{{creators-line}}. {{work.date|date: '%Y'}}{% if title %}. <i>{{title}}</i>{% endif %}{% if publisher %}. {{publisher.name}}{% endif %}{% if isbn %}. ISBN: {{isbn}}{% endif %}{% if issn %}. ISSN: {{issn}}{% endif %}{% if doi %}. DOI: {{doi}}{% endif %}{% if pid %}. {{pid}}{% endif %}.</div>
</div>

<div class="colophon-history">
<div class="colophon-history-heading">Revision</div>
{% for r in work.revision_history %}
<div class="colophon-history-item">
  <span class="colophon-history-date">{{r.date|date: '%d.%m.%Y'}}:</span> <span class="colophon-history-summary">{{r.summary}}</span>
</div>
{% endfor %}
</div>

<div class="colophon-licenses">
<img src="{{site.baseurl}}/images/{{license.abbreviation|downcase}}.svg" alt="Creative Commons {{license.abbreviation}}" class="colophon-license-image" style="width:100px;height:auto;">

<div class="colophon-license-exceptions">{{work.license.some_exceptions}}</div>
<div class="colophon-license">{{work.license.full}}</div>
<div class="colophon-disclaimers">{{work.disclaimers}}</div>
</div>

<div class="colophon-cover">
<div class="colophon-cover-heading">On the front cover</div>
<div class="colophon-cover-item">{{work.cover_image.title}}{% if work.cover_image.date %}. {{work.cover_image.date}}{% endif %}{% if work.cover_image.creator %}. {{work.cover_image.creator}}{% endif %}.{% if work.cover_image.text %} <span class="colophon-cover-text">{{work.cover_image.text}}</span>{% endif %} {% if work.cover_image.text %} <span class="colophon-cover-source">{{work.cover_image.license}} from <a href="{{work.cover_image.source_url}}">{{work.cover_image.source}}</a></span>.{% endif %}</div>
</div>
