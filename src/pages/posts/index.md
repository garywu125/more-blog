---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Hello world!
publishDate: 12 Sep 2021
name: Nate Moore
value: 128
description: Just a Hello World Post!
---

<Cool name={frontmatter.name} href="https://twitter.com/n_moore" client:load />

This is so cool!

Do variables work {frontmatter.value * 2}?


## Styling Text with inline HTML  

- text color /underline(u element) ( styling 文字)

  🚀 🍎 🧡 🍏 Some Markdown text with <span style="color:blue">some *blue* text</span>. 

  🚀 🍎 🧡 🍏 <u style="color:red">Some Markdown text</u> with <span style="color:blue">some *blue* text</span>.

  ⚠️WARNING⚠️, 🔴IMPORTANT❗🔴 or 🔥NEW🔥.



## Floating division side by side  
           
 <div style="border: 3px solid #fff;
    padding: 20px;">

  <div style="width: 50%;
    float: left;
    padding: 20px;
    border: 2px solid red;">
    <div style="background-color:green">Float Column 1</div>
  </div>
  
  <div style="width:50%;
    float: left;
    padding: 20px;
    border: 2px solid red;">
    <div style="background-color:blue">Float Column 2</div>
  </div>  
</div>
<br>
<br>

## 內嵌圖像/圖表/影音

- 🚀embed GIF and SVG using inline HTML (圖像)

  <span style="color:red;"> SVG Tag can not display </span>
  <br>
  <div>
      <img src="https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif" />
      <img src="https://img.shields.io/badge/theultimatemarkdowncheatsheet-brightgreen.svg" style="float:right"/>
  </div>

---
- 🚀embed diagrams(.svg) (圖表)

 ![embeded diagram](https://www.diagrams.net/assets/svg/home-dia2.svg)
 https://github.com/jgraph/drawio/wiki/Embed-Diagrams

---

- Add video/audio using HTML tag (影音)

  <!-- <audio controls>
    <source src="horse.ogg" type="audio/ogg">
    <source src="assets/videos/markdown_audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>  -->

  <audio controls >  
    <source src=" https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav" type="audio/mpeg">
  Your browser does not support the audio element.xx
  </audio>

  <audio controls autoplay muted  >  
     <source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" type="audio/mpeg">
Your browser does not support the audio element.xxx
  </audio>

  <br>

  <video width="320" height="240" controls autoplay  muted>
     <source src="https://user-images.githubusercontent.com/58986949/115314310-805b2780-a1a7-11eb-8558-648a367ea231.mp4" type="video/mp4">
  </video>

  <video width="320" height="240" controls >
     <source src="https://user-images.githubusercontent.com/58986949/115314310-805b2780-a1a7-11eb-8558-648a367ea231.mp4" type="video/mp4">
  </video>

  ---
## Add HTML Embed Code
 an embed code is a block of HTML that is placed in another page (like  youtube/google map / whimsical) You can embed YouTube videos, Twitter posts, GIFs, and other multimedia objects on another website.

- youtube video 

  🚀🚀🚀 play youtube video via copy share link on the youtube url :`display via iframe`

  <iframe width="560" height="315" src="https://www.youtube.com/embed/I1UMhpr8Q6g" title="帶台灣酒飛到國外！帛琉人要開始進口了？" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- markdown file can can write html -->
---
- google map

  <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=356%E8%8B%97%E6%A0%97%E7%B8%A3%E5%BE%8C%E9%BE%8D%E5%BE%8C%E9%BE%8D%E9%8E%AE%E5%8D%8A%E5%A4%A9%E5%AF%AE%E4%BC%91%E9%96%92%E6%96%87%E5%8C%96%E5%9C%92%E5%8D%80&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google map embed code generator</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>
---
- whimsical

  <iframe style="border:none" width="600" height="450" src="https://whimsical.com/embed/Jmy7AirAMqqqaUGDM1wdub"></iframe>

---

## Styling Image with inline HTML  

- **Floating images left with text wrapping**

  <p>
      <img src="https://www.tutorialspoint.com/green/images/logo.png" style="float:right;margin: 0 15px 0 0;" width="190" height="84" />
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
      This is demo text. This is demo text.
   </p>
   <h4>Float Left</h4>
      <p>The below image floats to the left.</p>
      <p>
         <img src="https://www.tutorialspoint.com/green/images/logo.png" style="float:left;margin: 0 15px 0 0;" width="190" height="84" />
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
         This is demo text. This is demo text.
      </p>
---

- **Add image caption**

  <figure align = "center">
    <img src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHw%3D&w=1000&q=80" alt="Trulli" style="width:100%">
    <figcaption align = "center"><b>Fig.1 - 4K Mountains Wallpaper</b></figcaption>
  </figure>

  <p align = "center" >
  <img src = "https://c4.wallpaperflare.com/wallpaper/382/758/444/turkey-dreams-of-cappadocia-avanos-nevsehir-wallpaper-preview.jpg">
  </p>
  <p align = "center" >
    <span style="color:red;background-color:yellow">Fig.1 - 4K Mountains Wallpaper</span>
  </p>


- **Positioning image in github markdown table**

    <table>
      <tr>
          <td>- Identifying cutomer needs (requirments)</td>
          <td rowspan="11">
            <img src="https://user-images.githubusercontent.com/74305823/118094261-783e8280-b409-11eb-8f50-8ed0b304fef0.png" width="300"/>
        </td>
      </tr>
      <tr>
          <td>- market analysis (requirements)</td>
      </tr>
      <tr>
          <td>- defining goals (requirements)</td>
      </tr>
      <tr>
          <td>- Establishing functions (Prodct concept)</td>
      </tr>
      <tr>
          <td>- Task Specifications (Prodct concept)</td>
      </tr>
      <tr>
          <td>- Conceptualizatoin (Solution concept)</td>
      </tr>
      <tr>
          <td>- Evaluating Alternatives</td>
      </tr>
      <tr>
          <td>- Emnodiment Design</td>
      </tr>
      <tr>
          <td>- Analysis and Optimization</td>
      </tr>
      <tr>
          <td>- Experiment</td>
      </tr>
      <tr>
          <td>- Marketing</td>
      </tr>
    </table>

- **Align Images Horizontally**

  |First Image|Second Image|
  |:-:|:-:|
  |![First Image](https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?h=750&w=500 "夕陽")|![Second Image](https://images.pexels.com/photos/1335115/pexels-photo-1335115.jpeg?h=750&w=500 "落日")|

- **thumbnail image(縮圖)**

  <img src="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Screenshots_2018/EN-scishow-thumbnails.png" alt="Club Card">
  
  <ul style=" margin: 0; padding: 0; list-style: none;">
      <li style="float: left;  width: 125px; height: 125px; margin: 10px;"><img src="/examples/images/club.jpg" alt="Club Card"></li>
      <li style="float: left;  width: 125px; height: 125px; margin: 10px;"><img src="/examples/images/diamond.jpg" alt="Diamond Card"></li>
      <li style="float: left;  width: 125px; height: 125px; margin: 10px;"><img src="/examples/images/spade.jpg" alt="Spade Card"></li>
      <li style="float: left;  width: 125px; height: 125px; margin: 10px;"><img src="/examples/images/heart.jpg" alt="Heart Card"></li>
  </ul>
     