/**
 * @private
 */
Ext.define('Ext.fx.animation.FlipOne', {
    extend: 'Ext.fx.animation.Abstract',

    alias: 'animation.flipone',

    config: {
        easing: 'ease-out',

        /**
         * @cfg {String} direction The direction of which the slide animates
         * @accessor
         */
        direction: 'right',

        half: false,

        out: null
    },

    getData: function() {
        var from = this.getFrom(),
            to = this.getTo(),
            direction = this.getDirection(),
            out = this.getOut(),
            half = this.getHalf(),
            rotate = 90,
            fromScale = 0.8,
            toScale = 1,
            fromRotateX = 0,
            fromRotateY = 0,
            toRotateX = 0,
            toRotateY = 0;


        switch (direction) {
            case this.DIRECTION_UP:
                if (out) {
                    toRotateX = rotate;
                }
                else {
                    fromRotateX = -rotate;
                }
                break;

            case this.DIRECTION_DOWN:
                if (out) {
                    toRotateX = -rotate;
                }
                else {
                    fromRotateX = rotate;
                }
                break;

            case this.DIRECTION_RIGHT:
                if (out) {
                    toRotateY = -rotate;
                }
                else {
                    fromRotateY = rotate;
                }
                break;

            case this.DIRECTION_LEFT:
                if (out) {
                    toRotateY = rotate;
                }
                else {
                    fromRotateY = -rotate;
                }
                break;
        }
		from.set('opacity', 0);
        from.setTransform({
            rotateX: fromRotateX,
            rotateY: fromRotateY,
			scale: fromScale
        });
		to.set('opacity', 1);
        to.setTransform({
            rotateX: toRotateX,
            rotateY: toRotateY,
            scale: toScale
        });

        return this.callParent(arguments);
    }
});
