---
title: "Back cover"
type: back-cover
---
{% include metadata %}

<div class="back-cover-creators">{% for creator in creators %}{{creator.firstName}} {{creator.lastName}}{% if forloop.last == true %}{% else %}, {% endif %}{% endfor %}</div>
<div class="back-cover-title">{{title}}</div>
<div class="back-cover-subtitle">{{subtitle}}</div>
<div class="back-cover-text">
  <p>The belief in individual freedom over arbitrary authority extended to school as well. Two years ahead of his classmates by age 11, Stallman endured all the usual frustrations of a gifted public-school student. It wasn't long after the puzzle incident that his mother attended the first in what would become a long string of parent-teacher conferences.</p>
  <p>Thirty years later, Breidbart remembers the moment clearly. As soon as Stallman broke the news that he, too, would be attending Harvard University in the fall, an awkward silence filled the room. Almost as if on cue, the corners of Stallman's mouth slowly turned upward into a self-satisfied smile.</p>
</div>
<div class="back-cover-text-plus"><strong>Plus text</strong>: To facilitate the process, AI Lab hackers had built a system that displayed both the "source" and "display" modes on a split screen. Despite this innovative hack, switching from mode to mode was still a nuisance.</div>
<div class="back-cover-quote"><q>A kind of Batman of contemporary letters.</q><span>Philip Larkin on Anthony Burgess</span></div>
<div class="back-cover-creator">
  <div class="back-cover-creator-name">Author name</div>
  <div class="back-cover-creator-text">Thirty years after the fact, Lippman punctuates the memory with a laugh. "To tell you the truth, I don't think I ever figured out how to solve that puzzle," she says.</div>
</div>
<div class="back-cover-bottom">
  <div class="back-cover-isbn">
    {% if isbn %}
    <div class="back-cover-isbn-text">8$<br>ISBN {{isbn}}</div>
    <img class="back-cover-isbn-image" src="https://barcode.tec-it.com/barcode.ashx?data={{isbn|replace: '-', ''}}&code=ISBN13&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Svg&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0&modulewidth=0.265" alt="Barcode Generator TEC-IT"/>
    {% endif %}
  </div>
  <div class="back-cover-publisher">
    <div class="back-cover-publisher-text"></div>
    <img class="back-cover-publisher-logo" src="{{ site.baseurl }}/images/{{work.publisher.logo}}"/>
  </div>
  <div class="back-cover-qr"><img src='https://barcode.tec-it.com/barcode.ashx?data={{site.url|url_encode}}&code=MobileQRCode&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Svg&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0&modulewidth=0.265&eclevel=L' alt='Barcode Generator TEC-IT'/></div>
</div>
<div class="back-cover-meta">Cover: {{work.cover_image.title}} by {{work.cover_image.creator}}</div>
