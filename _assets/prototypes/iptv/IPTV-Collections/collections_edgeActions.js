/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         if (e.which == 32) {
         	sym.play();
         	// do something
         }

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "stop", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'focus-panel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("focus-panel");
   //Edge symbol end:'focus-panel'

   //=========================================================
   
   //Edge symbol: 'double_height'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_double-height}", "click", function(sym, e) {
         if (sym.isPlaying())
         	sym.stop();
         else
         	sym.play();

      });
      //Edge binding end

   })("double_height");
   //Edge symbol end:'double_height'

   //=========================================================
   
   //Edge symbol: 'double_height_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_single-height}", "click", function(sym, e) {
         if (sym.isPlaying())
         	sym.stop();
         else
         	sym.play();

      });
      //Edge binding end

   })("single_height");
   //Edge symbol end:'single_height'

})(jQuery, AdobeEdge, "EDGE-35807246");