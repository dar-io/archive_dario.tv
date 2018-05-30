/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['Helvetica Neue']='';
   fonts['Helvetica Neue, Helvetica, Arial']='';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'iptv-grid',
            type:'image',
            rect:['0px','0px','1280px','720px','auto','auto'],
            opacity:0.39254760742188,
            fill:["rgba(0,0,0,0)",im+"iptv-grid.png",'0px','0px']
         },
         {
            id:'video',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'schedule',
            type:'rect',
            rect:['108px','0px','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'text',
            display:'none',
            type:'image',
            rect:['405px','0px','513px','720px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text.png",'0px','0px']
         },
         {
            id:'collections',
            display:'none',
            type:'rect',
            rect:['413px','52px','auto','auto','auto','auto'],
            opacity:1
         }],
         symbolInstances: [
         {
            id:'schedule',
            symbolName:'symScheduleBox'
         },
         {
            id:'collections',
            symbolName:'symItem_01'
         },
         {
            id:'video',
            symbolName:'video'
         }
         ]
      },
   states: {
      "Base State": {
         "${_SubtitleCopy2}": [
            ["style", "top", '35px'],
            ["style", "font-size", '22px'],
            ["color", "color", 'rgba(145,149,151,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '35.29%'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ],
         "${_txt-channelCopy6}": [
            ["style", "line-height", 'normal'],
            ["style", "font-weight", '700'],
            ["style", "left", '12px'],
            ["style", "width", '276px'],
            ["style", "top", '15px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ],
         "${_Link_4Copy2}": [
            ["style", "top", '164px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_txt-bodyCopy6}": [
            ["style", "line-height", 'normal'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_txt-footerCopy5}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '257px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '0']
         ],
         "${_txt-title_episodeCopy5}": [
            ["style", "line-height", 'normal'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '182px'],
            ["style", "height", '25px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_collections}": [
            ["style", "top", '499px'],
            ["style", "opacity", '0'],
            ["style", "left", '405px'],
            ["style", "display", 'none']
         ],
         "${_txt-Sub-titleCopy6}": [
            ["style", "top", '262px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '22px']
         ],
         "${_iptv-grid}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.39254760742188'],
            ["style", "left", '0px']
         ],
         "${_txt-title_episodeCopy6}": [
            ["style", "line-height", 'normal'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '197px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_title_focus_02Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '24px'],
            ["style", "top", '44px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '339px']
         ],
         "${_series_episode_02Copy}": [
            ["style", "top", '68px'],
            ["style", "width", '241px'],
            ["style", "height", '29px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px']
         ],
         "${_txt-footerCopy6}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '272px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_txt-title_2Copy5}": [
            ["style", "line-height", 'normal'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '199px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '272px'],
            ["style", "opacity", '0']
         ],
         "${_txt-title_1Copy6}": [
            ["style", "line-height", 'normal'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '172px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_Link_5}": [
            ["style", "top", '215px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_title_02Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '24px'],
            ["style", "top", '212px'],
            ["style", "display", 'block'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '339px'],
            ["style", "opacity", '0']
         ],
         "${_txt-Sub-titleCopy5}": [
            ["style", "top", '247px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '22px']
         ],
         "${_Link_4}": [
            ["style", "top", '164px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_SochiTitle}": [
            ["style", "top", '0px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '29px'],
            ["style", "left", '2px'],
            ["style", "font-size", '32px']
         ],
         "${_Link_2}": [
            ["style", "top", '62px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_txt-title_2Copy6}": [
            ["style", "line-height", 'normal'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px'],
            ["style", "top", '214px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '272px']
         ],
         "${_Link_1Copy2}": [
            ["style", "top", '11px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["transform", "scaleX", '1'],
            ["style", "height", '26px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_Link_3}": [
            ["style", "top", '113px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '26px'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_video}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_text}": [
            ["style", "top", '0px'],
            ["style", "left", '405px'],
            ["style", "display", 'none']
         ],
         "${_series_episode_02}": [
            ["style", "top", '68px'],
            ["style", "width", '241px'],
            ["style", "height", '29px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px']
         ],
         "${_channel_brand_02}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '700'],
            ["style", "left", '16px'],
            ["style", "width", '276px'],
            ["style", "top", '12px'],
            ["style", "display", 'none'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "font-size", '18px']
         ],
         "${_SochiTitleCopy2}": [
            ["style", "top", '0px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '29px'],
            ["style", "left", '2px'],
            ["style", "font-size", '32px']
         ],
         "${_description_02Copy}": [
            ["style", "line-height", '26px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '111px'],
            ["style", "display", 'block'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '342px']
         ],
         "${_Link_3Copy2}": [
            ["style", "top", '113px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '26px'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_channel_brand_02Copy}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '700'],
            ["style", "left", '16px'],
            ["style", "width", '276px'],
            ["style", "top", '12px'],
            ["style", "display", 'none'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "font-size", '18px']
         ],
         "${_episode_02Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '58px'],
            ["style", "width", '272px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "display", 'block']
         ],
         "${_txt-bodyCopy5}": [
            ["style", "line-height", 'normal'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "width", '276px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "display", 'none']
         ],
         "${_description_02}": [
            ["style", "line-height", '26px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '111px'],
            ["style", "display", 'block'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '342px']
         ],
         "${_TitleCopy2}": [
            ["style", "top", '8px'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ],
         "${_schedule}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '108px']
         ],
         "${_footer_txt_02}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '239px'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_txt-title_1Copy5}": [
            ["style", "line-height", 'normal'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '157px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '260px']
         ],
         "${_Link_5Copy2}": [
            ["style", "top", '215px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_txt-channelCopy5}": [
            ["style", "line-height", 'normal'],
            ["style", "font-weight", '700'],
            ["style", "left", '12px'],
            ["style", "width", '276px'],
            ["style", "top", '0px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "font-size", '20px'],
            ["style", "opacity", '0']
         ],
         "${_footer_txt_02Copy}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '239px'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '720px'],
            ["style", "width", '1280px']
         ],
         "${_Link_2Copy2}": [
            ["style", "top", '62px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_Link_1}": [
            ["style", "top", '11px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["transform", "scaleX", '1'],
            ["style", "height", '26px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2311,
         autoPlay: true,
         labels: {
            "collections_video": 750,
            "collections_Text": 1000,
            "Link_3": 1500,
            "Link_4": 2111,
            "Link_5": 2311
         },
         timeline: [
            { id: "eid5299", tween: [ "style", "${_collections}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid5301", tween: [ "style", "${_collections}", "display", 'none', { fromValue: 'block'}], position: 984, duration: 0 },
            { id: "eid5303", tween: [ "style", "${_collections}", "top", '-8px', { fromValue: '499px'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid5305", tween: [ "style", "${_collections}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid5300", tween: [ "style", "${_text}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid5308", tween: [ "style", "${_text}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"item_01": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['8px','8px','304px','245px','auto','auto'],
      id: 'single-height',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         id: 'baboon_07',
         type: 'image',
         rect: ['-16px','-10px','111.8%','80.7%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/baboon.jpg','0px','0px']
      },
      {
         rect: ['0px','418px','323px','290px','auto','auto'],
         id: 'box-delay_07',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(118,118,118,1.00)','500','none','normal'],
         type: 'text',
         transform: [],
         id: 'footer_txt_07',
         text: 'FIRST SHOWN: 14/05/13',
         align: 'left',
         rect: ['12px','627px','278px','21px','auto','auto']
      },
      {
         rect: ['12px','508px','278px','119px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
         align: 'left',
         id: 'description_07',
         text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
         display: 'none',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','400','none','normal'],
         id: 'title_focus_07',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal'],
         id: 'title_07',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(17,17,17,1.00)','400','none','normal'],
         id: 'episode_07',
         text: 'Episode 3<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['5px','83px','241px','27px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(233,47,131,1.00)','500','none','normal'],
         id: 'series_episode_07',
         text: 'Series 9, Episode 3',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['12px','426px','278px','27px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
         id: 'channel_brand_07',
         text: 'BBC ONE<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','370px','56px','38px','auto','auto'],
         id: 'box-icon_07',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1.00)'],
         c: [
         {
            rect: ['15px','15px','25px','25px','auto','auto'],
            filter: [0.92988782051282,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
            id: 'iPlayer-05Copy2',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/iPlayer-01.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_episode_07}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12px'],
            ["style", "font-size", '22px'],
            ["style", "top", '176px'],
            ["style", "display", 'block'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_single-height}": [
            ["style", "top", '60px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "left", '48px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '272px']
         ],
         "${_series_episode_07}": [
            ["style", "top", '247px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '22px']
         ],
         "${_iPlayer-05Copy2}": [
            ["style", "top", '15px'],
            ["style", "height", '25px'],
            ["subproperty", "filter.invert", '0.934744'],
            ["style", "left", '15px'],
            ["style", "width", '25px']
         ],
         "${_title_07}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '153px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '260px']
         ],
         "${symbolSelector}": [
            ["style", "height", '272px'],
            ["style", "width", '368px']
         ],
         "${_footer_txt_07}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '257px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '0']
         ],
         "${_txt-bodyCopy}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "height", '96px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_channel_brand_07}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '12px'],
            ["style", "width", '276px'],
            ["style", "top", '0px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "font-size", '20px'],
            ["style", "opacity", '0']
         ],
         "${_box-icon_07}": [
            ["style", "top", '87px'],
            ["style", "height", '57px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${_txt-title_1Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '24px'],
            ["style", "top", '174px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_description_07}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "width", '276px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "height", '96px']
         ],
         "${_txt-title_2Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '199px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '272px']
         ],
         "${_txt-footerCopy}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '257px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_txt-title_episodeCopy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '182px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_title_focus_07}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '199px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '272px'],
            ["style", "opacity", '0']
         ],
         "${_baboon_07}": [
            ["style", "left", '-16px'],
            ["style", "top", '-10px']
         ],
         "${_box-delay_07}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '229px'],
            ["style", "top", '143px'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3250,
         autoPlay: true,
         labels: {
            "in": 0,
            "focus": 500,
            "out": 2500
         },
         timeline: [
            { id: "eid1731", tween: [ "style", "${_box-delay_07}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1732", tween: [ "style", "${_box-delay_07}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid1717", tween: [ "style", "${_box-delay_07}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid2168", tween: [ "style", "${_box-delay_07}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid2167", tween: [ "style", "${_box-delay_07}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
            { id: "eid676", tween: [ "style", "${_title_07}", "width", '339px', { fromValue: '260px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid38", tween: [ "style", "${_title_07}", "width", '478px', { fromValue: '339px'}], position: 1500, duration: 1000, easing: "easeOutCubic" },
            { id: "eid39", tween: [ "style", "${_title_07}", "width", '260px', { fromValue: '478px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid2311", tween: [ "style", "${_title_07}", "width", '260px', { fromValue: '260px'}], position: 3250, duration: 0 },
            { id: "eid501", tween: [ "style", "${_box-delay_07}", "top", '204px', { fromValue: '143px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid462", tween: [ "style", "${_box-delay_07}", "top", '0px', { fromValue: '204px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2165", tween: [ "style", "${_box-delay_07}", "top", '146px', { fromValue: '0px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1880", tween: [ "style", "${_title_07}", "height", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid1737", tween: [ "style", "${_single-height}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2258", tween: [ "style", "${_single-height}", "width", '272px', { fromValue: '368px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid603", tween: [ "style", "${_single-height}", "top", '0px', { fromValue: '60px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2255", tween: [ "style", "${_single-height}", "top", '60px', { fromValue: '0px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1721", tween: [ "style", "${_title_07}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1722", tween: [ "style", "${_title_07}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid472", tween: [ "style", "${_box-delay_07}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid1882", tween: [ "style", "${_box-delay_07}", "width", '368px', { fromValue: '368px'}], position: 2000, duration: 0 },
            { id: "eid2170", tween: [ "style", "${_box-delay_07}", "width", '368px', { fromValue: '368px'}], position: 2500, duration: 0 },
            { id: "eid2169", tween: [ "style", "${_box-delay_07}", "width", '368px', { fromValue: '368px'}], position: 3000, duration: 0 },
            { id: "eid454", tween: [ "style", "${_description_07}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid532", tween: [ "style", "${_description_07}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2161", tween: [ "style", "${_description_07}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid666", tween: [ "style", "${_episode_07}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2268", tween: [ "style", "${_episode_07}", "width", '272px', { fromValue: '272px'}], position: 3000, duration: 0 },
            { id: "eid1854", tween: [ "style", "${_series_episode_07}", "top", '279px', { fromValue: '247px'}], position: 0, duration: 498, easing: "easeOutCubic" },
            { id: "eid548", tween: [ "style", "${_series_episode_07}", "top", '68px', { fromValue: '271px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2144", tween: [ "style", "${_series_episode_07}", "top", '211px', { fromValue: '68px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid678", tween: [ "color", "${_episode_07}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 0, duration: 0 },
            { id: "eid679", tween: [ "color", "${_episode_07}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 500, duration: 0 },
            { id: "eid2269", tween: [ "color", "${_episode_07}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3000, duration: 0 },
            { id: "eid2270", tween: [ "color", "${_episode_07}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3250, duration: 0 },
            { id: "eid491", tween: [ "style", "${_channel_brand_07}", "top", '-77px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid432", tween: [ "style", "${_channel_brand_07}", "top", '13px', { fromValue: '217px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2138", tween: [ "style", "${_channel_brand_07}", "top", '157px', { fromValue: '13px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid434", tween: [ "style", "${_channel_brand_07}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250, easing: "easeOutCubic" },
            { id: "eid2139", tween: [ "style", "${_channel_brand_07}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250, easing: "easeOutCubic" },
            { id: "eid1911", tween: [ "style", "${_channel_brand_07}", "font-size", '20px', { fromValue: '20px'}], position: 2000, duration: 0 },
            { id: "eid2143", tween: [ "style", "${_channel_brand_07}", "font-size", '20px', { fromValue: '20px'}], position: 2500, duration: 0 },
            { id: "eid2142", tween: [ "style", "${_channel_brand_07}", "font-size", '18px', { fromValue: '18px'}], position: 3000, duration: 0 },
            { id: "eid450", tween: [ "style", "${_description_07}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid451", tween: [ "style", "${_description_07}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid561", tween: [ "style", "${_description_07}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250, easing: "easeOutCubic" },
            { id: "eid562", tween: [ "style", "${_description_07}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250, easing: "easeOutCubic" },
            { id: "eid2160", tween: [ "style", "${_description_07}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250, easing: "easeOutCubic" },
            { id: "eid2159", tween: [ "style", "${_description_07}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeOutCubic" },
            { id: "eid681", tween: [ "style", "${_title_focus_07}", "opacity", '0', { fromValue: '0'}], position: 1994, duration: 0 },
            { id: "eid560", tween: [ "style", "${_title_focus_07}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250, easing: "easeOutCubic" },
            { id: "eid2153", tween: [ "style", "${_title_focus_07}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250, easing: "easeOutCubic" },
            { id: "eid2152", tween: [ "style", "${_title_focus_07}", "opacity", '0', { fromValue: '0'}], position: 3006, duration: 0 },
            { id: "eid1756", tween: [ "style", "${_series_episode_07}", "left", '12px', { fromValue: '13px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2146", tween: [ "style", "${_series_episode_07}", "left", '13px', { fromValue: '12px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1752", tween: [ "style", "${_title_focus_07}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2155", tween: [ "style", "${_title_focus_07}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid2154", tween: [ "style", "${_title_focus_07}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid1725", tween: [ "style", "${_footer_txt_07}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1726", tween: [ "style", "${_footer_txt_07}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid672", tween: [ "color", "${_title_07}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2312", tween: [ "color", "${_title_07}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,17,17,1)'}], position: 2988, duration: 0 },
            { id: "eid2313", tween: [ "color", "${_title_07}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 3000, duration: 0 },
            { id: "eid2314", tween: [ "color", "${_title_07}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 3250, duration: 0 },
            { id: "eid460", tween: [ "style", "${_footer_txt_07}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid673", tween: [ "style", "${_title_07}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250, easing: "easeOutCubic" },
            { id: "eid2149", tween: [ "style", "${_title_07}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeOutCubic" },
            { id: "eid1723", tween: [ "style", "${_episode_07}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1724", tween: [ "style", "${_episode_07}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid556", tween: [ "style", "${_description_07}", "height", '96px', { fromValue: '96px'}], position: 2000, duration: 0 },
            { id: "eid2158", tween: [ "style", "${_description_07}", "height", '96px', { fromValue: '96px'}], position: 3000, duration: 0 },
            { id: "eid470", tween: [ "color", "${_box-delay_07}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2265", tween: [ "color", "${_box-delay_07}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1890", tween: [ "style", "${_title_focus_07}", "height", '27px', { fromValue: '55px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2151", tween: [ "style", "${_title_focus_07}", "height", '26px', { fromValue: '27px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid505", tween: [ "style", "${_box-icon_07}", "top", '155px', { fromValue: '87px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid429", tween: [ "style", "${_box-icon_07}", "top", '-49px', { fromValue: '155px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2137", tween: [ "style", "${_box-icon_07}", "top", '98px', { fromValue: '-49px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1839", tween: [ "style", "${_single-height}", "height", '272px', { fromValue: '212px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2256", tween: [ "style", "${_single-height}", "height", '212px', { fromValue: '272px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid445", tween: [ "style", "${_description_07}", "top", '112px', { fromValue: '481px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid447", tween: [ "style", "${_description_07}", "top", '111px', { fromValue: '311px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2157", tween: [ "style", "${_description_07}", "top", '251px', { fromValue: '111px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1858", tween: [ "style", "${_episode_07}", "top", '236px', { fromValue: '176px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid661", tween: [ "style", "${_episode_07}", "top", '58px', { fromValue: '236px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2148", tween: [ "style", "${_episode_07}", "top", '182px', { fromValue: '58px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid2292", tween: [ "style", "${_episode_07}", "top", '182px', { fromValue: '182px'}], position: 3250, duration: 0 },
            { id: "eid1729", tween: [ "style", "${_box-icon_07}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1730", tween: [ "style", "${_box-icon_07}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid490", tween: [ "style", "${_footer_txt_07}", "top", '418px', { fromValue: '257px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid457", tween: [ "style", "${_footer_txt_07}", "top", '216px', { fromValue: '418px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2163", tween: [ "style", "${_footer_txt_07}", "top", '418px', { fromValue: '216px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1889", tween: [ "style", "${_title_focus_07}", "width", '339px', { fromValue: '272px'}], position: 1994, duration: 6, easing: "easeOutCubic" },
            { id: "eid2261", tween: [ "style", "${_title_focus_07}", "width", '254px', { fromValue: '339px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1758", tween: [ "style", "${_channel_brand_07}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2141", tween: [ "style", "${_channel_brand_07}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid2140", tween: [ "style", "${_channel_brand_07}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid455", tween: [ "style", "${_description_07}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid512", tween: [ "style", "${_box-icon_07}", "height", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid565", tween: [ "style", "${_series_episode_07}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250, easing: "easeOutCubic" },
            { id: "eid2145", tween: [ "style", "${_series_episode_07}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250, easing: "easeOutCubic" },
            { id: "eid448", tween: [ "style", "${_description_07}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_description_07}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid2162", tween: [ "style", "${_description_07}", "display", 'block', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid2300", tween: [ "style", "${_title_07}", "top", '212px', { fromValue: '153px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2302", tween: [ "style", "${_title_07}", "top", '157px', { fromValue: '157px'}], position: 3000, duration: 0 },
            { id: "eid2299", tween: [ "style", "${_title_07}", "top", '157px', { fromValue: '157px'}], position: 3250, duration: 0 },
            { id: "eid566", tween: [ "style", "${_footer_txt_07}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 253, easing: "easeOutCubic" },
            { id: "eid2164", tween: [ "style", "${_footer_txt_07}", "opacity", '0', { fromValue: '1'}], position: 2747, duration: 253, easing: "easeOutCubic" },
            { id: "eid663", tween: [ "style", "${_episode_07}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250, easing: "easeOutCubic" },
            { id: "eid2147", tween: [ "style", "${_episode_07}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250, easing: "easeOutCubic" },
            { id: "eid1855", tween: [ "style", "${_title_focus_07}", "top", '231px', { fromValue: '199px'}], position: 0, duration: 498, easing: "easeOutCubic" },
            { id: "eid439", tween: [ "style", "${_title_focus_07}", "top", '44px', { fromValue: '246px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2150", tween: [ "style", "${_title_focus_07}", "top", '186px', { fromValue: '44px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid431", tween: [ "color", "${_box-icon_07}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2267", tween: [ "color", "${_box-icon_07}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid463", tween: [ "style", "${_box-delay_07}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid1881", tween: [ "style", "${_box-delay_07}", "height", '272px', { fromValue: '245px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid2166", tween: [ "style", "${_box-delay_07}", "height", '245px', { fromValue: '272px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid667", tween: [ "style", "${_episode_07}", "height", '25px', { fromValue: '25px'}], position: 2500, duration: 0 },
            { id: "eid1736", tween: [ "style", "${_single-height}", "left", '0px', { fromValue: '48px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid2257", tween: [ "style", "${_single-height}", "left", '48px', { fromValue: '0px'}], position: 2500, duration: 500, easing: "easeOutCubic" }         ]
      }
   }
},
"collections": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-24px','-42px','304px','245px','auto','auto'],
      id: 'single-heightCopy',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         id: 'baboonCopy',
         type: 'image',
         rect: ['-16px','-10px','111.8%','80.7%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/baboon2.jpg','0px','0px']
      },
      {
         rect: ['0px','418px','323px','290px','auto','auto'],
         id: 'box-delayCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         type: 'text',
         font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(118,118,118,1.00)','500','none','normal'],
         rect: ['12px','627px','278px','21px','auto','auto'],
         id: 'txt-footerCopy',
         text: 'FIRST SHOWN: 14/05/13',
         align: 'left',
         transform: []
      },
      {
         rect: ['12px','508px','278px','119px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
         align: 'left',
         id: 'txt-bodyCopy',
         text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
         display: 'none',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','500','none','normal'],
         id: 'txt-title_2Copy',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
         id: 'txt-title_1Copy',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
         id: 'txt-title_episodeCopy',
         text: 'Episode 3<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['5px','83px','241px','27px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(233,47,131,1.00)','500','none','normal'],
         id: 'txt-Sub-titleCopy',
         text: 'Series 9, Episode 3',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['12px','426px','278px','27px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
         id: 'txt-channelCopy',
         text: 'BBC ONE<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','370px','36px','38px','auto','auto'],
         id: 'box-iconCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         rect: ['-2px','230px','308px','6px','auto','auto'],
         id: 'Rectangle2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(233,47,131,1.00)'],
            ["style", "height", '6px'],
            ["style", "top", '273px'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_txt-Sub-titleCopy}": [
            ["style", "top", '247px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '22px']
         ],
         "${_single-heightCopy}": [
            ["style", "top", '10px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '16px'],
            ["style", "width", '272px']
         ],
         "${_baboonCopy}": [
            ["style", "left", '-16px'],
            ["style", "top", '-10px']
         ],
         "${_txt-title_1Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '157px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '260px'],
            ["style", "opacity", '1']
         ],
         "${_box-iconCopy}": [
            ["style", "top", '98px'],
            ["style", "display", 'block'],
            ["style", "overflow", 'visible'],
            ["style", "height", '49px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '48px']
         ],
         "${_box-delayCopy}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '229px'],
            ["style", "top", '146px'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_txt-channelCopy}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '12px'],
            ["style", "width", '276px'],
            ["style", "top", '0px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "font-size", '20px']
         ],
         "${_txt-footerCopy}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '257px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_txt-title_episodeCopy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '182px'],
            ["style", "width", '276px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "height", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '587px'],
            ["style", "width", '312px']
         ],
         "${_txt-title_2Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '199px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '272px']
         ],
         "${_txt-bodyCopy}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "height", '96px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: true,
         timeline: [
            { id: "eid299", tween: [ "style", "${_single-heightCopy}", "left", '-32px', { fromValue: '16px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid300", tween: [ "style", "${_single-heightCopy}", "left", '16px', { fromValue: '-32px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid344", tween: [ "style", "${_txt-title_1Copy}", "top", '212px', { fromValue: '157px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid345", tween: [ "style", "${_txt-title_1Copy}", "top", '157px', { fromValue: '212px'}], position: 3500, duration: 0 },
            { id: "eid346", tween: [ "style", "${_txt-title_1Copy}", "top", '157px', { fromValue: '157px'}], position: 3750, duration: 0 },
            { id: "eid359", tween: [ "style", "${_txt-title_2Copy}", "top", '231px', { fromValue: '199px'}], position: 0, duration: 498, easing: "easeOutCubic" },
            { id: "eid360", tween: [ "style", "${_txt-title_2Copy}", "top", '44px', { fromValue: '246px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid361", tween: [ "style", "${_txt-title_2Copy}", "top", '186px', { fromValue: '44px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid371", tween: [ "style", "${_txt-title_2Copy}", "width", '339px', { fromValue: '272px'}], position: 2494, duration: 6, easing: "easeOutCubic" },
            { id: "eid372", tween: [ "style", "${_txt-title_2Copy}", "width", '254px', { fromValue: '339px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid342", tween: [ "style", "${_txt-title_episodeCopy}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid343", tween: [ "style", "${_txt-title_episodeCopy}", "width", '272px', { fromValue: '272px'}], position: 3500, duration: 0 },
            { id: "eid340", tween: [ "style", "${_txt-title_episodeCopy}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid341", tween: [ "style", "${_txt-title_episodeCopy}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid347", tween: [ "style", "${_txt-title_1Copy}", "height", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid329", tween: [ "style", "${_txt-title_episodeCopy}", "top", '236px', { fromValue: '182px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid330", tween: [ "style", "${_txt-title_episodeCopy}", "top", '58px', { fromValue: '236px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid331", tween: [ "style", "${_txt-title_episodeCopy}", "top", '182px', { fromValue: '58px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid332", tween: [ "style", "${_txt-title_episodeCopy}", "top", '182px', { fromValue: '182px'}], position: 3750, duration: 0 },
            { id: "eid381", tween: [ "style", "${_txt-bodyCopy}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid382", tween: [ "style", "${_txt-bodyCopy}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid383", tween: [ "style", "${_txt-bodyCopy}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 250, easing: "easeOutCubic" },
            { id: "eid384", tween: [ "style", "${_txt-bodyCopy}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250, easing: "easeOutCubic" },
            { id: "eid385", tween: [ "style", "${_txt-bodyCopy}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 250, easing: "easeOutCubic" },
            { id: "eid386", tween: [ "style", "${_txt-bodyCopy}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 250, easing: "easeOutCubic" },
            { id: "eid378", tween: [ "style", "${_txt-bodyCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid379", tween: [ "style", "${_txt-bodyCopy}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid380", tween: [ "style", "${_txt-bodyCopy}", "display", 'block', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid394", tween: [ "style", "${_txt-footerCopy}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 253, easing: "easeOutCubic" },
            { id: "eid395", tween: [ "style", "${_txt-footerCopy}", "opacity", '0', { fromValue: '1'}], position: 3247, duration: 253, easing: "easeOutCubic" },
            { id: "eid316", tween: [ "style", "${_txt-channelCopy}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid317", tween: [ "style", "${_txt-channelCopy}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid318", tween: [ "style", "${_txt-channelCopy}", "left", '12px', { fromValue: '12px'}], position: 3500, duration: 0 },
            { id: "eid322", tween: [ "style", "${_txt-Sub-titleCopy}", "top", '279px', { fromValue: '247px'}], position: 0, duration: 498, easing: "easeOutCubic" },
            { id: "eid323", tween: [ "style", "${_txt-Sub-titleCopy}", "top", '68px', { fromValue: '271px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid324", tween: [ "style", "${_txt-Sub-titleCopy}", "top", '211px', { fromValue: '68px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid1253", tween: [ "style", "${_Rectangle2}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid1305", tween: [ "style", "${_Rectangle2}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 498, easing: "easeOutCubic" },
            { id: "eid1311", tween: [ "style", "${_Rectangle2}", "width", '304px', { fromValue: '368px'}], position: 3000, duration: 488, easing: "easeOutCubic" },
            { id: "eid1243", tween: [ "style", "${_Rectangle2}", "top", '225px', { fromValue: '273px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid362", tween: [ "style", "${_txt-title_2Copy}", "height", '27px', { fromValue: '55px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid363", tween: [ "style", "${_txt-title_2Copy}", "height", '26px', { fromValue: '27px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid301", tween: [ "style", "${_single-heightCopy}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid302", tween: [ "style", "${_single-heightCopy}", "width", '304px', { fromValue: '368px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid407", tween: [ "style", "${_box-delayCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid408", tween: [ "style", "${_box-delayCopy}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid409", tween: [ "style", "${_box-delayCopy}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid410", tween: [ "style", "${_box-delayCopy}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
            { id: "eid411", tween: [ "style", "${_box-delayCopy}", "left", '0px', { fromValue: '0px'}], position: 3500, duration: 0 },
            { id: "eid412", tween: [ "style", "${_box-delayCopy}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid413", tween: [ "style", "${_box-delayCopy}", "width", '368px', { fromValue: '368px'}], position: 2500, duration: 0 },
            { id: "eid1302", tween: [ "style", "${_box-delayCopy}", "width", '304px', { fromValue: '368px'}], position: 3000, duration: 488, easing: "easeOutCubic" },
            { id: "eid1304", tween: [ "style", "${_box-delayCopy}", "width", '304px', { fromValue: '304px'}], position: 3500, duration: 0, easing: "easeOutCubic" },
            { id: "eid399", tween: [ "color", "${_box-delayCopy}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid400", tween: [ "color", "${_box-delayCopy}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid354", tween: [ "style", "${_txt-title_1Copy}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid355", tween: [ "style", "${_txt-title_1Copy}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid396", tween: [ "style", "${_txt-footerCopy}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid397", tween: [ "style", "${_txt-footerCopy}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid314", tween: [ "style", "${_txt-channelCopy}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250, easing: "easeOutCubic" },
            { id: "eid315", tween: [ "style", "${_txt-channelCopy}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 250, easing: "easeOutCubic" },
            { id: "eid368", tween: [ "style", "${_txt-title_2Copy}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid369", tween: [ "style", "${_txt-title_2Copy}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid370", tween: [ "style", "${_txt-title_2Copy}", "left", '12px', { fromValue: '12px'}], position: 3500, duration: 0 },
            { id: "eid305", tween: [ "style", "${_box-iconCopy}", "top", '155px', { fromValue: '98px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid306", tween: [ "style", "${_box-iconCopy}", "top", '-49px', { fromValue: '155px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid307", tween: [ "style", "${_box-iconCopy}", "top", '98px', { fromValue: '-49px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid348", tween: [ "color", "${_txt-title_1Copy}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid349", tween: [ "color", "${_txt-title_1Copy}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,17,17,1)'}], position: 3488, duration: 0 },
            { id: "eid350", tween: [ "color", "${_txt-title_1Copy}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 3500, duration: 0 },
            { id: "eid351", tween: [ "color", "${_txt-title_1Copy}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 3750, duration: 0 },
            { id: "eid334", tween: [ "color", "${_txt-title_episodeCopy}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 0, duration: 0 },
            { id: "eid335", tween: [ "color", "${_txt-title_episodeCopy}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 500, duration: 0 },
            { id: "eid336", tween: [ "color", "${_txt-title_episodeCopy}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3500, duration: 0 },
            { id: "eid337", tween: [ "color", "${_txt-title_episodeCopy}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3750, duration: 0 },
            { id: "eid338", tween: [ "style", "${_txt-title_episodeCopy}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 250, easing: "easeOutCubic" },
            { id: "eid339", tween: [ "style", "${_txt-title_episodeCopy}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 250, easing: "easeOutCubic" },
            { id: "eid373", tween: [ "style", "${_txt-bodyCopy}", "top", '112px', { fromValue: '481px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid374", tween: [ "style", "${_txt-bodyCopy}", "top", '111px', { fromValue: '311px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid375", tween: [ "style", "${_txt-bodyCopy}", "top", '251px', { fromValue: '111px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid311", tween: [ "style", "${_txt-channelCopy}", "top", '-77px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid312", tween: [ "style", "${_txt-channelCopy}", "top", '13px', { fromValue: '217px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid313", tween: [ "style", "${_txt-channelCopy}", "top", '157px', { fromValue: '13px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid404", tween: [ "style", "${_box-delayCopy}", "top", '204px', { fromValue: '146px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid405", tween: [ "style", "${_box-delayCopy}", "top", '0px', { fromValue: '204px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid406", tween: [ "style", "${_box-delayCopy}", "top", '117px', { fromValue: '0px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid327", tween: [ "style", "${_txt-Sub-titleCopy}", "left", '12px', { fromValue: '13px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid328", tween: [ "style", "${_txt-Sub-titleCopy}", "left", '13px', { fromValue: '12px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid308", tween: [ "style", "${_box-iconCopy}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid309", tween: [ "style", "${_box-iconCopy}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid295", tween: [ "style", "${_single-heightCopy}", "top", '-50px', { fromValue: '10px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid296", tween: [ "style", "${_single-heightCopy}", "top", '10px', { fromValue: '-50px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid297", tween: [ "style", "${_single-heightCopy}", "height", '272px', { fromValue: '212px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid298", tween: [ "style", "${_single-heightCopy}", "height", '229px', { fromValue: '272px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid325", tween: [ "style", "${_txt-Sub-titleCopy}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250, easing: "easeOutCubic" },
            { id: "eid326", tween: [ "style", "${_txt-Sub-titleCopy}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 250, easing: "easeOutCubic" },
            { id: "eid401", tween: [ "style", "${_box-delayCopy}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid402", tween: [ "style", "${_box-delayCopy}", "height", '272px', { fromValue: '245px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid403", tween: [ "style", "${_box-delayCopy}", "height", '245px', { fromValue: '272px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid333", tween: [ "style", "${_txt-title_episodeCopy}", "height", '25px', { fromValue: '25px'}], position: 3000, duration: 0 },
            { id: "eid387", tween: [ "style", "${_txt-bodyCopy}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid388", tween: [ "style", "${_txt-bodyCopy}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid389", tween: [ "style", "${_txt-bodyCopy}", "left", '12px', { fromValue: '12px'}], position: 3500, duration: 0 },
            { id: "eid376", tween: [ "style", "${_txt-bodyCopy}", "height", '96px', { fromValue: '96px'}], position: 2500, duration: 0 },
            { id: "eid377", tween: [ "style", "${_txt-bodyCopy}", "height", '96px', { fromValue: '96px'}], position: 3500, duration: 0 },
            { id: "eid390", tween: [ "style", "${_txt-bodyCopy}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid364", tween: [ "style", "${_txt-title_2Copy}", "opacity", '0', { fromValue: '0'}], position: 2494, duration: 0 },
            { id: "eid365", tween: [ "style", "${_txt-title_2Copy}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250, easing: "easeOutCubic" },
            { id: "eid366", tween: [ "style", "${_txt-title_2Copy}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 250, easing: "easeOutCubic" },
            { id: "eid367", tween: [ "style", "${_txt-title_2Copy}", "opacity", '0', { fromValue: '0'}], position: 3506, duration: 0 },
            { id: "eid398", tween: [ "style", "${_txt-footerCopy}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid319", tween: [ "style", "${_txt-channelCopy}", "font-size", '20px', { fromValue: '20px'}], position: 2500, duration: 0 },
            { id: "eid320", tween: [ "style", "${_txt-channelCopy}", "font-size", '20px', { fromValue: '20px'}], position: 3000, duration: 0 },
            { id: "eid321", tween: [ "style", "${_txt-channelCopy}", "font-size", '20px', { fromValue: '20px'}], position: 3500, duration: 0 },
            { id: "eid1247", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3000, duration: 0 },
            { id: "eid310", tween: [ "style", "${_box-iconCopy}", "height", '49px', { fromValue: '49px'}], position: 0, duration: 0 },
            { id: "eid391", tween: [ "style", "${_txt-footerCopy}", "top", '418px', { fromValue: '257px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid392", tween: [ "style", "${_txt-footerCopy}", "top", '216px', { fromValue: '418px'}], position: 2500, duration: 500, easing: "easeOutCubic" },
            { id: "eid393", tween: [ "style", "${_txt-footerCopy}", "top", '418px', { fromValue: '216px'}], position: 3000, duration: 500, easing: "easeOutCubic" },
            { id: "eid356", tween: [ "style", "${_txt-title_1Copy}", "width", '339px', { fromValue: '260px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid357", tween: [ "style", "${_txt-title_1Copy}", "width", '260px', { fromValue: '339px'}], position: 3500, duration: 0 },
            { id: "eid358", tween: [ "style", "${_txt-title_1Copy}", "width", '260px', { fromValue: '260px'}], position: 3750, duration: 0 },
            { id: "eid1239", tween: [ "style", "${_box-iconCopy}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid352", tween: [ "style", "${_txt-title_1Copy}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 250, easing: "easeOutCubic" },
            { id: "eid353", tween: [ "style", "${_txt-title_1Copy}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 250, easing: "easeOutCubic" },
            { id: "eid303", tween: [ "color", "${_box-iconCopy}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid304", tween: [ "color", "${_box-iconCopy}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 3000, duration: 500, easing: "easeOutCubic" }         ]
      }
   }
},
"SymbCollection": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'item_01',
      type: 'rect',
      rect: ['36px','60px','auto','auto','auto','auto']
   },
   {
      id: 'item_02',
      type: 'rect',
      rect: ['413px','115px','auto','auto','auto','auto']
   },
   {
      id: 'collections5',
      type: 'rect',
      rect: ['447px','60px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'item_01',
      symbolName: 'item_01'
   },
   {
      id: 'collections5',
      symbolName: 'collections'
   },
   {
      id: 'item_02',
      symbolName: 'item_01'
   }   ]
   },
   states: {
      "Base State": {
         "${_item_01}": [
            ["style", "left", '36px'],
            ["style", "top", '60px']
         ],
         "${_collections5}": [
            ["style", "left", '447px'],
            ["style", "top", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '637px'],
            ["style", "width", '1125px']
         ],
         "${_item_02}": [
            ["style", "left", '413px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6301.30859375,
         autoPlay: false,
         labels: {
            "1": 0,
            "2": 2500,
            "3": 5000,
            "4": 6000
         },
         timeline: [
            { id: "eid53", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_item_01}', [] ], ""], position: 0 },
            { id: "eid104", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_item_02}', [] ], ""], position: 0 },
            { id: "eid208", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_collections5}', [] ], ""], position: 0 },
            { id: "eid105", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_item_02}', [] ], ""], position: 2500 },
            { id: "eid209", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_collections5}', [] ], ""], position: 2963.828125 }         ]
      }
   }
},
"btn5": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','3px','80px','80px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'disque',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['18px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',77,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'cinq',
      text: '5',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cinq}": [
            ["style", "top", '0px'],
            ["style", "left", '18px'],
            ["style", "font-size", '77px']
         ],
         "${_disque}": [
            ["style", "top", '3px'],
            ["style", "height", '80px'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${symbolSelector}": [
            ["style", "height", '89px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"btn4": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','3px','80px','80px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'disque',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['17px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',77,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'quatre',
      text: '4',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_disque}": [
            ["style", "height", '80px'],
            ["style", "top", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${symbolSelector}": [
            ["style", "height", '89px'],
            ["style", "width", '80px']
         ],
         "${_quatre}": [
            ["style", "top", '0px'],
            ["style", "left", '17px'],
            ["style", "font-size", '77px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"btn3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','3px','80px','80px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'disque',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['17px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',77,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'trois',
      text: '3',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_trois}": [
            ["style", "top", '0px'],
            ["style", "left", '17px'],
            ["style", "font-size", '77px']
         ],
         "${_disque}": [
            ["style", "top", '3px'],
            ["style", "height", '80px'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${symbolSelector}": [
            ["style", "height", '89px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"btn2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','3px','80px','80px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'disque',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['17px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',77,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'deux',
      text: '2',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_disque}": [
            ["style", "height", '80px'],
            ["style", "top", '3px'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${_deux}": [
            ["style", "top", '0px'],
            ["style", "left", '17px'],
            ["style", "font-size", '77px']
         ],
         "${symbolSelector}": [
            ["style", "height", '89px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"btn1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','3px','80px','80px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'disque',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['17px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',77,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'un',
      text: '1',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_disque}": [
            ["style", "top", '3px'],
            ["style", "height", '80px'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${_un}": [
            ["style", "top", '0px'],
            ["style", "left", '17px'],
            ["style", "font-size", '77px']
         ],
         "${symbolSelector}": [
            ["style", "height", '89px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"item_03": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'group',
      id: 'single-height',
      cursor: ['pointer'],
      rect: ['8px','8px','304px','245px','auto','auto'],
      c: [
      {
         id: 'baboon',
         type: 'image',
         rect: ['-16px','-10px','111.8%','80.7%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/zebra.jpg','0px','0px']
      },
      {
         type: 'rect',
         id: 'box-delay_09',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','418px','323px','290px','auto','auto'],
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         type: 'text',
         rect: ['12px','627px','278px','21px','auto','auto'],
         align: 'left',
         id: 'footer_txt_09',
         text: 'FIRST SHOWN: 14/05/13',
         font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(118,118,118,1.00)','500','none','normal'],
         transform: []
      },
      {
         rect: ['12px','508px','278px','119px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
         display: 'none',
         id: 'description_09',
         text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','500','none','normal'],
         id: 'title_focus_09',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
         id: 'title_09',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
         id: 'episode_09',
         text: 'Episode 3<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['5px','83px','241px','27px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(233,47,131,1.00)','500','none','normal'],
         id: 'series_episode_09',
         text: 'Series 9, Episode 3',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['12px','426px','278px','27px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
         id: 'channel_brand_09',
         text: 'BBC ONE<br>',
         align: 'left',
         type: 'text'
      },
      {
         type: 'rect',
         id: 'box-icon_09',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','370px','56px','38px','auto','auto'],
         fill: ['rgba(235,235,235,1.00)'],
         c: [
         {
            type: 'image',
            filter: [0.92988782051282,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
            id: 'iPlayer-05Copy4',
            rect: ['15px','15px','25px','25px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/iPlayer-01.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_iPlayer-05Copy4}": [
            ["style", "top", '15px'],
            ["style", "height", '25px'],
            ["subproperty", "filter.invert", '0.934744'],
            ["style", "left", '15px'],
            ["style", "width", '25px']
         ],
         "${_title_09}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '157px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '260px']
         ],
         "${_single-height}": [
            ["style", "top", '60px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "left", '48px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '272px']
         ],
         "${_description_09}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "width", '276px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '272px'],
            ["style", "width", '368px']
         ],
         "${_box-icon_09}": [
            ["style", "top", '87px'],
            ["style", "height", '57px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${_box-delay_09}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '229px'],
            ["style", "top", '143px'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_txt-bodyCopy}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_txt-title_1Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '24px'],
            ["style", "top", '174px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_baboon}": [
            ["style", "left", '-16px'],
            ["style", "top", '-10px']
         ],
         "${_footer_txt_09}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '257px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '0']
         ],
         "${_txt-footerCopy}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '257px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_episode_09}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '182px'],
            ["style", "height", '25px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_channel_brand_09}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '12px'],
            ["style", "width", '276px'],
            ["style", "top", '0px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "font-size", '20px'],
            ["style", "opacity", '0']
         ],
         "${_txt-title_episodeCopy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '182px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_title_focus_09}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '199px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '272px'],
            ["style", "opacity", '0']
         ],
         "${_txt-title_2Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '199px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '272px']
         ],
         "${_series_episode_09}": [
            ["style", "top", '247px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '22px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3250,
         autoPlay: true,
         labels: {
            "in": 0,
            "focus": 500,
            "out": 2500
         },
         timeline: [
            { id: "eid445", tween: [ "style", "${_description_09}", "top", '112px', { fromValue: '481px'}], position: 0, duration: 500 },
            { id: "eid447", tween: [ "style", "${_description_09}", "top", '111px', { fromValue: '311px'}], position: 2000, duration: 500 },
            { id: "eid2157", tween: [ "style", "${_description_09}", "top", '251px', { fromValue: '111px'}], position: 2500, duration: 500 },
            { id: "eid1737", tween: [ "style", "${_single-height}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500 },
            { id: "eid2258", tween: [ "style", "${_single-height}", "width", '272px', { fromValue: '368px'}], position: 2500, duration: 500 },
            { id: "eid603", tween: [ "style", "${_single-height}", "top", '0px', { fromValue: '60px'}], position: 0, duration: 500 },
            { id: "eid2255", tween: [ "style", "${_single-height}", "top", '60px', { fromValue: '0px'}], position: 2500, duration: 500 },
            { id: "eid1855", tween: [ "style", "${_title_focus_09}", "top", '231px', { fromValue: '199px'}], position: 0, duration: 498 },
            { id: "eid439", tween: [ "style", "${_title_focus_09}", "top", '44px', { fromValue: '246px'}], position: 2000, duration: 500 },
            { id: "eid2150", tween: [ "style", "${_title_focus_09}", "top", '186px', { fromValue: '44px'}], position: 2500, duration: 500 },
            { id: "eid460", tween: [ "style", "${_footer_txt_09}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid470", tween: [ "color", "${_box-delay_09}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid2265", tween: [ "color", "${_box-delay_09}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2500, duration: 500 },
            { id: "eid1725", tween: [ "style", "${_footer_txt_09}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1726", tween: [ "style", "${_footer_txt_09}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid1756", tween: [ "style", "${_series_episode_09}", "left", '12px', { fromValue: '13px'}], position: 2000, duration: 500 },
            { id: "eid2146", tween: [ "style", "${_series_episode_09}", "left", '13px', { fromValue: '12px'}], position: 2500, duration: 500 },
            { id: "eid566", tween: [ "style", "${_footer_txt_09}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 253 },
            { id: "eid2164", tween: [ "style", "${_footer_txt_09}", "opacity", '0', { fromValue: '1'}], position: 2747, duration: 253 },
            { id: "eid1854", tween: [ "style", "${_series_episode_09}", "top", '279px', { fromValue: '247px'}], position: 0, duration: 498 },
            { id: "eid548", tween: [ "style", "${_series_episode_09}", "top", '68px', { fromValue: '271px'}], position: 2000, duration: 500 },
            { id: "eid2144", tween: [ "style", "${_series_episode_09}", "top", '211px', { fromValue: '68px'}], position: 2500, duration: 500 },
            { id: "eid454", tween: [ "style", "${_description_09}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid532", tween: [ "style", "${_description_09}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2161", tween: [ "style", "${_description_09}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid1731", tween: [ "style", "${_box-delay_09}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1732", tween: [ "style", "${_box-delay_09}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid1717", tween: [ "style", "${_box-delay_09}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid2168", tween: [ "style", "${_box-delay_09}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid2167", tween: [ "style", "${_box-delay_09}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
            { id: "eid1911", tween: [ "style", "${_channel_brand_09}", "font-size", '20px', { fromValue: '20px'}], position: 2000, duration: 0 },
            { id: "eid2143", tween: [ "style", "${_channel_brand_09}", "font-size", '20px', { fromValue: '20px'}], position: 2500, duration: 0 },
            { id: "eid2142", tween: [ "style", "${_channel_brand_09}", "font-size", '20px', { fromValue: '20px'}], position: 3000, duration: 0 },
            { id: "eid1721", tween: [ "style", "${_title_09}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1722", tween: [ "style", "${_title_09}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid472", tween: [ "style", "${_box-delay_09}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500 },
            { id: "eid1882", tween: [ "style", "${_box-delay_09}", "width", '368px', { fromValue: '368px'}], position: 2000, duration: 0 },
            { id: "eid2170", tween: [ "style", "${_box-delay_09}", "width", '368px', { fromValue: '368px'}], position: 2500, duration: 0 },
            { id: "eid2169", tween: [ "style", "${_box-delay_09}", "width", '368px', { fromValue: '368px'}], position: 3000, duration: 0 },
            { id: "eid1752", tween: [ "style", "${_title_focus_09}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2155", tween: [ "style", "${_title_focus_09}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid2154", tween: [ "style", "${_title_focus_09}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid676", tween: [ "style", "${_title_09}", "width", '339px', { fromValue: '260px'}], position: 0, duration: 500 },
            { id: "eid38", tween: [ "style", "${_title_09}", "width", '478px', { fromValue: '339px'}], position: 1500, duration: 1000 },
            { id: "eid39", tween: [ "style", "${_title_09}", "width", '260px', { fromValue: '478px'}], position: 2500, duration: 500 },
            { id: "eid2311", tween: [ "style", "${_title_09}", "width", '260px', { fromValue: '260px'}], position: 3250, duration: 0 },
            { id: "eid505", tween: [ "style", "${_box-icon_09}", "top", '155px', { fromValue: '87px'}], position: 0, duration: 500 },
            { id: "eid429", tween: [ "style", "${_box-icon_09}", "top", '-49px', { fromValue: '155px'}], position: 2000, duration: 500 },
            { id: "eid2137", tween: [ "style", "${_box-icon_09}", "top", '98px', { fromValue: '-49px'}], position: 2500, duration: 500 },
            { id: "eid667", tween: [ "style", "${_episode_09}", "height", '25px', { fromValue: '25px'}], position: 2500, duration: 0 },
            { id: "eid1880", tween: [ "style", "${_title_09}", "height", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid512", tween: [ "style", "${_box-icon_09}", "height", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid678", tween: [ "color", "${_episode_09}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 0, duration: 0 },
            { id: "eid679", tween: [ "color", "${_episode_09}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 500, duration: 0 },
            { id: "eid2269", tween: [ "color", "${_episode_09}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3000, duration: 0 },
            { id: "eid2270", tween: [ "color", "${_episode_09}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3250, duration: 0 },
            { id: "eid448", tween: [ "style", "${_description_09}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_description_09}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid2162", tween: [ "style", "${_description_09}", "display", 'block', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid666", tween: [ "style", "${_episode_09}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid2268", tween: [ "style", "${_episode_09}", "width", '272px', { fromValue: '272px'}], position: 3000, duration: 0 },
            { id: "eid501", tween: [ "style", "${_box-delay_09}", "top", '204px', { fromValue: '143px'}], position: 0, duration: 500 },
            { id: "eid462", tween: [ "style", "${_box-delay_09}", "top", '0px', { fromValue: '204px'}], position: 2000, duration: 500 },
            { id: "eid2165", tween: [ "style", "${_box-delay_09}", "top", '146px', { fromValue: '0px'}], position: 2500, duration: 500 },
            { id: "eid681", tween: [ "style", "${_title_focus_09}", "opacity", '0', { fromValue: '0'}], position: 1994, duration: 0 },
            { id: "eid560", tween: [ "style", "${_title_focus_09}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid2153", tween: [ "style", "${_title_focus_09}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid2152", tween: [ "style", "${_title_focus_09}", "opacity", '0', { fromValue: '0'}], position: 3006, duration: 0 },
            { id: "eid434", tween: [ "style", "${_channel_brand_09}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid2139", tween: [ "style", "${_channel_brand_09}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid431", tween: [ "color", "${_box-icon_09}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid2267", tween: [ "color", "${_box-icon_09}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2500, duration: 500 },
            { id: "eid1839", tween: [ "style", "${_single-height}", "height", '272px', { fromValue: '212px'}], position: 0, duration: 500 },
            { id: "eid2256", tween: [ "style", "${_single-height}", "height", '212px', { fromValue: '272px'}], position: 2500, duration: 500 },
            { id: "eid1858", tween: [ "style", "${_episode_09}", "top", '236px', { fromValue: '182px'}], position: 0, duration: 500 },
            { id: "eid661", tween: [ "style", "${_episode_09}", "top", '58px', { fromValue: '236px'}], position: 2000, duration: 500 },
            { id: "eid2148", tween: [ "style", "${_episode_09}", "top", '182px', { fromValue: '58px'}], position: 2500, duration: 500 },
            { id: "eid2292", tween: [ "style", "${_episode_09}", "top", '182px', { fromValue: '182px'}], position: 3250, duration: 0 },
            { id: "eid556", tween: [ "style", "${_description_09}", "height", '96px', { fromValue: '96px'}], position: 2000, duration: 0 },
            { id: "eid2158", tween: [ "style", "${_description_09}", "height", '96px', { fromValue: '96px'}], position: 3000, duration: 0 },
            { id: "eid450", tween: [ "style", "${_description_09}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid451", tween: [ "style", "${_description_09}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid561", tween: [ "style", "${_description_09}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 },
            { id: "eid562", tween: [ "style", "${_description_09}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid2160", tween: [ "style", "${_description_09}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid2159", tween: [ "style", "${_description_09}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid463", tween: [ "style", "${_box-delay_09}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 500 },
            { id: "eid1881", tween: [ "style", "${_box-delay_09}", "height", '272px', { fromValue: '245px'}], position: 2000, duration: 500 },
            { id: "eid2166", tween: [ "style", "${_box-delay_09}", "height", '245px', { fromValue: '272px'}], position: 2500, duration: 500 },
            { id: "eid663", tween: [ "style", "${_episode_09}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 },
            { id: "eid2147", tween: [ "style", "${_episode_09}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid491", tween: [ "style", "${_channel_brand_09}", "top", '-77px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid432", tween: [ "style", "${_channel_brand_09}", "top", '13px', { fromValue: '217px'}], position: 2000, duration: 500 },
            { id: "eid2138", tween: [ "style", "${_channel_brand_09}", "top", '157px', { fromValue: '13px'}], position: 2500, duration: 500 },
            { id: "eid1889", tween: [ "style", "${_title_focus_09}", "width", '339px', { fromValue: '272px'}], position: 1994, duration: 6 },
            { id: "eid2261", tween: [ "style", "${_title_focus_09}", "width", '254px', { fromValue: '339px'}], position: 2500, duration: 500 },
            { id: "eid1758", tween: [ "style", "${_channel_brand_09}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2141", tween: [ "style", "${_channel_brand_09}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid2140", tween: [ "style", "${_channel_brand_09}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid673", tween: [ "style", "${_title_09}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 },
            { id: "eid2149", tween: [ "style", "${_title_09}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid2300", tween: [ "style", "${_title_09}", "top", '212px', { fromValue: '157px'}], position: 0, duration: 500 },
            { id: "eid2302", tween: [ "style", "${_title_09}", "top", '157px', { fromValue: '157px'}], position: 3000, duration: 0 },
            { id: "eid2299", tween: [ "style", "${_title_09}", "top", '157px', { fromValue: '157px'}], position: 3250, duration: 0 },
            { id: "eid1890", tween: [ "style", "${_title_focus_09}", "height", '27px', { fromValue: '55px'}], position: 2000, duration: 500 },
            { id: "eid2151", tween: [ "style", "${_title_focus_09}", "height", '26px', { fromValue: '27px'}], position: 2500, duration: 500 },
            { id: "eid672", tween: [ "color", "${_title_09}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500 },
            { id: "eid2312", tween: [ "color", "${_title_09}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,17,17,1)'}], position: 2988, duration: 0 },
            { id: "eid2313", tween: [ "color", "${_title_09}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 3000, duration: 0 },
            { id: "eid2314", tween: [ "color", "${_title_09}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 3250, duration: 0 },
            { id: "eid455", tween: [ "style", "${_description_09}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid1723", tween: [ "style", "${_episode_09}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1724", tween: [ "style", "${_episode_09}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid1729", tween: [ "style", "${_box-icon_09}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1730", tween: [ "style", "${_box-icon_09}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid490", tween: [ "style", "${_footer_txt_09}", "top", '418px', { fromValue: '257px'}], position: 0, duration: 500 },
            { id: "eid457", tween: [ "style", "${_footer_txt_09}", "top", '216px', { fromValue: '418px'}], position: 2000, duration: 500 },
            { id: "eid2163", tween: [ "style", "${_footer_txt_09}", "top", '418px', { fromValue: '216px'}], position: 2500, duration: 500 },
            { id: "eid565", tween: [ "style", "${_series_episode_09}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid2145", tween: [ "style", "${_series_episode_09}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid1736", tween: [ "style", "${_single-height}", "left", '0px', { fromValue: '48px'}], position: 0, duration: 500 },
            { id: "eid2257", tween: [ "style", "${_single-height}", "left", '48px', { fromValue: '0px'}], position: 2500, duration: 500 }         ]
      }
   }
},
"item_02": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['8px','8px','304px','245px','auto','auto'],
      id: 'single-height',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         id: 'baboon',
         type: 'image',
         rect: ['-16px','-10px','111.8%','80.7%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/sweat_small_stuff.jpg','0px','0px']
      },
      {
         rect: ['0px','418px','323px','290px','auto','auto'],
         id: 'box-delay',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(118,118,118,1.00)','500','none','normal'],
         type: 'text',
         transform: [],
         id: 'footer_txt_08',
         text: 'FIRST SHOWN: 14/05/13',
         align: 'left',
         rect: ['12px','627px','278px','21px','auto','auto']
      },
      {
         rect: ['12px','508px','278px','119px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
         align: 'left',
         id: 'description_08',
         text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
         display: 'none',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','500','none','normal'],
         id: 'title_focus_08',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal'],
         id: 'title_08',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal'],
         id: 'episode_08',
         text: 'Episode 3<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['5px','83px','241px','27px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(233,47,131,1.00)','400','none','normal'],
         id: 'series_episode_08',
         text: 'Series 9, Episode 3',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['12px','426px','278px','27px','auto','auto'],
         font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
         id: 'channel_brand_08',
         text: 'BBC ONE<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','370px','56px','38px','auto','auto'],
         id: 'box-icon_08',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1.00)'],
         c: [
         {
            rect: ['16px','16px','25px','25px','auto','auto'],
            filter: [0.92988782051282,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
            id: 'iPlayer-05Copy3',
            type: 'image',
            fill: ['rgba(0,0,0,0)','images/iPlayer-01.svg','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_series_episode_08}": [
            ["style", "top", '247px'],
            ["style", "height", '29px'],
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '22px']
         ],
         "${_box-delay}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '229px'],
            ["style", "top", '143px'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_single-height}": [
            ["style", "top", '60px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "left", '48px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '272px']
         ],
         "${_box-icon_08}": [
            ["style", "top", '87px'],
            ["style", "height", '57px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '-1px'],
            ["style", "width", '56px']
         ],
         "${symbolSelector}": [
            ["style", "height", '272px'],
            ["style", "width", '368px']
         ],
         "${_baboon}": [
            ["style", "left", '-16px'],
            ["style", "top", '-10px']
         ],
         "${_iPlayer-05Copy3}": [
            ["style", "top", '16px'],
            ["style", "height", '25px'],
            ["subproperty", "filter.invert", '0.934744'],
            ["style", "left", '16px'],
            ["style", "width", '25px']
         ],
         "${_channel_brand_08}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '12px'],
            ["style", "width", '276px'],
            ["style", "top", '0px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "font-size", '20px'],
            ["style", "opacity", '0']
         ],
         "${_txt-bodyCopy}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_title_focus_08}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '199px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '272px'],
            ["style", "opacity", '0']
         ],
         "${_txt-title_1Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '24px'],
            ["style", "top", '174px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_episode_08}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12px'],
            ["style", "font-size", '22px'],
            ["style", "top", '178px'],
            ["style", "height", '25px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_txt-title_2Copy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '199px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '272px']
         ],
         "${_txt-footerCopy}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '257px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_txt-title_episodeCopy}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '182px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_footer_txt_08}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '257px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '0']
         ],
         "${_description_08}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "width", '276px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "display", 'none']
         ],
         "${_title_08}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12px'],
            ["style", "font-size", '24px'],
            ["style", "top", '155px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '260px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3250,
         autoPlay: true,
         labels: {
            "in": 0,
            "focus": 500,
            "out": 2500
         },
         timeline: [
            { id: "eid512", tween: [ "style", "${_box-icon_08}", "height", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid448", tween: [ "style", "${_description_08}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_description_08}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid2162", tween: [ "style", "${_description_08}", "display", 'block', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid667", tween: [ "style", "${_episode_08}", "height", '25px', { fromValue: '25px'}], position: 2500, duration: 0 },
            { id: "eid672", tween: [ "color", "${_title_08}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500 },
            { id: "eid2312", tween: [ "color", "${_title_08}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,17,17,1)'}], position: 2988, duration: 0 },
            { id: "eid2313", tween: [ "color", "${_title_08}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 3000, duration: 0 },
            { id: "eid2314", tween: [ "color", "${_title_08}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 3250, duration: 0 },
            { id: "eid603", tween: [ "style", "${_single-height}", "top", '0px', { fromValue: '60px'}], position: 0, duration: 500 },
            { id: "eid2255", tween: [ "style", "${_single-height}", "top", '60px', { fromValue: '0px'}], position: 2500, duration: 500 },
            { id: "eid491", tween: [ "style", "${_channel_brand_08}", "top", '-77px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid432", tween: [ "style", "${_channel_brand_08}", "top", '13px', { fromValue: '217px'}], position: 2000, duration: 500 },
            { id: "eid2138", tween: [ "style", "${_channel_brand_08}", "top", '157px', { fromValue: '13px'}], position: 2500, duration: 500 },
            { id: "eid566", tween: [ "style", "${_footer_txt_08}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 253 },
            { id: "eid2164", tween: [ "style", "${_footer_txt_08}", "opacity", '0', { fromValue: '1'}], position: 2747, duration: 253 },
            { id: "eid1723", tween: [ "style", "${_episode_08}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1724", tween: [ "style", "${_episode_08}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid455", tween: [ "style", "${_description_08}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid2300", tween: [ "style", "${_title_08}", "top", '212px', { fromValue: '155px'}], position: 0, duration: 500 },
            { id: "eid2302", tween: [ "style", "${_title_08}", "top", '157px', { fromValue: '157px'}], position: 3000, duration: 0 },
            { id: "eid2299", tween: [ "style", "${_title_08}", "top", '157px', { fromValue: '157px'}], position: 3250, duration: 0 },
            { id: "eid454", tween: [ "style", "${_description_08}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid532", tween: [ "style", "${_description_08}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2161", tween: [ "style", "${_description_08}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid565", tween: [ "style", "${_series_episode_08}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid2145", tween: [ "style", "${_series_episode_08}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid431", tween: [ "color", "${_box-icon_08}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid2267", tween: [ "color", "${_box-icon_08}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2500, duration: 500 },
            { id: "eid1731", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1732", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid1717", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid2168", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid2167", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0 },
            { id: "eid678", tween: [ "color", "${_episode_08}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 0, duration: 0 },
            { id: "eid679", tween: [ "color", "${_episode_08}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 500, duration: 0 },
            { id: "eid2269", tween: [ "color", "${_episode_08}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3000, duration: 0 },
            { id: "eid2270", tween: [ "color", "${_episode_08}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3250, duration: 0 },
            { id: "eid1725", tween: [ "style", "${_footer_txt_08}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1726", tween: [ "style", "${_footer_txt_08}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid1752", tween: [ "style", "${_title_focus_08}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2155", tween: [ "style", "${_title_focus_08}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid2154", tween: [ "style", "${_title_focus_08}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid676", tween: [ "style", "${_title_08}", "width", '339px', { fromValue: '260px'}], position: 0, duration: 500 },
            { id: "eid38", tween: [ "style", "${_title_08}", "width", '478px', { fromValue: '339px'}], position: 1500, duration: 1000 },
            { id: "eid39", tween: [ "style", "${_title_08}", "width", '260px', { fromValue: '478px'}], position: 2500, duration: 500 },
            { id: "eid2311", tween: [ "style", "${_title_08}", "width", '260px', { fromValue: '260px'}], position: 3250, duration: 0 },
            { id: "eid445", tween: [ "style", "${_description_08}", "top", '112px', { fromValue: '481px'}], position: 0, duration: 500 },
            { id: "eid447", tween: [ "style", "${_description_08}", "top", '111px', { fromValue: '311px'}], position: 2000, duration: 500 },
            { id: "eid2157", tween: [ "style", "${_description_08}", "top", '251px', { fromValue: '111px'}], position: 2500, duration: 500 },
            { id: "eid1855", tween: [ "style", "${_title_focus_08}", "top", '231px', { fromValue: '199px'}], position: 0, duration: 498 },
            { id: "eid439", tween: [ "style", "${_title_focus_08}", "top", '44px', { fromValue: '246px'}], position: 2000, duration: 500 },
            { id: "eid2150", tween: [ "style", "${_title_focus_08}", "top", '186px', { fromValue: '44px'}], position: 2500, duration: 500 },
            { id: "eid2996", tween: [ "style", "${_title_08}", "font-size", '24px', { fromValue: '24px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid472", tween: [ "style", "${_box-delay}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500 },
            { id: "eid1882", tween: [ "style", "${_box-delay}", "width", '368px', { fromValue: '368px'}], position: 2000, duration: 0 },
            { id: "eid2170", tween: [ "style", "${_box-delay}", "width", '368px', { fromValue: '368px'}], position: 2500, duration: 0 },
            { id: "eid2169", tween: [ "style", "${_box-delay}", "width", '368px', { fromValue: '368px'}], position: 3000, duration: 0 },
            { id: "eid1880", tween: [ "style", "${_title_08}", "height", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid490", tween: [ "style", "${_footer_txt_08}", "top", '418px', { fromValue: '257px'}], position: 0, duration: 500 },
            { id: "eid457", tween: [ "style", "${_footer_txt_08}", "top", '216px', { fromValue: '418px'}], position: 2000, duration: 500 },
            { id: "eid2163", tween: [ "style", "${_footer_txt_08}", "top", '418px', { fromValue: '216px'}], position: 2500, duration: 500 },
            { id: "eid1737", tween: [ "style", "${_single-height}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500 },
            { id: "eid2258", tween: [ "style", "${_single-height}", "width", '272px', { fromValue: '368px'}], position: 2500, duration: 500 },
            { id: "eid556", tween: [ "style", "${_description_08}", "height", '96px', { fromValue: '96px'}], position: 2000, duration: 0 },
            { id: "eid2158", tween: [ "style", "${_description_08}", "height", '96px', { fromValue: '96px'}], position: 3000, duration: 0 },
            { id: "eid1729", tween: [ "style", "${_box-icon_08}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
            { id: "eid1730", tween: [ "style", "${_box-icon_08}", "left", '0px', { fromValue: '-1px'}], position: 500, duration: 0 },
            { id: "eid1889", tween: [ "style", "${_title_focus_08}", "width", '339px', { fromValue: '272px'}], position: 1994, duration: 6 },
            { id: "eid2261", tween: [ "style", "${_title_focus_08}", "width", '254px', { fromValue: '339px'}], position: 2500, duration: 500 },
            { id: "eid1911", tween: [ "style", "${_channel_brand_08}", "font-size", '20px', { fromValue: '20px'}], position: 2000, duration: 0 },
            { id: "eid2143", tween: [ "style", "${_channel_brand_08}", "font-size", '20px', { fromValue: '20px'}], position: 2500, duration: 0 },
            { id: "eid2142", tween: [ "style", "${_channel_brand_08}", "font-size", '20px', { fromValue: '20px'}], position: 3000, duration: 0 },
            { id: "eid1858", tween: [ "style", "${_episode_08}", "top", '236px', { fromValue: '178px'}], position: 0, duration: 500 },
            { id: "eid661", tween: [ "style", "${_episode_08}", "top", '58px', { fromValue: '236px'}], position: 2000, duration: 500 },
            { id: "eid2148", tween: [ "style", "${_episode_08}", "top", '182px', { fromValue: '58px'}], position: 2500, duration: 500 },
            { id: "eid2292", tween: [ "style", "${_episode_08}", "top", '182px', { fromValue: '182px'}], position: 3250, duration: 0 },
            { id: "eid450", tween: [ "style", "${_description_08}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid451", tween: [ "style", "${_description_08}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid561", tween: [ "style", "${_description_08}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 },
            { id: "eid562", tween: [ "style", "${_description_08}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid2160", tween: [ "style", "${_description_08}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid2159", tween: [ "style", "${_description_08}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid2993", tween: [ "style", "${_episode_08}", "font-size", '22px', { fromValue: '22px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid463", tween: [ "style", "${_box-delay}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 500 },
            { id: "eid1881", tween: [ "style", "${_box-delay}", "height", '272px', { fromValue: '245px'}], position: 2000, duration: 500 },
            { id: "eid2166", tween: [ "style", "${_box-delay}", "height", '245px', { fromValue: '272px'}], position: 2500, duration: 500 },
            { id: "eid666", tween: [ "style", "${_episode_08}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid2268", tween: [ "style", "${_episode_08}", "width", '272px', { fromValue: '272px'}], position: 3000, duration: 0 },
            { id: "eid1854", tween: [ "style", "${_series_episode_08}", "top", '279px', { fromValue: '247px'}], position: 0, duration: 498 },
            { id: "eid548", tween: [ "style", "${_series_episode_08}", "top", '68px', { fromValue: '271px'}], position: 2000, duration: 500 },
            { id: "eid2144", tween: [ "style", "${_series_episode_08}", "top", '211px', { fromValue: '68px'}], position: 2500, duration: 500 },
            { id: "eid501", tween: [ "style", "${_box-delay}", "top", '204px', { fromValue: '143px'}], position: 0, duration: 500 },
            { id: "eid462", tween: [ "style", "${_box-delay}", "top", '0px', { fromValue: '204px'}], position: 2000, duration: 500 },
            { id: "eid2165", tween: [ "style", "${_box-delay}", "top", '146px', { fromValue: '0px'}], position: 2500, duration: 500 },
            { id: "eid663", tween: [ "style", "${_episode_08}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 },
            { id: "eid2147", tween: [ "style", "${_episode_08}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid1839", tween: [ "style", "${_single-height}", "height", '272px', { fromValue: '212px'}], position: 0, duration: 500 },
            { id: "eid2256", tween: [ "style", "${_single-height}", "height", '212px', { fromValue: '272px'}], position: 2500, duration: 500 },
            { id: "eid505", tween: [ "style", "${_box-icon_08}", "top", '155px', { fromValue: '87px'}], position: 0, duration: 500 },
            { id: "eid429", tween: [ "style", "${_box-icon_08}", "top", '-49px', { fromValue: '155px'}], position: 2000, duration: 500 },
            { id: "eid2137", tween: [ "style", "${_box-icon_08}", "top", '98px', { fromValue: '-49px'}], position: 2500, duration: 500 },
            { id: "eid434", tween: [ "style", "${_channel_brand_08}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid2139", tween: [ "style", "${_channel_brand_08}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid470", tween: [ "color", "${_box-delay}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid2265", tween: [ "color", "${_box-delay}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2500, duration: 500 },
            { id: "eid1758", tween: [ "style", "${_channel_brand_08}", "left", '12px', { fromValue: '12px'}], position: 2000, duration: 0 },
            { id: "eid2141", tween: [ "style", "${_channel_brand_08}", "left", '12px', { fromValue: '12px'}], position: 2500, duration: 0 },
            { id: "eid2140", tween: [ "style", "${_channel_brand_08}", "left", '12px', { fromValue: '12px'}], position: 3000, duration: 0 },
            { id: "eid460", tween: [ "style", "${_footer_txt_08}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid1756", tween: [ "style", "${_series_episode_08}", "left", '12px', { fromValue: '13px'}], position: 2000, duration: 500 },
            { id: "eid2146", tween: [ "style", "${_series_episode_08}", "left", '13px', { fromValue: '12px'}], position: 2500, duration: 500 },
            { id: "eid681", tween: [ "style", "${_title_focus_08}", "opacity", '0', { fromValue: '0'}], position: 1994, duration: 0 },
            { id: "eid560", tween: [ "style", "${_title_focus_08}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid2153", tween: [ "style", "${_title_focus_08}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
            { id: "eid2152", tween: [ "style", "${_title_focus_08}", "opacity", '0', { fromValue: '0'}], position: 3006, duration: 0 },
            { id: "eid1721", tween: [ "style", "${_title_08}", "left", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid1722", tween: [ "style", "${_title_08}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid673", tween: [ "style", "${_title_08}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250 },
            { id: "eid2149", tween: [ "style", "${_title_08}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid1890", tween: [ "style", "${_title_focus_08}", "height", '27px', { fromValue: '55px'}], position: 2000, duration: 500 },
            { id: "eid2151", tween: [ "style", "${_title_focus_08}", "height", '26px', { fromValue: '27px'}], position: 2500, duration: 500 },
            { id: "eid1736", tween: [ "style", "${_single-height}", "left", '0px', { fromValue: '48px'}], position: 0, duration: 500 },
            { id: "eid2257", tween: [ "style", "${_single-height}", "left", '48px', { fromValue: '0px'}], position: 2500, duration: 500 }         ]
      }
   }
},
"numbers": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','684px','33px','36px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(183,207,232,1)']
   },
   {
      id: 'item_01',
      type: 'rect',
      rect: ['64px','412px','auto','auto','auto','auto']
   },
   {
      rect: ['432px','342px','90px','36px','auto','auto'],
      font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','500','none','normal'],
      id: 'position_txt',
      text: 'Position',
      align: 'left',
      type: 'text'
   },
   {
      id: 'collections',
      type: 'rect',
      rect: ['432px','461px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'item_01',
      symbolName: 'item_01'
   },
   {
      id: 'collections',
      symbolName: 'collections'
   }   ]
   },
   states: {
      "Base State": {
         "${_collections}": [
            ["style", "left", '432px'],
            ["style", "top", '461px']
         ],
         "${_item_01}": [
            ["style", "left", '64px'],
            ["style", "top", '412px']
         ],
         "${_Rectangle}": [
            ["style", "top", '684px'],
            ["style", "height", '36px'],
            ["style", "left", '0px'],
            ["style", "width", '33px']
         ],
         "${_position_txt}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '432px'],
            ["style", "top", '342px']
         ],
         "${symbolSelector}": [
            ["style", "height", '720px'],
            ["style", "width", '1280px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6848,
         autoPlay: false,
         labels: {
            "1": 0,
            "2": 2500,
            "3": 5500,
            "4": 6348,
            "5": 6848
         },
         timeline: [
            { id: "eid215", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_item_01}', [] ], ""], position: 0 },
            { id: "eid216", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_collections}', [] ], ""], position: 0 },
            { id: "eid217", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_collections}', [] ], ""], position: 2500 }         ]
      }
   }
},
"video": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','1280px','720px','auto','auto'],
      fill: ['rgba(196,196,196,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(196,196,196,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '720px'],
            ["style", "width", '1280px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"left_carousel": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      rect: ['144px','472px','320px','821px','auto','auto'],
      display: 'none',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 0.7,
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'group',
      display: 'none',
      id: 'collection_item_03',
      rect: ['72px','641px','320','245','auto','auto'],
      c: [
      {
         type: 'group',
         id: 'colItem_05',
         cursor: ['pointer'],
         rect: ['8px','8px','304px','245px','auto','auto'],
         c: [
         {
            id: 'baboon_05',
            type: 'image',
            rect: ['-8px','0px','320px','180px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/call-the-mid-wife-img5.jpg','0px','0px']
         },
         {
            type: 'rect',
            id: 'box-delay_05',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','418px','323px','290px','auto','auto'],
            fill: ['rgba(235,235,235,1.00)']
         },
         {
            transform: [],
            type: 'text',
            align: 'left',
            id: 'footer_txt_05',
            text: 'FIRST SHOWN: 14/05/13',
            rect: ['12px','627px','278px','21px','auto','auto'],
            font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(118,118,118,1.00)','500','none','normal']
         },
         {
            type: 'text',
            rect: ['12px','508px','278px','119px','auto','auto'],
            display: 'none',
            id: 'description_05',
            text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(86,86,86,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','55px','auto','auto'],
            id: 'title_focus_05',
            text: 'The Apprentice: You\'re Fired',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','25px','auto','auto'],
            id: 'title_05',
            text: 'The Apprentice: You\'re...',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','55px','auto','auto'],
            id: 'episode_05',
            text: 'Episode 3<br>',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['5px','83px','300px','27px','auto','auto'],
            id: 'series_episode_05',
            text: 'Series 9, Episode 3',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(233,47,131,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['12px','426px','278px','27px','auto','auto'],
            id: 'channel_brand_05',
            text: 'BBC ONE<br>',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal']
         },
         {
            type: 'rect',
            id: 'box-icon_05',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','370px','36px','38px','auto','auto'],
            fill: ['rgba(235,235,235,1.00)'],
            c: [
            {
               type: 'image',
               filter: [0.92988782051282,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
               id: 'iPlayer-05',
               rect: ['11px','11px','25px','25px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/iPlayer-01.svg','0px','0px']
            }]
         }]
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'collection_item_02',
      rect: ['72px','641px','320','245','auto','auto'],
      c: [
      {
         type: 'group',
         id: 'colItem_02',
         cursor: ['pointer'],
         rect: ['8px','8px','304px','245px','auto','auto'],
         c: [
         {
            id: 'baboon_04',
            type: 'image',
            rect: ['-8px','0px','320px','180px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/call-the-mid-wife-img3.jpg','0px','0px']
         },
         {
            type: 'rect',
            id: 'box-delay_04',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','418px','323px','290px','auto','auto'],
            fill: ['rgba(235,235,235,1.00)']
         },
         {
            transform: [],
            type: 'text',
            align: 'left',
            id: 'footer_txt_04',
            text: 'FIRST SHOWN: 14/05/13',
            rect: ['12px','627px','278px','21px','auto','auto'],
            font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(118,118,118,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['12px','508px','278px','119px','auto','auto'],
            display: 'none',
            id: 'description_04',
            text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(86,86,86,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['4px','453px','272px','55px','auto','auto'],
            id: 'title_focus_04',
            text: 'The Apprentice: You\'re Fired',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','25px','auto','auto'],
            id: 'title_04',
            text: 'The Apprentice: You\'re...',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','55px','auto','auto'],
            id: 'episode_04',
            text: 'Episode 3<br>',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['5px','83px','241px','27px','auto','auto'],
            id: 'series_episode_04',
            text: 'Series 9, Episode 3',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(233,47,131,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['12px','426px','278px','27px','auto','auto'],
            id: 'channel_brand_04',
            text: 'BBC ONE<br>',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal']
         },
         {
            type: 'rect',
            id: 'box-icon_04',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','370px','36px','38px','auto','auto'],
            fill: ['rgba(235,235,235,1.00)'],
            c: [
            {
               type: 'image',
               filter: [0.92988782051282,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
               id: 'iPlayer-04',
               rect: ['11px','12px','25px','25px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/iPlayer-01.svg','0px','0px']
            }]
         }]
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'collection_item_01',
      rect: ['144px','641px','272px','212px','auto','auto'],
      c: [
      {
         type: 'group',
         id: 'colItem_01',
         cursor: ['pointer'],
         rect: ['8px','8px','304px','245px','auto','auto'],
         c: [
         {
            id: 'baboon_03',
            type: 'image',
            rect: ['-8px','0px','100%','78.6%','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/call-the-mid-wife-img1.jpg','0px','0px']
         },
         {
            type: 'rect',
            id: 'box-delay_03',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','418px','323px','290px','auto','auto'],
            fill: ['rgba(235,235,235,1.00)']
         },
         {
            transform: [],
            type: 'text',
            align: 'left',
            id: 'footer_txt_03',
            text: 'FIRST SHOWN: 14/05/13',
            rect: ['12px','627px','278px','21px','auto','auto'],
            font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(118,118,118,1.00)','500','none','normal']
         },
         {
            type: 'text',
            rect: ['12px','508px','278px','119px','auto','auto'],
            display: 'none',
            id: 'description_03',
            text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(86,86,86,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','29px','auto','auto'],
            id: 'title_focus_03',
            text: 'The Apprentice: You\'re Fired',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','25px','auto','auto'],
            id: 'title_03',
            text: 'The Apprentice: You\'re...',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','55px','auto','auto'],
            id: 'episode_03',
            text: 'Episode 3<br>',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['5px','83px','241px','27px','auto','auto'],
            id: 'series_episode_03',
            text: 'Series 9, Episode 3',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(233,47,131,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['12px','426px','278px','27px','auto','auto'],
            id: 'channel_brand_03',
            text: 'BBC ONE<br>',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal']
         },
         {
            type: 'rect',
            id: 'box-icon_03',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','370px','36px','38px','auto','auto'],
            fill: ['rgba(235,235,235,1.00)'],
            c: [
            {
               type: 'image',
               filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
               id: 'iPlayer-03',
               rect: ['11px','12px','25px','25px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/iPlayer-01.svg','0px','0px']
            }]
         }]
      }]
   },
   {
      type: 'group',
      display: 'none',
      id: 'collections',
      rect: ['361px','473px','304','229','auto','auto'],
      c: [
      {
         type: 'group',
         id: 'single-height_02',
         cursor: ['pointer'],
         rect: ['-40px','-52px','304px','245px','auto','auto'],
         c: [
         {
            type: 'rect',
            rect: ['0px','418px','323px','290px','auto','auto'],
            id: 'box-delay_02',
            stroke: [0,'rgb(0, 0, 0)','none'],
            display: 'none',
            fill: ['rgba(235,235,235,1.00)']
         },
         {
            transform: [],
            type: 'text',
            align: 'left',
            id: 'footer_txt_02',
            text: 'FIRST SHOWN: 14/05/13',
            rect: ['12px','627px','278px','21px','auto','auto'],
            font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(118,118,118,1.00)','500','none','normal']
         },
         {
            type: 'text',
            rect: ['12px','508px','278px','119px','auto','auto'],
            id: 'description_02',
            text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(86,86,86,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','55px','auto','auto'],
            display: 'none',
            id: 'title_focus_02',
            text: 'The Apprentice: You\'re Fired',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(0,0,0,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','55px','auto','auto'],
            id: 'title_02',
            text: 'The Apprentice: You\'re Fired',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['13px','453px','272px','55px','auto','auto'],
            id: 'episode_02',
            text: 'Episode 3<br>',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(17,17,17,1.00)','400','none','normal']
         },
         {
            type: 'text',
            rect: ['16px','83px','241px','27px','auto','auto'],
            display: 'none',
            id: 'series_episode_02',
            text: 'Series 9, Episode 3',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(233,47,131,1.00)','500','none','normal']
         },
         {
            type: 'text',
            rect: ['12px','426px','278px','27px','auto','auto'],
            display: 'none',
            id: 'channel_brand_02',
            text: 'BBC ONE<br>',
            align: 'left',
            font: ['Helvetica Neue, Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal']
         },
         {
            type: 'rect',
            id: 'bottomBorder_02',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['-2px','230px','308px','6px','auto','auto'],
            fill: ['rgba(235,235,235,1)']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_description_05}": [
            ["style", "line-height", '26px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_channel_brand_04}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '16px'],
            ["style", "width", '276px'],
            ["style", "top", '-4px'],
            ["style", "height", '27px'],
            ["subproperty", "filter.invert", '0'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ],
         "${_title_focus_05}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '24px'],
            ["style", "top", '238px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '294px']
         ],
         "${_iPlayer-03}": [
            ["style", "top", '12px'],
            ["style", "height", '25px'],
            ["subproperty", "filter.invert", '0.93134'],
            ["style", "left", '11px'],
            ["style", "width", '25px']
         ],
         "${_channel_brand_05}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '16px'],
            ["style", "width", '276px'],
            ["style", "top", '-2px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ],
         "${_episode_05}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '177px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_box-delay_02}": [
            ["color", "background-color", 'rgba(235,235,235,1)'],
            ["style", "top", '204px'],
            ["style", "height", '245px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '368px']
         ],
         "${_collections}": [
            ["style", "top", '473px'],
            ["style", "height", '229px'],
            ["style", "display", 'none'],
            ["style", "left", '169px'],
            ["style", "width", '304px']
         ],
         "${_footer_txt_05}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '16px'],
            ["style", "font-size", '18px'],
            ["style", "top", '255px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_series_episode_04}": [
            ["style", "top", '243px'],
            ["style", "height", '29px'],
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '22px']
         ],
         "${_footer_txt_04}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '253px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_iPlayer-04}": [
            ["style", "top", '12px'],
            ["subproperty", "filter.invert", '0.92988782051282'],
            ["style", "height", '25px'],
            ["style", "left", '11px'],
            ["style", "width", '25px']
         ],
         "${_baboon_03}": [
            ["style", "height", '78.6%'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_title_focus_03}": [
            ["style", "line-height", '26px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px'],
            ["style", "top", '214px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '29px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '294px'],
            ["style", "opacity", '0']
         ],
         "${_collection_item_03}": [
            ["style", "top", '1115px'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["style", "display", 'none']
         ],
         "${_box-delay_03}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '212px'],
            ["style", "top", '161px'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_series_episode_05}": [
            ["style", "top", '262px'],
            ["style", "width", '300px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px']
         ],
         "${_description_04}": [
            ["style", "line-height", '26px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '82px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_single-height_02}": [
            ["style", "top", '-60px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '237px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-95px'],
            ["style", "width", '320px']
         ],
         "${_colItem_02}": [
            ["style", "top", '8px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_title_focus_04}": [
            ["style", "line-height", '26px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px'],
            ["style", "top", '215px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '302px']
         ],
         "${_collection_item_01}": [
            ["style", "top", '641px'],
            ["style", "height", '245px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["style", "width", '320px']
         ],
         "${_collection_item_02}": [
            ["style", "top", '878px'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["style", "display", 'none']
         ],
         "${_title_02}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '24px'],
            ["style", "top", '212px'],
            ["style", "opacity", '0'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '339px'],
            ["style", "display", 'block']
         ],
         "${_baboon_04}": [
            ["style", "top", '0px'],
            ["style", "height", '180px'],
            ["style", "left", '-8px'],
            ["style", "width", '320px']
         ],
         "${_iPlayer-05}": [
            ["style", "top", '11px'],
            ["style", "height", '25px'],
            ["subproperty", "filter.invert", '0.934744'],
            ["style", "left", '11px'],
            ["style", "width", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1708px'],
            ["style", "width", '1288px']
         ],
         "${_colItem_01}": [
            ["style", "top", '16px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '272px']
         ],
         "${_title_04}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '24px'],
            ["style", "top", '151px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_series_episode_03}": [
            ["style", "top", '262px'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px']
         ],
         "${_title_03}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '24px'],
            ["style", "top", '172px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_series_episode_02}": [
            ["style", "top", '68px'],
            ["style", "font-size", '22px'],
            ["style", "display", 'none'],
            ["style", "height", '29px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '16px'],
            ["style", "width", '241px']
         ],
         "${_episode_03}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '197px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-2px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '1005px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '392px']
         ],
         "${_channel_brand_02}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '700'],
            ["style", "left", '16px'],
            ["style", "width", '276px'],
            ["style", "top", '12px'],
            ["style", "font-size", '18px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "display", 'none']
         ],
         "${_box-delay_05}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '229px'],
            ["style", "top", '144px'],
            ["style", "left", '0px'],
            ["style", "width", '304px']
         ],
         "${_bottomBorder_02}": [
            ["color", "background-color", 'rgba(233,47,131,1.00)'],
            ["style", "top", '273px'],
            ["style", "height", '6px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
         ],
         "${_baboon_05}": [
            ["style", "top", '0px'],
            ["style", "height", '180px'],
            ["style", "left", '-8px'],
            ["style", "width", '320px']
         ],
         "${_title_focus_02}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '24px'],
            ["style", "top", '44px'],
            ["style", "width", '339px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_description_02}": [
            ["style", "line-height", '26px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '111px'],
            ["style", "width", '342px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "display", 'block']
         ],
         "${_title_05}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '24px'],
            ["style", "top", '153px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_footer_txt_03}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '272px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '0']
         ],
         "${_footer_txt_02}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '18px'],
            ["style", "top", '239px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "width", '276px'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "display", 'block'],
            ["style", "opacity", '1']
         ],
         "${_description_03}": [
            ["style", "line-height", '26px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "width", '276px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '81px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "display", 'none']
         ],
         "${_box-delay_04}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '229px'],
            ["style", "top", '142px'],
            ["style", "left", '0px'],
            ["style", "width", '304px']
         ],
         "${_episode_02}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '58px'],
            ["style", "height", '25px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "width", '272px']
         ],
         "${_episode_04}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '175px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_colItem_05}": [
            ["style", "top", '16px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_channel_brand_03}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '16px'],
            ["style", "width", '276px'],
            ["style", "top", '15px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "font-size", '18px'],
            ["style", "opacity", '0']
         ],
         "${_box-icon_05}": [
            ["style", "top", '95px'],
            ["style", "height", '49px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '48px']
         ],
         "${_box-icon_04}": [
            ["style", "top", '94px'],
            ["style", "height", '49px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '48px']
         ],
         "${_box-icon_03}": [
            ["style", "top", '113px'],
            ["subproperty", "filter.invert", '0'],
            ["style", "height", '49px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4498,
         autoPlay: false,
         timeline: [
            { id: "eid3123", tween: [ "style", "${_collections}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid908", tween: [ "style", "${_channel_brand_03}", "opacity", '1', { fromValue: '0'}], position: 1256, duration: 250, easing: "easeOutCubic" },
            { id: "eid1062", tween: [ "style", "${_channel_brand_03}", "opacity", '0', { fromValue: '1'}], position: 1506, duration: 248, easing: "easeOutCubic" },
            { id: "eid1149", tween: [ "style", "${_episode_04}", "top", '211px', { fromValue: '175px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1150", tween: [ "style", "${_episode_04}", "top", '68px', { fromValue: '211px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid2984", tween: [ "style", "${_episode_04}", "top", '177px', { fromValue: '68px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid3119", tween: [ "style", "${_box-delay_02}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid936", tween: [ "style", "${_description_03}", "top", '112px', { fromValue: '481px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid937", tween: [ "style", "${_description_03}", "top", '112px', { fromValue: '291px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1079", tween: [ "style", "${_description_03}", "top", '291px', { fromValue: '112px'}], position: 1506, duration: 494, easing: "easeOutCubic" },
            { id: "eid2923", tween: [ "style", "${_description_03}", "top", '296px', { fromValue: '291px'}], position: 2000, duration: 6, easing: "easeOutCubic" },
            { id: "eid1135", tween: [ "style", "${_channel_brand_04}", "top", '-102px', { fromValue: '-4px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1136", tween: [ "style", "${_channel_brand_04}", "top", '10px', { fromValue: '186px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1137", tween: [ "style", "${_channel_brand_04}", "top", '170px', { fromValue: '10px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1256", tween: [ "style", "${_box-icon_05}", "top", '129px', { fromValue: '95px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1257", tween: [ "style", "${_box-icon_05}", "top", '-49px', { fromValue: '129px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1258", tween: [ "style", "${_box-icon_05}", "top", '112px', { fromValue: '-49px'}], position: 3508, duration: 500, easing: "easeOutCubic" },
            { id: "eid2917", tween: [ "style", "${_title_focus_03}", "width", '252px', { fromValue: '294px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid2824", tween: [ "style", "${_bottomBorder_02}", "width", '320px', { fromValue: '320px'}], position: 500, duration: 0 },
            { id: "eid1351", tween: [ "style", "${_box-delay_05}", "left", '0px', { fromValue: '0px'}], position: 2506, duration: 0 },
            { id: "eid1352", tween: [ "style", "${_box-delay_05}", "left", '0px', { fromValue: '0px'}], position: 3006, duration: 0 },
            { id: "eid1353", tween: [ "style", "${_box-delay_05}", "left", '0px', { fromValue: '0px'}], position: 3008, duration: 0 },
            { id: "eid1354", tween: [ "style", "${_box-delay_05}", "left", '0px', { fromValue: '0px'}], position: 3508, duration: 0 },
            { id: "eid1355", tween: [ "style", "${_box-delay_05}", "left", '0px', { fromValue: '0px'}], position: 4002, duration: 0 },
            { id: "eid1246", tween: [ "style", "${_colItem_05}", "height", '245px', { fromValue: '212px'}], position: 2506, duration: 498, easing: "easeOutCubic" },
            { id: "eid1248", tween: [ "style", "${_colItem_05}", "height", '229px', { fromValue: '245px'}], position: 3502, duration: 498, easing: "easeOutCubic" },
            { id: "eid1290", tween: [ "style", "${_title_05}", "top", '187px', { fromValue: '153px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid3421", tween: [ "style", "${_title_05}", "top", '42px', { fromValue: '187px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1291", tween: [ "style", "${_title_05}", "top", '174px', { fromValue: '42px'}], position: 3508, duration: 500, easing: "easeOutCubic" },
            { id: "eid767", tween: [ "style", "${_series_episode_02}", "top", '211px', { fromValue: '68px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1123", tween: [ "style", "${_colItem_02}", "width", '320px', { fromValue: '272px'}], position: 1506, duration: 498, easing: "easeOutCubic" },
            { id: "eid1124", tween: [ "style", "${_colItem_02}", "width", '320px', { fromValue: '320px'}], position: 2006, duration: 0 },
            { id: "eid1125", tween: [ "style", "${_colItem_02}", "width", '320px', { fromValue: '320px'}], position: 2506, duration: 0 },
            { id: "eid1126", tween: [ "style", "${_colItem_02}", "width", '272px', { fromValue: '320px'}], position: 2508, duration: 498, easing: "easeOutCubic" },
            { id: "eid1204", tween: [ "style", "${_footer_txt_04}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 253, easing: "easeOutCubic" },
            { id: "eid1205", tween: [ "style", "${_footer_txt_04}", "opacity", '0', { fromValue: '1'}], position: 2755, duration: 249, easing: "easeOutCubic" },
            { id: "eid1339", tween: [ "style", "${_footer_txt_05}", "left", '16px', { fromValue: '16px'}], position: 2506, duration: 0 },
            { id: "eid1340", tween: [ "style", "${_footer_txt_05}", "left", '12px', { fromValue: '12px'}], position: 3006, duration: 0 },
            { id: "eid2895", tween: [ "style", "${_collection_item_01}", "height", '245px', { fromValue: '245px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid786", tween: [ "style", "${_episode_02}", "width", '272px', { fromValue: '272px'}], position: 500, duration: 0 },
            { id: "eid2938", tween: [ "style", "${_episode_05}", "font-size", '22px', { fromValue: '22px'}], position: 4126, duration: 0 },
            { id: "eid901", tween: [ "style", "${_box-icon_03}", "top", '129px', { fromValue: '113px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid902", tween: [ "style", "${_box-icon_03}", "top", '-49px', { fromValue: '129px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1060", tween: [ "style", "${_box-icon_03}", "top", '96px', { fromValue: '-49px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid947", tween: [ "style", "${_description_03}", "width", '294px', { fromValue: '276px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1209", tween: [ "style", "${_box-delay_04}", "top", '178px', { fromValue: '142px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1211", tween: [ "style", "${_box-delay_04}", "top", '0px', { fromValue: '177px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1212", tween: [ "style", "${_box-delay_04}", "top", '144px', { fromValue: '0px'}], position: 2506, duration: 502, easing: "easeOutCubic" },
            { id: "eid2777", tween: [ "subproperty", "${_iPlayer-05}", "filter.invert", '0.074367397435898', { fromValue: '0.934744'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1292", tween: [ "color", "${_title_05}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1293", tween: [ "color", "${_title_05}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,17,17,1)'}], position: 3758, duration: 250, easing: "easeOutCubic" },
            { id: "eid1117", tween: [ "style", "${_colItem_02}", "top", '0px', { fromValue: '8px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1118", tween: [ "style", "${_colItem_02}", "top", '8px', { fromValue: '0px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1208", tween: [ "style", "${_footer_txt_04}", "width", '278px', { fromValue: '276px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1294", tween: [ "style", "${_title_05}", "opacity", '0', { fromValue: '1'}], position: 3008, duration: 250, easing: "easeOutCubic" },
            { id: "eid1295", tween: [ "style", "${_title_05}", "opacity", '1', { fromValue: '0'}], position: 3758, duration: 250, easing: "easeOutCubic" },
            { id: "eid774", tween: [ "style", "${_episode_02}", "top", '198px', { fromValue: '58px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2642", tween: [ "style", "${_episode_02}", "top", '199px', { fromValue: '198px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid1285", tween: [ "style", "${_episode_05}", "opacity", '0', { fromValue: '1'}], position: 3008, duration: 250, easing: "easeOutCubic" },
            { id: "eid1286", tween: [ "style", "${_episode_05}", "opacity", '1', { fromValue: '0'}], position: 3758, duration: 250, easing: "easeOutCubic" },
            { id: "eid3110", tween: [ "style", "${_colItem_02}", "left", '0px', { fromValue: '0px'}], position: 1506, duration: 0 },
            { id: "eid3111", tween: [ "style", "${_colItem_02}", "left", '0px', { fromValue: '0px'}], position: 2006, duration: 0 },
            { id: "eid1122", tween: [ "style", "${_colItem_02}", "left", '0px', { fromValue: '0px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1373", tween: [ "style", "${_collection_item_03}", "top", '576px', { fromValue: '1115px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1375", tween: [ "style", "${_collection_item_03}", "top", '532px', { fromValue: '576px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1242", tween: [ "style", "${_collection_item_03}", "top", '296px', { fromValue: '532px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1378", tween: [ "style", "${_collection_item_03}", "top", '1123px', { fromValue: '296px'}], position: 3502, duration: 498, easing: "easeOutCubic" },
            { id: "eid1359", tween: [ "style", "${_baboon_05}", "left", '0px', { fromValue: '-8px'}], position: 2506, duration: 498, easing: "easeOutCubic" },
            { id: "eid1360", tween: [ "style", "${_baboon_05}", "left", '-8px', { fromValue: '0px'}], position: 3502, duration: 498, easing: "easeOutCubic" },
            { id: "eid1259", tween: [ "color", "${_box-icon_05}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1260", tween: [ "color", "${_box-icon_05}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 3508, duration: 500, easing: "easeOutCubic" },
            { id: "eid1346", tween: [ "style", "${_box-delay_05}", "height", '245px', { fromValue: '229px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1348", tween: [ "style", "${_box-delay_05}", "height", '245px', { fromValue: '245px'}], position: 3508, duration: 0 },
            { id: "eid893", tween: [ "style", "${_collections}", "left", '72px', { fromValue: '169px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1321", tween: [ "style", "${_description_05}", "display", 'none', { fromValue: 'none'}], position: 2506, duration: 0 },
            { id: "eid1322", tween: [ "style", "${_description_05}", "display", 'block', { fromValue: 'none'}], position: 3008, duration: 0 },
            { id: "eid1323", tween: [ "style", "${_description_05}", "display", 'block', { fromValue: 'block'}], position: 4002, duration: 0 },
            { id: "eid1283", tween: [ "style", "${_episode_05}", "height", '25px', { fromValue: '25px'}], position: 3502, duration: 0 },
            { id: "eid1284", tween: [ "style", "${_episode_05}", "height", '25px', { fromValue: '25px'}], position: 3508, duration: 0 },
            { id: "eid1342", tween: [ "style", "${_box-delay_05}", "top", '178px', { fromValue: '144px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1344", tween: [ "style", "${_box-delay_05}", "top", '0px', { fromValue: '177px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1345", tween: [ "style", "${_box-delay_05}", "top", '160px', { fromValue: '0px'}], position: 3508, duration: 494, easing: "easeOutCubic" },
            { id: "eid1130", tween: [ "color", "${_box-icon_04}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1131", tween: [ "color", "${_box-icon_04}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1296", tween: [ "style", "${_title_05}", "left", '16px', { fromValue: '16px'}], position: 2506, duration: 0 },
            { id: "eid1297", tween: [ "style", "${_title_05}", "left", '16px', { fromValue: '16px'}], position: 3006, duration: 0 },
            { id: "eid1132", tween: [ "style", "${_box-icon_04}", "left", '0px', { fromValue: '0px'}], position: 1506, duration: 0 },
            { id: "eid1133", tween: [ "style", "${_box-icon_04}", "left", '0px', { fromValue: '0px'}], position: 2006, duration: 0 },
            { id: "eid1319", tween: [ "style", "${_description_05}", "height", '96px', { fromValue: '96px'}], position: 3008, duration: 0 },
            { id: "eid1320", tween: [ "style", "${_description_05}", "height", '96px', { fromValue: '96px'}], position: 4002, duration: 0 },
            { id: "eid896", tween: [ "style", "${_colItem_01}", "height", '245px', { fromValue: '212px'}], position: 500, duration: 498, easing: "easeOutCubic" },
            { id: "eid1099", tween: [ "style", "${_colItem_01}", "height", '212px', { fromValue: '245px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid3116", tween: [ "style", "${_single-height_02}", "width", '320px', { fromValue: '320px'}], position: 500, duration: 0 },
            { id: "eid2649", tween: [ "style", "${_single-height_02}", "width", '320px', { fromValue: '320px'}], position: 2498, duration: 0, easing: "easeOutCubic" },
            { id: "eid931", tween: [ "style", "${_title_focus_03}", "opacity", '1', { fromValue: '0'}], position: 1256, duration: 250, easing: "easeOutCubic" },
            { id: "eid1074", tween: [ "style", "${_title_focus_03}", "opacity", '0', { fromValue: '1'}], position: 1506, duration: 250, easing: "easeOutCubic" },
            { id: "eid1249", tween: [ "style", "${_colItem_05}", "left", '0px', { fromValue: '0px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1250", tween: [ "style", "${_colItem_05}", "left", '8px', { fromValue: '0px'}], position: 3502, duration: 498, easing: "easeOutCubic" },
            { id: "eid1172", tween: [ "style", "${_title_focus_04}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid1173", tween: [ "style", "${_title_focus_04}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 255, easing: "easeOutCubic" },
            { id: "eid1174", tween: [ "style", "${_title_focus_04}", "opacity", '0', { fromValue: '1'}], position: 2505, duration: 250, easing: "easeOutCubic" },
            { id: "eid925", tween: [ "style", "${_title_03}", "opacity", '0', { fromValue: '1'}], position: 1006, duration: 250, easing: "easeOutCubic" },
            { id: "eid1071", tween: [ "style", "${_title_03}", "opacity", '1', { fromValue: '0'}], position: 1756, duration: 250, easing: "easeOutCubic" },
            { id: "eid1181", tween: [ "style", "${_title_focus_04}", "width", '302px', { fromValue: '302px'}], position: 2000, duration: 0 },
            { id: "eid1182", tween: [ "style", "${_title_focus_04}", "width", '272px', { fromValue: '272px'}], position: 3006, duration: 0 },
            { id: "eid1145", tween: [ "style", "${_series_episode_04}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250, easing: "easeOutCubic" },
            { id: "eid1146", tween: [ "style", "${_series_episode_04}", "opacity", '0', { fromValue: '1'}], position: 2505, duration: 249, easing: "easeOutCubic" },
            { id: "eid1281", tween: [ "color", "${_episode_05}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 2506, duration: 0 },
            { id: "eid1282", tween: [ "color", "${_episode_05}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 3006, duration: 0 },
            { id: "eid954", tween: [ "style", "${_box-delay_03}", "top", '177px', { fromValue: '161px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid956", tween: [ "style", "${_box-delay_03}", "top", '0px', { fromValue: '177px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1087", tween: [ "style", "${_box-delay_03}", "top", '144px', { fromValue: '0px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid857", tween: [ "style", "${_box-delay_02}", "width", '320px', { fromValue: '368px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2651", tween: [ "style", "${_box-delay_02}", "width", '320px', { fromValue: '320px'}], position: 4000, duration: 0, easing: "easeOutCubic" },
            { id: "eid924", tween: [ "color", "${_title_03}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1113", tween: [ "color", "${_title_03}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,17,17,1)'}], position: 1756, duration: 250, easing: "easeOutCubic" },
            { id: "eid972", tween: [ "style", "${_collection_item_01}", "top", '119px', { fromValue: '641px'}], position: 500, duration: 498, easing: "easeOutCubic" },
            { id: "eid1240", tween: [ "style", "${_collection_item_01}", "top", '59px', { fromValue: '119px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1377", tween: [ "style", "${_collection_item_01}", "top", '-187px', { fromValue: '59px'}], position: 2508, duration: 500, easing: "easeOutCubic" },
            { id: "eid1380", tween: [ "style", "${_collection_item_01}", "top", '640px', { fromValue: '-187px'}], position: 3500, duration: 502, easing: "easeOutCubic" },
            { id: "eid1197", tween: [ "style", "${_description_04}", "left", '16px', { fromValue: '20px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1287", tween: [ "style", "${_episode_05}", "left", '16px', { fromValue: '16px'}], position: 2506, duration: 0 },
            { id: "eid1288", tween: [ "style", "${_episode_05}", "left", '16px', { fromValue: '16px'}], position: 3006, duration: 0 },
            { id: "eid1163", tween: [ "color", "${_title_04}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1164", tween: [ "color", "${_title_04}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,17,17,1)'}], position: 2756, duration: 248, easing: "easeOutCubic" },
            { id: "eid1154", tween: [ "style", "${_episode_04}", "height", '25px', { fromValue: '25px'}], position: 2505, duration: 0 },
            { id: "eid1218", tween: [ "style", "${_box-delay_04}", "left", '0px', { fromValue: '0px'}], position: 1506, duration: 0 },
            { id: "eid1220", tween: [ "style", "${_box-delay_04}", "left", '0px', { fromValue: '0px'}], position: 2006, duration: 0 },
            { id: "eid1221", tween: [ "style", "${_box-delay_04}", "left", '0px', { fromValue: '0px'}], position: 2506, duration: 0 },
            { id: "eid1222", tween: [ "style", "${_box-delay_04}", "left", '0px', { fromValue: '0px'}], position: 3006, duration: 0 },
            { id: "eid1127", tween: [ "style", "${_box-icon_04}", "top", '129px', { fromValue: '94px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1128", tween: [ "style", "${_box-icon_04}", "top", '-49px', { fromValue: '129px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1129", tween: [ "style", "${_box-icon_04}", "top", '96px', { fromValue: '-49px'}], position: 2506, duration: 498, easing: "easeOutCubic" },
            { id: "eid897", tween: [ "style", "${_colItem_01}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1100", tween: [ "style", "${_colItem_01}", "left", '1px', { fromValue: '0px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid3121", tween: [ "style", "${_series_episode_02}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid906", tween: [ "style", "${_channel_brand_03}", "top", '-102px', { fromValue: '15px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid907", tween: [ "style", "${_channel_brand_03}", "top", '10px', { fromValue: '186px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1061", tween: [ "style", "${_channel_brand_03}", "top", '191px', { fromValue: '10px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid2774", tween: [ "subproperty", "${_iPlayer-04}", "filter.invert", '0.059795217948718', { fromValue: '0.92988782051282'}], position: 1506, duration: 498, easing: "easeOutCubic" },
            { id: "eid2775", tween: [ "subproperty", "${_iPlayer-04}", "filter.invert", '0.93474559294872', { fromValue: '0.059795'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid923", tween: [ "style", "${_title_03}", "top", '187px', { fromValue: '172px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid3412", tween: [ "style", "${_title_03}", "top", '43px', { fromValue: '187px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid2930", tween: [ "style", "${_title_03}", "top", '154px', { fromValue: '154px'}], position: 1531, duration: 0, easing: "easeOutCubic" },
            { id: "eid3415", tween: [ "style", "${_title_03}", "top", '154px', { fromValue: '154px'}], position: 2000, duration: 0, easing: "easeOutCubic" },
            { id: "eid2786", tween: [ "style", "${_description_02}", "width", '278px', { fromValue: '342px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid909", tween: [ "style", "${_channel_brand_03}", "left", '16px', { fromValue: '16px'}], position: 1006, duration: 0 },
            { id: "eid1334", tween: [ "style", "${_footer_txt_05}", "top", '395px', { fromValue: '255px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1335", tween: [ "style", "${_footer_txt_05}", "top", '216px', { fromValue: '395px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1336", tween: [ "style", "${_footer_txt_05}", "top", '395px', { fromValue: '216px'}], position: 3508, duration: 500, easing: "easeOutCubic" },
            { id: "eid948", tween: [ "style", "${_footer_txt_03}", "top", '395px', { fromValue: '272px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid949", tween: [ "style", "${_footer_txt_03}", "top", '211px', { fromValue: '395px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1085", tween: [ "style", "${_footer_txt_03}", "top", '400px', { fromValue: '211px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1206", tween: [ "style", "${_footer_txt_04}", "left", '12px', { fromValue: '12px'}], position: 1506, duration: 0 },
            { id: "eid1207", tween: [ "style", "${_footer_txt_04}", "left", '16px', { fromValue: '16px'}], position: 2006, duration: 0 },
            { id: "eid742", tween: [ "style", "${_bottomBorder_02}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid3122", tween: [ "style", "${_channel_brand_02}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1200", tween: [ "style", "${_description_04}", "width", '294px', { fromValue: '276px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1278", tween: [ "style", "${_episode_05}", "top", '211px', { fromValue: '177px'}], position: 2506, duration: 502, easing: "easeOutCubic" },
            { id: "eid1279", tween: [ "style", "${_episode_05}", "top", '66px', { fromValue: '211px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1280", tween: [ "style", "${_episode_05}", "top", '198px', { fromValue: '66px'}], position: 3508, duration: 494, easing: "easeOutCubic" },
            { id: "eid1165", tween: [ "style", "${_title_04}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250, easing: "easeOutCubic" },
            { id: "eid1166", tween: [ "style", "${_title_04}", "opacity", '1', { fromValue: '0'}], position: 2756, duration: 250, easing: "easeOutCubic" },
            { id: "eid894", tween: [ "style", "${_collections}", "top", '-131px', { fromValue: '412px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1381", tween: [ "style", "${_collections}", "top", '632px', { fromValue: '-131px'}], position: 3502, duration: 500, easing: "easeOutCubic" },
            { id: "eid1186", tween: [ "style", "${_description_04}", "height", '82px', { fromValue: '82px'}], position: 2006, duration: 0 },
            { id: "eid1187", tween: [ "style", "${_description_04}", "height", '82px', { fromValue: '82px'}], position: 3004, duration: 0 },
            { id: "eid960", tween: [ "style", "${_box-delay_03}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid961", tween: [ "style", "${_box-delay_03}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid962", tween: [ "style", "${_box-delay_03}", "left", '0px', { fromValue: '0px'}], position: 1006, duration: 0 },
            { id: "eid1090", tween: [ "style", "${_box-delay_03}", "left", '0px', { fromValue: '0px'}], position: 1506, duration: 0 },
            { id: "eid1089", tween: [ "style", "${_box-delay_03}", "left", '0px', { fromValue: '0px'}], position: 2006, duration: 0 },
            { id: "eid1241", tween: [ "style", "${_collection_item_03}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1119", tween: [ "style", "${_colItem_02}", "height", '245px', { fromValue: '212px'}], position: 1506, duration: 498, easing: "easeOutCubic" },
            { id: "eid1120", tween: [ "style", "${_colItem_02}", "height", '212px', { fromValue: '245px'}], position: 2508, duration: 498, easing: "easeOutCubic" },
            { id: "eid782", tween: [ "style", "${_episode_02}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid3247", tween: [ "style", "${_episode_02}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 494, easing: "easeOutCubic" },
            { id: "eid903", tween: [ "style", "${_box-icon_03}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid904", tween: [ "style", "${_box-icon_03}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid900", tween: [ "color", "${_box-icon_03}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1108", tween: [ "color", "${_box-icon_03}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1289", tween: [ "style", "${_episode_05}", "width", '272px', { fromValue: '276px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid758", tween: [ "style", "${_channel_brand_02}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid733", tween: [ "style", "${_single-height_02}", "top", '0px', { fromValue: '-60px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid800", tween: [ "style", "${_title_02}", "width", '260px', { fromValue: '339px'}], position: 500, duration: 0 },
            { id: "eid801", tween: [ "style", "${_title_02}", "width", '260px', { fromValue: '260px'}], position: 750, duration: 0 },
            { id: "eid2897", tween: [ "style", "${_collection_item_01}", "left", '72px', { fromValue: '72px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1263", tween: [ "style", "${_box-icon_05}", "height", '49px', { fromValue: '49px'}], position: 2506, duration: 0 },
            { id: "eid847", tween: [ "style", "${_box-delay_02}", "height", '245px', { fromValue: '245px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid916", tween: [ "color", "${_episode_03}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 500, duration: 0 },
            { id: "eid917", tween: [ "color", "${_episode_03}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 1000, duration: 0 },
            { id: "eid932", tween: [ "style", "${_title_focus_03}", "left", '16px', { fromValue: '4px'}], position: 1000, duration: 0 },
            { id: "eid1223", tween: [ "style", "${_box-delay_04}", "width", '320px', { fromValue: '304px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1224", tween: [ "style", "${_box-delay_04}", "width", '320px', { fromValue: '320px'}], position: 2500, duration: 0 },
            { id: "eid1225", tween: [ "style", "${_box-delay_04}", "width", '320px', { fromValue: '320px'}], position: 2506, duration: 0 },
            { id: "eid756", tween: [ "style", "${_channel_brand_02}", "top", '157px', { fromValue: '12px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid740", tween: [ "style", "${_bottomBorder_02}", "top", '239px', { fromValue: '273px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2636", tween: [ "style", "${_bottomBorder_02}", "top", '275px', { fromValue: '239px'}], position: 2000, duration: 498, easing: "easeOutCubic" },
            { id: "eid905", tween: [ "style", "${_box-icon_03}", "height", '49px', { fromValue: '49px'}], position: 500, duration: 0 },
            { id: "eid1299", tween: [ "style", "${_title_focus_05}", "top", '43px', { fromValue: '238px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1300", tween: [ "style", "${_title_focus_05}", "top", '214px', { fromValue: '43px'}], position: 3508, duration: 500, easing: "easeOutCubic" },
            { id: "eid735", tween: [ "style", "${_single-height_02}", "height", '245px', { fromValue: '237px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2650", tween: [ "style", "${_single-height_02}", "height", '245px', { fromValue: '245px'}], position: 2498, duration: 0, easing: "easeOutCubic" },
            { id: "eid974", tween: [ "style", "${_collection_item_01}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid3410", tween: [ "style", "${_collection_item_01}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutCubic" },
            { id: "eid1244", tween: [ "style", "${_colItem_05}", "top", '0px', { fromValue: '16px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1245", tween: [ "style", "${_colItem_05}", "top", '8px', { fromValue: '0px'}], position: 3502, duration: 500, easing: "easeOutCubic" },
            { id: "eid929", tween: [ "style", "${_title_focus_03}", "top", '44px', { fromValue: '214px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1072", tween: [ "style", "${_title_focus_03}", "top", '219px', { fromValue: '44px'}], position: 1506, duration: 498, easing: "easeOutCubic" },
            { id: "eid1314", tween: [ "style", "${_title_focus_05}", "width", '294px', { fromValue: '294px'}], position: 3008, duration: 0 },
            { id: "eid1315", tween: [ "style", "${_title_focus_05}", "width", '294px', { fromValue: '294px'}], position: 4008, duration: 0 },
            { id: "eid844", tween: [ "style", "${_box-delay_02}", "top", '117px', { fromValue: '204px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2635", tween: [ "style", "${_box-delay_02}", "top", '164px', { fromValue: '117px'}], position: 3500, duration: 498, easing: "easeOutCubic" },
            { id: "eid818", tween: [ "style", "${_description_02}", "top", '251px', { fromValue: '111px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2656", tween: [ "style", "${_description_02}", "top", '251px', { fromValue: '251px'}], position: 4498, duration: 0, easing: "easeOutCubic" },
            { id: "eid1191", tween: [ "style", "${_description_04}", "opacity", '1', { fromValue: '1'}], position: 1506, duration: 0 },
            { id: "eid1192", tween: [ "style", "${_description_04}", "opacity", '0', { fromValue: '0'}], position: 2006, duration: 0 },
            { id: "eid1194", tween: [ "style", "${_description_04}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250, easing: "easeOutCubic" },
            { id: "eid1195", tween: [ "style", "${_description_04}", "opacity", '0', { fromValue: '1'}], position: 2755, duration: 251, easing: "easeOutCubic" },
            { id: "eid1196", tween: [ "style", "${_description_04}", "opacity", '1', { fromValue: '0'}], position: 3006, duration: 244, easing: "easeOutCubic" },
            { id: "eid964", tween: [ "style", "${_box-delay_03}", "width", '320px', { fromValue: '272px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1091", tween: [ "style", "${_box-delay_03}", "width", '320px', { fromValue: '320px'}], position: 1500, duration: 0 },
            { id: "eid2915", tween: [ "style", "${_box-delay_03}", "width", '272px', { fromValue: '320px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1337", tween: [ "style", "${_footer_txt_05}", "opacity", '1', { fromValue: '0'}], position: 3008, duration: 253, easing: "easeOutCubic" },
            { id: "eid1338", tween: [ "style", "${_footer_txt_05}", "opacity", '0', { fromValue: '1'}], position: 3757, duration: 253, easing: "easeOutCubic" },
            { id: "eid950", tween: [ "style", "${_footer_txt_03}", "opacity", '1', { fromValue: '0'}], position: 1006, duration: 253, easing: "easeOutCubic" },
            { id: "eid1086", tween: [ "style", "${_footer_txt_03}", "opacity", '0', { fromValue: '1'}], position: 1756, duration: 248, easing: "easeOutCubic" },
            { id: "eid1341", tween: [ "style", "${_footer_txt_05}", "width", '278px', { fromValue: '276px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid2816", tween: [ "style", "${_collection_item_02}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 498, easing: "easeOutCubic" },
            { id: "eid1383", tween: [ "style", "${_collection_item_02}", "opacity", '0', { fromValue: '1'}], position: 3502, duration: 498, easing: "easeOutCubic" },
            { id: "eid957", tween: [ "style", "${_box-delay_03}", "height", '245px', { fromValue: '212px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1088", tween: [ "style", "${_box-delay_03}", "height", '245px', { fromValue: '245px'}], position: 1500, duration: 0 },
            { id: "eid958", tween: [ "style", "${_box-delay_03}", "height", '245px', { fromValue: '245px'}], position: 1506, duration: 0 },
            { id: "eid895", tween: [ "style", "${_colItem_01}", "top", '0px', { fromValue: '16px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1098", tween: [ "style", "${_colItem_01}", "top", '16px', { fromValue: '0px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1298", tween: [ "style", "${_title_05}", "width", '272px', { fromValue: '276px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid737", tween: [ "style", "${_single-height_02}", "left", '0px', { fromValue: '-95px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1330", tween: [ "style", "${_description_05}", "left", '16px', { fromValue: '20px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1332", tween: [ "style", "${_description_05}", "left", '16px', { fromValue: '16px'}], position: 4002, duration: 0 },
            { id: "eid919", tween: [ "style", "${_episode_03}", "opacity", '0', { fromValue: '1'}], position: 1006, duration: 250, easing: "easeOutCubic" },
            { id: "eid1069", tween: [ "style", "${_episode_03}", "opacity", '1', { fromValue: '0'}], position: 1756, duration: 250, easing: "easeOutCubic" },
            { id: "eid792", tween: [ "color", "${_title_02}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 500, duration: 0 },
            { id: "eid793", tween: [ "color", "${_title_02}", "color", 'rgba(235,235,235,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 750, duration: 0 },
            { id: "eid2660", tween: [ "color", "${_title_02}", "color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2498, duration: 0, easing: "easeOutCubic" },
            { id: "eid2662", tween: [ "style", "${_collections}", "width", '304px', { fromValue: '304px'}], position: 4000, duration: 0, easing: "easeOutCubic" },
            { id: "eid898", tween: [ "style", "${_colItem_01}", "width", '320px', { fromValue: '272px'}], position: 500, duration: 498, easing: "easeOutCubic" },
            { id: "eid899", tween: [ "style", "${_colItem_01}", "width", '320px', { fromValue: '320px'}], position: 1000, duration: 0 },
            { id: "eid1101", tween: [ "style", "${_colItem_01}", "width", '272px', { fromValue: '320px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1226", tween: [ "style", "${_baboon_04}", "left", '0px', { fromValue: '-8px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1227", tween: [ "style", "${_baboon_04}", "left", '-8px', { fromValue: '0px'}], position: 2508, duration: 498, easing: "easeOutCubic" },
            { id: "eid1115", tween: [ "style", "${_collection_item_02}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1303", tween: [ "style", "${_title_focus_05}", "opacity", '1', { fromValue: '0'}], position: 3258, duration: 250, easing: "easeOutCubic" },
            { id: "eid1306", tween: [ "style", "${_title_focus_05}", "opacity", '0', { fromValue: '1'}], position: 3758, duration: 250, easing: "easeOutCubic" },
            { id: "eid761", tween: [ "style", "${_channel_brand_02}", "left", '12px', { fromValue: '16px'}], position: 500, duration: 0 },
            { id: "eid1140", tween: [ "style", "${_channel_brand_04}", "left", '16px', { fromValue: '16px'}], position: 2006, duration: 0 },
            { id: "eid1274", tween: [ "style", "${_series_episode_05}", "opacity", '1', { fromValue: '0'}], position: 3258, duration: 250, easing: "easeOutCubic" },
            { id: "eid1275", tween: [ "style", "${_series_episode_05}", "opacity", '0', { fromValue: '1'}], position: 3760, duration: 250, easing: "easeOutCubic" },
            { id: "eid1264", tween: [ "style", "${_channel_brand_05}", "top", '-102px', { fromValue: '-2px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1265", tween: [ "style", "${_channel_brand_05}", "top", '9px', { fromValue: '186px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1266", tween: [ "style", "${_channel_brand_05}", "top", '186px', { fromValue: '9px'}], position: 3508, duration: 498, easing: "easeOutCubic" },
            { id: "eid820", tween: [ "style", "${_description_02}", "height", '96px', { fromValue: '96px'}], position: 500, duration: 0 },
            { id: "eid1356", tween: [ "style", "${_box-delay_05}", "width", '320px', { fromValue: '304px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1357", tween: [ "style", "${_box-delay_05}", "width", '320px', { fromValue: '320px'}], position: 3508, duration: 0 },
            { id: "eid1358", tween: [ "style", "${_box-delay_05}", "width", '320px', { fromValue: '320px'}], position: 3687, duration: 0 },
            { id: "eid1116", tween: [ "style", "${_collection_item_02}", "top", '364px', { fromValue: '878px'}], position: 506, duration: 492, easing: "easeOutCubic" },
            { id: "eid1238", tween: [ "style", "${_collection_item_02}", "top", '295px', { fromValue: '364px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1372", tween: [ "style", "${_collection_item_02}", "top", '67px', { fromValue: '295px'}], position: 2508, duration: 498, easing: "easeOutCubic" },
            { id: "eid1379", tween: [ "style", "${_collection_item_02}", "top", '878px', { fromValue: '67px'}], position: 3502, duration: 502, easing: "easeOutCubic" },
            { id: "eid3251", tween: [ "style", "${_bottomBorder_02}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1147", tween: [ "style", "${_series_episode_04}", "left", '16px', { fromValue: '13px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid2889", tween: [ "style", "${_title_02}", "top", '173px', { fromValue: '212px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2643", tween: [ "style", "${_title_02}", "top", '174px', { fromValue: '173px'}], position: 2000, duration: 498, easing: "easeOutCubic" },
            { id: "eid1312", tween: [ "style", "${_title_focus_05}", "left", '12px', { fromValue: '16px'}], position: 4002, duration: 0 },
            { id: "eid1313", tween: [ "style", "${_title_focus_05}", "left", '12px', { fromValue: '12px'}], position: 4008, duration: 0 },
            { id: "eid914", tween: [ "style", "${_episode_03}", "top", '211px', { fromValue: '197px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid915", tween: [ "style", "${_episode_03}", "top", '71px', { fromValue: '211px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1068", tween: [ "style", "${_episode_03}", "top", '178px', { fromValue: '71px'}], position: 1506, duration: 250, easing: "easeOutCubic" },
            { id: "eid2927", tween: [ "style", "${_episode_03}", "top", '178px', { fromValue: '178px'}], position: 2006, duration: 0, easing: "easeOutCubic" },
            { id: "eid1170", tween: [ "style", "${_title_focus_04}", "top", '42px', { fromValue: '215px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1171", tween: [ "style", "${_title_focus_04}", "top", '198px', { fromValue: '42px'}], position: 2506, duration: 498, easing: "easeOutCubic" },
            { id: "eid1176", tween: [ "style", "${_title_focus_04}", "left", '16px', { fromValue: '4px'}], position: 2006, duration: 0 },
            { id: "eid1349", tween: [ "color", "${_box-delay_05}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1350", tween: [ "color", "${_box-delay_05}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 3508, duration: 494, easing: "easeOutCubic" },
            { id: "eid1213", tween: [ "style", "${_box-delay_04}", "height", '245px', { fromValue: '229px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1214", tween: [ "style", "${_box-delay_04}", "height", '245px', { fromValue: '245px'}], position: 2500, duration: 0 },
            { id: "eid1215", tween: [ "style", "${_box-delay_04}", "height", '245px', { fromValue: '245px'}], position: 2506, duration: 0 },
            { id: "eid959", tween: [ "color", "${_box-delay_03}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1105", tween: [ "color", "${_box-delay_03}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1160", tween: [ "style", "${_episode_04}", "width", '272px', { fromValue: '276px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid849", tween: [ "color", "${_box-delay_02}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2659", tween: [ "color", "${_box-delay_02}", "background-color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(17,17,17,1)'}], position: 3998, duration: 0, easing: "easeOutCubic" },
            { id: "eid823", tween: [ "style", "${_description_02}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid938", tween: [ "style", "${_description_03}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid939", tween: [ "style", "${_description_03}", "display", 'block', { fromValue: 'none'}], position: 1006, duration: 0 },
            { id: "eid1080", tween: [ "style", "${_description_03}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid1156", tween: [ "style", "${_episode_04}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250, easing: "easeOutCubic" },
            { id: "eid1157", tween: [ "style", "${_episode_04}", "opacity", '1', { fromValue: '0'}], position: 2756, duration: 250, easing: "easeOutCubic" },
            { id: "eid1216", tween: [ "color", "${_box-delay_04}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1217", tween: [ "color", "${_box-delay_04}", "background-color", 'rgba(17,17,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1)'}], position: 2506, duration: 502, easing: "easeOutCubic" },
            { id: "eid1152", tween: [ "color", "${_episode_04}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 1506, duration: 0 },
            { id: "eid2894", tween: [ "style", "${_collection_item_01}", "width", '320px', { fromValue: '320px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1134", tween: [ "style", "${_box-icon_04}", "height", '49px', { fromValue: '49px'}], position: 1506, duration: 0 },
            { id: "eid2892", tween: [ "style", "${_baboon_03}", "left", '0px', { fromValue: '0px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2893", tween: [ "style", "${_baboon_03}", "left", '0px', { fromValue: '0px'}], position: 998, duration: 0, easing: "easeOutCubic" },
            { id: "eid1092", tween: [ "style", "${_baboon_03}", "left", '0px', { fromValue: '0px'}], position: 1508, duration: 498, easing: "easeOutCubic" },
            { id: "eid2817", tween: [ "style", "${_collection_item_03}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 498, easing: "easeOutCubic" },
            { id: "eid1382", tween: [ "style", "${_collection_item_03}", "opacity", '0', { fromValue: '1'}], position: 3502, duration: 498, easing: "easeOutCubic" },
            { id: "eid796", tween: [ "style", "${_title_02}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid3248", tween: [ "style", "${_title_02}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeOutCubic" },
            { id: "eid1169", tween: [ "style", "${_title_04}", "width", '246px', { fromValue: '276px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1183", tween: [ "style", "${_description_04}", "top", '112px', { fromValue: '481px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1184", tween: [ "style", "${_description_04}", "top", '109px', { fromValue: '291px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid2970", tween: [ "style", "${_description_04}", "top", '275px', { fromValue: '109px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid3399", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid1138", tween: [ "style", "${_channel_brand_04}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250, easing: "easeOutCubic" },
            { id: "eid1139", tween: [ "style", "${_channel_brand_04}", "opacity", '0', { fromValue: '1'}], position: 2505, duration: 250, easing: "easeOutCubic" },
            { id: "eid928", tween: [ "style", "${_title_03}", "width", '272px', { fromValue: '276px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid2920", tween: [ "style", "${_title_03}", "width", '252px', { fromValue: '272px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid769", tween: [ "style", "${_series_episode_02}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid940", tween: [ "style", "${_description_03}", "height", '81px', { fromValue: '81px'}], position: 1006, duration: 0 },
            { id: "eid1084", tween: [ "style", "${_description_03}", "height", '81px', { fromValue: '81px'}], position: 2000, duration: 0 },
            { id: "eid3403", tween: [ "style", "${_Rectangle}", "opacity", '0.4', { fromValue: '0'}], position: 500, duration: 498, easing: "easeOutCubic" },
            { id: "eid3008", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0.4'}], position: 3508, duration: 500, easing: "easeOutCubic" },
            { id: "eid953", tween: [ "style", "${_footer_txt_03}", "width", '278px', { fromValue: '276px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid829", tween: [ "style", "${_description_02}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeOutCubic" },
            { id: "eid1267", tween: [ "style", "${_channel_brand_05}", "opacity", '1', { fromValue: '0'}], position: 3258, duration: 250, easing: "easeOutCubic" },
            { id: "eid1268", tween: [ "style", "${_channel_brand_05}", "opacity", '0', { fromValue: '1'}], position: 3758, duration: 248, easing: "easeOutCubic" },
            { id: "eid1272", tween: [ "style", "${_series_episode_05}", "top", '67px', { fromValue: '262px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1273", tween: [ "style", "${_series_episode_05}", "top", '262px', { fromValue: '67px'}], position: 3508, duration: 500, easing: "easeOutCubic" },
            { id: "eid941", tween: [ "style", "${_description_03}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid942", tween: [ "style", "${_description_03}", "opacity", '0', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "eid944", tween: [ "style", "${_description_03}", "opacity", '1', { fromValue: '0'}], position: 1256, duration: 250, easing: "easeOutCubic" },
            { id: "eid1082", tween: [ "style", "${_description_03}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 250, easing: "easeOutCubic" },
            { id: "eid1081", tween: [ "style", "${_description_03}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250, easing: "easeOutCubic" },
            { id: "eid922", tween: [ "style", "${_episode_03}", "width", '272px', { fromValue: '276px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1070", tween: [ "style", "${_episode_03}", "height", '25px', { fromValue: '25px'}], position: 1500, duration: 0 },
            { id: "eid918", tween: [ "style", "${_episode_03}", "height", '25px', { fromValue: '25px'}], position: 1506, duration: 0 },
            { id: "eid836", tween: [ "style", "${_footer_txt_02}", "top", '418px', { fromValue: '239px'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid2937", tween: [ "style", "${_episode_04}", "font-size", '22px', { fromValue: '22px'}], position: 2132, duration: 0 },
            { id: "eid1316", tween: [ "style", "${_description_05}", "top", '112px', { fromValue: '481px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1317", tween: [ "style", "${_description_05}", "top", '108px', { fromValue: '291px'}], position: 3008, duration: 500, easing: "easeOutCubic" },
            { id: "eid1318", tween: [ "style", "${_description_05}", "top", '291px', { fromValue: '108px'}], position: 3508, duration: 500, easing: "easeOutCubic" },
            { id: "eid779", tween: [ "color", "${_episode_02}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 500, duration: 0 },
            { id: "eid780", tween: [ "color", "${_episode_02}", "color", 'rgba(233,47,131,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,47,131,1.00)'}], position: 750, duration: 0 },
            { id: "eid2768", tween: [ "subproperty", "${_box-icon_03}", "filter.invert", '0', { fromValue: '0'}], position: 998, duration: 0, easing: "easeOutCubic" },
            { id: "eid951", tween: [ "style", "${_footer_txt_03}", "left", '12px', { fromValue: '12px'}], position: 500, duration: 0 },
            { id: "eid952", tween: [ "style", "${_footer_txt_03}", "left", '16px', { fromValue: '16px'}], position: 1000, duration: 0 },
            { id: "eid1251", tween: [ "style", "${_colItem_05}", "width", '320px', { fromValue: '272px'}], position: 2506, duration: 498, easing: "easeOutCubic" },
            { id: "eid1252", tween: [ "style", "${_colItem_05}", "width", '320px', { fromValue: '320px'}], position: 3006, duration: 0 },
            { id: "eid1255", tween: [ "style", "${_colItem_05}", "width", '304px', { fromValue: '320px'}], position: 3502, duration: 498, easing: "easeOutCubic" },
            { id: "eid1324", tween: [ "style", "${_description_05}", "opacity", '1', { fromValue: '1'}], position: 2506, duration: 0 },
            { id: "eid1325", tween: [ "style", "${_description_05}", "opacity", '0', { fromValue: '0'}], position: 3006, duration: 0 },
            { id: "eid1327", tween: [ "style", "${_description_05}", "opacity", '1', { fromValue: '0'}], position: 3258, duration: 250, easing: "easeOutCubic" },
            { id: "eid1328", tween: [ "style", "${_description_05}", "opacity", '0', { fromValue: '1'}], position: 3752, duration: 250, easing: "easeOutCubic" },
            { id: "eid3067", tween: [ "style", "${_Rectangle}", "top", '-8px', { fromValue: '-2px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1158", tween: [ "style", "${_episode_04}", "left", '16px', { fromValue: '16px'}], position: 1506, duration: 0 },
            { id: "eid1261", tween: [ "style", "${_box-icon_05}", "left", '0px', { fromValue: '0px'}], position: 2506, duration: 0 },
            { id: "eid1262", tween: [ "style", "${_box-icon_05}", "left", '0px', { fromValue: '0px'}], position: 3006, duration: 0 },
            { id: "eid1161", tween: [ "style", "${_title_04}", "top", '187px', { fromValue: '151px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid3419", tween: [ "style", "${_title_04}", "top", '41px', { fromValue: '187px'}], position: 2006, duration: 494, easing: "easeOutCubic" },
            { id: "eid2983", tween: [ "style", "${_title_04}", "top", '153px', { fromValue: '41px'}], position: 2500, duration: 508, easing: "easeOutCubic" },
            { id: "eid1143", tween: [ "style", "${_series_episode_04}", "top", '69px', { fromValue: '243px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1144", tween: [ "style", "${_series_episode_04}", "top", '228px', { fromValue: '69px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid3249", tween: [ "style", "${_box-delay_02}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid3246", tween: [ "style", "${_box-delay_02}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeOutCubic" },
            { id: "eid3120", tween: [ "style", "${_title_focus_02}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid911", tween: [ "style", "${_series_episode_03}", "top", '71px', { fromValue: '262px'}], position: 1006, duration: 500, easing: "easeOutCubic" },
            { id: "eid1065", tween: [ "style", "${_series_episode_03}", "top", '267px', { fromValue: '71px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid3105", tween: [ "style", "${_Rectangle}", "height", '821px', { fromValue: '1005px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid912", tween: [ "style", "${_series_episode_03}", "opacity", '1', { fromValue: '0'}], position: 1256, duration: 250, easing: "easeOutCubic" },
            { id: "eid1066", tween: [ "style", "${_series_episode_03}", "opacity", '0', { fromValue: '1'}], position: 1506, duration: 250, easing: "easeOutCubic" },
            { id: "eid945", tween: [ "style", "${_description_03}", "left", '12px', { fromValue: '20px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid946", tween: [ "style", "${_description_03}", "left", '16px', { fromValue: '16px'}], position: 1006, duration: 0 },
            { id: "eid1333", tween: [ "style", "${_description_05}", "width", '294px', { fromValue: '276px'}], position: 2506, duration: 500, easing: "easeOutCubic" },
            { id: "eid2815", tween: [ "style", "${_collection_item_01}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid1384", tween: [ "style", "${_collection_item_01}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 502, easing: "easeOutCubic" },
            { id: "eid1167", tween: [ "style", "${_title_04}", "left", '16px', { fromValue: '16px'}], position: 1506, duration: 0 },
            { id: "eid1188", tween: [ "style", "${_description_04}", "display", 'none', { fromValue: 'none'}], position: 1506, duration: 0 },
            { id: "eid1189", tween: [ "style", "${_description_04}", "display", 'block', { fromValue: 'none'}], position: 2006, duration: 0 },
            { id: "eid1190", tween: [ "style", "${_description_04}", "display", 'block', { fromValue: 'block'}], position: 3004, duration: 0 },
            { id: "eid2771", tween: [ "subproperty", "${_iPlayer-03}", "filter.invert", '0.088741842948718', { fromValue: '0.93134'}], position: 500, duration: 498, easing: "easeOutCubic" },
            { id: "eid2772", tween: [ "subproperty", "${_iPlayer-03}", "filter.invert", '0.93299280128205', { fromValue: '0.088742'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1201", tween: [ "style", "${_footer_txt_04}", "top", '395px', { fromValue: '253px'}], position: 1506, duration: 500, easing: "easeOutCubic" },
            { id: "eid1202", tween: [ "style", "${_footer_txt_04}", "top", '211px', { fromValue: '395px'}], position: 2006, duration: 500, easing: "easeOutCubic" },
            { id: "eid2971", tween: [ "style", "${_footer_txt_04}", "top", '379px', { fromValue: '211px'}], position: 2506, duration: 498, easing: "easeOutCubic" }         ]
      }
   }
},
"currentPosition": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      id: 'Text',
      text: 'Current Position<br>',
      rect: ['0px','0px','240px','100px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',37,'rgba(255,255,255,1.00)','700','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '37px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '240px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"TimelineController": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0]],
      rect: [0,0,'100','50','auto','auto'],
      borderRadius: ['20px 20px','20px 20px','20px 20px','20px 20px'],
      type: 'rect',
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['ew-resize'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '100px']
         ],
         "${_RoundRect}": [
            ["style", "border-top-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '100px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '50px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'ew-resize']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"symItem_01": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      id: 'Group',
      type: 'group',
      rect: ['0px','-8','304','1109','auto','auto'],
      c: [
      {
         id: 'Item_05',
         type: 'group',
         rect: ['0px','880px','304','229','auto','auto'],
         c: [
         {
            type: 'rect',
            id: 'singleHeight_05',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','0px','304px','229px','auto','auto'],
            fill: ['rgba(0,0,0,0.00)'],
            c: [
            {
               id: 'call-the-mid-wife-img1Copy4',
               type: 'image',
               rect: ['0px','0px','100%','73.5%','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/call-the-mid-wife-img1.jpg','0px','0px']
            },
            {
               type: 'rect',
               id: 'captionHolder_05',
               stroke: [0,'rgb(0, 0, 0)','none'],
               rect: ['0px','auto','100%','68px','auto','0px'],
               fill: ['rgba(21,21,21,1.00)'],
               c: [
               {
                  type: 'rect',
                  id: 'iconHolder_05',
                  stroke: [0,'rgb(0, 0, 0)','none'],
                  rect: ['0px','-56px','56px','57px','auto','auto'],
                  fill: ['rgba(21,21,21,1)'],
                  c: [
                  {
                     type: 'image',
                     filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
                     id: 'iPlayer_05',
                     rect: ['16px','16px','25px','25px','auto','auto'],
                     fill: ['rgba(0,0,0,0)','images/iPlayer-012.svg','0px','0px']
                  }]
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(145,149,151,1.00)','normal','none',''],
                  id: 'subtitle_05',
                  text: 'Subtitle',
                  type: 'text',
                  rect: ['16px','35px','90%','35.3%','auto','auto']
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(204,204,204,1.00)','normal','none',''],
                  id: 'title_05',
                  text: 'Title',
                  type: 'text',
                  rect: ['16px','8px','90%','35.3%','auto','auto']
               }]
            }]
         }]
      },
      {
         id: 'Item_04',
         type: 'group',
         rect: ['0px','660px','304','229','auto','auto'],
         c: [
         {
            type: 'rect',
            id: 'singleHeight_04',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','0px','304px','229px','auto','auto'],
            fill: ['rgba(0,0,0,0.00)'],
            c: [
            {
               id: 'call-the-mid-wife-img1Copy2',
               type: 'image',
               rect: ['0px','0px','100%','73.5%','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/call-the-mid-wife-img1.jpg','0px','0px']
            },
            {
               type: 'rect',
               id: 'captionHolder_04',
               stroke: [0,'rgb(0, 0, 0)','none'],
               rect: ['0px','auto','100%','68px','auto','0px'],
               fill: ['rgba(21,21,21,1.00)'],
               c: [
               {
                  type: 'rect',
                  id: 'iconHolder_04',
                  stroke: [0,'rgb(0, 0, 0)','none'],
                  rect: ['0px','-56px','56px','57px','auto','auto'],
                  fill: ['rgba(21,21,21,1)'],
                  c: [
                  {
                     type: 'image',
                     filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
                     id: 'iPlayer_04',
                     rect: ['16px','16px','25px','25px','auto','auto'],
                     fill: ['rgba(0,0,0,0)','images/iPlayer-012.svg','0px','0px']
                  }]
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(145,149,151,1.00)','normal','none',''],
                  id: 'subtitle_04',
                  text: 'Subtitle',
                  type: 'text',
                  rect: ['16px','35px','90%','35.3%','auto','auto']
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(204,204,204,1.00)','normal','none',''],
                  id: 'title_04',
                  text: 'Title',
                  type: 'text',
                  rect: ['16px','8px','90%','35.3%','auto','auto']
               }]
            }]
         }]
      },
      {
         id: 'Item_03',
         type: 'group',
         rect: ['0','440px','304','229','auto','auto'],
         c: [
         {
            type: 'rect',
            id: 'singleHeight_03',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','0px','304px','229px','auto','auto'],
            fill: ['rgba(0,0,0,0.00)'],
            c: [
            {
               id: 'call-the-mid-wife-img1Copy',
               type: 'image',
               rect: ['0px','0px','100%','73.5%','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/call-the-mid-wife-img1.jpg','0px','0px']
            },
            {
               type: 'rect',
               id: 'captionHolder_03',
               stroke: [0,'rgb(0, 0, 0)','none'],
               rect: ['0px','auto','100%','68px','auto','0px'],
               fill: ['rgba(21,21,21,1.00)'],
               c: [
               {
                  type: 'rect',
                  id: 'iconHolder_03',
                  stroke: [0,'rgb(0, 0, 0)','none'],
                  rect: ['0px','-56px','56px','57px','auto','auto'],
                  fill: ['rgba(21,21,21,1)'],
                  c: [
                  {
                     type: 'image',
                     filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
                     id: 'iPlayer_03',
                     rect: ['16px','16px','25px','25px','auto','auto'],
                     fill: ['rgba(0,0,0,0)','images/iPlayer-012.svg','0px','0px']
                  }]
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(145,149,151,1.00)','normal','none',''],
                  id: 'subtitle_03',
                  text: 'Subtitle',
                  type: 'text',
                  rect: ['16px','35px','90%','35.3%','auto','auto']
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(204,204,204,1.00)','normal','none',''],
                  id: 'title_03',
                  text: 'Title',
                  type: 'text',
                  rect: ['16px','8px','90%','35.3%','auto','auto']
               }]
            }]
         }]
      },
      {
         id: 'Item_02',
         type: 'group',
         rect: ['0','221px','304','229','auto','auto'],
         c: [
         {
            type: 'rect',
            id: 'singleHeight_02',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','0px','304px','229px','auto','auto'],
            fill: ['rgba(0,0,0,0.00)'],
            c: [
            {
               id: 'call-the-mid-wife-img1',
               type: 'image',
               rect: ['0px','0px','100%','73.5%','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/call-the-mid-wife-img1.jpg','0px','0px']
            },
            {
               type: 'rect',
               id: 'captionHolder_02',
               stroke: [0,'rgb(0, 0, 0)','none'],
               rect: ['0px','auto','100%','68px','auto','0px'],
               fill: ['rgba(21,21,21,1.00)'],
               c: [
               {
                  type: 'rect',
                  id: 'iconHolder_02',
                  stroke: [0,'rgb(0, 0, 0)','none'],
                  rect: ['0px','-56px','56px','57px','auto','auto'],
                  fill: ['rgba(21,21,21,1)'],
                  c: [
                  {
                     type: 'image',
                     filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
                     id: 'iPlayer_02',
                     rect: ['16px','16px','25px','25px','auto','auto'],
                     fill: ['rgba(0,0,0,0)','images/iPlayer-012.svg','0px','0px']
                  }]
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(145,149,151,1.00)','normal','none',''],
                  id: 'subtitle_02',
                  text: 'Subtitle',
                  type: 'text',
                  rect: ['16px','35px','90%','35.3%','auto','auto']
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(204,204,204,1.00)','normal','none',''],
                  id: 'title_02',
                  text: 'Title',
                  type: 'text',
                  rect: ['16px','8px','90%','35.3%','auto','auto']
               }]
            }]
         }]
      },
      {
         id: 'Item_01',
         type: 'group',
         rect: ['0','0px','304','229','auto','auto'],
         c: [
         {
            type: 'rect',
            id: 'singleHeight_01',
            stroke: [0,'rgb(0, 0, 0)','none'],
            rect: ['0px','0px','304px','229px','auto','auto'],
            fill: ['rgba(0,0,0,0.00)'],
            c: [
            {
               id: 'call-the-mid-wife-img1Copy3',
               type: 'image',
               rect: ['0px','0px','100%','73.5%','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/call-the-mid-wife-img1.jpg','0px','0px']
            },
            {
               type: 'rect',
               id: 'captionHolder_01',
               stroke: [0,'rgb(0, 0, 0)','none'],
               rect: ['0px','auto','100%','68px','auto','0px'],
               fill: ['rgba(21,21,21,1.00)'],
               c: [
               {
                  type: 'rect',
                  id: 'iconHolder_01',
                  stroke: [0,'rgb(0, 0, 0)','none'],
                  rect: ['0px','-56px','56px','57px','auto','auto'],
                  fill: ['rgba(21,21,21,1)'],
                  c: [
                  {
                     type: 'image',
                     filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
                     id: 'iPlayer_01',
                     rect: ['16px','16px','25px','25px','auto','auto'],
                     fill: ['rgba(0,0,0,0)','images/iPlayer-012.svg','0px','0px']
                  }]
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(145,149,151,1.00)','normal','none',''],
                  id: 'subtitle_01',
                  text: 'Subtitle',
                  type: 'text',
                  rect: ['16px','35px','90%','35.3%','auto','auto']
               },
               {
                  font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(204,204,204,1.00)','normal','none',''],
                  id: 'title_01',
                  text: 'Title',
                  type: 'text',
                  rect: ['16px','8px','90%','35.3%','auto','auto']
               }]
            }]
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_title_04}": [
            ["style", "top", '8px'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(204,204,204,1)'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ],
         "${_titleCopy2}": [
            ["style", "top", '8px'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(204,204,204,1)'],
            ["style", "font-family", '\'Helvetica Neue\', Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ],
         "${_iconHolder_04}": [
            ["style", "top", '-56px'],
            ["color", "background-color", 'rgba(21,21,21,1)'],
            ["style", "bottom", 'auto'],
            ["style", "height", '57px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${_captionHolder_02}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "height", '68px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(21,21,21,1.00)']
         ],
         "${_singleHeight_05}": [
            ["style", "top", '8px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_call-the-mid-wife-img1}": [
            ["style", "height", '76.1%'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_title_02}": [
            ["style", "top", '8px'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(204,204,204,1)'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ],
         "${_iPlayer_04}": [
            ["style", "top", '16px'],
            ["style", "height", '25px'],
            ["subproperty", "filter.invert", '0.93134'],
            ["style", "left", '16px'],
            ["style", "width", '25px']
         ],
         "${_call-the-mid-wife-img1Copy2}": [
            ["style", "height", '76.1%'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_Item_01}": [
            ["style", "top", '0px']
         ],
         "${_subtitle_02}": [
            ["color", "color", 'rgba(145,149,151,1)'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '35px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '35.29%'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '90%'],
            ["subproperty", "filter.invert", '0']
         ],
         "${_call-the-mid-wife-img1Copy4}": [
            ["style", "top", '0px'],
            ["style", "height", '76.1%'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_captionHolder_04}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "height", '68px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(21,21,21,1.00)']
         ],
         "${_captionHolder_01}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "height", '68px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(21,21,21,1.00)']
         ],
         "${_iPlayer_01}": [
            ["style", "top", '16px'],
            ["subproperty", "filter.invert", '0.93134'],
            ["style", "height", '25px'],
            ["style", "left", '16px'],
            ["style", "width", '25px']
         ],
         "${_subtitle_03}": [
            ["color", "color", 'rgba(145,149,151,1)'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '35px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '35.29%'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["subproperty", "filter.invert", '0'],
            ["style", "width", '90%']
         ],
         "${_iconHolder_01}": [
            ["style", "top", '-56px'],
            ["color", "background-color", 'rgba(21,21,21,1)'],
            ["style", "bottom", 'auto'],
            ["style", "height", '57px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${_singleHeight_02}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "top", '8px'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_captionHolder_05}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "height", '68px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(21,21,21,1.00)']
         ],
         "${_subtitle_04}": [
            ["color", "color", 'rgba(145,149,151,1)'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '35px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '35.29%'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "width", '90%'],
            ["subproperty", "filter.invert", '0']
         ],
         "${_Item_05}": [
            ["style", "top", '880px']
         ],
         "${_Group}": [
            ["style", "top", '52px'],
            ["style", "left", '0px']
         ],
         "${_title_03}": [
            ["style", "top", '8px'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(204,204,204,1)'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ],
         "${symbolSelector}": [
            ["style", "height", '720px'],
            ["style", "overflow", 'visible'],
            ["style", "width", '304px']
         ],
         "${_subtitle_01}": [
            ["color", "color", 'rgba(145,149,151,1.00)'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '35px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '35.29%'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["subproperty", "filter.invert", '0'],
            ["style", "width", '90%']
         ],
         "${_iconHolder_02}": [
            ["style", "top", '-56px'],
            ["color", "background-color", 'rgba(21,21,21,1)'],
            ["style", "bottom", 'auto'],
            ["style", "height", '57px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${_iPlayer_02}": [
            ["style", "top", '16px'],
            ["style", "height", '25px'],
            ["subproperty", "filter.invert", '0.93134'],
            ["style", "left", '16px'],
            ["style", "width", '25px']
         ],
         "${_call-the-mid-wife-img1Copy3}": [
            ["style", "top", '0px'],
            ["style", "height", '76.1%'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_Item_03}": [
            ["style", "top", '440px']
         ],
         "${_captionHolder_03}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "height", '68px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(21,21,21,1.00)']
         ],
         "${_singleHeight_04}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["style", "top", '8px'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_subtitle_05}": [
            ["color", "color", 'rgba(145,149,151,1)'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '35px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '35.29%'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["subproperty", "filter.invert", '0'],
            ["style", "width", '90%']
         ],
         "${_title_05}": [
            ["style", "top", '8px'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(204,204,204,1)'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ],
         "${_singleHeight_01}": [
            ["style", "top", '8px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_call-the-mid-wife-img1Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '76.1%'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_singleHeight_03}": [
            ["style", "top", '8px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '212px'],
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '272px']
         ],
         "${_iPlayer_03}": [
            ["style", "top", '16px'],
            ["subproperty", "filter.invert", '0.93134'],
            ["style", "height", '25px'],
            ["style", "left", '16px'],
            ["style", "width", '25px']
         ],
         "${_title_01}": [
            ["style", "top", '8px'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ],
         "${_Item_02}": [
            ["style", "top", '221px']
         ],
         "${_iconHolder_05}": [
            ["style", "top", '-56px'],
            ["color", "background-color", 'rgba(21,21,21,1)'],
            ["style", "bottom", 'auto'],
            ["style", "height", '57px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${_Item_04}": [
            ["style", "top", '660px']
         ],
         "${_subtitleCopy2}": [
            ["color", "color", 'rgba(145,149,151,1)'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px'],
            ["style", "top", '35px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '35.29%'],
            ["style", "font-family", '\'Helvetica Neue\', Helvetica, Arial'],
            ["style", "width", '90%'],
            ["subproperty", "filter.invert", '0']
         ],
         "${_iconHolder_03}": [
            ["style", "top", '-56px'],
            ["color", "background-color", 'rgba(21,21,21,1)'],
            ["style", "bottom", 'auto'],
            ["style", "height", '57px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${_iPlayer_05}": [
            ["style", "top", '16px'],
            ["subproperty", "filter.invert", '0.93134'],
            ["style", "height", '25px'],
            ["style", "left", '16px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         labels: {
            "in_01": 0,
            "focusDelayIn_01": 500,
            "focusDelayOut_01": 1002,
            "in_02": 1500,
            "focusDelayIn_02": 2000,
            "focusDelayOut_02": 2500,
            "in_03": 3000,
            "focusDelayIn_03": 3500,
            "focusDelayOut_03": 4000,
            "in_04": 4500,
            "focusDelayIn_04": 5000,
            "focusDelayOut_04": 5500,
            "in_05": 6000,
            "focusDelayIn_05": 6500,
            "focusDelayOut_05": 7000,
            "out_05": 7500
         },
         timeline: [
            { id: "eid4451", tween: [ "style", "${_singleHeight_01}", "height", '245px', { fromValue: '212px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4476", tween: [ "style", "${_singleHeight_01}", "height", '212px', { fromValue: '245px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5012", tween: [ "style", "${_singleHeight_05}", "height", '245px', { fromValue: '212px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4901", tween: [ "style", "${_singleHeight_05}", "height", '229px', { fromValue: '245px'}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4846", tween: [ "style", "${_captionHolder_02}", "height", '245px', { fromValue: '68px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4847", tween: [ "style", "${_captionHolder_02}", "height", '68px', { fromValue: '245px'}], position: 2500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4848", tween: [ "gradient", "${_captionHolder_02}", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4849", tween: [ "gradient", "${_captionHolder_02}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4896", tween: [ "subproperty", "${_iPlayer_04}", "filter.invert", '0', { fromValue: '0.93134'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4897", tween: [ "subproperty", "${_iPlayer_04}", "filter.invert", '1', { fromValue: '0'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4906", tween: [ "style", "${_captionHolder_05}", "height", '245px', { fromValue: '68px'}], position: 6500, duration: 503, easing: "easeInOutQuad" },
            { id: "eid4907", tween: [ "style", "${_captionHolder_05}", "height", '68px', { fromValue: '245px'}], position: 7003, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5094", tween: [ "style", "${_Item_01}", "top", '18px', { fromValue: '0px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5096", tween: [ "style", "${_Item_01}", "top", '35px', { fromValue: '18px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5097", tween: [ "style", "${_Item_01}", "top", '52px', { fromValue: '35px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4856", tween: [ "subproperty", "${_iPlayer_02}", "filter.invert", '0', { fromValue: '0.93134'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4857", tween: [ "subproperty", "${_iPlayer_02}", "filter.invert", '1', { fromValue: '0'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5070", tween: [ "style", "${_Item_04}", "top", '677px', { fromValue: '660px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5076", tween: [ "style", "${_Item_04}", "top", '695px', { fromValue: '677px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5079", tween: [ "style", "${_Item_04}", "top", '712px', { fromValue: '695px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4463", tween: [ "color", "${_subtitle_01}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(145,149,151,1)'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4472", tween: [ "color", "${_subtitle_01}", "color", 'rgba(145,149,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4854", tween: [ "gradient", "${_iconHolder_02}", "background-image", [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4855", tween: [ "gradient", "${_iconHolder_02}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]]}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4874", tween: [ "gradient", "${_iconHolder_03}", "background-image", [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4875", tween: [ "gradient", "${_iconHolder_03}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]]}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4914", tween: [ "gradient", "${_iconHolder_05}", "background-image", [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4915", tween: [ "gradient", "${_iconHolder_05}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]]}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4972", tween: [ "style", "${_singleHeight_01}", "top", '-8px', { fromValue: '8px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4478", tween: [ "style", "${_singleHeight_01}", "top", '8px', { fromValue: '-8px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5068", tween: [ "style", "${_Item_03}", "top", '457px', { fromValue: '440px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5078", tween: [ "style", "${_Item_03}", "top", '475px', { fromValue: '457px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5098", tween: [ "style", "${_Item_03}", "top", '492px', { fromValue: '475px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4864", tween: [ "style", "${_singleHeight_03}", "width", '320px', { fromValue: '272px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4865", tween: [ "style", "${_singleHeight_03}", "width", '272px', { fromValue: '320px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4456", tween: [ "gradient", "${_captionHolder_01}", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4470", tween: [ "gradient", "${_captionHolder_01}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4870", tween: [ "color", "${_title_03}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1)'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4871", tween: [ "color", "${_title_03}", "color", 'rgba(204,204,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5069", tween: [ "style", "${_Item_05}", "top", '897px', { fromValue: '880px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5077", tween: [ "style", "${_Item_05}", "top", '915px', { fromValue: '897px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5080", tween: [ "style", "${_Item_05}", "top", '932px', { fromValue: '915px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5081", tween: [ "style", "${_Item_05}", "top", '949px', { fromValue: '932px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5082", tween: [ "style", "${_Item_05}", "top", '932px', { fromValue: '949px'}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4908", tween: [ "gradient", "${_captionHolder_05}", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4909", tween: [ "gradient", "${_captionHolder_05}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4450", tween: [ "style", "${_singleHeight_01}", "width", '320px', { fromValue: '272px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4475", tween: [ "style", "${_singleHeight_01}", "width", '272px', { fromValue: '320px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4840", tween: [ "style", "${_singleHeight_02}", "height", '245px', { fromValue: '212px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4841", tween: [ "style", "${_singleHeight_02}", "height", '212px', { fromValue: '245px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4872", tween: [ "color", "${_subtitle_03}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(145,149,151,1)'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4873", tween: [ "color", "${_subtitle_03}", "color", 'rgba(145,149,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4894", tween: [ "gradient", "${_iconHolder_04}", "background-image", [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4895", tween: [ "gradient", "${_iconHolder_04}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]]}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4844", tween: [ "style", "${_singleHeight_02}", "width", '320px', { fromValue: '272px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4845", tween: [ "style", "${_singleHeight_02}", "width", '272px', { fromValue: '320px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4880", tween: [ "style", "${_singleHeight_04}", "top", '-8px', { fromValue: '8px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4881", tween: [ "style", "${_singleHeight_04}", "top", '8px', { fromValue: '-8px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5102", tween: [ "style", "${_Group}", "top", '52px', { fromValue: '52px'}], position: 500, duration: 0 },
            { id: "eid5103", tween: [ "style", "${_Group}", "top", '-36px', { fromValue: '52px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5104", tween: [ "style", "${_Group}", "top", '-273px', { fromValue: '-36px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5105", tween: [ "style", "${_Group}", "top", '-510px', { fromValue: '-273px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5106", tween: [ "style", "${_Group}", "top", '-494px', { fromValue: '-510px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4458", tween: [ "color", "${_title_01}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1)'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4471", tween: [ "color", "${_title_01}", "color", 'rgba(204,204,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4878", tween: [ "style", "${_singleHeight_04}", "height", '245px', { fromValue: '212px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4879", tween: [ "style", "${_singleHeight_04}", "height", '212px', { fromValue: '245px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4910", tween: [ "color", "${_title_05}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1)'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4911", tween: [ "color", "${_title_05}", "color", 'rgba(204,204,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4860", tween: [ "style", "${_singleHeight_03}", "top", '-8px', { fromValue: '8px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4861", tween: [ "style", "${_singleHeight_03}", "top", '8px', { fromValue: '-8px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4884", tween: [ "style", "${_singleHeight_04}", "width", '320px', { fromValue: '272px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4885", tween: [ "style", "${_singleHeight_04}", "width", '272px', { fromValue: '320px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5008", tween: [ "style", "${_singleHeight_05}", "width", '320px', { fromValue: '272px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4905", tween: [ "style", "${_singleHeight_05}", "width", '304px', { fromValue: '320px'}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4850", tween: [ "color", "${_title_02}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1)'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4851", tween: [ "color", "${_title_02}", "color", 'rgba(204,204,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5018", tween: [ "style", "${_singleHeight_05}", "top", '-8px', { fromValue: '8px'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5025", tween: [ "style", "${_singleHeight_05}", "top", '8px', { fromValue: '-8px'}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4467", tween: [ "style", "${_captionHolder_01}", "height", '245px', { fromValue: '68px'}], position: 500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4469", tween: [ "style", "${_captionHolder_01}", "height", '68px', { fromValue: '245px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4888", tween: [ "gradient", "${_captionHolder_04}", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4889", tween: [ "gradient", "${_captionHolder_04}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4890", tween: [ "color", "${_title_04}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1)'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4891", tween: [ "color", "${_title_04}", "color", 'rgba(204,204,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4916", tween: [ "subproperty", "${_iPlayer_05}", "filter.invert", '0', { fromValue: '0.93134'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4917", tween: [ "subproperty", "${_iPlayer_05}", "filter.invert", '1', { fromValue: '0'}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4464", tween: [ "gradient", "${_iconHolder_01}", "background-image", [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4473", tween: [ "gradient", "${_iconHolder_01}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]]}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4858", tween: [ "style", "${_singleHeight_03}", "height", '245px', { fromValue: '212px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4859", tween: [ "style", "${_singleHeight_03}", "height", '212px', { fromValue: '245px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4838", tween: [ "style", "${_singleHeight_02}", "top", '-8px', { fromValue: '8px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4839", tween: [ "style", "${_singleHeight_02}", "top", '8px', { fromValue: '-8px'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4886", tween: [ "style", "${_captionHolder_04}", "height", '245px', { fromValue: '68px'}], position: 5000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4887", tween: [ "style", "${_captionHolder_04}", "height", '68px', { fromValue: '245px'}], position: 5500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4459", tween: [ "subproperty", "${_iPlayer_01}", "filter.invert", '0', { fromValue: '0.93134'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4474", tween: [ "subproperty", "${_iPlayer_01}", "filter.invert", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4866", tween: [ "style", "${_captionHolder_03}", "height", '245px', { fromValue: '68px'}], position: 3500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4867", tween: [ "style", "${_captionHolder_03}", "height", '68px', { fromValue: '245px'}], position: 4000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4876", tween: [ "subproperty", "${_iPlayer_03}", "filter.invert", '0', { fromValue: '0.93134'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4877", tween: [ "subproperty", "${_iPlayer_03}", "filter.invert", '1', { fromValue: '0'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4868", tween: [ "gradient", "${_captionHolder_03}", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4869", tween: [ "gradient", "${_captionHolder_03}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4892", tween: [ "color", "${_subtitle_04}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(145,149,151,1)'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4893", tween: [ "color", "${_subtitle_04}", "color", 'rgba(145,149,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4912", tween: [ "color", "${_subtitle_05}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(145,149,151,1)'}], position: 6000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4913", tween: [ "color", "${_subtitle_05}", "color", 'rgba(145,149,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 7500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4852", tween: [ "color", "${_subtitle_02}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(145,149,151,1)'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid4853", tween: [ "color", "${_subtitle_02}", "color", 'rgba(145,149,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 3000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5071", tween: [ "style", "${_Item_02}", "top", '238px', { fromValue: '221px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5095", tween: [ "style", "${_Item_02}", "top", '255px', { fromValue: '238px'}], position: 4500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid5099", tween: [ "style", "${_Item_02}", "top", '272px', { fromValue: '255px'}], position: 6000, duration: 500, easing: "easeInOutQuad" }         ]
      }
   }
},
"symTopNav": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'topNavGroup',
      type: 'group',
      rect: ['0px','0px','1280','112px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','1280px','112px','auto','auto'],
         opacity: 0.6,
         id: 'topNavBG',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(0,0,0,1.00)']
      },
      {
         type: 'rect',
         id: 'highlight1',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['272px','0px','128px','112px','auto','auto'],
         fill: ['rgba(255,231,16,1.00)']
      },
      {
         type: 'image',
         filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
         id: 'BBC_Sport',
         rect: ['64px','63px','182px','22px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/BBC_Sport.png','0px','0px']
      },
      {
         type: 'text',
         rect: ['302px','62px','auto','auto','auto','auto'],
         id: 'Home',
         text: 'Home',
         align: 'left',
         font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(0,0,0,1.00)','normal','none','normal']
      },
      {
         type: 'rect',
         rect: ['400px','0px','185px','112px','auto','auto'],
         id: 'highlight2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(255,231,16,1.00)']
      },
      {
         type: 'rect',
         rect: ['400px','104px','185px','8px','auto','auto'],
         id: 'highlight2Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(255,231,16,1.00)']
      },
      {
         type: 'text',
         rect: ['433px','62px','auto','auto','auto','auto'],
         id: 'eventOneTitle',
         text: 'Sochi 2014',
         align: 'left',
         font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal']
      },
      {
         type: 'rect',
         rect: ['585px','0px','169px','112px','auto','auto'],
         id: 'highlight3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(255,231,16,1.00)']
      },
      {
         type: 'text',
         rect: ['615px','62px','auto','auto','auto','auto'],
         id: 'britishGP',
         text: 'British GP',
         align: 'left',
         font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal']
      },
      {
         type: 'rect',
         rect: ['754px','0px','183px','112px','auto','auto'],
         id: 'highlight4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(255,231,16,1.00)']
      },
      {
         type: 'text',
         rect: ['785px','62px','auto','auto','auto','auto'],
         id: 'sixNations',
         text: 'Six Nations',
         align: 'left',
         font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal']
      },
      {
         type: 'rect',
         rect: ['1045px','0px','64px','112px','auto','auto'],
         id: 'highlight6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(255,231,16,1.00)']
      },
      {
         id: 'searchIcon',
         type: 'image',
         rect: ['1063px','63px','26px','26px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/searchIcon.png','0px','0px']
      },
      {
         type: 'rect',
         rect: ['1109px','0px','64px','112px','auto','auto'],
         id: 'highlight7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(255,231,16,1.00)']
      },
      {
         id: 'settingsIcon',
         type: 'image',
         rect: ['1128px','65px','24px','23px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/settingsIcon.png','0px','0px']
      },
      {
         type: 'rect',
         rect: ['1173px','0px','64px','112px','auto','auto'],
         id: 'highlight8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(255,231,16,1.00)']
      },
      {
         id: 'closeIcon',
         type: 'image',
         rect: ['1193px','65px','23px','23px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/closeIcon.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_settingsIcon}": [
            ["style", "top", '65px'],
            ["style", "left", '1128px'],
            ["subproperty", "filter.invert", '0']
         ],
         "${_highlight8}": [
            ["color", "background-color", 'rgba(255,231,16,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '112px'],
            ["style", "opacity", '0'],
            ["style", "left", '1173px'],
            ["style", "width", '64px']
         ],
         "${_highlight2}": [
            ["color", "background-color", 'rgba(255,231,16,1.00)'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '112px'],
            ["style", "opacity", '0'],
            ["style", "left", '400px'],
            ["style", "width", '185px']
         ],
         "${_Home}": [
            ["style", "top", '62px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '302px'],
            ["style", "font-size", '24px']
         ],
         "${_closeIcon}": [
            ["style", "top", '65px'],
            ["style", "left", '1193px'],
            ["subproperty", "filter.invert", '0']
         ],
         "${_highlight1}": [
            ["color", "background-color", 'rgba(255,231,16,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '112px'],
            ["style", "opacity", '1'],
            ["style", "left", '272px'],
            ["style", "width", '128px']
         ],
         "${_britishGP}": [
            ["style", "top", '62px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '615px'],
            ["style", "font-size", '24px']
         ],
         "${_highlight4}": [
            ["color", "background-color", 'rgba(255,231,16,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '112px'],
            ["style", "opacity", '0'],
            ["style", "left", '754px'],
            ["style", "width", '183px']
         ],
         "${_topNavGroup}": [
            ["style", "height", '112px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_searchIcon}": [
            ["style", "top", '63px'],
            ["style", "left", '1063px'],
            ["subproperty", "filter.invert", '0']
         ],
         "${_highlight7}": [
            ["color", "background-color", 'rgba(255,231,16,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '112px'],
            ["style", "opacity", '0'],
            ["style", "left", '1109px'],
            ["style", "width", '64px']
         ],
         "${_highlight3}": [
            ["color", "background-color", 'rgba(255,231,16,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '112px'],
            ["style", "opacity", '0'],
            ["style", "left", '585px'],
            ["style", "width", '169px']
         ],
         "${symbolSelector}": [
            ["style", "height", '112px'],
            ["style", "width", '1280px']
         ],
         "${_topNavBG}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '112px'],
            ["style", "opacity", '0.6'],
            ["style", "left", '0px'],
            ["style", "width", '1280px']
         ],
         "${_highlight6}": [
            ["color", "background-color", 'rgba(255,231,16,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '112px'],
            ["style", "opacity", '0'],
            ["style", "left", '1045px'],
            ["style", "width", '64px']
         ],
         "${_sixNations}": [
            ["style", "top", '62px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'block'],
            ["style", "left", '785px'],
            ["style", "font-size", '24px']
         ],
         "${_BBC_Sport}": [
            ["subproperty", "filter.invert", '1'],
            ["style", "left", '64px'],
            ["style", "top", '63px']
         ],
         "${_highlight2Copy2}": [
            ["color", "background-color", 'rgba(255,231,16,1.00)'],
            ["style", "top", '104px'],
            ["style", "height", '8px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '400px'],
            ["style", "width", '185px']
         ],
         "${_eventOneTitle}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '62px'],
            ["style", "left", '433px'],
            ["style", "font-size", '24px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {
            "navLink_1": 0,
            "navLink_2_in": 125,
            "navLink_2": 250,
            "navLink_3_in": 375,
            "navLink_3": 500,
            "navLink_4_in": 625,
            "navLink_4": 750,
            "navLink_5_in": 875,
            "navLink_5": 1000,
            "navLink_6_in": 1125,
            "navLink_6": 1250,
            "navLink_7_in": 1375,
            "navLink_7": 1500,
            "navLink_1_out": 1875
         },
         timeline: [
            { id: "eid4524", tween: [ "style", "${_highlight6}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 125 },
            { id: "eid4526", tween: [ "style", "${_highlight6}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 125 },
            { id: "eid4660", tween: [ "style", "${_highlight8}", "opacity", '1', { fromValue: '0'}], position: 1375, duration: 125 },
            { id: "eid4658", tween: [ "style", "${_highlight8}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 125 },
            { id: "eid4762", tween: [ "style", "${_highlight2Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4765", tween: [ "style", "${_highlight2Copy2}", "display", 'block', { fromValue: 'none'}], position: 1875, duration: 0 },
            { id: "eid4766", tween: [ "style", "${_highlight2Copy2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid4492", tween: [ "style", "${_highlight1}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid4770", tween: [ "style", "${_highlight2Copy2}", "opacity", '1', { fromValue: '0'}], position: 1875, duration: 0 },
            { id: "eid4771", tween: [ "style", "${_highlight2Copy2}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
            { id: "eid4498", tween: [ "style", "${_highlight3}", "display", 'block', { fromValue: 'none'}], position: 375, duration: 0 },
            { id: "eid4509", tween: [ "style", "${_highlight3}", "display", 'none', { fromValue: 'block'}], position: 625, duration: 0 },
            { id: "eid4539", tween: [ "subproperty", "${_closeIcon}", "filter.invert", '1', { fromValue: '0'}], position: 1375, duration: 125 },
            { id: "eid4540", tween: [ "subproperty", "${_closeIcon}", "filter.invert", '0', { fromValue: '1'}], position: 1500, duration: 125 },
            { id: "eid4533", tween: [ "subproperty", "${_settingsIcon}", "filter.invert", '1', { fromValue: '0'}], position: 1125, duration: 125 },
            { id: "eid4536", tween: [ "subproperty", "${_settingsIcon}", "filter.invert", '0', { fromValue: '1'}], position: 1250, duration: 125 },
            { id: "eid4483", tween: [ "style", "${_highlight2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4490", tween: [ "style", "${_highlight2}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
            { id: "eid4495", tween: [ "style", "${_highlight2}", "display", 'none', { fromValue: 'block'}], position: 375, duration: 0 },
            { id: "eid4750", tween: [ "style", "${_highlight2}", "display", 'block', { fromValue: 'none'}], position: 1875, duration: 0 },
            { id: "eid4751", tween: [ "style", "${_highlight2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid4491", tween: [ "style", "${_highlight1}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 125 },
            { id: "eid4489", tween: [ "style", "${_highlight8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4537", tween: [ "style", "${_highlight8}", "display", 'block', { fromValue: 'none'}], position: 1375, duration: 0 },
            { id: "eid4542", tween: [ "style", "${_highlight8}", "display", 'none', { fromValue: 'block'}], position: 1625, duration: 0 },
            { id: "eid4502", tween: [ "style", "${_highlight2}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid4494", tween: [ "style", "${_highlight2}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 125 },
            { id: "eid4753", tween: [ "style", "${_highlight2}", "opacity", '0', { fromValue: '1'}], position: 1875, duration: 125 },
            { id: "eid4485", tween: [ "style", "${_highlight4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4510", tween: [ "style", "${_highlight4}", "display", 'block', { fromValue: 'none'}], position: 625, duration: 0 },
            { id: "eid4521", tween: [ "style", "${_highlight4}", "display", 'none', { fromValue: 'block'}], position: 875, duration: 0 },
            { id: "eid4493", tween: [ "color", "${_Home}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 125 },
            { id: "eid4532", tween: [ "style", "${_highlight7}", "opacity", '1', { fromValue: '0'}], position: 1125, duration: 126 },
            { id: "eid4534", tween: [ "style", "${_highlight7}", "opacity", '0', { fromValue: '1'}], position: 1251, duration: 124 },
            { id: "eid4488", tween: [ "style", "${_highlight7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4529", tween: [ "style", "${_highlight7}", "display", 'block', { fromValue: 'none'}], position: 1125, duration: 0 },
            { id: "eid4535", tween: [ "style", "${_highlight7}", "display", 'none', { fromValue: 'block'}], position: 1375, duration: 0 },
            { id: "eid4543", tween: [ "color", "${_sixNations}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid4545", tween: [ "color", "${_sixNations}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 625, duration: 125 },
            { id: "eid4517", tween: [ "color", "${_sixNations}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 750, duration: 125 },
            { id: "eid4500", tween: [ "color", "${_eventOneTitle}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 125, duration: 125 },
            { id: "eid4497", tween: [ "color", "${_eventOneTitle}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 250, duration: 125 },
            { id: "eid4749", tween: [ "color", "${_eventOneTitle}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1875, duration: 125 },
            { id: "eid4499", tween: [ "color", "${_britishGP}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 375, duration: 125 },
            { id: "eid4508", tween: [ "color", "${_britishGP}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 500, duration: 125 },
            { id: "eid4525", tween: [ "subproperty", "${_searchIcon}", "filter.invert", '1', { fromValue: '0'}], position: 875, duration: 125 },
            { id: "eid4528", tween: [ "subproperty", "${_searchIcon}", "filter.invert", '0', { fromValue: '1'}], position: 1000, duration: 125 },
            { id: "eid4487", tween: [ "style", "${_highlight6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4522", tween: [ "style", "${_highlight6}", "display", 'block', { fromValue: 'none'}], position: 875, duration: 0 },
            { id: "eid4527", tween: [ "style", "${_highlight6}", "display", 'none', { fromValue: 'block'}], position: 1125, duration: 0 },
            { id: "eid4506", tween: [ "style", "${_highlight3}", "opacity", '1', { fromValue: '0'}], position: 375, duration: 125 },
            { id: "eid4507", tween: [ "style", "${_highlight3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 125 },
            { id: "eid4513", tween: [ "style", "${_highlight4}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 125 },
            { id: "eid4514", tween: [ "style", "${_highlight4}", "opacity", '0', { fromValue: '1'}], position: 751, duration: 124 }         ]
      }
   }
},
"symDoubleHeight_01": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','288px','474px','auto','auto'],
      id: 'doubleHeight',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,0,0,1)'],
      c: [
      {
         id: 'call-the-mid-wife-img1Copy',
         type: 'image',
         rect: ['0px','0px','100%','86.3%','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/David-Attenborough.jpg','0px','0px']
      },
      {
         rect: ['0px','auto','100%','68px','auto','0px'],
         id: 'captionHolder',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(21,21,21,1.00)'],
         c: [
         {
            rect: ['0px','-56px','56px','57px','auto','auto'],
            id: 'iconHolder',
            stroke: [0,'rgb(0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(21,21,21,1)'],
            c: [
            {
               rect: ['16px','16px','25px','25px','auto','auto'],
               filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
               id: 'iPlayer-01Copy',
               type: 'image',
               fill: ['rgba(0,0,0,0)','images/iPlayer-012.svg','0px','0px']
            }]
         },
         {
            font: ['Helvetica Neue, Helvetica, Arial',22,'rgba(145,149,151,1.00)','normal','none',''],
            id: 'subtitle',
            text: 'Subtitle',
            type: 'text',
            rect: ['16px','35px','90%','35.3%','auto','auto']
         },
         {
            font: ['Helvetica Neue, Helvetica, Arial',24,'rgba(204,204,204,1.00)','normal','none',''],
            id: 'title',
            text: 'Title',
            type: 'text',
            rect: ['16px','8px','90%','35.3%','auto','auto']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_subtitle}": [
            ["style", "top", '35px'],
            ["style", "width", '90%'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(145,149,151,1.00)'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px']
         ],
         "${_iconHolder}": [
            ["style", "top", '-56px'],
            ["style", "bottom", 'auto'],
            ["style", "height", '57px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${_captionHolder}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "height", '68px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(21,21,21,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '474px'],
            ["style", "width", '288px']
         ],
         "${_call-the-mid-wife-img1Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '86.27%'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_iPlayer-01Copy}": [
            ["style", "top", '16px'],
            ["subproperty", "filter.invert", '0.93134'],
            ["style", "height", '25px'],
            ["style", "left", '16px'],
            ["style", "width", '25px']
         ],
         "${_doubleHeight}": [
            ["style", "top", '0px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '474px'],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ],
         "${_title}": [
            ["style", "top", '8px'],
            ["style", "height", '35.29%'],
            ["style", "overflow", 'hidden'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "font-family", 'Helvetica Neue, Helvetica, Arial'],
            ["style", "left", '16px'],
            ["style", "width", '90%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {
            "in": 0,
            "focusDelayIn": 250,
            "focusDelayOut": 750,
            "out": 1250
         },
         timeline: [
            { id: "eid4556", tween: [ "style", "${_doubleHeight}", "top", '-8px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid4567", tween: [ "style", "${_doubleHeight}", "top", '0px', { fromValue: '-8px'}], position: 1250, duration: 250 },
            { id: "eid4558", tween: [ "subproperty", "${_iPlayer-01Copy}", "filter.invert", '0', { fromValue: '0.93134'}], position: 0, duration: 250 },
            { id: "eid4569", tween: [ "subproperty", "${_iPlayer-01Copy}", "filter.invert", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid4553", tween: [ "style", "${_doubleHeight}", "width", '304px', { fromValue: '288px'}], position: 0, duration: 250 },
            { id: "eid4564", tween: [ "style", "${_doubleHeight}", "width", '288px', { fromValue: '304px'}], position: 1250, duration: 250 },
            { id: "eid4554", tween: [ "style", "${_doubleHeight}", "height", '490px', { fromValue: '474px'}], position: 0, duration: 250 },
            { id: "eid4565", tween: [ "style", "${_doubleHeight}", "height", '474px', { fromValue: '490px'}], position: 1250, duration: 250 },
            { id: "eid4561", tween: [ "color", "${_subtitle}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(145,149,151,1)'}], position: 0, duration: 250 },
            { id: "eid4572", tween: [ "color", "${_subtitle}", "color", 'rgba(145,149,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1250, duration: 250 },
            { id: "eid4559", tween: [ "gradient", "${_captionHolder}", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 250 },
            { id: "eid4570", tween: [ "gradient", "${_captionHolder}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]}], position: 1250, duration: 250 },
            { id: "eid4557", tween: [ "gradient", "${_iconHolder}", "background-image", [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 250 },
            { id: "eid4568", tween: [ "gradient", "${_iconHolder}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,231,16,1.00)',0],['rgba(255,231,16,1.00)',100]]]}], position: 1250, duration: 250 },
            { id: "eid4555", tween: [ "style", "${_doubleHeight}", "left", '-8px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid4566", tween: [ "style", "${_doubleHeight}", "left", '0px', { fromValue: '-8px'}], position: 1250, duration: 250 },
            { id: "eid4560", tween: [ "color", "${_title}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,204,204,1)'}], position: 0, duration: 250 },
            { id: "eid4571", tween: [ "color", "${_title}", "color", 'rgba(204,204,204,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1250, duration: 250 },
            { id: "eid4562", tween: [ "style", "${_captionHolder}", "height", '490px', { fromValue: '68px'}], position: 250, duration: 500 },
            { id: "eid4563", tween: [ "style", "${_captionHolder}", "height", '68px', { fromValue: '490px'}], position: 750, duration: 500 }         ]
      }
   }
},
"symScheduleBox": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','288px','720px','auto','auto'],
      opacity: 1,
      id: 'ScheduleBox',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(21,21,21,1.00)'],
      c: [
      {
         id: 'mask',
         type: 'group',
         rect: ['0px','261px','288','458px','auto','auto'],
         c: [
         {
            id: 'linksContainer',
            type: 'group',
            rect: ['0','51px','288','257px','auto','auto'],
            c: [
            {
               transform: [],
               rect: ['0px','-88px','288px','51px','auto','auto'],
               id: 'highlight_7',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(21,21,21,1)',[270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]]
            },
            {
               font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal'],
               type: 'text',
               id: 'Link_7',
               text: 'Football',
               align: 'left',
               rect: ['30px','318px','236px','26px','auto','auto']
            },
            {
               transform: [],
               rect: ['0px','-88px','288px','51px','auto','auto'],
               id: 'highlight_6',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(21,21,21,1)',[270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]]
            },
            {
               font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal'],
               type: 'text',
               id: 'Link_6',
               text: 'Golf',
               align: 'left',
               rect: ['30px','266px','236px','26px','auto','auto']
            },
            {
               transform: [],
               rect: ['0px','-88px','288px','51px','auto','auto'],
               id: 'highlight_5',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(21,21,21,1)',[270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]]
            },
            {
               font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal'],
               type: 'text',
               id: 'Link_5',
               text: 'Tennis',
               align: 'left',
               rect: ['30px','215px','236px','26px','auto','auto']
            },
            {
               transform: [],
               rect: ['0px','-88px','288px','51px','auto','auto'],
               id: 'highlight_4',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(21,21,21,1)',[270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]]
            },
            {
               font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal'],
               type: 'text',
               id: 'Link_4',
               text: 'Rugby Union',
               align: 'left',
               rect: ['30px','164px','236px','26px','auto','auto']
            },
            {
               transform: [],
               rect: ['0px','-88px','288px','51px','auto','auto'],
               id: 'highlight_3',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(21,21,21,1)',[270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]]
            },
            {
               font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal'],
               type: 'text',
               id: 'Link_3',
               text: 'Cricket',
               align: 'left',
               rect: ['30px','113px','236px','26px','auto','auto']
            },
            {
               transform: [],
               rect: ['0px','-88px','288px','51px','auto','auto'],
               id: 'highlight_2',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(21,21,21,1)',[270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]]
            },
            {
               font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','normal','none','normal'],
               type: 'text',
               id: 'Link_2',
               text: 'Live',
               align: 'left',
               rect: ['30px','62px','236px','26px','auto','auto']
            },
            {
               transform: [],
               rect: ['0px','-88px','288px','51px','auto','auto'],
               id: 'highlight_1',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(21,21,21,1)',[270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]]
            },
            {
               transform: [],
               type: 'text',
               align: 'left',
               id: 'Link_1',
               text: 'All',
               rect: ['30px','12px','236px','26px','auto','auto'],
               font: ['\'Helvetica Neue\', Helvetica, Arial',24,'rgba(255,255,255,1.00)','400','none','normal']
            }]
         }]
      },
      {
         type: 'image',
         filter: [1,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
         id: 'BBC_Sport',
         rect: ['26px','53px','215px','26px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/BBC_Sport.png','0px','0px']
      },
      {
         font: ['\'Helvetica Neue\', Helvetica, Arial',26,'rgba(255,255,255,1)','700','none','normal'],
         type: 'text',
         id: 'Text',
         text: 'Today',
         align: 'left',
         rect: ['28px','99px','167px','33px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_highlight_7}": [
            ["style", "top", '65px'],
            ["gradient", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ],
         "${_Link_2}": [
            ["style", "top", '62px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '26px'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_BBC_Sport}": [
            ["style", "top", '53px'],
            ["style", "height", '26px'],
            ["subproperty", "filter.invert", '1'],
            ["style", "left", '26px'],
            ["style", "width", '215px']
         ],
         "${_highlight_4}": [
            ["style", "top", '102px'],
            ["style", "opacity", '0'],
            ["style", "height", '51px'],
            ["gradient", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ],
         "${_Link_3}": [
            ["style", "top", '113px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_highlight_3}": [
            ["style", "top", '51px'],
            ["style", "opacity", '0'],
            ["style", "height", '51px'],
            ["gradient", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ],
         "${_highlight_1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "height", '51px'],
            ["gradient", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ],
         "${_Link_6}": [
            ["style", "top", '266px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_highlight_6}": [
            ["style", "top", '65px'],
            ["gradient", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ],
         "${_mask}": [
            ["style", "top", '261px'],
            ["style", "height", '458px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Group2}": [
            ["style", "left", '']
         ],
         "${_Link_7}": [
            ["style", "top", '318px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '26px'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_Link_5}": [
            ["style", "top", '215px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '26px'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '720px'],
            ["style", "overflow", 'auto'],
            ["style", "width", '288px']
         ],
         "${_highlight_2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "height", '51px'],
            ["gradient", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ],
         "${_Text}": [
            ["style", "top", '99px'],
            ["style", "font-weight", '700'],
            ["style", "left", '28px'],
            ["style", "font-size", '26px']
         ],
         "${_highlight_5}": [
            ["style", "top", '65px'],
            ["gradient", "background-image", [270,[['rgba(255,231,16,1.00)',83],['rgba(239,191,28,1.00)',95],['rgba(228,163,38,1.00)',100]]]],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ],
         "${_linksContainer}": [
            ["style", "height", '257px'],
            ["style", "display", 'block'],
            ["style", "top", '52px']
         ],
         "${_Link_4}": [
            ["style", "top", '164px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '26px'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_Link_1}": [
            ["style", "top", '12px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '30px'],
            ["style", "font-size", '24px']
         ],
         "${_ScheduleBox}": [
            ["color", "background-color", 'rgba(21,21,21,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '720px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '288px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4775,
         autoPlay: true,
         labels: {
            "in": 250,
            "Link_1": 375,
            "Link_2_in": 500,
            "Link_2": 625,
            "Link_3": 875,
            "Link_4": 1125,
            "Link_5": 1375,
            "Link_6": 1625,
            "Link_7": 1875,
            "Link_1_out": 3000,
            "Link_2_out": 3250
         },
         timeline: [
            { id: "eid4611", tween: [ "color", "${_Link_4}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1000, duration: 125 },
            { id: "eid4613", tween: [ "color", "${_Link_4}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1125, duration: 125 },
            { id: "eid5246", tween: [ "color", "${_Link_4}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 3750, duration: 125 },
            { id: "eid5247", tween: [ "color", "${_Link_4}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 3875, duration: 125 },
            { id: "eid4704", tween: [ "style", "${_highlight_2}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 125 },
            { id: "eid4705", tween: [ "style", "${_highlight_2}", "opacity", '0', { fromValue: '1'}], position: 625, duration: 125 },
            { id: "eid5281", tween: [ "style", "${_highlight_2}", "opacity", '0', { fromValue: '0'}], position: 3230, duration: 0 },
            { id: "eid5239", tween: [ "style", "${_highlight_2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 125 },
            { id: "eid4746", tween: [ "style", "${_highlight_4}", "top", '153px', { fromValue: '102px'}], position: 1000, duration: 0 },
            { id: "eid4747", tween: [ "style", "${_highlight_4}", "top", '205px', { fromValue: '153px'}], position: 1250, duration: 0 },
            { id: "eid5248", tween: [ "style", "${_highlight_4}", "top", '153px', { fromValue: '205px'}], position: 3750, duration: 0 },
            { id: "eid5249", tween: [ "style", "${_highlight_4}", "top", '205px', { fromValue: '153px'}], position: 4000, duration: 0 },
            { id: "eid4822", tween: [ "color", "${_Link_6}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1500, duration: 125 },
            { id: "eid4823", tween: [ "color", "${_Link_6}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1625, duration: 125 },
            { id: "eid5257", tween: [ "color", "${_Link_6}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 4250, duration: 125 },
            { id: "eid5258", tween: [ "color", "${_Link_6}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 4375, duration: 125 },
            { id: "eid4831", tween: [ "color", "${_Link_7}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1750, duration: 125 },
            { id: "eid4832", tween: [ "color", "${_Link_7}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1875, duration: 125 },
            { id: "eid5262", tween: [ "color", "${_Link_7}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 4500, duration: 125 },
            { id: "eid5263", tween: [ "color", "${_Link_7}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 4625, duration: 125 },
            { id: "eid4682", tween: [ "style", "${_highlight_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 125 },
            { id: "eid4683", tween: [ "style", "${_highlight_1}", "opacity", '0', { fromValue: '1'}], position: 375, duration: 125 },
            { id: "eid5280", tween: [ "style", "${_highlight_1}", "opacity", '0', { fromValue: '0'}], position: 2987, duration: 0 },
            { id: "eid5233", tween: [ "style", "${_highlight_1}", "opacity", '0', { fromValue: '1'}], position: 3001, duration: 125 },
            { id: "eid4739", tween: [ "style", "${_highlight_4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 125 },
            { id: "eid4740", tween: [ "style", "${_highlight_4}", "opacity", '0', { fromValue: '1'}], position: 1125, duration: 125 },
            { id: "eid5250", tween: [ "style", "${_highlight_4}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 125 },
            { id: "eid5251", tween: [ "style", "${_highlight_4}", "opacity", '0', { fromValue: '1'}], position: 3875, duration: 125 },
            { id: "eid4597", tween: [ "color", "${_Link_1}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 250, duration: 125 },
            { id: "eid4602", tween: [ "color", "${_Link_1}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 375, duration: 125 },
            { id: "eid5279", tween: [ "color", "${_Link_1}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 2988, duration: 0 },
            { id: "eid5229", tween: [ "color", "${_Link_1}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 3000, duration: 125 },
            { id: "eid4606", tween: [ "color", "${_Link_3}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 750, duration: 125 },
            { id: "eid4607", tween: [ "color", "${_Link_3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 875, duration: 125 },
            { id: "eid5288", tween: [ "color", "${_Link_3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3491, duration: 0 },
            { id: "eid5241", tween: [ "color", "${_Link_3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 3500, duration: 125 },
            { id: "eid4825", tween: [ "style", "${_highlight_6}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 125 },
            { id: "eid4826", tween: [ "style", "${_highlight_6}", "opacity", '0', { fromValue: '1'}], position: 1625, duration: 125 },
            { id: "eid5260", tween: [ "style", "${_highlight_6}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 125 },
            { id: "eid5261", tween: [ "style", "${_highlight_6}", "opacity", '0', { fromValue: '1'}], position: 4375, duration: 125 },
            { id: "eid4833", tween: [ "style", "${_highlight_7}", "top", '308px', { fromValue: '65px'}], position: 1750, duration: 0 },
            { id: "eid5264", tween: [ "style", "${_highlight_7}", "top", '308px', { fromValue: '308px'}], position: 4500, duration: 0 },
            { id: "eid4692", tween: [ "style", "${_highlight_1}", "top", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
            { id: "eid4693", tween: [ "style", "${_highlight_1}", "top", '51px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid5230", tween: [ "style", "${_highlight_1}", "top", '0px', { fromValue: '51px'}], position: 3000, duration: 0 },
            { id: "eid5231", tween: [ "style", "${_highlight_1}", "top", '51px', { fromValue: '0px'}], position: 3126, duration: 0 },
            { id: "eid4716", tween: [ "style", "${_highlight_3}", "top", '102px', { fromValue: '51px'}], position: 750, duration: 0 },
            { id: "eid4717", tween: [ "style", "${_highlight_3}", "top", '153px', { fromValue: '102px'}], position: 1000, duration: 0 },
            { id: "eid5242", tween: [ "style", "${_highlight_3}", "top", '102px', { fromValue: '153px'}], position: 3500, duration: 0 },
            { id: "eid5243", tween: [ "style", "${_highlight_3}", "top", '153px', { fromValue: '102px'}], position: 3625, duration: 0 },
            { id: "eid4824", tween: [ "style", "${_highlight_6}", "top", '256px', { fromValue: '65px'}], position: 1500, duration: 0 },
            { id: "eid5259", tween: [ "style", "${_highlight_6}", "top", '256px', { fromValue: '256px'}], position: 4250, duration: 0 },
            { id: "eid4599", tween: [ "color", "${_Link_2}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 500, duration: 125 },
            { id: "eid4601", tween: [ "color", "${_Link_2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 625, duration: 125 },
            { id: "eid5282", tween: [ "color", "${_Link_2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 3230, duration: 0 },
            { id: "eid5235", tween: [ "color", "${_Link_2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 3250, duration: 125 },
            { id: "eid5273", tween: [ "style", "${_linksContainer}", "top", '2px', { fromValue: '52px'}], position: 375, duration: 125 },
            { id: "eid4622", tween: [ "style", "${_linksContainer}", "top", '-50px', { fromValue: '2px'}], position: 625, duration: 125 },
            { id: "eid4623", tween: [ "style", "${_linksContainer}", "top", '-101px', { fromValue: '-50px'}], position: 875, duration: 125 },
            { id: "eid4625", tween: [ "style", "${_linksContainer}", "top", '-153px', { fromValue: '-101px'}], position: 1125, duration: 125 },
            { id: "eid4828", tween: [ "style", "${_linksContainer}", "top", '-205px', { fromValue: '-153px'}], position: 1375, duration: 125 },
            { id: "eid4836", tween: [ "style", "${_linksContainer}", "top", '-256px', { fromValue: '-205px'}], position: 1625, duration: 125 },
            { id: "eid5183", tween: [ "style", "${_linksContainer}", "top", '-256px', { fromValue: '-256px'}], position: 2000, duration: 0 },
            { id: "eid5274", tween: [ "style", "${_linksContainer}", "top", '52px', { fromValue: '-256px'}], position: 3000, duration: 0 },
            { id: "eid5276", tween: [ "style", "${_linksContainer}", "top", '2px', { fromValue: '52px'}], position: 3250, duration: 0 },
            { id: "eid5278", tween: [ "style", "${_linksContainer}", "top", '-50px', { fromValue: '2px'}], position: 3500, duration: 0 },
            { id: "eid5286", tween: [ "style", "${_linksContainer}", "top", '-101px', { fromValue: '-50px'}], position: 3750, duration: 0 },
            { id: "eid5290", tween: [ "style", "${_linksContainer}", "top", '-153px', { fromValue: '-101px'}], position: 4000, duration: 0 },
            { id: "eid5292", tween: [ "style", "${_linksContainer}", "top", '-205px', { fromValue: '-153px'}], position: 4250, duration: 0 },
            { id: "eid5294", tween: [ "style", "${_linksContainer}", "top", '-256px', { fromValue: '-256px'}], position: 4500, duration: 0 },
            { id: "eid5227", tween: [ "style", "${_linksContainer}", "top", '-256px', { fromValue: '-256px'}], position: 4750, duration: 0 },
            { id: "eid4698", tween: [ "style", "${_highlight_2}", "top", '51px', { fromValue: '0px'}], position: 500, duration: 0 },
            { id: "eid4699", tween: [ "style", "${_highlight_2}", "top", '102px', { fromValue: '51px'}], position: 750, duration: 0 },
            { id: "eid5236", tween: [ "style", "${_highlight_2}", "top", '51px', { fromValue: '102px'}], position: 3250, duration: 0 },
            { id: "eid5237", tween: [ "style", "${_highlight_2}", "top", '102px', { fromValue: '51px'}], position: 3375, duration: 0 },
            { id: "eid5184", tween: [ "style", "${_linksContainer}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid5220", tween: [ "style", "${_linksContainer}", "display", 'block', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid4617", tween: [ "color", "${_Link_5}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 1250, duration: 125 },
            { id: "eid4619", tween: [ "color", "${_Link_5}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1375, duration: 125 },
            { id: "eid5252", tween: [ "color", "${_Link_5}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 4000, duration: 125 },
            { id: "eid5253", tween: [ "color", "${_Link_5}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 4125, duration: 125 },
            { id: "eid4614", tween: [ "style", "${_highlight_5}", "top", '205px', { fromValue: '65px'}], position: 1250, duration: 0 },
            { id: "eid5254", tween: [ "style", "${_highlight_5}", "top", '205px', { fromValue: '205px'}], position: 4000, duration: 0 },
            { id: "eid4834", tween: [ "style", "${_highlight_7}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 125 },
            { id: "eid4835", tween: [ "style", "${_highlight_7}", "opacity", '0', { fromValue: '1'}], position: 1875, duration: 125 },
            { id: "eid5265", tween: [ "style", "${_highlight_7}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 125 },
            { id: "eid5266", tween: [ "style", "${_highlight_7}", "opacity", '0', { fromValue: '1'}], position: 4625, duration: 125 },
            { id: "eid4723", tween: [ "style", "${_highlight_3}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 125 },
            { id: "eid4724", tween: [ "style", "${_highlight_3}", "opacity", '0', { fromValue: '1'}], position: 875, duration: 125 },
            { id: "eid5287", tween: [ "style", "${_highlight_3}", "opacity", '0', { fromValue: '0'}], position: 3491, duration: 0 },
            { id: "eid5245", tween: [ "style", "${_highlight_3}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 125 },
            { id: "eid4616", tween: [ "style", "${_highlight_5}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 125 },
            { id: "eid4618", tween: [ "style", "${_highlight_5}", "opacity", '0', { fromValue: '1'}], position: 1375, duration: 125 },
            { id: "eid5255", tween: [ "style", "${_highlight_5}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 125 },
            { id: "eid5256", tween: [ "style", "${_highlight_5}", "opacity", '0', { fromValue: '1'}], position: 4125, duration: 125 }         ]
      }
   }
},
"symDoubleHeight": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'symItem_03',
      type: 'rect',
      rect: ['624px','4px','auto','auto','auto','auto']
   },
   {
      id: 'symItem_02',
      type: 'rect',
      rect: ['304px','249px','auto','auto','auto','auto']
   },
   {
      id: 'symItem_01',
      type: 'rect',
      rect: ['304px','4px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['-47px','522px','158px','24px','auto','auto'],
      fill: ['rgba(255,231,16,1)']
   }],
   symbolInstances: [
   {
      id: 'symItem_02',
      symbolName: 'symItem_01'
   },
   {
      id: 'symItem_01',
      symbolName: 'symItem_01'
   },
   {
      id: 'symItem_03',
      symbolName: 'symDoubleHeight_01'
   }   ]
   },
   states: {
      "Base State": {
         "${_symItem_03}": [
            ["style", "left", '624px'],
            ["style", "top", '4px']
         ],
         "${_symItem_02}": [
            ["style", "left", '304px'],
            ["style", "top", '249px']
         ],
         "${symbolSelector}": [
            ["style", "height", '482px'],
            ["style", "width", '916px']
         ],
         "${_Rectangle}": [
            ["style", "left", '-47px']
         ],
         "${_symItem_01}": [
            ["style", "left", '304px'],
            ["style", "top", '4px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "item_1": 0,
            "item_2": 250,
            "item_3": 500
         },
         timeline: [
            { id: "eid4661", tween: [ "style", "${_Rectangle}", "left", '1072px', { fromValue: '-47px'}], position: 0, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "lower_third");
