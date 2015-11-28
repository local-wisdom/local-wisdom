---
title: "Velocity React"
date: '2015-10-05'
lat: 54.1171140
lng: 54.1171140
author: 'Ramon Gebben'
header: 'http://i.imgur.com/Ex08W0g.jpg'
shop: Daily Javascript
avatar: 'http://i.imgur.com/UBLi3O3.jpg'
template: article.jade
---

velocity-react (GitHub: [twitter-fabric/velocity-react](https://github.com/twitter-fabric/velocity-react), License: MIT, npm: velocity-react)

Today I had some trouble finding something to write about. Then I remembered the awesome work done by the guys at Twitter Fabric. They made a React component for interacting with amazing [Velocity](http://julian.com/research/velocity/) animation library.
Offical introduction can be found [here.](https://fabric.io/blog/introducing-the-velocityreact-library)

If you are not familiar with [Velocity](http://julian.com/research/velocity/) I suggest you take a look at this first.


The package contains two components; `<VelocityComponent />` and `<VelocityTransitionGroup />`

Velocity React integration follow this simple algorithm:

- Initially, an animated component will appear as it would at the end of its given animation.
- If that given animation ever changes, it runs it to get to the new end state. If there’s an animation currently in progress, we stop it first, and then proceed smoothly from whatever intermediate state it left us in.

Here is a small example that was given in the introduction from Fabric.

```javascript
render: function () {
  var animationProps;
  if (this.state.hovering) {
    animationProps = {
      duration: 200,
      animation: {
        rotateX: 160
      }
    };
  } else {
    animationProps = {
      duration: 1100, // longer due to swinging
      animation: {
        rotateX: [0, 'spring']
      }
    };
  }

  return (
    <div onMouseEnter={function () { this.setState({hovering: true}); }}
         onMouseLeave={function () { this.setState({hovering: false}); }}>
      <VelocityComponent {...animationProps}>
        {this.renderTopState()}
      </VelocityComponent>
      {this.renderUnderneathStats()}
    </div>
  );
}
```
Which will result in:
<img src="https://static1.squarespace.com/static/54ac6f9ae4b0cf1d82a4b59e/t/560a9a19e4b08fcd39795d27/1443535397904/release_summary.gif?format=300w" tyle="max-width: 320px; width: 100%; position:static;">

As the name implies `<VelocityTransitionGroup />` can be used to animate a group of element at the same time. In the example on the Fabric blog we can use it being used to animate an input slider, but that's not all. When you pay close attention you will the the toggle switch animating and a "jawbone" collapse. Al these animation are done at once.

<img src="https://static1.squarespace.com/static/54ac6f9ae4b0cf1d82a4b59e/t/560a9a69e4b0a427e3b70022/1443535503361/?format=750w" tyle="max-width: 320px; width: 100%; position:static;">

I was very impressed with the work and I'm trying to push this as the new standard for animating React components at the company where I work. And will be the default for all my pet projects.
