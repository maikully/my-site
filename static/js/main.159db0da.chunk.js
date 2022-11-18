(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{19:function(e,a,t){e.exports=t(29)},24:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(14),i=t.n(o),l=(t(24),t(3)),s=t(4),c=t(6),m=t(5),u=t(11),p=(t(27),t(15)),d=t.n(p),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("header",{id:"home",style:{marginBottom:"50vh"}},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav",style:{marginLeft:"5vw"}},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement(d.a,null,r.a.createElement("h1",{className:"responsive-headline"},e),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},a)))))}}]),t}(n.Component),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e)),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f=t(18);var v=function(e){var a=r.a.useState(!1),t=Object(f.a)(a,2),n=t[0],o=t[1],i=r.a.useRef();return r.a.useEffect((function(){var e=new IntersectionObserver((function(a){a.forEach((function(a){a.isIntersecting&&(o(!0),e.unobserve(i.current))}))}));return e.observe(i.current),function(){return e.unobserve(i.current)}}),[]),r.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:i},e.children)},y=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"calculateAge",value:function(e){var a=Date.now()-e.getTime(),t=new Date(a);return Math.abs(t.getUTCFullYear()-1970)}},{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,a=(this.props.data.phone,this.props.data.email,this.props.data.resumedownload),t=this.calculateAge(new Date("March 16, 2001 00:00:00"))}return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row",style:{marginBottom:"50vh"}},r.a.createElement(v,null,r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:e,alt:"Michael Li"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h1",{style:{color:"white",marginBottom:50}},"About Me"),r.a.createElement("p",{style:{fontSize:"medium"}},"I'm a ",t,"-year-old software programmer and musician at Brown University studying computer science and music. Some of my programming and musical works are kept here."),r.a.createElement("p",null,r.a.createElement("a",{href:"opinions.html"},"Some opinions I have about music"),r.a.createElement("br",null)),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:"button"},r.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return r.a.createElement(v,null,r.a.createElement("div",{key:e.school,style:{marginBottom:"20vh"}},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"infotwo"},e.degree," ",r.a.createElement("span",{style:{marginLeft:5,marginRight:7}},"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",{className:"info"},e.description)))})),a=this.props.data.work.map((function(e){return r.a.createElement(v,null,r.a.createElement("div",{key:e.company,style:{marginBottom:"10vh"}},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"infotwo"},e.title,r.a.createElement("span",{style:{marginLeft:7,marginRight:7}},"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",{className:"info"},e.description)))})),t=this.props.data.mskills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return r.a.createElement("li",{key:e.name},r.a.createElement("span",{style:{width:200},className:a}),r.a.createElement("em",null,e.name))})),n=this.props.data.cskills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return r.a.createElement("li",{key:e.name},r.a.createElement("span",{style:{width:200},className:a}),r.a.createElement("em",null,e.name))}));return r.a.createElement("section",{id:"resume"},r.a.createElement(v,null,r.a.createElement("h1",null,"Education")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row item",style:{marginBottom:"50vh"}},r.a.createElement("div",{className:"twelve columns"},e))),r.a.createElement(v,null,r.a.createElement("h1",null,"Experience")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},a)),r.a.createElement(v,null,r.a.createElement("h1",{style:{marginTop:"60vh"}},"Skills")),r.a.createElement("div",{className:"row skill",style:{marginBottom:"50vh"}},r.a.createElement(v,null,r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"bars"},r.a.createElement("div",{class:"column",style:{padding:0}},r.a.createElement("ul",{className:"skills"},n))),r.a.createElement("div",{className:"bars"},r.a.createElement("div",{class:"column",style:{padding:0}},r.a.createElement("ul",{className:"skills"},t)))))))}}]),t}(n.Component),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.csProjects.map((function(e){var a="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement(v,null,r.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{alt:e.title,className:"portfolioimg",src:a}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",{style:{marginBottom:"1vh"}},e.title),r.a.createElement("p",{className:"info"},e.category))))))})),a=this.props.data.musicProjects.map((function(e){var a="images/portfolio/"+e.image;return r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement(v,null,r.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{alt:e.title,className:"portfolioimg",src:a}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",{style:{marginBottom:"1vh"}},e.title),r.a.createElement("p",{className:"info"},e.category))))))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},r.a.createElement(v,null,r.a.createElement("h1",null,"CS Projects")),e)),r.a.createElement("div",{className:"row",style:{marginBottom:"20vh"}},r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},r.a.createElement(v,null,r.a.createElement("h1",{style:{marginTop:"10vh"}}," Music Projects ")),a)))}}]),t}(n.Component),w=t(8),N=t(17),k=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).setGA=function(){console.log("asdas"),u.a.initialize("G-FZQGHMXF1K"),u.a.pageview(window.location.pathname)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setGA()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N.a,{color:"#04d9ff",num:10,type:"cobweb",bg:!0}),r.a.createElement(g,{data:w.main}),r.a.createElement(y,{data:w.main}),r.a.createElement(E,{data:w.resume}),r.a.createElement(b,{data:w.portfolio}),r.a.createElement(h,{data:w.main}))}}]),t}(n.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");j?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):A(e)}))}}()},8:function(e){e.exports=JSON.parse('{"main":{"name":"Michael Li","image":"profilepic.jpg","bio":"I\'m a ","email":"michael_s_li@brown.edu","phone":"908-902-6082","address":{"street":"(Your Street)","city":"(Your City)","state":"(Your State)","zip":"(Your Zip/Postal Code)"},"website":"","resumedownload":"portfolio/Li_Michael_Resume.pdf","social":[{"name":"linkedin","url":"https://www.linkedin.com/in/michael-li-14a4908b/","className":"fa fa-linkedin"},{"name":"github","url":"http://github.com/maikully","className":"fa fa-github"}]},"resume":{"education":[{"school":"Brown University","degree":"Sc.B. Computer Science and Music","graduated":"May 2023","description":"Studying music theory and composition and computer programming."},{"school":"High Technology High School","degree":"High School Diploma","graduated":"June 2019","description":"STEM-based magnet high school in Lincroft, New Jersey."}],"work":[{"company":"Capital One","title":"Software Engineer Intern (TIP)","years":"Jun - Aug 2022","description":"Led a full-stack intern project to develop an internal tool to assist in generating configuration files/pre-set file structures and reading and writing from databases. Used React and Flask with Python to develop the application, which uses questionnaires to programmatically generate/use configuration data."},{"company":"Merck","title":"Machine Learning Intern","years":"Jun - Aug 2021","description":"Used Camelot library to write a Python OCR script that parses data from English and Chinese PDFs into organized Excel spreadsheets. Researched and tested various PDF table extraction tools (Camelot, pdfplumber, Azure Form Recognizer) in virtual Python environment."},{"company":"Brown University IT Service Center","title":"Student Manager","years":"Feb 2021 - present","description":"Answers IT help tickets and chats as a member of the ITSC at Brown University. Troubleshoots technology used around campus and provides technical support to both staff and students. Manages shifts and logistics for other technical assistants."},{"company":"Abacus Counselling","title":"Website Designer","years":"Aug 2020","description":"Created website for Abacus Counselling, a consultation service for student in Sri Lanka applying to American universities."},{"company":"re:Bloom","title":"Website Designer","years":"Jun 2020","description":"Contributed to creating a website for re:Bloom in React."},{"company":"New Jersey Performing Arts Center","title":"Research Intern","years":"Feb - May 2019","description":"Intern at NJPAC, doing data entry and analysis of past and potential donors."},{"company":"QuantHouse","title":"Computer Networking Intern","years":"May - Aug 2018","description":"Paid summer internship at a data center, helping to inventory and migrate over one hundred server machines."}],"cskills":[{"name":"Java"},{"name":"Python"},{"name":"C"},{"name":"HTML"},{"name":"CSS"},{"name":"JS"},{"name":"React"},{"name":"Jenkins"},{"name":"Docker"},{"name":"Machine Learning"},{"name":"Deep Learning"},{"name":"AWS"},{"name":"SQL"},{"name":"x86-64 Assembly"},{"name":"LaTeX/LilyPond"}],"mskills":[{"name":"Music Theory"},{"name":"Violin"},{"name":"Guitar"},{"name":"Conducting"},{"name":"Reaper"},{"name":"Ableton Live"},{"name":"Adobe Photoshop"},{"name":"Adobe Premiere Pro"},{"name":"Adobe Audition"}]},"portfolio":{"csProjects":[{"title":"ChordConstructor","category":"A program that, given a key and roman numeral selected by the user, displays and sounds the chord on a treble clef staff.","url":"https://github.com/maikully/chord-constructor","image":"chord.jpg"},{"title":"Spothouse","category":"A webapp that allows a group of people to share and vote on a Spotify queue.","url":"https://spothouse-app.herokuapp.com/","image":"logo.png"},{"title":"JPEG Deblocker","category":"A convolutional neural network designed to remove blocking artifacts from JPEG images.","url":"https://github.com/OrenKohavi/DeepLearning-FinalProject/","image":"deblock.png"},{"title":"LOL Outcome Predictor","category":"A deep learning model that can predict the outcome of a League of Legends game based on the characters the players choose. ","url":"https://github.com/maikully/LOLOutcomePredictor","image":"lolop.png"},{"title":"Tablator","category":"A webapp that uses a DP algorithm to find the three best guitar fingering paths for a input sequence of notes or midi file, and displays their tabs.","url":"https://tablator.herokuapp.com","image":"tablator.png"}],"musicProjects":[{"title":"Pop Song","category":"A short \\"pop song\\" written for my intro music theory class (NB: many of the chord symbols are outdated)","url":"portfolio/pop_song.pdf","image":"popsong.jpg"},{"title":"Sonata Exposition","category":"A piano sonata exposition written for my intro music theory class","url":"portfolio/sonata.pdf","image":"sonata.jpg"},{"title":"Tanabata Song","category":"An SATB arrangement of the Japanese folk song \\"Tanabata\\"","url":"portfolio/Tanabata.mp3","image":"tanabata.jpg"},{"title":"In a Sentimental Mood","category":"An arrangement of the jazz standard \\"In a Sentimental Mood\\" for melodica and strings of varyingly low octaves","url":"portfolio/sentimental.mp3","image":"sentimental.jpg"},{"title":"Rainbow Funtime","category":"My first project for my intro to composition class, a short two-movement piece for solo flute","url":"portfolio/RainbowFuntime.pdf","image":"RainbowFuntime.jpg"},{"title":"Crossing the Bar","category":"My second project for my intro to composition class, a song for soparano and piano set to text by Alfred, Lord Tennyson","url":"portfolio/CrossingTheBar.mp3","image":"CrossingTheBar.jpg"},{"title":"Wormwood","category":"My final project for my intro to production class, a slowcore/shoegaze song","url":"portfolio/wormwood.mp3","image":"Wormwood.jpg"},{"title":"midterm","category":"Midterm project for my recording and sound design class, a post-punk/shoegaze song. Used midi synths and recorded guitar and bass.","url":"portfolio/midterm.wav","image":"midterm.jpg"},{"title":"it\'s coming","category":"My final project for my recording and sound design class, a sort-of atonal rock song. Used midi guitar + recorded guitar and bass","url":"portfolio/it\'s coming.wav","image":"its_coming.jpg"},{"title":"Rainbow Funtime 2","category":"The latest development in the rainbow funtime saga","url":"portfolio/Rainbow Funtime 2.wav","image":"rainbowfuntime2.png"},{"title":"random house","category":"A go at house music, made in Logic","url":"portfolio/random_house.wav","image":"random_house.png"}]}}')}},[[19,1,2]]]);
//# sourceMappingURL=main.159db0da.chunk.js.map