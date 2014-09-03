/**
 * @private
 */
Ext.define('Ext.fx.layout.card.FullFlip', {
    extend: 'Ext.fx.layout.card.Style',

    alias: 'fx.layout.card.fullflip',
	requires : ['Ext.fx.animation.FlipOne','Ext.fx.animation.FlipTwo'],
    config: {
        duration: 500,

        inAnimation: {
            type: 'flipone',
            before: {
                'backface-visibility': 'hidden'
            },
            after: {
                'backface-visibility': null
            }
        },
        outAnimation: {
            type: 'fliptwo',
            before: {
                'backface-visibility': 'hidden'
            },
            after: {
                'backface-visibility': null
            },
            out: true
        }
    },

    updateDuration: function(duration) {
        var halfDuration = duration / 2,
			inDuration = duration * 3 / 8,
			outDuration = duration * 5 / 8;
            inAnimation = this.getInAnimation(),
            outAnimation = this.getOutAnimation();

        inAnimation.setDelay(outDuration);
        inAnimation.setDuration(inDuration);
		outAnimation.setDuration(outDuration);
		
		/*inAnimation.setDelay(halfDuration);
        inAnimation.setDuration(halfDuration);
		outAnimation.setDuration(halfDuration);*/
    }
});
