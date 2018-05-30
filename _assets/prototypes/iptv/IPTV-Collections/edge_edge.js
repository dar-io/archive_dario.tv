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
            id:'double_height',
            type:'rect',
            rect:['198','25','auto','auto','auto','auto']
         },
         {
            id:'double_heightCopy',
            type:'rect',
            rect:['198','25','auto','auto','auto','auto']
         },
         {
            id:'single_height',
            type:'rect',
            rect:['383px','350px','auto','auto','auto','auto']
         },
         {
            id:'single_heightCopy4',
            type:'rect',
            rect:['383px','350px','auto','auto','auto','auto']
         },
         {
            id:'single_heightCopy',
            type:'rect',
            rect:['383px','105px','auto','auto','auto','auto']
         },
         {
            id:'single_heightCopy3',
            type:'rect',
            rect:['383px','105px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'double_height',
            symbolName:'double_height'
         },
         {
            id:'single_heightCopy',
            symbolName:'single_height'
         },
         {
            id:'single_height',
            symbolName:'single_height'
         },
         {
            id:'single_heightCopy4',
            symbolName:'single_height'
         },
         {
            id:'single_heightCopy3',
            symbolName:'single_height'
         },
         {
            id:'double_heightCopy',
            symbolName:'double_height'
         }
         ]
      },
   states: {
      "Base State": {
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
         "${_single_heightCopy3}": [
            ["style", "left", '1007px'],
            ["style", "top", '105px']
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
         "${_double_height}": [
            ["style", "left", '79px'],
            ["style", "top", '105px']
         ],
         "${_single_heightCopy4}": [
            ["style", "left", '1007px'],
            ["style", "top", '350px']
         ],
         "${_double_heightCopy}": [
            ["style", "left", '703px'],
            ["style", "top", '105px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1280px'],
            ["style", "height", '720px'],
            ["style", "overflow", 'hidden']
         ],
         "${_single_heightCopy}": [
            ["style", "left", '383px'],
            ["style", "top", '105px']
         ],
         "${_single_height}": [
            ["style", "left", '383px'],
            ["style", "top", '350px']
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
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid626", tween: [ "style", "${_single_heightCopy4}", "left", '1007px', { fromValue: '1007px'}], position: 0, duration: 0 },
            { id: "eid625", tween: [ "style", "${_single_heightCopy3}", "left", '1007px', { fromValue: '1007px'}], position: 0, duration: 0 },
            { id: "eid624", tween: [ "style", "${_double_heightCopy}", "left", '703px', { fromValue: '703px'}], position: 0, duration: 0 }         ]
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
      type: 'rect',
      id: 'image',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','auto','304px','474px','auto','170px'],
      fill: ['rgba(147,147,147,1.00)']
   },
   {
      type: 'rect',
      id: 'box-delay',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','48px','323px','290px','auto','auto'],
      fill: ['rgba(235,235,235,1.00)']
   },
   {
      transform: [],
      type: 'text',
      align: 'left',
      id: 'txt-footer',
      text: '6 PROGRAMMES',
      rect: ['12px','257px','278px','21px','auto','auto'],
      font: ['Helvetica',18,'rgba(118,118,118,1.00)','500','none','normal']
   },
   {
      font: ['Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
      type: 'text',
      display: 'none',
      id: 'txt-body',
      text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
      align: 'left',
      rect: ['12px','138px','278px','119px','auto','auto']
   },
   {
      font: ['Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
      type: 'text',
      id: 'txt-title',
      text: 'Collection Title Long Wrap 2 Lines<br>',
      align: 'left',
      rect: ['13px','83px','272px','55px','auto','auto']
   },
   {
      font: ['Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
      type: 'text',
      id: 'txt-channel',
      text: 'BBC ONE<br>',
      align: 'left',
      rect: ['12px','56px','278px','27px','auto','auto']
   },
   {
      type: 'rect',
      id: 'box-icon',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','36px','38px','auto','auto'],
      fill: ['rgba(235,235,235,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
         "${_image}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '174px'],
            ["style", "overflow", 'visible'],
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
            ["style", "display", 'none'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "height", '119px']
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
            { id: "eid116", tween: [ "color", "${_box-delay}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid108", tween: [ "style", "${_txt-body}", "top", '118px', { fromValue: '111px'}], position: 0, duration: 500 },
            { id: "eid243", tween: [ "style", "${_txt-body}", "top", '143px', { fromValue: '118px'}], position: 1500, duration: 7 },
            { id: "eid274", tween: [ "style", "${_txt-body}", "top", '-24px', { fromValue: '143px'}], position: 1507, duration: 493 },
            { id: "eid305", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '68px'}], position: 0, duration: 500 },
            { id: "eid306", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '69px'}], position: 500, duration: 750 },
            { id: "eid307", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '69px'}], position: 1250, duration: 78 },
            { id: "eid314", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '69px'}], position: 1328, duration: 85 },
            { id: "eid313", tween: [ "style", "${_box-delay}", "height", '69px', { fromValue: '69px'}], position: 1413, duration: 87 },
            { id: "eid304", tween: [ "style", "${_box-delay}", "height", '237px', { fromValue: '69px'}], position: 1500, duration: 500 },
            { id: "eid310", tween: [ "style", "${_box-delay}", "height", '237px', { fromValue: '237px'}], position: 2000, duration: 8 },
            { id: "eid105", tween: [ "style", "${_txt-title}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid248", tween: [ "style", "${_txt-channel}", "opacity", '0', { fromValue: '0'}], position: 1250, duration: 0 },
            { id: "eid268", tween: [ "style", "${_txt-channel}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid103", tween: [ "color", "${_txt-title}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500 },
            { id: "eid189", tween: [ "style", "${_txt-body}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid275", tween: [ "style", "${_txt-body}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_box-icon}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid272", tween: [ "style", "${_txt-title}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid267", tween: [ "style", "${_txt-title}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid159", tween: [ "style", "${_image}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid266", tween: [ "style", "${_txt-footer}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid107", tween: [ "style", "${_txt-footer}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid206", tween: [ "style", "${_image}", "height", '490px', { fromValue: '474px'}], position: 0, duration: 500 },
            { id: "eid109", tween: [ "style", "${_txt-body}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid218", tween: [ "style", "${_txt-title}", "top", '61px', { fromValue: '55px'}], position: 0, duration: 500 },
            { id: "eid244", tween: [ "style", "${_txt-title}", "top", '81px', { fromValue: '61px'}], position: 1500, duration: 7 },
            { id: "eid273", tween: [ "style", "${_txt-title}", "top", '-81px', { fromValue: '81px'}], position: 1507, duration: 493 },
            { id: "eid194", tween: [ "style", "${_image}", "bottom", '165px', { fromValue: '174px'}], position: 0, duration: 500 },
            { id: "eid215", tween: [ "style", "${_txt-channel}", "top", '-108px', { fromValue: '55px'}], position: 1500, duration: 500 },
            { id: "eid104", tween: [ "style", "${_txt-title}", "left", '13px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid117", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid236", tween: [ "style", "${_box-delay}", "top", '51px', { fromValue: '43px'}], position: 0, duration: 500 },
            { id: "eid245", tween: [ "style", "${_box-delay}", "top", '-117px', { fromValue: '51px'}], position: 1500, duration: 500 },
            { id: "eid106", tween: [ "style", "${_txt-footer}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid112", tween: [ "style", "${_txt-channel}", "left", '14px', { fromValue: '14px'}], position: 2000, duration: 500 },
            { id: "eid110", tween: [ "style", "${_txt-body}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid115", tween: [ "color", "${_box-icon}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid113", tween: [ "style", "${_txt-channel}", "width", '278px', { fromValue: '276px'}], position: 2000, duration: 500 }         ]
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
         rect: ['0px','auto','304px','474px','auto','-430px'],
         id: 'imageCopy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(147,147,147,1.00)']
      },
      {
         rect: ['0px','418px','323px','290px','auto','auto'],
         id: 'box-delayCopy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         rect: ['12px','627px','278px','21px','auto','auto'],
         transform: [],
         font: ['Helvetica',18,'rgba(118,118,118,1.00)','500','none','normal'],
         id: 'txt-footerCopy2',
         text: '6 PROGRAMMES',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['12px','508px','278px','119px','auto','auto'],
         font: ['Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
         align: 'left',
         id: 'txt-bodyCopy2',
         text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
         display: 'none',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
         id: 'txt-titleCopy2',
         text: 'Collection Title Long Wrap 2 Lines<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['12px','426px','278px','27px','auto','auto'],
         font: ['Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
         id: 'txt-channelCopy2',
         text: 'BBC ONE<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','370px','36px','38px','auto','auto'],
         id: 'box-iconCopy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
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
         "${_txt-channelCopy2}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '14px'],
            ["style", "width", '276px'],
            ["style", "top", '425px'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "font-size", '18px'],
            ["style", "opacity", '0']
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
         "${_txt-footerCopy2}": [
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '20px'],
            ["style", "font-size", '18px'],
            ["style", "top", '622px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica'],
            ["style", "width", '276px'],
            ["style", "opacity", '0']
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
            ["style", "width", '276px'],
            ["style", "opacity", '1']
         ],
         "${_txt-bodyCopy2}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "width", '276px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '119px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '490px'],
            ["style", "width", '304px']
         ],
         "${_imageCopy4}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '9px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '474px'],
            ["color", "background-color", 'rgba(147,147,147,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '288px']
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
            { id: "eid430", tween: [ "style", "${_box-iconCopy2}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid474", tween: [ "style", "${_imageCopy4}", "bottom", '0px', { fromValue: '9px'}], position: 0, duration: 500 },
            { id: "eid441", tween: [ "style", "${_txt-titleCopy2}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid442", tween: [ "style", "${_txt-titleCopy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid440", tween: [ "color", "${_txt-titleCopy2}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500 },
            { id: "eid437", tween: [ "style", "${_txt-titleCopy2}", "top", '431px', { fromValue: '425px'}], position: 0, duration: 500 },
            { id: "eid438", tween: [ "style", "${_txt-titleCopy2}", "top", '451px', { fromValue: '431px'}], position: 1500, duration: 7 },
            { id: "eid439", tween: [ "style", "${_txt-titleCopy2}", "top", '289px', { fromValue: '451px'}], position: 1507, duration: 493 },
            { id: "eid459", tween: [ "style", "${_txt-footerCopy2}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid428", tween: [ "style", "${_box-iconCopy2}", "top", '373px', { fromValue: '365px'}], position: 0, duration: 500 },
            { id: "eid429", tween: [ "style", "${_box-iconCopy2}", "top", '205px', { fromValue: '373px'}], position: 1500, duration: 500 },
            { id: "eid444", tween: [ "style", "${_txt-titleCopy2}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid475", tween: [ "style", "${_imageCopy4}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid455", tween: [ "style", "${_txt-bodyCopy2}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
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
            { id: "eid435", tween: [ "style", "${_txt-channelCopy2}", "left", '14px', { fromValue: '14px'}], position: 2000, duration: 500 },
            { id: "eid461", tween: [ "style", "${_box-delayCopy2}", "top", '421px', { fromValue: '413px'}], position: 0, duration: 500 },
            { id: "eid462", tween: [ "style", "${_box-delayCopy2}", "top", '253px', { fromValue: '421px'}], position: 1500, duration: 500 },
            { id: "eid476", tween: [ "style", "${_imageCopy4}", "width", '304px', { fromValue: '288px'}], position: 0, duration: 500 },
            { id: "eid456", tween: [ "style", "${_txt-footerCopy2}", "top", '622px', { fromValue: '622px'}], position: 0, duration: 0 },
            { id: "eid457", tween: [ "style", "${_txt-footerCopy2}", "top", '454px', { fromValue: '622px'}], position: 1500, duration: 500 }         ]
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
      rect: ['0px','0px','320px','245px','auto','auto'],
      id: 'single-height',
      cursor: ['pointer'],
      type: 'group',
      c: [
      {
         rect: ['0px','auto','304px','474px','auto','-430px'],
         id: 'imageCopy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(147,147,147,1.00)']
      },
      {
         rect: ['0px','418px','323px','290px','auto','auto'],
         id: 'box-delay',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(235,235,235,1.00)']
      },
      {
         rect: ['12px','627px','278px','21px','auto','auto'],
         transform: [],
         font: ['Helvetica',18,'rgba(118,118,118,1.00)','500','none','normal'],
         id: 'txt-footer',
         text: 'FIRST SHOWN: 14/05/13',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['12px','508px','278px','119px','auto','auto'],
         font: ['Helvetica, Arial',22,'rgba(86,86,86,1.00)','300','none','normal'],
         align: 'left',
         id: 'txt-body',
         text: 'Dara O Briain meets the candidate who lost the task to create flat pack furniture.',
         display: 'none',
         type: 'text'
      },
      {
         rect: ['13px','453px','272px','55px','auto','auto'],
         font: ['Helvetica, Arial',24,'rgba(17,17,17,1.00)','500','none','normal'],
         id: 'txt-title_1',
         text: 'The Apprentice: You\'re Fired',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['13px','83px','241px','27px','auto','auto'],
         font: ['Helvetica, Arial',22,'rgba(233,47,131,1.00)','500','none','normal'],
         id: 'txt-Sub-title',
         text: 'Series 9, Episode 3',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['12px','426px','278px','27px','auto','auto'],
         font: ['Helvetica, Arial',18,'rgba(0,0,0,1)','700','none','normal'],
         id: 'txt-channel',
         text: 'BBC ONE<br>',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['0px','370px','36px','38px','auto','auto'],
         id: 'box-icon',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
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
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Helvetica'],
            ["style", "width", '276px'],
            ["transform", "scaleX", '1']
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
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "width", '320px']
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
            ["style", "opacity", '1'],
            ["style", "width", '276px']
         ],
         "${_txt-body}": [
            ["style", "line-height", '23px'],
            ["color", "color", 'rgba(86,86,86,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '20px'],
            ["style", "font-size", '22px'],
            ["style", "top", '481px'],
            ["style", "display", 'none'],
            ["style", "overflow", 'visible'],
            ["style", "height", '96px'],
            ["style", "font-family", 'Helvetica, Arial'],
            ["style", "opacity", '1'],
            ["style", "width", '276px']
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
         "${symbolSelector}": [
            ["style", "height", '245px'],
            ["style", "width", '320px']
         ],
         "${_imageCopy4}": [
            ["style", "top", 'auto'],
            ["style", "overflow", 'visible'],
            ["style", "bottom", '8px'],
            ["style", "height", '229px'],
            ["color", "background-color", 'rgba(147,147,147,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '304px']
         ],
         "${_txt-channel}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '13px'],
            ["style", "width", '276px'],
            ["style", "top", '15px'],
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
            { id: "eid565", tween: [ "style", "${_txt-Sub-title}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid596", tween: [ "style", "${_txt-Sub-title}", "top", '262px', { fromValue: '254px'}], position: 0, duration: 1500 },
            { id: "eid548", tween: [ "style", "${_txt-Sub-title}", "top", '83px', { fromValue: '262px'}], position: 1500, duration: 500 },
            { id: "eid459", tween: [ "style", "${_txt-footer}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid525", tween: [ "style", "${_txt-channel}", "left", '12px', { fromValue: '13px'}], position: 1500, duration: 500 },
            { id: "eid444", tween: [ "style", "${_txt-title_1}", "width", '272px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid486", tween: [ "style", "${_imageCopy4}", "width", '320px', { fromValue: '304px'}], position: 0, duration: 500 },
            { id: "eid490", tween: [ "style", "${_txt-footer}", "top", '395px', { fromValue: '272px'}], position: 0, duration: 500 },
            { id: "eid457", tween: [ "style", "${_txt-footer}", "top", '216px', { fromValue: '395px'}], position: 1500, duration: 500 },
            { id: "eid472", tween: [ "style", "${_box-delay}", "width", '320px', { fromValue: '304px'}], position: 0, duration: 500 },
            { id: "eid496", tween: [ "style", "${_box-delay}", "width", '320px', { fromValue: '320px'}], position: 1992, duration: 0 },
            { id: "eid505", tween: [ "style", "${_box-icon}", "top", '129px', { fromValue: '113px'}], position: 0, duration: 500 },
            { id: "eid429", tween: [ "style", "${_box-icon}", "top", '-49px', { fromValue: '129px'}], position: 1500, duration: 500 },
            { id: "eid443", tween: [ "style", "${_txt-title_1}", "left", '12px', { fromValue: '20px'}], position: 0, duration: 500 },
            { id: "eid511", tween: [ "style", "${_single-height}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 498 },
            { id: "eid489", tween: [ "style", "${_imageCopy4}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid559", tween: [ "style", "${_txt-title_1}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250 },
            { id: "eid560", tween: [ "style", "${_txt-title_1}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid437", tween: [ "style", "${_txt-title_1}", "top", '189px', { fromValue: '174px'}], position: 0, duration: 500 },
            { id: "eid439", tween: [ "style", "${_txt-title_1}", "top", '34px', { fromValue: '213px'}], position: 1500, duration: 500 },
            { id: "eid501", tween: [ "style", "${_box-delay}", "top", '178px', { fromValue: '161px'}], position: 0, duration: 500 },
            { id: "eid502", tween: [ "style", "${_box-delay}", "top", '177px', { fromValue: '178px'}], position: 500, duration: 0 },
            { id: "eid462", tween: [ "style", "${_box-delay}", "top", '0px', { fromValue: '177px'}], position: 1494, duration: 498 },
            { id: "eid491", tween: [ "style", "${_txt-channel}", "top", '-102px', { fromValue: '15px'}], position: 0, duration: 500 },
            { id: "eid432", tween: [ "style", "${_txt-channel}", "top", '7px', { fromValue: '186px'}], position: 1500, duration: 500 },
            { id: "eid430", tween: [ "style", "${_box-icon}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid431", tween: [ "color", "${_box-icon}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid487", tween: [ "style", "${_imageCopy4}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 500 },
            { id: "eid470", tween: [ "color", "${_box-delay}", "background-color", 'rgba(235,235,235,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(27,27,27,1.00)'}], position: 0, duration: 500 },
            { id: "eid440", tween: [ "color", "${_txt-title_1}", "color", 'rgba(17,17,17,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,235,235,1.00)'}], position: 0, duration: 500 },
            { id: "eid463", tween: [ "style", "${_box-delay}", "height", '245px', { fromValue: '229px'}], position: 0, duration: 500 },
            { id: "eid497", tween: [ "style", "${_box-delay}", "height", '245px', { fromValue: '245px'}], position: 1992, duration: 0 },
            { id: "eid556", tween: [ "style", "${_txt-body}", "height", '96px', { fromValue: '96px'}], position: 1500, duration: 0 },
            { id: "eid434", tween: [ "style", "${_txt-channel}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
            { id: "eid455", tween: [ "style", "${_txt-body}", "width", '278px', { fromValue: '276px'}], position: 0, duration: 500 },
            { id: "eid445", tween: [ "style", "${_txt-body}", "top", '112px', { fromValue: '481px'}], position: 0, duration: 500 },
            { id: "eid447", tween: [ "style", "${_txt-body}", "top", '112px', { fromValue: '291px'}], position: 1500, duration: 500 },
            { id: "eid471", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '8px'}], position: 0, duration: 500 },
            { id: "eid498", tween: [ "style", "${_box-delay}", "left", '0px', { fromValue: '0px'}], position: 1494, duration: 498 }         ]
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
