---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---


# HTML en pratique

## Essayons de reproduire [cette page](https://gallica.bnf.fr/ark:/12148/bd6t52694199/)

<div style = "text-align: left " class = "mt-6"> 
Ce qu'on va voir

- Quelques balises importantes
- Un peu de CSS
- Un peu de référencement
- ...
- 
</div>

<style>
ul {
  color: unset;
  list-style-type: none;
}

  </style>


---
layout: image-right
image: https://cover.sli.dev
---

# Ressources


<!-- HTML specs & FAQ
    https://github.com/whatwg/html/blob/main/FAQ.md
    https://html.spec.whatwg.org/multipage/ -->

<!-- css
    https://caniuse.com/css-nesting -->

[Page à reproduire](https://gallica.bnf.fr/ark:/12148/bd6t52694199/) 

[Contenu textuel](https://gitlab.huma-num.fr/estrades/formations/-/blob/main/ressources/HTR/transcription_fr_de.odt?ref_type=heads)

   ![w3schools](https://logo.clearbit.com/w3schools.com) W3schools : [Tags (balises)](https://www.w3schools.com/tags/default.asp) et 
    [layouts](https://www.w3schools.com/html/html_layout.asp)

![Remote Image](https://logo.clearbit.com/developer.mozilla.org/)
   MDN : [Eléments (balises)](https://developer.mozilla.org/fr/docs/Web/HTML/Element) et [layouts](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#html_layout_elements_in_more_detail)


<div v-click>


```html
<!-- Exemple de structure -->
<html>
  <head></head>
  <body>
    <header></header>
    <main>
      <article>
        <section></section>
        <section></section>
      </article>
    </main>
  </body>
</html>
```

</div>

<!-- Inline style -->
<style>
img{
  display: inline-block;
  width: 50px;
}
</style>


---
level: 2
---

# Il y a beaucoup de balises
Editeur dynamique ci-dessous ..

```html{monaco}
<footer>
<img>
<legend>
<meter>
<abbr><a><code><a><br><a>

```

<br>

Mais c'est pas très joli

<div v-click>

## Heureusement il y a CSS

<!-- Editeur dynamique ci-dessous .. -->

```css{monaco}

div {
  /* on peut décorer comme on veut */
  color: red;
  font-size: 23px;
}

```

 </div>

---



# Cibler un élément en css


```html{monaco}

  <section id = "section-id">
    Super ! 
  </section>
  <section class = "section-class">
    wow...
  </section>


<!-- <style> à mettre dans le <head> -->
<style>
  section{
    background: blue;
  }
  #section-id{
    text-align: center;
  }
  .section-class{
    margin-top: 45px;
  }
</style>
```


---



# Disposition en 2 colonnes avec flex

```html

<article>
  <section></section>
  <section></section>
</article>


<style>
  article{
    display: flex; 
    justify-content: space-between;
  }

  section{
    flex: 1;
  }
</style>

```

---



# Centrer en css

#### Un élément "block"

```css
/* display: block; */
margin: auto;
```

<br>

#### Un élément "inline" 
```css
/* display: inline; */
text-align: center;
```


---


# Proposition html + css

<div style = "height: 60px;">

```html
<<< @/snippets/example.html html
```


</div>

---


# Référencement naturel 

```html
    <head>
      <title>Titre de ma page</title>
      <meta name="description" content="">
      <meta property="og:image" content="">
      <meta property="og:image:height" content="">
      <meta property="og:image:width" content="">
      <meta property="og:title" content="">
      <meta property="og:description" content="">
      <meta property="og:url" content="">
      <meta property="og:type" content="">
      <meta property="og:site_name" content="">
      <meta property="og:locale" content="fr_FR">
      <meta name="twitter:card" content="">
      <meta name="twitter:site" content="">
      <meta name="twitter:title" content="">
      <meta name="twitter:description" content="">
      <meta name="twitter:image" content=""> 
      <meta name="twitter:image:alt" content="">
    </head>
```

---
<!-- layout: center
class: text-center
---
# Merci -->
<!-- 

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html) -->
