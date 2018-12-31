---
title: "About"
layout: page
type: about
---

{% include metadata %}

## Cite this book
{{creators-line}}. {{work.date|date: '%Y'}}{% if title %}. <i>{{title}}</i>{% endif %}{% if publisher %}. {{publisher.name}}{% endif %}{% if isbn %}. ISBN: {{isbn}}{% endif %}{% if issn %}. ISSN: {{issn}}{% endif %}{% if doi %}. DOI: {{doi}}{% endif %}{% if pid %}. {{pid}}{% endif %}

## Revision History
Any revisions or corrections made to this publication after the first edition date will be listed here and in the project repository at {{site.repo_url}}, where a more detailed version history is available. The revisions branch of the project repository, when present, will also show any changes currently under consideration but not yet published here.

**Current version**<br>Version {{ site.version }} ({{ site.versiondate }}).

## Licence

<img src="{{site.baseurl}}/images/{{license.abbreviation|downcase}}.svg" alt="Creative Commons {{license.abbreviation}}" style="width:150px;height:auto;">

{{work.rights}}<br />
<p>{{work.license.some_exceptions}}</p>

<p>{{work.license.full}}</p>

<p>{{work.disclaimers}}</p>
