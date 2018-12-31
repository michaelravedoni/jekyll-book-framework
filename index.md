---
title: Home
layout: home
---
{% include metadata %}

<section class="home-cover">
		{% for page in site.pages %}
			{% if page.type == 'cover' %}
{{page.content|markdownify}}
			{% endif %}
		{% endfor %}
</section>

## Abstract
{{ abstract }}

## Authors
<div class="home-creators">
{% for c in creators %}
<div class="home-creator">
  <div class="home-creator-name">{{c.firstName}} {{c.lastName}} <span class="home-creator-links">{{c.affiliation}} {% if c.email %}<a href="mailto:{{c.email}}"><i class="fas fa-at"></i></a>{% endif %} {% if c.twitter %}<a href="https://twitter.com/{{c.twitter| split: '@' | last}}"><i class="fab fa-twitter"></i></a>{% endif %} {% if c.url %}<a href="{{c.url}}"><i class="fas fa-home"></i></a>{% endif %}</span></div>
  <div class="home-creator-card">
    {% if c.pic %}<div class="home-creator-pic"><img src="{{site.baseurl}}/images/{{c.pic}}" alt="{{c.firstName}} {{c.lastName}}"></div>{% endif %}
    <div class="home-creator-bio">{{c.bio}}</div>
  </div>
</div>
{% endfor %}
</div>

<!--Contributors-->
<div class="home-creators">
{% for c in contributors %}
<div class="home-creator">
  <div class="home-creator-name">{{c.firstName}} {{c.lastName}} ({{c.role}}) <span class="home-creator-links">{{c.affiliation}} {% if c.email %}<a href="mailto:{{c.email}}"><i class="fas fa-at"></i></a>{% endif %} {% if c.twitter %}<a href="https://twitter.com/{{c.twitter| split: '@' | last}}"><i class="fab fa-twitter"></i></a>{% endif %} {% if c.url %}<a href="{{c.url}}"><i class="fas fa-home"></i></a>{% endif %}</span></div>
  <div class="home-creator-card">
    {% if c.pic %}<div class="home-creator-pic"><img src="{{site.baseurl}}/images/{{c.pic}}" alt="{{c.firstName}} {{c.lastName}}"></div>{% endif %}
    <div class="home-creator-bio">{{c.bio}}</div>
  </div>
</div>
{% endfor %}
</div>

## {{ project-name }}

<div class="home-creators">
<div class="home-creator">
  <div class="home-creator-card">
    {% if project-logo %}<div class="home-creator-pic"><img src="{{site.baseurl}}/images/{{project-logo}}" alt="{{project-organisation}} logo"></div>{% endif %}
    <div class="home-creator-bio"><div class="home-creator-name">{{project-organisation}} <span class="home-creator-links">{{c.affiliation}} {% if project-email %}<a href="mailto:{{project-email}}"><i class="fas fa-at"></i></a>{% endif %} {% if c.twitter %}<a href="https://twitter.com/{{c.twitter| split: '@' | last}}"><i class="fab fa-twitter"></i></a>{% endif %} {% if project-url %}<a href="{{project-url}}"><i class="fas fa-home"></i></a>{% endif %}</span></div>{{ project-description }}</div>
  </div>
</div>
</div>

## License

<a href="{{license.url}}"><img src="{{site.baseurl}}/images/{{license.abbreviation|downcase}}.svg" alt="Creative Commons {{license.name}}" style="width:150px;height:auto;"></a>

{{work.rights}}

Published by {{work.publisher.name}}, {{work.publisher.location}}

<div class="colophon-licenses">

<div class="colophon-license-exceptions">{{work.license.some_exceptions}}</div>
<div class="colophon-license">{{work.license.full}}</div>
<div class="colophon-disclaimers">{{work.disclaimers}}</div>
</div>

<div class="colophon-cover">
<div class="colophon-cover-heading">On the front cover</div>
<div class="colophon-cover-item">{{work.cover_image.title}}{% if work.cover_image.date %}. {{work.cover_image.date}}{% endif %}{% if work.cover_image.creator %}. {{work.cover_image.creator}}{% endif %}.{% if work.cover_image.text %} <span class="colophon-cover-text">{{work.cover_image.text}}</span>{% endif %} {% if work.cover_image.text %} <span class="colophon-cover-source">{{work.cover_image.license}} from <a href="{{work.cover_image.source_url}}">{{work.cover_image.source}}</a></span>.{% endif %}</div>
</div>

<style media="screen">
  img {
    width: 100%;
  }
  /* Cover */
  .home-cover {
    font-size:75%;
  	max-width:600px;
    margin-top:6em;
    margin-bottom: 6em;
    -webkit-box-shadow: 1px 10px 100px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 10px 100px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 10px 100px 0px rgba(0,0,0,0.75);
  }
  .cover-header,
  .cover-meta {
  	margin-left: 2rem;
  	line-height: initial;
  }
  .cover-book-title {
  	background-color: var(--color-secondary);
    font-size: 4em;
  	margin-top: 0;
  	margin-bottom: 0;
    text-align: left;
    }
  .cover-book-subtitle {
  	background-color: var(--color-secondary);
    font-size: 2em;
  	margin-top: 0;
    text-align: left;
    }
  .cover-creators {
  	font-size: 3em;
    padding-top: 2em;
    margin-bottom: 10px;
  }
  .cover-meta {
  	text-align: right;
  	margin-right: 2em;
    padding-bottom: 2em;
  }
  .cover-meta div {
     margin-bottom: 0;
     line-height: 1;
  }
  .home-creators {
    margin-top:2em;
    margin-bottom:2em;
  }
  .home-creator-name {
   font-weight: bold;
   border-bottom: solid 1px black;
  }
  .home-creator-links {
    font-weight: normal;
    font-size: 75%;
    margin-left: 2.5rem;
  }
  .home-creator-card {
    display: flex;
    flex-direction: row;
  }
  .home-creator-bio {
    padding: 1.5rem;
    flex-grow: 1;
  }
  .home-creator-pic {
    display: block;
    width: 100px;
	  padding: 2px;
  }
  /* Colophon */

  .colophon-license-image {
  	margin-bottom: 1em;
  }
  .colophon-history-item,
  .colophon-contributors-item,
  .colophon-citation-item {
  	margin-left:2em;
  }
  .colophon-license-exceptions,
  .colophon-license,
  .colophon-disclaimers {
  	margin-bottom: .8em;
  }
  .colophon-contributors-role {
  	width: 6rem;
    display: inline-block;
  }
  .colophon-cover-text,
  .colophon-cover-source {
  	font-size:85%;
  }
  .colophon-cover-heading {
  	font-weight: bold;
  }
</style>
