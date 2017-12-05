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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         
         
         
         sym.$(document).keydown(function(e){
         
         	if (e.which==UP){
         
         
         
         	}
         	else if (e.which==DOWN)
         	{
         
         
         	}
         	else if (e.which==LEFT)
         	{
         
         
         
         	}
         	else if (e.which==RIGHT)
         	{
         	sym.playReverse(2999);
         	
         
         	}
         	else if (e.which==SPACE)
         	{
         
         	}
         	else if (e.which==BACK)
         	{
         
         	}
         	else if (e.which==RED)
         	{
         
         
         
         	}
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         var UP = 38;
         var DOWN = 40;
         var LEFT = 37;
         var RIGHT = 39;
         var SPACE = 32;
         var BACK = 66;
         var RED = 82;
         
         sym.$(document).keydown(function(e){
         
         	if (e.which==UP){
         
         			
         
         	}
         	else if (e.which==DOWN)
         	{
         		
         			
         	}
         	else if (e.which==LEFT)
         	{
         		
         					
         		
         	}
         	else if (e.which==RIGHT)
         	{
         	sym.play();
         	
         	}
         	else if (e.which==SPACE)
         	{
         	
         	}
         	else if (e.which==BACK)
         	{
         		
         	}
         	else if (e.which==RED)
         	{
         		
         
         		
         	}
         });
         
         
         
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         
         sym.$(document).keydown(function(e){
         
         	if (e.which==UP){
         
         
         
         	}
         	else if (e.which==DOWN)
         	{
         
         
         	}
         	else if (e.which==LEFT)
         	{
         
         
         
         	}
         	else if (e.which==RIGHT)
         	{
         sym.play(1);
         
         
         	}
         	else if (e.which==SPACE)
         	{
         
         	}
         	else if (e.which==BACK)
         	{
         
         	}
         	else if (e.which==RED)
         	{
         
         
         
         	}
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         
         
         sym.stop();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         $(this.lookupSelector("stage")).css({"margin-left":"auto","margin-top":"20px","margin-right":"auto"});
         $("body").css("background-color","#cccccc");
         
         
         
         
         var vid = $("<video width='1280' height='720' autoplay='autoplay'>" +
         "<source src='video/doctorwho.mp4' type='video/mp4' />" +
         
            "This browser is not compatible with HTML 5" +
         "</video>");
         
         sym.$("video").append(vid);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'video'
   (function(symbolName) {   
   
   })("video");
   //Edge symbol end:'video'

})(jQuery, AdobeEdge, "collections");