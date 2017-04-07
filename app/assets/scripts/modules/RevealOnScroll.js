import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
   constructor(element , offset) {
      this.itemsToReveal = element;
      this.offsetPercentage = offset;
      this.hideInitially();
      this.createWaypoints();
   }

   hideInitially() {
      this.itemsToReveal.addClass('reveal-item');
   }

   createWaypoints(){
      let that = this;
      this.itemsToReveal.each(function(){
         var self = this;
      console.log(this);
         new Waypoint({
            element: self,
            handler: function(){
               $(self).addClass("reveal-item--is-visible");
            },
            offset: that.offsetPercentage
         });
   });
   }
}

export default RevealOnScroll;
