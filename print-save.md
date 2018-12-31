---
title: "Version imprimée"
layout: print
---
<section class="intro">
<h1 class="chapter" id="n0">Introduction</h1>
</section>
{% include_relative _book/0-introduction/-introduction.md %}

<h1 class="chapter" id="n1">1. Chapter</h1>

{% include_relative _book/1-chapter/-1-0-introduction.md %}

<h1 class="sub-chapter" id="n1-1">1.1. Section</h1>

{% include_relative _book/1-chapter/-1-1-section.md %}

<h1 class="chapter" id="n-c">Conclusion</h1>

{% include_relative _book/5-conclusion/-conclusion.md %}

<h1 class="chapter" id="n-n">Notes</h1>
<p>The notes are placed at the end of this document, unless they can be integrated at the bottom of the page or in the various parts concerned.</p>
* footnotes will be placed here. This line is necessary
{:footnotes}

<h1 class="chapter" id="n-a">Appendices</h1>

<h1 class="biblio" id="n-a-1">Glossary</h1>

{% include_relative _book/6-appendices/-glossary.md %}

<h1 class="sub-annexes" id="n-a-2">Bibliography</h1>

{% include_relative _book/6-appendices/-bibliography.md %}

<h1 class="chapter">About</h1>

{% include_relative _book/8-about/-about.md %}
