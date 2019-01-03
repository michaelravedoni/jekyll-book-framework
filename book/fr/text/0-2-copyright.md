---
title: Copyright
type: copyright

# The Liquid tags here fetch metadata
# from this book's YML file in _data
---

{% include metadata %}


{{title}}
by {% for creator in creators %}{{creator.firstName}} {{creator.lastName}}{% if forloop.last == true %}{% else %}, {% endif %}{% endfor %}
{{work.rights}}
Printed in the Universe.
Published by {{work.publisher.name}}, {{work.publisher.location}}

O’Reilly books may be purchased for educational, business, or sales promotional use. Online editions
are also available for most titles (http://safari.oreilly.com). For more information, contact our corporate/
institutional sales department: (800) 998-9938 or corporate@oreilly.com.

{% for contributor in work.contributors %}{{contributor.role}}: {{contributor.firstName}} {{creator.lastName}}{% if forloop.last == true %}{% else %}<br>{% endif %}{% endfor %}

Printing History:
{% for r in work.revision_history %}
{{r.date|date: '%d.%m.%Y'}}: {{r.summary}}{% if forloop.last == true %}{% else %}<br>{% endif %}
{% endfor %}

{{work.license.some_exceptions}}

{{work.license.full}}

{{work.disclaimers}}

{% if isbn %}ISBN: {{isbn}}{% endif %}
{% if issn %}ISSN: {{issn}}{% endif %}
{% if doi %}DOI: {{doi}}{% endif %}
{% if pid %}{{pid}}{% endif %}
