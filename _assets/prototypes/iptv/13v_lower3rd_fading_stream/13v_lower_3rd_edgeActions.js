
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){$(this.lookupSelector("stage")).css({"margin-left":"auto","margin-top":"20px","margin-right":"auto"});$("body").css("background-color","#cccccc");var vid=$("<img width='1280' height='720' src='/assets/images/iptv/doctorwho.jpg'>");sym.$("video").append(vid);});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var UP=38;var DOWN=40;var LEFT=37;var RIGHT=39;var SPACE=32;var BACK=66;var RED=82;$(document).keydown(function(e)
{console.log(RightKey);if(e.which==UP)
{if(UpKey!=0)
{sym.playReverse(UpKey);}}
else if(e.which==DOWN)
{if(DownKey!=0)
{sym.play(DownKey);}}
else if(e.which==LEFT)
{if(LeftKey!=0)
{sym.playReverse(LeftKey);}}
else if(e.which==RIGHT)
{if(RightKey!=0)
{sym.play(RightKey);}}
else if(e.which==SPACE)
{if(SelectKey!=0)
{sym.play(SelectKey);}}
else if(e.which==BACK)
{if(BackKey!=0)
{sym.play(BackKey);}}
else if(e.which==RED)
{if(BackKey!=0)
{sym.play(RedKey);}}});sym.$("title_01").html("Australia with Simon Reeve");sym.$("channel_brand_01").html("BBC TWO");sym.$("title_focus_01").html("Australia with Simon Reeve");sym.$("episode_01").html("Episode 2");sym.$("series_episode_01").html("Series 1, Episode 2");sym.$("footer_txt_01").html("FIRST SHOWN: 10/06/13");sym.$("description_01").html("2/3 Simon travels from Darwin to the Cape York Peninsula, and on to the Great Barrier Reef.");sym.$("title_02").html("Call The Midwife");sym.$("channel_brand_02").html("BBC ONE");sym.$("title_focus_02").html("Call The Midwife");sym.$("episode_02").html("Series 1, 3 Episodes");sym.$("series_episode_02").html("Series 1, 3 Episodes");sym.$("footer_txt_02").html("FIRST SHOWN: 10/06/13");sym.$("description_02").html("Drama set in London's East End during the 1950s, based on the memoirs of Jennifer Worth.");sym.$("title_03").html("Call The Midwife");sym.$("channel_brand_03").html("BBC ONE");sym.$("title_focus_03").html("Call The Midwife");sym.$("episode_03").html("Episode 1");sym.$("series_episode_03").html("Series 1, Episode 1");sym.$("footer_txt_03").html("FIRST SHOWN: 10/06/13");sym.$("description_03").html("1/6 Newly qualified midwife Jenny arrives in the East End to embark on a challenging career.");sym.$("title_04").html("Call The Midwife");sym.$("channel_brand_04").html("BBC ONE");sym.$("title_focus_04").html("Call The Midwife");sym.$("episode_04").html("Episode 2");sym.$("series_episode_04").html("Series 1, Episode 2");sym.$("footer_txt_04").html("FIRST SHOWN: 10/06/13");sym.$("description_04").html("2/6 As Jenny Lee settles into her role, there is a new arrival at Nonnatus House.");sym.$("title_05").html("Call The Midwife");sym.$("channel_brand_05").html("BBC ONE");sym.$("title_focus_05").html("Call The Midwife");sym.$("episode_05").html("Episode 3");sym.$("series_episode_05").html("Series 1, Episode 3");sym.$("footer_txt_05").html("FIRST SHOWN: 10/06/13");sym.$("description_05").html("3/6 Jenny is placed on the district nursing roster for a few weeks.");sym.$("title_06").html("Sherlock: A Study in Pink");sym.$("channel_brand_06").html("BBC ONE");sym.$("title_focus_06").html("Sherlock: A Study in Pink");sym.$("episode_06").html("Episode 1");sym.$("series_episode_06").html("Series 1, Episode 1");sym.$("footer_txt_06").html("FIRST SHOWN: 10/06/13");sym.$("description_06").html("1/3 Dr Watson and Sherlock Holmes meet, and tackle the case of the Impossible Suicides.");sym.getSymbol('item_03').$("title_07").html("Africa");sym.getSymbol('item_03').$("channel_brand_07").html("BBC ONE");sym.getSymbol('item_03').$("title_focus_07").html("Africa");sym.getSymbol('item_03').$("episode_07").html("Episode 5, Congo");sym.getSymbol('item_03').$("series_episode_07").html("Series 1, Episode 5");sym.getSymbol('item_03').$("footer_txt_07").html("FIRST SHOWN: 10/06/13");sym.getSymbol('item_03').$("description_07").html("The very heart of Africa is covered in dense tropical rainforest.");sym.getSymbol('item_04').$("title_08").html("Sweat the Small Stuff");sym.getSymbol('item_04').$("channel_brand_08").html("BBC THREE");sym.getSymbol('item_04').$("title_focus_08").html("Sweat the Small Stuff");sym.getSymbol('item_04').$("episode_08").html("Episode 8");sym.getSymbol('item_04').$("series_episode_08").html("Series 4, Episode 8");sym.getSymbol('item_04').$("footer_txt_08").html("FIRST SHOWN: 10/06/13");sym.getSymbol('item_04').$("description_08").html("Nick Grimshaw hosts the panel show that makes a big deal about the little things in life.");sym.getSymbol('item_05').$("title_09").html("Africa");sym.getSymbol('item_05').$("channel_brand_09").html("BBC TWO");sym.getSymbol('item_05').$("title_focus_09").html("Africa");sym.getSymbol('item_05').$("episode_09").html("Episode 2, Savannah");sym.getSymbol('item_05').$("series_episode_09").html("Series 1, Episode 2");sym.getSymbol('item_05').$("footer_txt_09").html("FIRST SHOWN: 10/06/13");sym.getSymbol('item_05').$("description_09").html("2/6 David Attenborough looks at the unique and constantly changing landscape of East Africa.");var myLabels=['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10'];var symbolLabels=['in','focus','out'];});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){LeftKey=0
RightKey=0
UpKey=14999
DownKey=0
SelectKey=15001
BackKey=15001
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18500,function(sym,e){LeftKey=16500
RightKey=0
UpKey=0
DownKey=0
SelectKey=15998
BackKey=0
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){LeftKey=0
RightKey=0
UpKey=0
DownKey=0
SelectKey=0
BackKey=0});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){LeftKey=0
RightKey=2500
UpKey=0
DownKey=0
SelectKey=2500
BackKey=0
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){LeftKey=0
RightKey=2501
UpKey=0
DownKey=0
SelectKey=0
BackKey=0});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){LeftKey=2999
RightKey=16001
UpKey=0
DownKey=0
SelectKey=5501
BackKey=0});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){LeftKey=2999
RightKey=16001
UpKey=0
DownKey=0
SelectKey=5501
BackKey=0
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6500,function(sym,e){LeftKey=6499
RightKey=0
UpKey=0
DownKey=9001
SelectKey=9001
BackKey=0});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){LeftKey=0
RightKey=0
UpKey=0
DownKey=0
SelectKey=0
BackKey=0});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){LeftKey=0
RightKey=2501
UpKey=0
DownKey=0
SelectKey=2501
BackKey=0});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8994,function(sym,e){LeftKey=6499
RightKey=0
UpKey=0
DownKey=9001
SelectKey=9001
BackKey=6499
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9500,function(sym,e){LeftKey=6499
RightKey=0
UpKey=9499
DownKey=12001
SelectKey=12001
BackKey=6499});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){LeftKey=6499
RightKey=0
UpKey=9499
DownKey=12001
SelectKey=12001
BackKey=6499
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){LeftKey=15001
RightKey=0
UpKey=12499
DownKey=0
SelectKey=15001
BackKey=15001});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16000,function(sym,e){LeftKey=2999
RightKey=16001
UpKey=0
DownKey=0
SelectKey=4501
BackKey=0
sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16496,function(sym,e){LeftKey=16499
RightKey=0
UpKey=0
DownKey=0
SelectKey=15998
BackKey=0});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","keyup",function(sym,e){var UP=38;var DOWN=40;var LEFT=37;var RIGHT=39;var SPACE=32;var BACK=66;var RED=82;if(e.which==UP)
{UpKey=0}
else if(e.which==DOWN)
{DownKey=0}
else if(e.which==LEFT)
{LeftKey=0}
else if(e.which==RIGHT)
{RightKey=0}
else if(e.which==SPACE)
{SelectKey=0}
else if(e.which==BACK)
{BackKey=0}
else if(e.which==RED)
{RedKey=0}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'item_01'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("item_01");
//Edge symbol end:'item_01'

//=========================================================

//Edge symbol: 'collections'
(function(symbolName){})("collections");
//Edge symbol end:'collections'

//=========================================================

//Edge symbol: 'SymbCollection'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();if(sym.getParentSymbol().getVariable("currentLabel")=="1")
{sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();if(sym.getParentSymbol().getVariable("currentLabel")=="2")
{sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.stop();if(sym.getParentSymbol().getVariable("currentLabel")=="3")
{sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();if(sym.getParentSymbol().getVariable("currentLabel")=="4")
{sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6301,function(sym,e){if(sym.getParentSymbol().getVariable("currentLabel")=="5")
{sym.stop();}});
//Edge binding end
})("SymbCollection");
//Edge symbol end:'SymbCollection'

//=========================================================

//Edge symbol: 'btn5'
(function(symbolName){})("btn5");
//Edge symbol end:'btn5'

//=========================================================

//Edge symbol: 'btn4'
(function(symbolName){})("btn4");
//Edge symbol end:'btn4'

//=========================================================

//Edge symbol: 'btn3'
(function(symbolName){})("btn3");
//Edge symbol end:'btn3'

//=========================================================

//Edge symbol: 'btn2'
(function(symbolName){})("btn2");
//Edge symbol end:'btn2'

//=========================================================

//Edge symbol: 'btn1'
(function(symbolName){})("btn1");
//Edge symbol end:'btn1'

//=========================================================

//Edge symbol: 'item_01_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();});
//Edge binding end
})("item_03");
//Edge symbol end:'item_03'

//=========================================================

//Edge symbol: 'item_01_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();});
//Edge binding end
})("item_02");
//Edge symbol end:'item_02'

//=========================================================

//Edge symbol: 'numbers'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();if(sym.getParentSymbol().getVariable("currentLabel")=="2")
{sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();if(sym.getParentSymbol().getVariable("currentLabel")=="3")
{sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6348,function(sym,e){sym.stop();if(sym.getParentSymbol().getVariable("currentLabel")=="4")
{sym.stop();}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6848,function(sym,e){sym.stop();if(sym.getParentSymbol().getVariable("currentLabel")=="5")
{sym.stop();}});
//Edge binding end
})("numbers");
//Edge symbol end:'numbers'

//=========================================================

//Edge symbol: 'video'
(function(symbolName){})("video");
//Edge symbol end:'video'
})(jQuery,AdobeEdge,"lower_third");
