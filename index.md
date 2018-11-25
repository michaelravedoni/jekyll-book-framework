---
title: Foreword
layout: cover
---
A foreword is a (usually short) piece of writing sometimes placed at the beginning of a book or other piece of literature. Typically written by someone other than the primary author of the work, it often tells of some interaction between the writer of the foreword and the book's primary author or the story the book tells. Later editions of a book sometimes have a new foreword prepended (appearing before an older foreword if there was one), which might explain in what respects that edition differs from previous ones.

When written by the author, the foreword may cover the story of how the book came into being or how the idea for the book was developed, and may include thanks and acknowledgments to people who were helpful to the author during the time of writing. Unlike a preface, a foreword is always signed.

{{ site.version}} – {{ site.versiondate }}

### Résumé
{{ site.abstract_locale }}

#### Mots-clés
{{ site.keywords_locale }}

### Abstract
{{ site.abstract }}

#### Keywords
{{ site.keywords }}


### Print this book
{% if site.pdf %}[Printable PDF version]({{site.url}}{{site.baseurl}}{{site.pdf}})<br>{% else %}[Printable PDF version]({{site.url}}{{site.baseurl}}/print)<br>{% endif %}

{% if site.paperback %}
### Read this book
[Material paperback version]({{site.paperback}})
{% endif %}
