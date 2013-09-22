jQuery(function($) {
    function ColorMatcherUtility() {
        this['black'] = '#231F20';
        this['grey'] = 'hsl(0, 0%, 50%)';
        this['grey-taupe'] = '#C4B3A5';
        this['white'] = '#FFF';
        this['red'] = 'url(https://images-na.ssl-images-amazon.com/images/I/017Yta5p1cL.jpg) center no-repeat';
        this['green'] = 'url(https://images-na.ssl-images-amazon.com/images/I/11alb7R8TdL.jpg) center no-repeat';
        this['orange'] = 'url(https://images-na.ssl-images-amazon.com/images/I/1171IqN1okL.jpg) center center no-repeat';
        this['cream'] = '#F9F3D4';
    }
    
    ColorMatcherUtility.prototype.init = function() {
        this.els = $('.colorSwatches li a');
    };

    ColorMatcherUtility.prototype.match = function() {
    	var self = this;
    	this.els.each(function(idx, el) {
    		var color = $(el).text();
    		if (self[color]) {
    			$(el).css({
    				background: self[color],
    				color: 'transparent'
    			});
    		}
    	});
    };
    
    var util = new ColorMatcherUtility();
    util.init();
    util.match();
});
