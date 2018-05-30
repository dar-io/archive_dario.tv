/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['Helvetica, Arial']='';
   fonts['Helvetica']='';


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
            opacity:0.34442138671875,
            fill:["rgba(0,0,0,0)",im+"iptv-grid.png",'0px','0px']
         },
         {
            id:'collections-272-212',
            type:'image',
            rect:['1071px','445px','272px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"collections-272-212.png",'0px','0px','100%','100%']
         },
         {
            id:'iplayer-272-212',
            type:'image',
            rect:['783px','445px','272px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"iplayer-272-212.png",'0px','0px','100%','100%']
         },
         {
            id:'iplayer-272-2122',
            type:'image',
            rect:['-175px','445px','272px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"iplayer-272-212.png",'0px','0px','100%','100%']
         },
         {
            id:'collections-272-2122',
            type:'image',
            rect:['496px','445px','272px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"collections-272-212.png",'0px','0px']
         },
         {
            id:'iplayer-focus2',
            type:'image',
            rect:['111px','385px','368px','272px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"iplayer-focus.png",'0px','0px','100%','100%']
         },
         {
            id:'iplayer-272-2123',
            type:'image',
            rect:['1358px','445px','272px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"iplayer-272-212.png",'0px','0px','100%','100%']
         },
         {
            id:'iplayer-272-2127',
            display:'none',
            type:'image',
            rect:['162px','657px','272px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"iplayer-272-212.png",'0px','0px']
         },
         {
            id:'iplayer-272-2128',
            display:'none',
            type:'image',
            rect:['162px','885px','272px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"iplayer-272-212.png",'0px','0px']
         },
         {
            id:'iplayer-272-21210',
            display:'none',
            type:'image',
            rect:['162px','1113px','272px','212px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"iplayer-272-212.png",'0px','0px']
         },
         {
            id:'nav',
            type:'image',
            rect:['0px','0px','1280px','112px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"nav.png",'0px','0px']
         },
         {
            id:'collections-title',
            type:'image',
            rect:['162px','541px','272px','116px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"collections-title.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_collections-272-2122}": [
            ["style", "top", '445px'],
            ["style", "height", '212px'],
            ["style", "left", '496px'],
            ["style", "width", '272px']
         ],
         "${_iplayer-272-2128}": [
            ["style", "top", '901px'],
            ["style", "display", 'none'],
            ["style", "height", '212px'],
            ["style", "left", '111px'],
            ["style", "width", '272px']
         ],
         "${_iplayer-272-2123}": [
            ["style", "top", '445px'],
            ["style", "opacity", '1'],
            ["style", "left", '1358px']
         ],
         "${_iplayer-272-2122}": [
            ["style", "top", '445px'],
            ["style", "opacity", '1'],
            ["style", "left", '-175px']
         ],
         "${_nav}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_iplayer-272-212}": [
            ["style", "top", '445px'],
            ["style", "opacity", '1'],
            ["style", "left", '783px']
         ],
         "${_txt-channel}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '14px'],
            ["style", "width", '276px'],
            ["style", "top", '55px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "font-size", '18px'],
            ["style", "opacity", '0']
         ],
         "${_txt-footer}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '18px'],
            ["style", "top", '252px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica'],
            ["style", "width", '276px'],
            ["style", "opacity", '0']
         ],
         "${_txt-title}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '24px'],
            ["style", "top", '55px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_txt-body}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '111px'],
            ["style", "width", '276px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '119px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "display", 'none']
         ],
         "${_collections-272-212}": [
            ["style", "top", '445px'],
            ["style", "opacity", '1'],
            ["style", "left", '1071px']
         ],
         "${_iplayer-focus2}": [
            ["style", "top", '385px'],
            ["style", "height", '272px'],
            ["style", "opacity", '1'],
            ["style", "left", '112px'],
            ["style", "width", '368px']
         ],
         "${_collections-title}": [
            ["style", "top", '541px'],
            ["style", "opacity", '0'],
            ["style", "left", '162px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(247,247,247,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '720px'],
            ["style", "width", '1280px']
         ],
         "${_iplayer-272-2127}": [
            ["style", "top", '673px'],
            ["style", "display", 'none'],
            ["style", "height", '212px'],
            ["style", "left", '162px'],
            ["style", "width", '272px']
         ],
         "${_iptv-grid}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.34442138671875'],
            ["style", "left", '0px']
         ],
         "${_iplayer-272-21210}": [
            ["style", "top", '1129px'],
            ["style", "left", '162px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid673", tween: [ "style", "${_iplayer-focus2}", "height", '212px', { fromValue: '272px'}], position: 0, duration: 500 },
            { id: "eid790", tween: [ "style", "${_iplayer-272-2128}", "height", '272px', { fromValue: '212px'}], position: 1500, duration: 500 },
            { id: "eid727", tween: [ "style", "${_iplayer-272-2128}", "top", '400px', { fromValue: '901px'}], position: 1000, duration: 500 },
            { id: "eid794", tween: [ "style", "${_iplayer-272-2128}", "top", '268px', { fromValue: '400px'}], position: 1500, duration: 500 },
            { id: "eid737", tween: [ "style", "${_iplayer-272-2127}", "height", '272px', { fromValue: '212px'}], position: 1000, duration: 497 },
            { id: "eid778", tween: [ "style", "${_iplayer-272-2127}", "height", '212px', { fromValue: '272px'}], position: 1497, duration: 503 },
            { id: "eid793", tween: [ "style", "${_iplayer-272-2128}", "left", '111px', { fromValue: '111px'}], position: 2000, duration: 0 },
            { id: "eid667", tween: [ "style", "${_iplayer-272-212}", "left", '496px', { fromValue: '783px'}], position: 0, duration: 500 },
            { id: "eid763", tween: [ "style", "${_iplayer-272-2123}", "opacity", '0.4990234375', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid736", tween: [ "style", "${_iplayer-272-2127}", "width", '368px', { fromValue: '272px'}], position: 1000, duration: 497 },
            { id: "eid777", tween: [ "style", "${_iplayer-272-2127}", "width", '272px', { fromValue: '368px'}], position: 1497, duration: 503 },
            { id: "eid789", tween: [ "style", "${_iplayer-272-2128}", "width", '368px', { fromValue: '272px'}], position: 1500, duration: 500 },
            { id: "eid728", tween: [ "style", "${_iplayer-272-21210}", "top", '628px', { fromValue: '1129px'}], position: 1000, duration: 500 },
            { id: "eid796", tween: [ "style", "${_iplayer-272-21210}", "top", '547px', { fromValue: '628px'}], position: 1500, duration: 500 },
            { id: "eid704", tween: [ "style", "${_iplayer-272-2128}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid701", tween: [ "style", "${_iplayer-272-2128}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid771", tween: [ "style", "${_collections-title}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 250 },
            { id: "eid674", tween: [ "style", "${_iplayer-focus2}", "top", '445px', { fromValue: '385px'}], position: 0, duration: 500 },
            { id: "eid669", tween: [ "style", "${_collections-272-212}", "left", '784px', { fromValue: '1071px'}], position: 0, duration: 500 },
            { id: "eid773", tween: [ "style", "${_collections-title}", "top", '0px', { fromValue: '541px'}], position: 1000, duration: 500 },
            { id: "eid675", tween: [ "style", "${_iplayer-focus2}", "width", '272px', { fromValue: '368px'}], position: 0, duration: 500 },
            { id: "eid729", tween: [ "style", "${_iplayer-272-2127}", "top", '121px', { fromValue: '673px'}], position: 1000, duration: 500 },
            { id: "eid797", tween: [ "style", "${_iplayer-272-2127}", "top", '48px', { fromValue: '121px'}], position: 1500, duration: 500 },
            { id: "eid703", tween: [ "style", "${_iplayer-272-21210}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid700", tween: [ "style", "${_iplayer-272-21210}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid768", tween: [ "style", "${_nav}", "top", '-233px', { fromValue: '0px'}], position: 1289, duration: 211 },
            { id: "eid705", tween: [ "style", "${_iplayer-272-2127}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid702", tween: [ "style", "${_iplayer-272-2127}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid762", tween: [ "style", "${_collections-272-212}", "opacity", '0.4990234375', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid671", tween: [ "style", "${_collections-272-2122}", "top", '385px', { fromValue: '445px'}], position: 0, duration: 500 },
            { id: "eid698", tween: [ "style", "${_collections-272-2122}", "top", '445px', { fromValue: '385px'}], position: 500, duration: 500 },
            { id: "eid699", tween: [ "style", "${_collections-272-2122}", "top", '-98px', { fromValue: '445px'}], position: 1000, duration: 500 },
            { id: "eid764", tween: [ "style", "${_iplayer-272-212}", "opacity", '0.4990234375', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid668", tween: [ "style", "${_iplayer-272-2122}", "left", '-465px', { fromValue: '-175px'}], position: 0, duration: 500 },
            { id: "eid670", tween: [ "style", "${_collections-272-2122}", "height", '272px', { fromValue: '212px'}], position: 0, duration: 500 },
            { id: "eid697", tween: [ "style", "${_collections-272-2122}", "height", '212px', { fromValue: '272px'}], position: 500, duration: 500 },
            { id: "eid665", tween: [ "style", "${_collections-272-2122}", "left", '113px', { fromValue: '496px'}], position: 0, duration: 500 },
            { id: "eid681", tween: [ "style", "${_collections-272-2122}", "left", '162px', { fromValue: '113px'}], position: 500, duration: 500 },
            { id: "eid664", tween: [ "style", "${_iplayer-focus2}", "left", '-177px', { fromValue: '112px'}], position: 0, duration: 500 },
            { id: "eid765", tween: [ "style", "${_iplayer-272-2122}", "opacity", '0.4990234375', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid761", tween: [ "style", "${_iplayer-focus2}", "opacity", '0.4990234375', { fromValue: '1'}], position: 500, duration: 500 },
            { id: "eid672", tween: [ "style", "${_collections-272-2122}", "width", '368px', { fromValue: '272px'}], position: 0, duration: 500 },
            { id: "eid696", tween: [ "style", "${_collections-272-2122}", "width", '272px', { fromValue: '368px'}], position: 500, duration: 500 },
            { id: "eid666", tween: [ "style", "${_iplayer-272-2123}", "left", '1071px', { fromValue: '1358px'}], position: 0, duration: 500 },
            { id: "eid741", tween: [ "style", "${_iplayer-272-2127}", "left", '114px', { fromValue: '162px'}], position: 1000, duration: 497 },
            { id: "eid781", tween: [ "style", "${_iplayer-272-2127}", "left", '162px', { fromValue: '114px'}], position: 1497, duration: 503 }         ]
      }
   }
},
"focus-panel": {
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
      rect: ['0px','auto','304px','474px','auto','170px'],
      id: 'image',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(147,147,147,1.00)']
   },
   {
      rect: ['0px','48px','323px','290px','auto','auto'],
      id: 'box-delay',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(235,235,235,1.00)']
   },
   {
      type: 'text',
      font: ['Helvetica',18,'rgba(118,118,118,1.00)','500','none','normal'],
      rect: ['12px','257px','278px','21px','auto','auto'],
      id: 'txt-footer',
      text: '6 PROGRAMMES',
      align: 'left',
      transform: []
   },
   {
      type: 'text',
      rect: ['12px','138px','278px','119px','auto','auto'],
      align: 'left',
      id: 'txt-body',
      text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
      display: 'none',
      font: ['Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal']
   },
   {
      type: 'text',
      rect: ['13px','83px','272px','55px','auto','auto'],
      id: 'txt-title',
      text: 'Collection Title Long Wrap 2 Lines<br>',
      align: 'left',
      font: ['Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal']
   },
   {
      type: 'text',
      rect: ['12px','56px','278px','27px','auto','auto'],
      id: 'txt-channel',
      text: 'BBC ONE<br>',
      align: 'left',
      font: ['Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal']
   },
   {
      rect: ['0px','0px','36px','38px','auto','auto'],
      id: 'box-icon',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(235,235,235,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_txt-body}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '111px'],
            ["style", "height", '119px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_txt-footer}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '18px'],
            ["style", "top", '252px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_image}": [
            ["style", "top", 'auto'],
            ["style", "overflow", 'visible'],
            ["style", "bottom", '174px'],
            ["style", "height", '474px'],
            ["color", "background-color", 'rgba(147,147,147,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '288px']
         ],
         "${symbolSelector}": [
            ["style", "height", '285px'],
            ["style", "width", '304px']
         ],
         "${_box-icon}": [
            ["style", "top", '-5px'],
            ["style", "height", '48px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '48px']
         ],
         "${_box-delay}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '68px'],
            ["style", "top", '43px'],
            ["style", "left", '8px'],
            ["style", "width", '288px']
         ],
         "${_txt-title}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '24px'],
            ["style", "top", '55px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_txt-channel}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '14px'],
            ["style", "width", '276px'],
            ["style", "top", '55px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         timeline: [
            { id: "eid187", tween: [ "style", "${_txt-body}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid188", tween: [ "style", "${_txt-body}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid261", tween: [ "style", "${_txt-body}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid270", tween: [ "style", "${_txt-body}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid224", tween: [ "style", "${_txt-footer}", "top", '252px', { fromValue: '252px'}], position: 0, duration: 0 },
            { id: "eid246", tween: [ "style", "${_txt-footer}", "top", '84px', { fromValue: '252px'}], position: 1500, duration: 500 },
            { id: "eid157", tween: [ "style", "${_image}", "width", '304px', { fromValue: '288px'}], position: 0, duration: 500 },
            { id: "eid118", tween: [ "style", "${_box-delay}", "width", '304px', { fromValue: '288px'}], position: 0, duration: 500 },
            { id: "eid237", tween: [ "style", "${_box-icon}", "top", '3px', { fromValue: '-5px'}], position: 0, duration: 500 },
            { id: "eid247", tween: [ "style", "${_box-icon}", "top", '-165px', { fromValue: '3px'}], position: 1500, duration: 500 },
            { id: "eid113", tween: [ "style", "${_txt-channel}", "width", '278px', { fromValue: '276px'}], position: 2000, duration: 500 },
            { id: "eid107", tween: [ "style", "${_txt-footer}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid206", tween: [ "style", "${_image}", "height", '490px', { fromValue: '474px'}], position: 0, duration: 500 },
            { id: "eid105", tween: [ "style", "${_txt-title}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid112", tween: [ "style", "${_txt-channel}", "left", '14px', { fromValue: '14px'}], position: 2000, duration: 500 },
            { id: "eid106", tween: [ "style", "${_txt-footer}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid189", tween: [ "style", "${_txt-body}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid275", tween: [ "style", "${_txt-body}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_box-icon}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid305", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '68px'}], position: 0, duration: 500 },
            { id: "eid306", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '69px'}], position: 500, duration: 750 },
            { id: "eid307", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '69px'}], position: 1250, duration: 78 },
            { id: "eid314", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '69px'}], position: 1328, duration: 85 },
            { id: "eid313", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '69px'}], position: 1413, duration: 87 },
            { id: "eid304", tween: [ "style", "${_box-delay}", "height", '237px', { fromValue: '69px'}], position: 1500, duration: 500 },
            { id: "eid310", tween: [ "style", "${_box-delay}", "height", '237px', { fromValue: '237px'}], position: 2000, duration: 8 },
            { id: "eid236", tween: [ "style", "${_box-delay}", "top", '51px', { fromValue: '43px'}], position: 0, duration: 500 },
            { id: "eid245", tween: [ "style", "${_box-delay}", "top", '-117px', { fromValue: '51px'}], position: 1500, duration: 500 },
            { id: "eid266", tween: [ "style", "${_txt-footer}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid108", tween: [ "style", "${_txt-body}", "top", '118px', { fromValue: '111px'}], position: 0, duration: 500 },
            { id: "eid243", tween: [ "style", "${_txt-body}", "top", '143px', { fromValue: '118px'}], position: 1500, duration: 7 },
            { id: "eid274", tween: [ "style", "${_txt-body}", "top", '-24px', { fromValue: '143px'}], position: 1507, duration: 493 },
            { id: "eid117", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid159", tween: [ "style", "${_image}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid218", tween: [ "style", "${_txt-title}", "top", '61px', { fromValue: '55px'}], position: 0, duration: 500 },
            { id: "eid244", tween: [ "style", "${_txt-title}", "top", '81px', { fromValue: '61px'}], position: 1500, duration: 7 },
            { id: "eid273", tween: [ "style", "${_txt-title}", "top", '-81px', { fromValue: '81px'}], position: 1507, duration: 493 },
            { id: "eid215", tween: [ "style", "${_txt-channel}", "top", '-108px', { fromValue: '55px'}], position: 1500, duration: 500 },
            { id: "eid116", tween: [ "color", "${_box-delay}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid104", tween: [ "style", "${_txt-title}", "left", '13px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid194", tween: [ "style", "${_image}", "bottom", '165px', { fromValue: '174px'}], position: 0, duration: 500 },
            { id: "eid109", tween: [ "style", "${_txt-body}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid103", tween: [ "color", "${_txt-title}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500 },
            { id: "eid248", tween: [ "style", "${_txt-channel}", "opacity", '0', { fromValue: '0'}], position: 1250, duration: 0 },
            { id: "eid268", tween: [ "style", "${_txt-channel}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid110", tween: [ "style", "${_txt-body}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid115", tween: [ "color", "${_box-icon}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid272", tween: [ "style", "${_txt-title}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid267", tween: [ "style", "${_txt-title}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 }         ]
      }
   }
},
"double_height": {
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
      id: 'double-height',
      type: 'group',
      rect: ['0px','0px','304','490','auto','auto'],
      c: [
      {
         type: 'rect',
         id: 'imageCopy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','auto','304px','474px','auto','-430px'],
         fill: ['rgba(147,147,147,1.00)']
      },
      {
         type: 'rect',
         id: 'box-delayCopy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','418px','323px','290px','auto','auto'],
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         transform: [],
         type: 'text',
         align: 'left',
         id: 'txt-footerCopy2',
         text: '6 PROGRAMMES',
         rect: ['12px','627px','278px','21px','auto','auto'],
         font: ['Helvetica',18,'rgba(118,118,118,1.00)','500','none','normal']
      },
      {
         font: ['Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
         type: 'text',
         display: 'none',
         id: 'txt-bodyCopy2',
         text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
         align: 'left',
         rect: ['12px','508px','278px','119px','auto','auto']
      },
      {
         font: ['Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
         type: 'text',
         id: 'txt-titleCopy2',
         text: 'Collection Title Long Wrap 2 Lines<br>',
         align: 'left',
         rect: ['13px','453px','272px','55px','auto','auto']
      },
      {
         font: ['Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
         type: 'text',
         id: 'txt-channelCopy2',
         text: 'BBC ONE<br>',
         align: 'left',
         rect: ['12px','426px','278px','27px','auto','auto']
      },
      {
         type: 'rect',
         id: 'box-iconCopy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','370px','36px','38px','auto','auto'],
         fill: ['rgba(235,235,235,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_double-height}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${_txt-footerCopy2}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '18px'],
            ["style", "top", '622px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
         ],
         "${_box-delayCopy2}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '68px'],
            ["style", "top", '413px'],
            ["style", "left", '8px'],
            ["style", "width", '288px']
         ],
         "${_box-iconCopy2}": [
            ["style", "top", '365px'],
            ["style", "height", '48px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '48px']
         ],
         "${_txt-titleCopy2}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '24px'],
            ["style", "top", '425px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_imageCopy4}": [
            ["style", "top", 'auto'],
            ["style", "overflow", 'visible'],
            ["style", "bottom", '9px'],
            ["style", "height", '474px'],
            ["color", "background-color", 'rgba(147,147,147,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '288px']
         ],
         "${symbolSelector}": [
            ["style", "height", '490px'],
            ["style", "width", '304px']
         ],
         "${_txt-bodyCopy2}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '119px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_txt-channelCopy2}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '14px'],
            ["style", "width", '276px'],
            ["style", "top", '425px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '0'],
            ["style", "font-size", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         timeline: [
            { id: "eid458", tween: [ "style", "${_txt-footerCopy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid443", tween: [ "style", "${_txt-titleCopy2}", "left", '13px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid431", tween: [ "color", "${_box-iconCopy2}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid472", tween: [ "style", "${_box-delayCopy2}", "width", '304px', { fromValue: '288px'}], position: 0, duration: 500 },
            { id: "eid456", tween: [ "style", "${_txt-footerCopy2}", "top", '622px', { fromValue: '622px'}], position: 0, duration: 0 },
            { id: "eid457", tween: [ "style", "${_txt-footerCopy2}", "top", '454px', { fromValue: '622px'}], position: 1500, duration: 500 },
            { id: "eid474", tween: [ "style", "${_imageCopy4}", "bottom", '0px', { fromValue: '9px'}], position: 0, duration: 500 },
            { id: "eid476", tween: [ "style", "${_imageCopy4}", "width", '304px', { fromValue: '288px'}], position: 0, duration: 500 },
            { id: "eid440", tween: [ "color", "${_txt-titleCopy2}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500 },
            { id: "eid461", tween: [ "style", "${_box-delayCopy2}", "top", '421px', { fromValue: '413px'}], position: 0, duration: 500 },
            { id: "eid462", tween: [ "style", "${_box-delayCopy2}", "top", '253px', { fromValue: '421px'}], position: 1500, duration: 500 },
            { id: "eid459", tween: [ "style", "${_txt-footerCopy2}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid428", tween: [ "style", "${_box-iconCopy2}", "top", '373px', { fromValue: '365px'}], position: 0, duration: 500 },
            { id: "eid429", tween: [ "style", "${_box-iconCopy2}", "top", '205px', { fromValue: '373px'}], position: 1500, duration: 500 },
            { id: "eid444", tween: [ "style", "${_txt-titleCopy2}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid475", tween: [ "style", "${_imageCopy4}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid435", tween: [ "style", "${_txt-channelCopy2}", "left", '14px', { fromValue: '14px'}], position: 2000, duration: 500 },
            { id: "eid436", tween: [ "style", "${_txt-channelCopy2}", "width", '278px', { fromValue: '276px'}], position: 2000, duration: 500 },
            { id: "eid433", tween: [ "style", "${_txt-channelCopy2}", "opacity", '0', { fromValue: '0'}], position: 1250, duration: 0 },
            { id: "eid434", tween: [ "style", "${_txt-channelCopy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid432", tween: [ "style", "${_txt-channelCopy2}", "top", '262px', { fromValue: '425px'}], position: 1500, duration: 500 },
            { id: "eid470", tween: [ "color", "${_box-delayCopy2}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid471", tween: [ "style", "${_box-delayCopy2}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid454", tween: [ "style", "${_txt-bodyCopy2}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid473", tween: [ "style", "${_imageCopy4}", "height", '490px', { fromValue: '474px'}], position: 0, duration: 500 },
            { id: "eid450", tween: [ "style", "${_txt-bodyCopy2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid451", tween: [ "style", "${_txt-bodyCopy2}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid452", tween: [ "style", "${_txt-bodyCopy2}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid453", tween: [ "style", "${_txt-bodyCopy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid445", tween: [ "style", "${_txt-bodyCopy2}", "top", '488px', { fromValue: '481px'}], position: 0, duration: 500 },
            { id: "eid446", tween: [ "style", "${_txt-bodyCopy2}", "top", '513px', { fromValue: '488px'}], position: 1500, duration: 7 },
            { id: "eid447", tween: [ "style", "${_txt-bodyCopy2}", "top", '346px', { fromValue: '513px'}], position: 1507, duration: 493 },
            { id: "eid448", tween: [ "style", "${_txt-bodyCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_txt-bodyCopy2}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid463", tween: [ "style", "${_box-delayCopy2}", "height", '69px', { fromValue: '68px'}], position: 0, duration: 500 },
            { id: "eid465", tween: [ "style", "${_box-delayCopy2}", "height", '69px', { fromValue: '69px'}], position: 1250, duration: 78 },
            { id: "eid466", tween: [ "style", "${_box-delayCopy2}", "height", '69px', { fromValue: '69px'}], position: 1328, duration: 85 },
            { id: "eid467", tween: [ "style", "${_box-delayCopy2}", "height", '69px', { fromValue: '69px'}], position: 1413, duration: 87 },
            { id: "eid468", tween: [ "style", "${_box-delayCopy2}", "height", '237px', { fromValue: '69px'}], position: 1500, duration: 500 },
            { id: "eid460", tween: [ "style", "${_txt-footerCopy2}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid455", tween: [ "style", "${_txt-bodyCopy2}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid437", tween: [ "style", "${_txt-titleCopy2}", "top", '431px', { fromValue: '425px'}], position: 0, duration: 500 },
            { id: "eid438", tween: [ "style", "${_txt-titleCopy2}", "top", '451px', { fromValue: '431px'}], position: 1500, duration: 7 },
            { id: "eid439", tween: [ "style", "${_txt-titleCopy2}", "top", '289px', { fromValue: '451px'}], position: 1507, duration: 493 },
            { id: "eid441", tween: [ "style", "${_txt-titleCopy2}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid442", tween: [ "style", "${_txt-titleCopy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid430", tween: [ "style", "${_box-iconCopy2}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 }         ]
      }
   }
},
"single_height": {
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
      rect: ['0px','0px','320px','245px','auto','auto'],
      c: [
      {
         type: 'rect',
         id: 'imageCopy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','auto','304px','474px','auto','-430px'],
         fill: ['rgba(147,147,147,1.00)']
      },
      {
         type: 'rect',
         id: 'box-delay',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','418px','323px','290px','auto','auto'],
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         transform: [],
         type: 'text',
         align: 'left',
         id: 'txt-footer',
         text: 'FIRST SHOWN: 14/05/13',
         rect: ['12px','627px','278px','21px','auto','auto'],
         font: ['Helvetica',18,'rgba(118,118,118,1.00)','500','none','normal']
      },
      {
         font: ['Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
         type: 'text',
         display: 'none',
         id: 'txt-body',
         text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
         align: 'left',
         rect: ['12px','508px','278px','119px','auto','auto']
      },
      {
         font: ['Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
         type: 'text',
         id: 'txt-title_1',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         rect: ['13px','453px','272px','55px','auto','auto']
      },
      {
         font: ['Helvetica, Arial',22,'rgba(233,47,131,1.00)','500','none','normal'],
         type: 'text',
         id: 'txt-Sub-title',
         text: 'Series 9, Episode 3',
         align: 'left',
         rect: ['13px','83px','241px','27px','auto','auto']
      },
      {
         font: ['Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
         type: 'text',
         id: 'txt-channel',
         text: 'BBC ONE<br>',
         align: 'left',
         rect: ['12px','426px','278px','27px','auto','auto']
      },
      {
         type: 'rect',
         id: 'box-icon',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','370px','36px','38px','auto','auto'],
         fill: ['rgba(235,235,235,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_txt-footer}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '18px'],
            ["style", "top", '272px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica'],
            ["style", "width", '276px'],
            ["style", "opacity", '0']
         ],
         "${_box-delay}": [
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "height", '229px'],
            ["style", "top", '161px'],
            ["style", "left", '8px'],
            ["style", "width", '304px']
         ],
         "${_single-height}": [
            ["style", "top", '8px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '229px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '320px']
         ],
         "${_txt-body}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "width", '276px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "height", '96px']
         ],
         "${symbolSelector}": [
            ["style", "height", '245px'],
            ["style", "width", '320px']
         ],
         "${_txt-Sub-title}": [
            ["style", "top", '254px'],
            ["color", "color", 'rgba(233,47,131,1.00)'],
            ["style", "height", '29px'],
            ["style", "opacity", '0'],
            ["style", "left", '13px'],
            ["style", "font-size", '22px']
         ],
         "${_box-icon}": [
            ["style", "top", '113px'],
            ["style", "height", '49px'],
            ["color", "background-color", 'rgba(27,27,27,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '48px']
         ],
         "${_imageCopy4}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '8px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '229px'],
            ["color", "background-color", 'rgba(147,147,147,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '304px']
         ],
         "${_txt-title_1}": [
            ["style", "line-height", '24px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(235,235,235,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '24px'],
            ["style", "top", '174px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_txt-channel}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '13px'],
            ["style", "width", '276px'],
            ["style", "top", '15px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "font-size", '18px'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid450", tween: [ "style", "${_txt-body}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid451", tween: [ "style", "${_txt-body}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid561", tween: [ "style", "${_txt-body}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid562", tween: [ "style", "${_txt-body}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid474", tween: [ "style", "${_imageCopy4}", "bottom", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid603", tween: [ "style", "${_single-height}", "top", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid448", tween: [ "style", "${_txt-body}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_txt-body}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid512", tween: [ "style", "${_box-icon}", "height", '49px', { fromValue: '49px'}], position: 0, duration: 0 },
            { id: "eid566", tween: [ "style", "${_txt-footer}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 253 },
            { id: "eid460", tween: [ "style", "${_txt-footer}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid454", tween: [ "style", "${_txt-body}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid532", tween: [ "style", "${_txt-body}", "left", '12px', { fromValue: '12px'}], position: 1500, duration: 0 },
            { id: "eid556", tween: [ "style", "${_txt-body}", "height", '96px', { fromValue: '96px'}], position: 1500, duration: 0 },
            { id: "eid565", tween: [ "style", "${_txt-Sub-title}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid596", tween: [ "style", "${_txt-Sub-title}", "top", '262px', { fromValue: '254px'}], position: 0, duration: 1500 },
            { id: "eid548", tween: [ "style", "${_txt-Sub-title}", "top", '83px', { fromValue: '262px'}], position: 1500, duration: 500 },
            { id: "eid459", tween: [ "style", "${_txt-footer}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid525", tween: [ "style", "${_txt-channel}", "left", '12px', { fromValue: '13px'}], position: 1500, duration: 500 },
            { id: "eid444", tween: [ "style", "${_txt-title_1}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid486", tween: [ "style", "${_imageCopy4}", "width", '320px', { fromValue: '304px'}], position: 0, duration: 500 },
            { id: "eid490", tween: [ "style", "${_txt-footer}", "top", '395px', { fromValue: '272px'}], position: 0, duration: 500 },
            { id: "eid457", tween: [ "style", "${_txt-footer}", "top", '216px', { fromValue: '395px'}], position: 1500, duration: 500 },
            { id: "eid443", tween: [ "style", "${_txt-title_1}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid505", tween: [ "style", "${_box-icon}", "top", '129px', { fromValue: '113px'}], position: 0, duration: 500 },
            { id: "eid429", tween: [ "style", "${_box-icon}", "top", '-49px', { fromValue: '129px'}], position: 1500, duration: 500 },
            { id: "eid511", tween: [ "style", "${_single-height}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 498 },
            { id: "eid489", tween: [ "style", "${_imageCopy4}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid463", tween: [ "style", "${_box-delay}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 500 },
            { id: "eid497", tween: [ "style", "${_box-delay}", "height", '245px', { fromValue: '245px'}], position: 1992, duration: 0 },
            { id: "eid501", tween: [ "style", "${_box-delay}", "top", '178px', { fromValue: '161px'}], position: 0, duration: 500 },
            { id: "eid502", tween: [ "style", "${_box-delay}", "top", '177px', { fromValue: '178px'}], position: 500, duration: 0 },
            { id: "eid462", tween: [ "style", "${_box-delay}", "top", '0px', { fromValue: '177px'}], position: 1494, duration: 498 },
            { id: "eid471", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid498", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '0px'}], position: 1494, duration: 498 },
            { id: "eid445", tween: [ "style", "${_txt-body}", "top", '112px', { fromValue: '481px'}], position: 0, duration: 500 },
            { id: "eid447", tween: [ "style", "${_txt-body}", "top", '112px', { fromValue: '291px'}], position: 1500, duration: 500 },
            { id: "eid455", tween: [ "style", "${_txt-body}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid487", tween: [ "style", "${_imageCopy4}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 500 },
            { id: "eid491", tween: [ "style", "${_txt-channel}", "top", '-102px', { fromValue: '15px'}], position: 0, duration: 500 },
            { id: "eid432", tween: [ "style", "${_txt-channel}", "top", '7px', { fromValue: '186px'}], position: 1500, duration: 500 },
            { id: "eid440", tween: [ "color", "${_txt-title_1}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500 },
            { id: "eid430", tween: [ "style", "${_box-icon}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid470", tween: [ "color", "${_box-delay}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid472", tween: [ "style", "${_box-delay}", "width", '320px', { fromValue: '304px'}], position: 0, duration: 500 },
            { id: "eid496", tween: [ "style", "${_box-delay}", "width", '320px', { fromValue: '320px'}], position: 1992, duration: 0 },
            { id: "eid434", tween: [ "style", "${_txt-channel}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid437", tween: [ "style", "${_txt-title_1}", "top", '189px', { fromValue: '174px'}], position: 0, duration: 500 },
            { id: "eid439", tween: [ "style", "${_txt-title_1}", "top", '34px', { fromValue: '213px'}], position: 1500, duration: 500 },
            { id: "eid431", tween: [ "color", "${_box-icon}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid559", tween: [ "style", "${_txt-title_1}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid560", tween: [ "style", "${_txt-title_1}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-35807246");
