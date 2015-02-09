(function() {
  'use strict';

    $(document).ready(function(){

        var $s       = new jqElement($('#logo-svg') , true, true);
        var $title = $('.title');
        var $logo  = $title.find('img');
        var $h1    = $title.find('span.title-text');

        var time = new TimelineLite()
            time
              .to($title, 0, {autoAlpha:1})
              .staggerFrom($s.sm.circles  , 0.6, {drawSVG:"0", delay:1}, 0)
              .staggerFrom($s.edges.bottom, 0.2, {drawSVG:"0", autoAlpha:1}, 0.2)
              .staggerFrom($s.md.circles  , 0.6, {drawSVG:"100% 100%"}, 0)
              .staggerFrom($s.edges.top   , 0.2, {drawSVG:"100% 100%", autoAlpha:1}, 0)
              .staggerFrom($s.lg.circles  , 0.6, {drawSVG:"0"}, 0)
              .staggerFrom($s.tips.all    , 0.1, {drawSVG:"0", autoAlpha:1}, 0)
              .to($s.left.el , 0.2, {x:'-50'}, 3.8)
              .to($s.right.el, 0.2, {x:'50'}, 3.8)
              .to($s.right.el, 0.8, {y:'-70', rotationX : '180deg'}, 4.0)
              .to($s.right.circles, 0.2, {stroke:'#2A74DD'}, 4.1)
              .to($s.right.edges.all, 0.2, {stroke:'#2A74DD'}, 4.1)
              .to($s.right.tips.all , 0.2, {stroke:'#2A74DD'}, 4.1)
              .from($h1   , 1.3, {fontSize:0, ease:Elastic.easeOut});

    });

    function jqElement(element, isSide, svg) {
        this.el      = element;

        this.circles = this.el.find('path.half-circle');
        this.tips   = { all   : this.el.find('line.tip')
                      , top   : this.el.find('line.tip.top-tip')
                      , bottom: this.el.find('line.tip.bottom-tip')
                      };
        if(svg){
          this.right   = new jqElement(this.el.find('g#right' ), true);
          this.left    = new jqElement(this.el.find('g#left'), true);
        }
        if(isSide) {
          this.lg     = new jqElement(this.el.find('g.large')   );
          this.sm     = new jqElement(this.el.find('g.small')   );
          this.md     = new jqElement(this.el.find('g.medium')  );

          this.edges  = { all   : this.el.find('line.edge')
                        , top   : this.el.find('line.edge.top-edge')
                        , bottom: this.el.find('line.edge.bottom-edge')
                        };
        }
    }

}).call(this);