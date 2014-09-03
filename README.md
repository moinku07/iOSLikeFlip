iOSLikeFlip
===========

iOS like flip animation for Sencha Touch 2.0 and 2.1

I created this custom made iOS like flip for Sencha touch 2.0. Later sencha touch introduced iOS like flip in recent versions.
If still someone using Sencha Touch 2.0 or 2.1 framework wants iOS like Flip animation, please feel free to use this one.

It is easy to use this custom animation. You can use this following procedure and example code below:

1. Put FlipOne.js and FlipTwo.js in fx/animation directory
2. Put FullFlip.js in fx/layout/card directory
3. Add "Ext.fx.layout.card.FullFlip" in app.js requires
4. Add following css for your card view
<code>
.classforcardview.perspective { background:#000 }
.classforcardview.perspective .x-layout-card-container { -webkit-perspective: 1000; }
</code>
5. Now finally call the animation like in the following code
<pre><code>
  var card = Ext.getCmp('yourcardview'),
  nextCardView = Ext.getCmp('nextcardview'); //the card view you want to show using the animation
  card.getLayout().setAnimation({
      type: 'fullflip',
      direction: 'left',//you can use direction left or right
      duration: 500
  });
  card.addCls('perspective');
  card.setActiveItem(nextCardView);
  setTimeout(function() {
      card.removeCls('perspective');
  },700);
</code></pre>

There you go. You can now successfully animate your card layout like iOS Flip.
You can contribute if you have simplier solution than mine.

Thanks a lot. 
Happy Coding!
Moin
