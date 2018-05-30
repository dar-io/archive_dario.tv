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
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var stageHeight = sym.$('Stage').height(); // Set a variable for the height of the stage
         
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             var stageWidth = stage.width(); // Get the stage width
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var rescale = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
         
         
         
         
         
         // Rescale the stage!
         	 stage.css('transform', 'scale(' + rescale + ')'); 
             stage.css(  '-o-transform', 'scale(' + rescale + ')');
         	 stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
         	 stage.css('-moz-transform', 'scale(' + rescale + ')');
             stage.css('-o-transform', 'scale(' + rescale + ')');
             parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }
         
         // Make it happen when the browser resizes
         $(window).on('resize', function(){ 
         	 scaleStage(); 
         });
         
         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         });
         
         
         
         var vid = $("<video width='1280' height='720'  autoplay='autoplay' muted='muted'>" + "<source src='video/doctorwho.mp4' type='video/mp4' />" +
         
            "This browser is not compatible with HTML 5" +
         "</video>");
         
         sym.$("video").append(vid);
         $("video").prop('muted', true);
         
         
         
         sym.$('webPageDisplayPort').html('<ul><li>item</><li>item</><li>item</>');

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
         
         var UP = 38;
         var DOWN = 40;
         var LEFT = 37;
         var RIGHT = 39;
         var SPACE = 32;
         var BACK = 66;
         var RED = 82;
         var SymUpkey = SymUpkey;
         
         $(document).keydown(function(e)
         {
         	if (e.which==UP)
         	{
         		if(UpKey != 'inactiveKey')
         		{
         			sym.play(UpKey);
         			}
         		else if(ReverseUpKey != 'inactiveKey')
         		{			
         			sym.playReverse(ReverseUpKey);
         			}
         	}
         	else if (e.which==DOWN)
         	{
         		if(DownKey != 'inactiveKey')
         		{		
         			sym.play(DownKey);
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(LeftKey != 'inactiveKey')
         		{			
         			sym.play(LeftKey);			
         			}
         		else if(ReverseLeftKey != 'inactiveKey')
         		{			
         			sym.playReverse(ReverseLeftKey);
         			}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(RightKey != 'inactiveKey')
         		{		
                 sym.play(RightKey);
         			}	
         		else if(ReverseRightKey != 'inactiveKey')
         		{
         			sym.playReverse(ReverseRightKey);
         			}	
         	}
         	else if (e.which==SPACE)
         	{
         		if(SelectKey != 'inactiveKey')
         		{		
         			sym.play(SelectKey);	
         			}
         	}
         	else if (e.which==BACK)
         	{
         		if(BackKey != 'inactiveKey')
         		{		
         			sym.play(BackKey);		
         			}
         	}
         	else if (e.which==RED)
         	{
         		if(RedKey != 'inactiveKey')
         		{		
         			sym.play(RedKey);	
         			}
         	}
         });
         /////////////////////// 01 ////////////////////////////////
         $(document).keydown(function(e)
         {
         	if (e.which==SPACE)
         	{
         		if(SymSelectKey != 'inactiveKey')
         		{
         			sym.getSymbol(symToPlay).play(SymSelectKey);	
         			}
         	}
         	else if (e.which==DOWN)
         	{
         		if(SymDownKey != 'inactiveKey')
         		{			
         			sym.getSymbol(symToPlay).play(SymDownKey);	
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(SymLeftKey != 'inactiveKey')
         		{	
         			sym.getSymbol(symToPlay).play(SymLeftKey);
         			}
         		else if(SymReverseLeftKey != 'inactiveKey')
         		{
         			sym.getSymbol(symToPlay).playReverse(SymReverseLeftKey);			
         			}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(SymRightKey != 'inactiveKey')
         		{
         			sym.getSymbol(symToPlay).play(SymRightKey);				
         			}	
         		else if(SymReverseRightKey != 'inactiveKey')
         		{	
         			sym.getSymbol(symToPlay).playReverse(SymReverseRightKey);	
         			}	
         	}
         	else if (e.which==UP)
         	{
         		if(SymUpKey != 'inactiveKey')
         		{
         			sym.getSymbol(symToPlay).play(SymUpKey);				
         			}	
         		else if(SymReverseUpKey != 'inactiveKey')
         		{	
         			sym.getSymbol(symToPlay).playReverse(SymReverseUpKey);	
         			}	
         	}
         	else if (e.which==BACK)
         	{
         		if(SymBackKey != 'inactiveKey')
         		{	
         			sym.getSymbol(symToPlay).play(SymBackKey);				
         		}
         	}
         	else if (e.which==RED)
         	{
         		if(SymRedKey != 'inactiveKey')
         		{			
         			sym.getSymbol(symToPlay).play(SymRedKey);	
         		}
         	}
         });
         /////////////////////// 02 ////////////////////////////////
         	$(document).keydown(function(e)
         	{
         	if (e.which==UP){
         		if(SymUpKey2 != 'inactiveKey')
         		{		
         			sym.getSymbol(symToPlay2).play(SymUpKey2);	
         			}
         	}
         	else if (e.which==DOWN)
         	{
         		if(SymDownKey2 != 'inactiveKey')
         		{			
         			sym.getSymbol(symToPlay2).play(SymDownKey2);	
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(SymLeftKey2 != 'inactiveKey')
         		{	
         			sym.getSymbol(symToPlay2).play(SymLeftKey2);
         		}
         		else if(SymReverseLeftKey2 != 'inactiveKey')
         		{
         			sym.getSymbol(symToPlay2).playReverse(SymReverseLeftKey2);			
         		}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(SymRightKey2 != 'inactiveKey')
         		{
         			sym.getSymbol(symToPlay2).play(SymRightKey2);				
         		}	
         		else if(SymReverseRightKey2 != 'inactiveKey')
         		{	
         			sym.getSymbol(symToPlay2).playReverse(SymReverseRightKey2);	
         		}	
         	}
         	else if (e.which==SPACE)
         	{
         		if(SymSelectKey2 != 'inactiveKey')
         		{
         			sym.getSymbol(symToPlay2).play(SymSelectKey2);	
         		}
         	}
         	else if (e.which==BACK)
         	{
         		if(SymBackKey2 != 'inactiveKey')
         		{	
         			sym.getSymbol(symToPlay2).play(SymBackKey2);				
         		}
         	}
         	else if (e.which==RED)
         	{
         		if(SymRedKey2 != 'inactiveKey')
         		{			
         			sym.getSymbol(symToPlay2).play(SymRedKey2);	
         		}
         	}
         });
         
         // ITEM_01
         sym.$("title_01").html("Australia with Simon Reeve");
         sym.$("channel_brand_01").html("BBC TWO");
         sym.$("title_focus_01").html("Australia with Simon Reeve");
         sym.$("episode_01").html("Episode 2");
         sym.$("series_episode_01").html("Series 1, Episode 2");
         sym.$("footer_txt_01").html("FIRST SHOWN: 10/06/13");
         sym.$("description_01").html("2/3 Simon travels from Darwin to the Cape York Peninsula, and on to the Great Barrier Reef.");
         
         // ITEM_02 COLLECTIONS
         sym.$("title_02").html("Call The Midwife");
         sym.$("channel_brand_02").html("BBC ONE");
         sym.$("title_focus_02").html("Call The Midwife");
         sym.$("episode_02").html("5 Episodes");
         sym.$("series_episode_02").html("Series 1, 3 Episodes");
         sym.$("footer_txt_02").html("FIRST SHOWN: 10/06/13");
         sym.$("description_02").html("Drama set in London's East End during the 1950s, based on the memoirs of Jennifer Worth.");
         
         
         // ITEM_03 COLLECTIONS
         sym.$("title_03").html("Call The Midwife");
         sym.$("channel_brand_03").html("BBC ONE");
         sym.$("title_focus_03").html("Call The Midwife");
         sym.$("episode_03").html("Episode 1");
         sym.$("series_episode_03").html("Series 1, Episode 1");
         sym.$("footer_txt_03").html("FIRST SHOWN: 10/06/13");
         sym.$("description_03").html("1/6 Newly qualified midwife Jenny arrives in the East End to embark on a challenging career.");
         
         
         // ITEM_04 COLLECTIONS
         sym.$("title_04").html("Call The Midwife");
         sym.$("channel_brand_04").html("BBC ONE");
         sym.$("title_focus_04").html("Call The Midwife");
         sym.$("episode_04").html("Episode 2");
         sym.$("series_episode_04").html("Series 1, Episode 2");
         sym.$("footer_txt_04").html("FIRST SHOWN: 10/06/13");
         sym.$("description_04").html("2/6 As Jenny Lee settles into her role, there is a new arrival at Nonnatus House.");
         
         
         // ITEM_05 COLLECTIONS
         sym.$("title_05").html("Call The Midwife");
         sym.$("channel_brand_05").html("BBC ONE");
         sym.$("title_focus_05").html("Call The Midwife");
         sym.$("episode_05").html("Episode 3");
         sym.$("series_episode_05").html("Series 1, Episode 3");
         sym.$("footer_txt_05").html("FIRST SHOWN: 10/06/13");
         sym.$("description_05").html("3/6 Jenny is placed on the district nursing roster for a few weeks.");
         
         
         // ITEM_05 
         sym.$("title_06").html("Call The Midwife");
         sym.$("channel_brand_06").html("BBC ONE");
         sym.$("title_focus_06").html("Sherlock: A Study in Pink");
         sym.$("episode_06").html("Episode 4");
         sym.$("series_episode_06").html("Series 1, Episode 1");
         sym.$("footer_txt_06").html("FIRST SHOWN: 10/06/13");
         sym.$("description_06").html("1/3 Dr Watson and Sherlock Holmes meet, and tackle the case of the Impossible Suicides.");
         
         
         // ITEM_07
         sym.$("title_07").html("Call The Midwife");
         sym.$("channel_brand_07").html("BBC ONE");
         sym.$("title_focus_07").html("Africa");
         sym.$("episode_07").html("Episode 5");
         sym.$("series_episode_07").html("Series 1, Episode 5");
         sym.$("footer_txt_07").html("FIRST SHOWN: 10/06/13");
         sym.$("description_07").html("The very heart of Africa is covered in dense tropical rainforest.");
         
         
         // ITEM_08
         sym.getSymbol('item_04').$("title_08").html("Sweat the Small Stuff");
         sym.getSymbol('item_04').$("channel_brand_08").html("BBC THREE");
         sym.getSymbol('item_04').$("title_focus_08").html("Sweat the Small Stuff");
         sym.getSymbol('item_04').$("episode_08").html("Episode 8");
         sym.getSymbol('item_04').$("series_episode_08").html("Series 4, Episode 8");
         sym.getSymbol('item_04').$("footer_txt_08").html("FIRST SHOWN: 10/06/13");
         sym.getSymbol('item_04').$("description_08").html("Nick Grimshaw hosts the panel show that makes a big deal about the little things in life.");
         
         
         // ITEM_09
         sym.getSymbol('item_05').$("title_09").html("Africa");
         sym.getSymbol('item_05').$("channel_brand_09").html("BBC TWO");
         sym.getSymbol('item_05').$("title_focus_09").html("Africa");
         sym.getSymbol('item_05').$("episode_09").html("Episode 2, Savannah");
         sym.getSymbol('item_05').$("series_episode_09").html("Series 1, Episode 2");
         sym.getSymbol('item_05').$("footer_txt_09").html("FIRST SHOWN: 10/06/13");
         sym.getSymbol('item_05').$("description_09").html("2/6 David Attenborough looks at the unique and constantly changing landscape of East Africa.");
         
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end
		
      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         	SymUpkey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         // insert code here
         LeftKey = 'inactiveKey' 
         RightKey = 'N1'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "symTopNav"
         symToPlay2 = "NONE"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'Home'
         
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         
         sym.stop();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'N2'
         UpKey = 'inactiveKey' 
         DownKey = 'C1'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'N2'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "symTopNav"
         symToPlay2 = "symItem_01"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'Sochi_2014'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'out'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'Sochi_2014'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'in'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         
         sym.stop();
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         LeftKey = 'inactiveKey' 
         RightKey = 'N4'
         UpKey = 'inactiveKey' 
         DownKey = 'inactiveKey' 
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'N4'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "symTopNav"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'SixNations'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'SixNations'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         	symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         LeftKey = 'inactiveKey' 
         RightKey = 'N5'
         UpKey = 'inactiveKey' 
         DownKey = 'inactiveKey' 
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'N5'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "symTopNav"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'Search'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'Search'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         LeftKey = 'inactiveKey' 
         RightKey = 'N6'
         UpKey = 'play'
         DownKey = 'start'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'N6'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "symTopNav"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'Settings'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'Settings'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         	
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'N7'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "symTopNav"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'Settings'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         	
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'N3'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'N3'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "symTopNav"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'BritishGP'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'BritishGP'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         	symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 242, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 260, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 490, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         symToPlay2 = "NONE"
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 509, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 740, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 759, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 988, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1011, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1240, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1258, function(sym, e) {
         // insert code here
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey'
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'inactiveKey'
         	ReverseUpKey = 'inactiveKey'
         
         
         // SIMBOL VARIABLE
         symToPlay = "none"
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'inactiveKey'
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         
         LeftKey = 'inactiveKey' 
         RightKey = 'inactiveKey'
         UpKey = 'inactiveKey' 
         DownKey = 'inactiveKey'
         
         	// Other Keys
         	SelectKey = 'inactiveKey'
         	BackKey = 'inactiveKey'
         	RedKey =  'inactiveKey'
         
         	// Reverse Timeline
         	ReverseLeftKey = 'inactiveKey'
         	ReverseRightKey = 'N2Reverse'
         	ReverseUpKey = 'inactiveKey'
         
         // SIMBOL VARIABLE
         symToPlay = "symTopNav"
         symToPlay2 = 'inactiveKey'
         
         // Symbol Keys
         SymLeftKey = 'inactiveKey'
         SymRightKey = 'inactiveKey'
         SymUpkey = 'inactiveKey'
         SymDownKey = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey = 'inactiveKey'
         	SymBackKey = 'inactiveKey'
         	SymRedKey = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey = 'inactiveKey'
         	SymReverseRightKey = 'inactiveKey'
         	SymReverseUpKey = 'sochiReverse'
         
         // Symbol Keys
         SymLeftKey2 = 'inactiveKey'
         SymRightKey2 = 'inactiveKey'
         SymUpkey2 = 'inactiveKey'
         SymDownKey2 = 'inactiveKey'
         
         	// Non Arrow Keys
         	SymSelectKey2 = 'inactiveKey'
         	SymBackKey2 = 'inactiveKey'
         	SymRedKey2 = 'inactiveKey'
         
         	// Reverse Timeline
         	SymReverseLeftKey2 = 'inactiveKey'
         	SymReverseRightKey2 = 'inactiveKey'
         	SymReverseUpKey2 = 'inactiveKey'
         	
         sym.stop();
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1625, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'item_01'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("item_01");
   //Edge symbol end:'item_01'

   //=========================================================
   
   //Edge symbol: 'collections'
   (function(symbolName) {   
   
   })("collections");
   //Edge symbol end:'collections'

   //=========================================================
   
   //Edge symbol: 'SymbCollection'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="1")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="2")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="3")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="4")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6301, function(sym, e) {
         if (sym.getParentSymbol().getVariable("currentLabel")=="5")
         {
           sym.stop();
         }

      });
      //Edge binding end

   })("SymbCollection");
   //Edge symbol end:'SymbCollection'

   //=========================================================
   
   //Edge symbol: 'btn5'
   (function(symbolName) {   
   
   })("btn5");
   //Edge symbol end:'btn5'

   //=========================================================
   
   //Edge symbol: 'btn4'
   (function(symbolName) {   
   
   })("btn4");
   //Edge symbol end:'btn4'

   //=========================================================
   
   //Edge symbol: 'btn3'
   (function(symbolName) {   
   
   })("btn3");
   //Edge symbol end:'btn3'

   //=========================================================
   
   //Edge symbol: 'btn2'
   (function(symbolName) {   
   
   })("btn2");
   //Edge symbol end:'btn2'

   //=========================================================
   
   //Edge symbol: 'btn1'
   (function(symbolName) {   
   
   })("btn1");
   //Edge symbol end:'btn1'

   //=========================================================
   
   //Edge symbol: 'item_01_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("item_03");
   //Edge symbol end:'item_03'

   //=========================================================
   
   //Edge symbol: 'item_01_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("item_02");
   //Edge symbol end:'item_02'

   //=========================================================
   
   //Edge symbol: 'numbers'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="2")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="3")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6348, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="4")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6848, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="5")
         {
           sym.stop();
         }

      });
      //Edge binding end

   })("numbers");
   //Edge symbol end:'numbers'

   //=========================================================
   
   //Edge symbol: 'video'
   (function(symbolName) {   
   
   })("video");
   //Edge symbol end:'video'

   //=========================================================
   
   //Edge symbol: 'left_carousel'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

   })("left_carousel");
   //Edge symbol end:'left_carousel'

   //=========================================================
   
   //Edge symbol: 'currentPosition'
   (function(symbolName) {   
   
   })("currentPosition");
   //Edge symbol end:'currentPosition'

//=========================================================
   //Edge symbol: 'TimelineControler'
   (function(symbolName) {


      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // flag of use keyboard event.
         var useKeyBoardEvent = true;
         // key code of right/left key
         var KEY_RIGHT = 39;
         var KEY_LEFT =  37;
         // params
         var power = 2;
         var declineRate = 0.5;
         var speedWidth = 10;
         
         // try to hide the location bar at Safari,if need, comment out it. 
         // setTimeout(function() { window.scrollTo(0, 0); }, 250);
         
         var fps = 60;
         var interval = (1000/fps)|0;
         var speed = 0;
         var isKeyPress = false, isMousePress = false;
         
         var centerX,target,v;
         
         if(useKeyBoardEvent)$(window).bind("keydown",onStartControll).bind("keyup",onStopControll);  
         
         var el = $(sym.getSymbolElement());
         el.mousedown(onStartControll)
           .mouseup(onStopControll)
           .mouseout(onStopControll)
           .mousemove(onMouseMove)
           .bind("touchstart",onStartControll)
           .bind("touchmove",onMouseMove)
           .bind("touchend",onStopControll);
         
         function onStartControll(evt){
           evt.preventDefault();
           target = sym.getParentSymbol();
           centerX = el.offset().left+el.width()/2;
           if(evt.type=="keydown" && isKeyPress===false){
             speed = 
               (evt.which==KEY_RIGHT)*interval*power
                  + (evt.which==KEY_LEFT)*interval*-1*power;
             speed|=0;
             isKeyPress = true;
           }else if(evt.type=="mousedown" || evt.type=="touchstart"){
             isMousePress = true;
           }
           if(v===undefined)v=setInterval(onControll,interval);
         }
         function onStopControll(evt){
           if(evt.type=="keyup"){
             isKeyPress = false;
           }else{
             isMousePress = false;
           }
         }
         function onControll(){
           if(isKeyPress===false && isMousePress===false){
             speed = (speed*declineRate)|0;
             if(-1<speed && speed<1){
               clearInterval(v);
               v = undefined;
             }
           }
           var n = target.getPosition()+speed;
           if(-1<n && n<=target.getDuration())target.stop(n);
         }
         function onMouseMove(evt){
           evt.preventDefault();
           evt = (evt.originalEvent.touches && evt.originalEvent.touches[0]) || evt;
           if(isMousePress===true){
             speed = (((evt.clientX - centerX)/speedWidth)*power*interval)|0;
           }
         }
         

      });
      //Edge binding end

   })("TimelineController");
   //Edge symbol end:'TimelineController'

   //=========================================================
   
   //Edge symbol: 'symItem_01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("symItem_01");
   //Edge symbol end:'symItem_01'

   //=========================================================
   
   //Edge symbol: 'symTopNav'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code heresym.stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1618, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("symTopNav");
   //Edge symbol end:'symTopNav'

   //=========================================================
   
   //Edge symbol: 'symDoubleHeight_01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("symDoubleHeight_01");
   //Edge symbol end:'symDoubleHeight_01'

   //=========================================================
   
   //Edge symbol: 'symScheduleBox'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 375, function(sym, e) {
         // insert code here
         var Live = sym.$("Live");
         
         Live.css("font-weight", "bold");
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         var Live = sym.$("Live");
         
         Live.css("font-size", 100);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 625, function(sym, e) {
         // insert code here
         var Live = sym.$("Live");
         
         Live.css("font-weight", "bold");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 875, function(sym, e) {
         // insert code here
         var Live = sym.$("Live");
         
         Live.css("font-weight", "bold");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1125, function(sym, e) {
         // insert code here
         var Live = sym.$("Live");
         
         Live.css("font-weight", "bold");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1375, function(sym, e) {
         // insert code here
         var Live = sym.$("Live");
         
         Live.css("font-weight", "bold");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("symScheduleBox");
   //Edge symbol end:'symScheduleBox'

})(jQuery, AdobeEdge, "lower_third");