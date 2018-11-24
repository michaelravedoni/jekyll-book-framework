Eo adducta re per Isauriam, rege Persarum bellis finitimis inligato repellenteque a conlimitiis suis ferocissimas gentes, quae mente quadam versabili hostiliter eum saepe incessunt et in nos arma moventem aliquotiens iuvant, Nohodares quidam nomine e numero optimatum, incursare Mesopotamiam quotiens copia dederit ordinatus, explorabat nostra sollicite, si repperisset usquam locum vi subita perrupturus.
Ergo ego senator inimicus, si ita vultis, homini, amicus esse, sicut semper fui, rei publicae debeo. Quid? si ipsas inimicitias, depono rei publicae causa, quis me tandem iure reprehendet, praesertim cum ego omnium meorum consiliorum atque factorum exempla semper ex summorum hominum consiliis atque factis mihi censuerim petenda.

Et eodem impetu Domitianum praecipitem per scalas itidem funibus constrinxerunt, eosque coniunctos per ampla spatia civitatis acri raptavere discursu. iamque artuum et membrorum divulsa conpage superscandentes corpora mortuorum ad ultimam truncata deformitatem velut exsaturati mox abiecerunt in flumen.


## Citation Information
{% for creator in site.creators %}{{creator.firstName}} {{creator.lastName}}{% if forloop.last == true %}{% else %}, {% endif %}{% endfor %}{% if site.date %}. {{site.date|date: '%Y'}}{% endif %}{% if site.bookTitle %}. <i>{{site.bookTitle}}</i>{% endif %}{% if site.publisher %}. {{site.publisher}}{% endif %}{% if site.isbn %}. ISBN {{site.isbn}}{% endif %}

**Permanent URL**<br>{{site.baseurl}}{{site.url|absolute_url}}/

## Revision History
Any revisions or corrections made to this publication after the first edition date will be listed here and in the project repository at {{site.repo_url}}, where a more detailed version history is available. The revisions branch of the project repository, when present, will also show any changes currently under consideration but not yet published here.

**Current version**<br>Version {{ site.version }} ({{ site.versiondate }}).

## Downloads
{% if site.epub %}[EPUB]({{site.epub}})<br>{% endif %}
{% if site.mobi %}[MOBI/KINDLE]({{site.mobi}})<br>{% endif %}
{% if site.pdf %}[PDF]({{site.baseurl}}{{site.pdf|absolute_url}})<br>{% else %}[Printable version]({{site.baseurl}}{{site.url|absolute_url}}/print)<br>{% endif %}
{% if site.markdownD %}[Markdown]({{site.markdown}})<br>{% endif %}
{% if site.paperback %}[Paperback]({{site.paperback}}){% endif %}


## Licence

<img src="{{site.baseurl}}/images/{{site.cc|downcase}}.svg" alt="Creative Commons {{site.cc}}" style="width:150px;height:auto;">

© {{site.date|date: '%Y'}} {{site.publisher}}

Except where otherwise noted, this work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
You are free to share and adapt this material for any purpose, even commercially if you give appropriate credit, provide a link to the license, and indicate if changes were made.
