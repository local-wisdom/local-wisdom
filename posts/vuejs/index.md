---
title: 'Vue.js'
date: '2015-11-25'
lat: 52.1170037
lng: 56.1171140
author: ramon
avatar: 'http://i.imgur.com/UBLi3O3.jpg'
template: article.jade
---

Vue.js (GitHub: [vuejs/vue](https://github.com/vuejs/vue), License: MIT, npm: vue

Vue.js is a library for building web interfaces. Because it works together with some other tools, you can also call it a “framework”. Now, if you’ve never heard of or used Vue before, you are probably thinking: great, yet another JavaScript framework! I get it. That was my first thought as well, that is why I never looked at it with a serious eye. Vue isn’t particularly new, it has being in the making for almost two years now, and the first public release was in February 2014. Over time it has evolving into a great engine to build beautiful production ready app with.

What makes it so awesome? Well, it supports all the features we are used to from libraries such as React, Ember and Angular but it's size and api are a lot simpler.
A thing I love in libraries, simplicity.

So let's take a look at a few small examples and let's start with data binding.

This is how we define the `template` which we are gonna use:
```html
<div id="binding">
    <p>{{message}}</p>
    <input v-model="message">
</div>
```

And here we give it some data:
```javascript

let binding = new Vue({
  el: '#binding',
  data: {
    message: 'Daily Javascript'
  }
});

```
This would give is a `div` with an `input` field and a preview of the value it holds. When you start typing, Vue will take over from there.
That's cool right? Ok I get it data binding does not impress you anymore. Do you like working with components?
Vue takes an approach that is very similar to React: it’s components all the way down.

```javascript
const Example = Vue.extend({
    template: '<div>{{ message }}</div>',
    data () {
        return {
            message: 'Daily Javascript!'
        }
    }
});

// register it with the tag <example>
Vue.component('example', Example);
```
Now we can use it like this:

```html
<example></example>
```

Because modularity is key nowadays it comes with the opportunity to `scope` styles to a component.
That would look something like this:

```html
<style scoped >
.message {
  color: red;
}
</style>
```

Here is a full example component of how it would look when you would have it setup with a combination of [Webpack](https://github.com/webpack/webpack) and [vue-loader](https://github.com/vuejs/vue-loader).

![demo](http://blog.evanyou.me/images/vue-hot.gif)

It comes with a lot of more features that I will not go into such as routing and a build-in transition system.

There is a demo for the transition system which demonstrates state-based tweening with Vue:

<p data-height="268" data-theme-id="0" data-slug-hash="XmZNOG" data-default-tab="result" data-user="yyx990803" class='codepen'>See the Pen <a href='http://codepen.io/yyx990803/pen/XmZNOG/'>Vue.js elastic header component</a> by Evan You (<a href='http://codepen.io/yyx990803'>@yyx990803</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
