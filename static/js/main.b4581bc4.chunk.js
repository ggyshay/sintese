(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/github-icon.07883e93.svg"},,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/lpf-icon.9ec7ebd9.svg"},function(e,t,a){e.exports=a.p+"static/media/bpf-icon.75fadac9.svg"},function(e,t,a){e.exports=a.p+"static/media/hpf-icon.3ec4a3ee.svg"},function(e,t,a){e.exports=a.p+"static/media/roomWaves.1f98608b.gif"},function(e,t,a){e.exports=a.p+"static/media/wave.9f854e61.gif"},function(e,t,a){e.exports=a.p+"static/media/timbres.ad5e64e3.png"},function(e,t,a){e.exports=a.p+"static/media/fm.1c7e9c61.gif"},function(e,t,a){e.exports=a.p+"static/media/fm-schema.f33d2d41.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(12),r=a.n(s),i=(a(22),a(1)),l=a(2),c=a(4),p=a(3),u=a(5),m=a(16),d=(a(24),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e)))._element=void 0,a.handleChange=function(e){var t=100-100*e/a.height,n=Math.min(100,Math.max(t,0));a.props.onChange&&a.props.onChange(n)},a.scaleValue=function(e){return e*a.height/100},a.handleMouseDown=function(e){return e.preventDefault(),a.handleChange(e.clientY-a.corner),addEventListener("mousemove",a.handleMouseMove),addEventListener("mouseup",function(){removeEventListener("mousemove",a.handleMouseMove),a.handleMouseUp()}),!1},a.handleMouseMove=function(e){a.handleChange(e.clientY-a.corner)},a.handleMouseUp=function(){console.log("mouse up")},a.state={x:null,y:null},a._element=n.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"slider-container",onMouseDown:this.handleMouseDown,style:{height:"100%",width:this.props.width,flex:1},ref:this._element},n.createElement("div",{className:"value-display",style:{height:this.scaleValue(this.props.value),width:this.props.width,backgroundColor:this.props.color||"white"}}))}},{key:"corner",get:function(){return this._element.current&&this._element.current.getBoundingClientRect().top}},{key:"height",get:function(){return this._element.current&&this._element.current.getBoundingClientRect().height}}]),t}(n.Component)),h=a(6),g=a(13),f=a.n(g),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).node=null,a.createPath=function(){var e=a.node.getBoundingClientRect().width,t=a.node.getBoundingClientRect().height,n=h.d().domain([a.props.min||h.c(a.props.data,function(e){return e.y}),a.props.max||h.b(a.props.data,function(e){return e.y})]).range([t-10,10]),o=h.c(a.props.data,function(e){return e.x||.01}),s=h.b(a.props.data,function(e){return e.x}),r=a.props.logarithmic?h.e().domain([o,s]).range([0,e]).base(Math.E):h.d().domain([h.c(a.props.data,function(e){return e.x}),h.b(a.props.data,function(e){return e.x})]).range([0,e]),i=h.a().x(function(e){return r(e.x||.001)}).y(function(e){return n(e.y)})(a.props.data);f.a.isEqual(a.state.pathData,i)||(h.f("#waveform".concat(a.props.id)).attr("d",i).attr("fill","none").attr("stroke",a.props.color||"#da0027"),a.setState({pathData:i}))},a.handleRef=function(e){return a.node=e},a.state={pathData:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.createPath()}},{key:"componentDidMount",value:function(){this.createPath()}},{key:"render",value:function(){var e="middle"===this.props.hasAxis?"50%":"100%";return o.a.createElement("svg",{className:"display",style:{height:"100%",width:"100%"},ref:this.handleRef},this.props.hasAxis&&o.a.createElement("line",{x1:"0",y1:e,x2:"100%",y2:e,style:{stroke:"#FFF",strokeWidth:1},"stroke-dasharray":"5,5"}),o.a.createElement("path",{id:"waveform"+this.props.id}))}}]),t}(o.a.Component),y=a(14),x=(a(30),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"play-button ".concat(this.props.playing&&"paused"),onClick:this.props.onClick})}}]),t}(o.a.PureComponent)),b="#0084A1",E="#FF6F61",N="white",C="#252525",w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleSliderChange=function(e,t){var n=a.state.values;n[t]=e,a.handleChange(n),a.setState({values:n})},a.handleChange=function(e){var t=[0].concat(Object(m.a)(e.map(function(e){return e/100})));t.splice(t.length-1,1);for(var n=t.length;n<2048;n++)t.push(0);for(var o=[],s=new Float32Array(t.length),r=new Float32Array(t.length),i=0;i<t.length;i++)o.push([0,-t[i]]),r[i]=0,s[i]=-t[i];var l=Object(y.ifft)(o),c=[];l.forEach(function(e,t){return c[t]={x:t,y:e[0]}}),a.props.onWaveformChange(r,s),c=c.sort(function(e,t){return e.x-t.x}),a.setState({transform:c})},a.handlePlayClick=function(){a.state.isPlaying?(a.props.onStop(),a.setState({isPlaying:!1})):(a.props.onStart(),a.setState({isPlaying:!0}))},a.state={values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],transform:[],isPlaying:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"interaction-container"},o.a.createElement("h1",{className:"interaction-text"},"Aditiva"),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"80%"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},o.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",flex:1}},this.state.values.map(function(t,a){return o.a.createElement(d,{onChange:function(t){return e.handleSliderChange(t,a)},value:t,width:15,color:E})})),o.a.createElement("div",{style:{width:10,height:20}}),o.a.createElement(x,{playing:this.state.isPlaying,onClick:this.handlePlayClick})),o.a.createElement("div",{style:{width:380,height:380,marginLeft:20}},o.a.createElement(v,{data:this.state.transform,id:"chirros",color:b,hasAxis:"middle"}))))}}]),t}(o.a.Component),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).ctx=void 0,a.osc=void 0,a.env=void 0,a.interval=void 0,a.handleWaveformChange=function(e,t){var n=a.ctx.createPeriodicWave(e,t);a.osc.setPeriodicWave(n)},a.handleStart=function(){"running"!==a.ctx.state&&a.ctx.resume(),a.playSequence(),a.interval=setInterval(function(){a.playSequence()},4e3)},a.handleStop=function(){clearInterval(a.interval)},a.playNote=function(e,t){a.osc.frequency.setValueAtTime(t,e),a.env.gain.linearRampToValueAtTime(1,e+.01),a.env.gain.exponentialRampToValueAtTime(.01,e+.23),a.env.gain.linearRampToValueAtTime(0,e+.24)},a.playSequence=function(){var e=a.ctx.currentTime;a.playNote(e,440),a.playNote(e+.25,440),a.playNote(e+.5,523),a.playNote(e+.75,440),a.playNote(e+1,440),a.playNote(e+1.25,630),a.playNote(e+1.5,391),a.playNote(e+2,880),a.playNote(e+2.25,880),a.playNote(e+2.5,1046),a.playNote(e+2.75,880),a.playNote(e+3,880),a.playNote(e+3.25,1260),a.playNote(e+3.5,782)},a.ctx=e.ctx,a.osc=new OscillatorNode(a.ctx),a.env=new GainNode(a.ctx),a.env.gain.value=0,a.osc.connect(a.env),a.env.connect(a.ctx.destination),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.osc.start()}},{key:"render",value:function(){return o.a.createElement(w,{onWaveformChange:this.handleWaveformChange,onStart:this.handleStart,onStop:this.handleStop})}}]),t}(o.a.Component),k="S\xedntese Musical",S={title:"F\xedsica do som",paragraphs:["Para entender como a s\xedntese funciona \xe9 muito importante entender como o som funciona. O som primeiro sai do emissor, como caixas, viol\xf5es ou bocas das pessoas, viaja pelo ar em ondas sonoras at\xe9 chegar em um receptor, como a sua orelha ou um microfone.","Enquanto viaja no ar, o som se comporta como uma onda, mas o que isso quer dizer? Bem existem diversas ondas diferentes: As mec\xe2nicas (como o som, as ondas do mar e terremotos) e as eletromagn\xe9ticas (como a luz e as ondas de r\xe1dio). As ondas mec\xe2nicas precisam de um meio f\xedsico para se propagar (diferente das eletromagn\xe9ticas que se propagam at\xe9 no espa\xe7o).","O som se propaga aumentando e diminuindo a press\xe3o no ar, mas como \xe9 dif\xedcil de se visualizar esse fen\xf4meno podemos fazer uma analogia com uma corda vibrando.","Desse modelo podemos tirar algumas ideias que se aplicam a todos os tipos de onda. Se a gente observar um ponto dessa corda vamos ver que ele sobe e desce, assim como a press\xe3o em um ponto parado do ar(dentro da sua orelha, por exemplo). O percurso que ela faz at\xe9 voltar ao mesmo lugar (por exemplo da maior press\xe3o, diminuindo at\xe9 a menor e voltando \xe0 maior press\xe3o) \xe9 chamado de uma <strong>oscila\xe7\xe3o, ou per\xedodo de oscila\xe7\xe3o.</strong>","<strong>O per\xedodo</strong> \xe9 quanto tempo a onda demora para completar uma oscila\xe7\xe3o, e \xe9 medido em segundos.","<strong>A frequ\xeancia</strong> \xe9 o inverso do per\xedodo, ou seja, quanto maior o per\xedodo menor a frequ\xeancia e vice-versa. A frequ\xeancia \xe9 medida em hertz.","<strong>A forma de onda</strong> \xe9 a forma de um per\xedodo e est\xe1 profundamente ligada com como percebemos o som (seu timbre)."]},O={title:"Espectro",paragraphs:["Talvez o conceito mais importante para entender a s\xedntese (e a ci\xeancia da m\xfasica) seja o conceito de espectro. O som mais 'puro' que existe \xe9 o <strong>seno</strong>","Um tal de Fourrier [link] disse que todos os outros sons s\xe3o combina\xe7\xf5es de senos de diferentes frequencias "]},j={title:"S\xedntese",paragraphs:['"S\xedntese sonora \xe9 a t\xe9cnica de gerar sons do zero, usando hardware ou softwares"']},F={title:"S\xedntese Aditiva",paragraphs:["Este m\xe9todo de s\xedntese consiste em escolher a dedo os harm\xf4nicos que v\xe3o compor o som final."]},A={title:"S\xedntese Subtrativa",paragraphs:["Esta \xe9 a s\xedntese mais comum, usada em quase todos os sintetizadores.\nNela voc\xea escolhe uma onda que vai ter todo o conteudo harmonico, ent\xe3o voce escolhe, por meio de um filtro, quais harmonicos voce n\xe3o quer e os remove, dai o nome subtrativa.\nOs filtros costumam ser passa-baixas ( corta frequencias mais altas do que uma frequ\xeancia escolhida e deixa o resto passar), passa altas (corta as mais baixas do que uma certa frequ\xeancia e deixa o resto passar) ou passa-banda (deixa uma regi\xe3o passar e tudo que esta fora dela n\xe3o."]},M={title:"S\xedntese FM",paragraphs:["A sintese FM, de inicio, parece mais complexa do que as outras, mas pode te trazer resultados sonoros muito interessantes.","Nela temos pelo menos dois osciladores (podem ser a forma de onda que voce quiser: senos, quadradas, serras \u2026 ), e da maneira mais simples, apenas um deles \xe9 conectado na sa\xedda. A frequ\xeancia desse oscilador, ao invez de ser fixa como nos outros casos \xe9 controlada pela sa\xedda do outro oscilador","Os sintetizadores que usam essa tecnica tem geralmente mais de dois osciladores e assim o usuario pode escolher como eles est\xe3o conectados, chamado de algoritimo."]},R={title:"Outras S\xednteses",paragraphs:["As sinteses fm, subtrativa e aditiva s\xe3o as principais. Por\xe9m exitem muitas outras ideias e maneiras de criar o som. ","<strong>Modelagem fisica (Physical modelling)</strong> \xe9 a sintese que tenta modelar geralmente um instrumento de impacto como um tambor. Nela voce escolhe as caracteristicas da baqueta e do objeto recebendo o impacto.","<strong>Karplus-strong</strong> tem um carater mais experimental (o som fica bem diferente e um pouco sem controle) acontece quando se liga a sa\xedda de um elemento (pode ser um filtro ou um delay) em sua propria entrada (alguns delays tem o parametro feedback, que deve ser ajustado para algo em torno de 100%) e ent\xe3o mude os parametros como frequ\xeancia de corte (cutoff), tempo de delay, resonancia entre outros e veja o que acontece!"]},D=(a(32),a(34),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).circle=null,a.R=0,a.width=0,a.height=0,a.handleDragStart=function(e){e.preventDefault(),document.addEventListener("mousemove",a.handleDrag),document.addEventListener("mouseup",a.handleDragEnd),a.setState({startY:e.pageY,startAngle:a.state.angle,startValue:a.props.value||a.state.value})},a.handleDrag=function(e){var t=a.state.angle,n=a.props.value||a.state.value,o=-e.pageY+a.state.startY;o>400&&(o=400),o<-400&&(o=-400),(t=3*o/4+a.state.startAngle)>300?t=300:t<0&&(t=0),(n=a.calculateValue(o/400))<a.props.min&&(n=a.props.min),n>a.props.max&&(n=a.props.max),a.props.onChange&&a.props.onChange(n),a.props.value?a.setState({angle:t}):a.setState({value:n,angle:t})},a.calculateValue=function(e){if(a.props.logarithmic){var t=Math.log(a.props.max/a.props.min),n=1/t*Math.log(a.state.startValue/a.props.min);return a.props.min*Math.exp(t*(e+n))}return e*(a.props.max-a.props.min)+a.state.startValue},a.createArc=function(e){var t=a.width/2,n=t+Math.sin(T(e))*a.R,o=3+(1-Math.cos(T(e)))*a.R;return"M".concat(t," ").concat(3," A ").concat(a.R," ").concat(a.R,", 0, ").concat(e>180?1:0,", 1, ").concat(n,", ").concat(o)},a.handleDragEnd=function(e){document.removeEventListener("mousemove",a.handleDrag),document.removeEventListener("mouseup",a.handleDragEnd),a.setState({startY:null,startValue:null,startAngle:null})},a.getInitialAngle=function(e){if(!e)return 0;if(a.props.logarithmic){var t=Math.log(a.props.max/a.props.min);return 300*Math.log(e/a.props.min)/t}return 300*(e-a.props.min)/(a.props.max-a.props.min)},a.state={value:e.value||e.min,angle:a.getInitialAngle(e.value),startY:null,startAngle:null,startValue:null},a.R=e.R||20,a.width=2*a.R+6,a.height=a.width,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.circle.addEventListener("mousedown",this.handleDragStart)}},{key:"componentWillUnmount",value:function(){this.circle.addEventListener("mousedown",this.handleDragStart)}},{key:"render",value:function(){var e=this,t=this.props.value||this.state.value,a=t<10?t.toFixed(3):t<100?t.toFixed(2):t<1e3?t.toFixed(1):t.toFixed(0);return n.createElement("div",{className:"knob-container"},n.createElement("div",{style:{width:this.width,height:this.height,position:"relative"}},n.createElement("svg",{className:"knob",width:this.width,height:this.height,transform:"rotate (-150) "},n.createElement("circle",{cx:this.width/2,cy:this.height/2,r:this.R,ref:function(t){return e.circle=t},fill:"transparent",stroke:"none"}),n.createElement("path",{d:"M".concat(this.R+3,",3 L").concat(this.R+3,", 10"),stroke:this.props.trailColor||"#202020",transform:"rotate(".concat(this.state.angle," ").concat(this.width/2," ").concat(this.height/2,")")}),n.createElement("path",{d:this.createArc(300),stroke:this.props.lineColor||"#202020",fill:"none",strokeWidth:"3px"}),n.createElement("path",{d:this.createArc(this.state.angle),stroke:this.props.color||"#00DACD",fill:"none",strokeWidth:"3px"})),n.createElement("p",{className:"value-text unselectable"},a)),n.createElement("p",{className:"label unselectable"},this.props.label))}}]),t}(n.Component)),T=function(e){return Math.PI*e/180},P=(a(36),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleFilterTypeClick=function(e){return function(){a.props.onFilterTypeChange(e)}},a.handlePlayClick=function(){a.state.isPlaying?(a.props.onStop(),a.setState({isPlaying:!1})):(a.props.onStart(),a.setState({isPlaying:!0}))},a.state={isPlaying:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.filterResponse.length;t++)e.push({x:t,y:this.props.filterResponse[t]});for(var n=[],s=0;s<this.props.outputResponse.length;s++)n.push({x:s,y:20*Math.exp(this.props.outputResponse[s]/100)});var r=this.props.selectedFilter;return o.a.createElement("div",{className:"interaction-container"},o.a.createElement("h1",{className:"interaction-text"},"Subtrativa"),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},o.a.createElement("div",null,o.a.createElement("div",{style:{height:380,width:500}},o.a.createElement(v,{data:e,id:"asdasdasd",min:0,max:1.8,color:E})),o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(D,{min:20,max:2e4,value:this.props.frequency,onChange:this.props.onFrequencyChange,label:"Frequ\xeancia",logarithmic:!0,color:E}),o.a.createElement("div",{style:{width:60,height:10}}),o.a.createElement("div",{style:{maxWidth:50,marginRight:10}},o.a.createElement("div",{style:{backgroundColor:"lowpass"===r?"white":C,margin:5,padding:5,border:"1px solid white"},onClick:this.handleFilterTypeClick("lowpass")},o.a.createElement("img",{src:a(38),width:30})),o.a.createElement("p",{style:{color:N}},"Passa-baixas")),o.a.createElement("div",{style:{maxWidth:50,marginRight:10}},o.a.createElement("div",{style:{backgroundColor:"bandpass"===r?"white":C,margin:5,padding:5,border:"1px solid white"},onClick:this.handleFilterTypeClick("bandpass")},o.a.createElement("img",{src:a(39),width:30})),o.a.createElement("p",{style:{color:N}},"Passa-banda")),o.a.createElement("div",{style:{maxWidth:50,marginRight:10}},o.a.createElement("div",{style:{backgroundColor:"highpass"===r?"white":C,margin:5,padding:5,border:"1px solid white"},onClick:this.handleFilterTypeClick("highpass")},o.a.createElement("img",{src:a(40),width:30})),o.a.createElement("p",{style:{color:N}},"Passa-altas")))),o.a.createElement("div",{style:{width:60,height:10}}),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}},o.a.createElement("div",{style:{height:300,width:400}},o.a.createElement(v,{data:n,id:"asdadfsdg",max:20,min:0,hasAxis:"end",color:b})),o.a.createElement(x,{onClick:this.handlePlayClick,playing:this.state.isPlaying}))))}}]),t}(o.a.Component)),I=.00674585476,V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).osc=void 0,a.env=void 0,a.filter=void 0,a.ctx=void 0,a.interval=void 0,a.AnalisisInterval=void 0,a.analyser=void 0,a.handleFrequencyChange=function(e){a.filter.frequency.value=e,a.getFilterFrequencyResponse(),a.setState({frequency:e})},a.handleFilterTypeChange=function(e){a.filter.type=e,a.getFilterFrequencyResponse()},a.handleStart=function(){"running"!==a.ctx.state&&a.ctx.resume(),a.playSequence(),a.interval=setInterval(function(){a.playSequence()},4e3),a.AnalisisInterval=setInterval(function(){var e=new Float32Array(1024);a.analyser.getFloatFrequencyData(e),a.setState({outputResponse:e})},2)},a.handleStop=function(){clearInterval(a.interval)},a.playNote=function(e,t){a.osc.frequency.setValueAtTime(t,e),a.env.gain.linearRampToValueAtTime(1,e+.01),a.env.gain.exponentialRampToValueAtTime(.01,e+.23),a.env.gain.linearRampToValueAtTime(0,e+.24)},a.playSequence=function(){var e=a.ctx.currentTime;a.playNote(e,440),a.playNote(e+.25,440),a.playNote(e+.5,523),a.playNote(e+.75,440),a.playNote(e+1,440),a.playNote(e+1.25,630),a.playNote(e+1.5,391),a.playNote(e+2,880),a.playNote(e+2.25,880),a.playNote(e+2.5,1046),a.playNote(e+2.75,880),a.playNote(e+3,880),a.playNote(e+3.25,1260),a.playNote(e+3.5,782)},a.getFilterFrequencyResponse=function(){for(var e=new Float32Array(1024),t=new Float32Array(1024),n=new Float32Array(1024),o=0;o<1024;o++)e[o]=20*Math.exp(I*o);a.filter.getFrequencyResponse(e,t,n),a.setState({filterResponse:t})},a.state={frequency:1e3,filterResponse:[],outputResponse:[]},a.ctx=e.ctx,a.analyser=new AnalyserNode(a.ctx),a.analyser.fftSize=2048,a.osc=new OscillatorNode(e.ctx),a.osc.type="square",a.env=new GainNode(e.ctx),a.env.gain.value=0,a.filter=new BiquadFilterNode(e.ctx),a.filter.frequency.value=a.state.frequency,a.filter.Q.value=3,a.osc.connect(a.filter),a.filter.connect(a.env),a.env.connect(a.analyser),a.analyser.connect(a.ctx.destination),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.osc.start(),this.getFilterFrequencyResponse()}},{key:"render",value:function(){return o.a.createElement(P,{onFrequencyChange:this.handleFrequencyChange,frequency:this.state.frequency,onFilterTypeChange:this.handleFilterTypeChange,onStart:this.handleStart,onStop:this.handleStop,filterResponse:this.state.filterResponse,outputResponse:this.state.outputResponse,selectedFilter:this.filter.type})}}]),t}(o.a.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100"},o.a.createElement("polygon",{points:"0,0 86.6,50 0,100",fill:this.props.active?"white":C,stroke:"white",onClick:this.props.onClick,strokeWidth:1}))}}]),t}(o.a.PureComponent),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleMod1Click=function(){a.setState({mod1:!a.state.mod1}),a.props.onMod1Click()},a.handleMod2Click=function(){a.setState({mod2:!a.state.mod2}),a.props.onMod2Click()},a.onPlayClick=function(){a.state.playing?(a.props.onStop(),a.setState({playing:!1})):(a.props.onStart(),a.setState({playing:!0}))},a.state={playing:!1,mod1:!1,mod2:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.outputSpectrum.length;t++)e.push({x:Math.log(t+1),y:this.props.outputSpectrum[t]});return o.a.createElement("div",{className:"interaction-container"},o.a.createElement("h1",{className:"interaction-text"},"FM"),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",width:400,justifyContent:"space-evenly"}},o.a.createElement(D,{min:.1,max:1e3,logarithmic:!0,onChange:this.props.onF1Change,value:this.props.f1,color:E}),o.a.createElement("div",{style:{width:20,height:20}},o.a.createElement(W,{active:this.state.mod1,onClick:this.handleMod1Click})),o.a.createElement(D,{min:.1,max:1e3,logarithmic:!0,onChange:this.props.onF2Change,value:this.props.f2,color:E}),o.a.createElement("div",{style:{width:20,height:20}},o.a.createElement(W,{active:this.state.mod2,onClick:this.handleMod2Click})),o.a.createElement(D,{min:.1,max:1e3,logarithmic:!0,onChange:this.props.onF3Change,value:this.props.f3,color:E})),o.a.createElement("div",{style:{width:10,height:40}}),o.a.createElement(x,{onClick:this.onPlayClick,playing:this.state.playing})),o.a.createElement("div",{style:{width:60,height:10}}),o.a.createElement("div",{style:{width:400,height:300}},o.a.createElement(v,{data:e,id:"completelooney",hasAxis:"end",color:b})))}}]),t}(o.a.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).ctx=void 0,a.osc1=void 0,a.osc2=void 0,a.osc3=void 0,a.amp1=void 0,a.amp2=void 0,a.env=void 0,a.interval=void 0,a.analyser=void 0,a.AnalisisInterval=void 0,a.handleF1Change=function(e){a.osc1.frequency.value=e,a.setState({freq1:e})},a.handleF2Change=function(e){a.osc2.frequency.value=e,a.amp1.gain.value=e,a.setState({freq2:e})},a.handleF3Change=function(e){a.osc3.frequency.value=e,a.amp2.gain.value=e,a.setState({freq3:e})},a.handleMod1Click=function(){0!=a.amp1.gain.value?a.amp1.gain.value=0:a.amp1.gain.value=a.state.freq2},a.handleMod2Click=function(){0!=a.amp2.gain.value?a.amp2.gain.value=0:a.amp2.gain.value=a.state.freq3},a.handleStart=function(){"running"!==a.ctx.state&&a.ctx.resume(),a.playSequence(),a.interval=setInterval(function(){a.playSequence()},4e3),a.AnalisisInterval=setInterval(function(){var e=new Float32Array(1024);a.analyser.getFloatFrequencyData(e),a.setState({outputSpectrum:e})},2)},a.handleStop=function(){console.log("start"),clearInterval(a.interval)},a.playNote=function(e,t){a.osc3.frequency.setValueAtTime(t,e),a.env.gain.linearRampToValueAtTime(1,e+.01),a.env.gain.exponentialRampToValueAtTime(.01,e+.23),a.env.gain.linearRampToValueAtTime(0,e+.24)},a.playSequence=function(){var e=a.ctx.currentTime;a.playNote(e,440),a.playNote(e+.25,440),a.playNote(e+.5,523),a.playNote(e+.75,440),a.playNote(e+1,440),a.playNote(e+1.25,630),a.playNote(e+1.5,391),a.playNote(e+2,880),a.playNote(e+2.25,880),a.playNote(e+2.5,1046),a.playNote(e+2.75,880),a.playNote(e+3,880),a.playNote(e+3.25,1260),a.playNote(e+3.5,782)},a.state={freq1:20,freq2:170,freq3:440,outputSpectrum:[]},a.ctx=e.ctx,a.osc1=new OscillatorNode(a.ctx),a.osc1.frequency.value=a.state.freq1,a.osc2=new OscillatorNode(a.ctx),a.osc2.frequency.value=a.state.freq2,a.osc3=new OscillatorNode(a.ctx),a.osc3.frequency.value=a.state.freq3,a.amp1=new GainNode(a.ctx),a.amp1.gain.value=0,a.amp2=new GainNode(a.ctx),a.amp2.gain.value=a.state.freq3,a.env=new GainNode(a.ctx),a.env.gain.value=0,a.analyser=new AnalyserNode(a.ctx),a.osc1.connect(a.amp1),a.amp1.connect(a.osc2.frequency),a.osc2.connect(a.amp2),a.amp2.connect(a.osc3.frequency),a.osc3.connect(a.env),a.env.connect(a.analyser),a.analyser.connect(a.ctx.destination),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.osc1.start(),this.osc2.start(),this.osc3.start()}},{key:"render",value:function(){return o.a.createElement(z,{onStart:this.handleStart,onStop:this.handleStop,onF1Change:this.handleF1Change,onF2Change:this.handleF2Change,onF3Change:this.handleF3Change,f1:this.state.freq1,f2:this.state.freq2,f3:this.state.freq3,outputSpectrum:this.state.outputSpectrum,onMod1Click:this.handleMod1Click,onMod2Click:this.handleMod2Click})}}]),t}(o.a.Component),B=a(15),Y=a.n(B),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).ctx=void 0,a.state={value:0},a.ctx=new AudioContext,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"page"},o.a.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},o.a.createElement("h2",{className:"page-title"},k),o.a.createElement("a",{href:"https://github.com/ggyshay"},o.a.createElement("img",{src:Y.a,alt:"github",className:"unselectable githubIcon"}))),o.a.createElement("h3",{className:"subtitle"},S.title),o.a.createElement("p",{className:"body-text"},S.paragraphs[0]),o.a.createElement("div",{style:{display:"flex",alignItems:"center",flex:1}},o.a.createElement("img",{src:a(41),width:"100%"})),o.a.createElement("p",{className:"body-text"},S.paragraphs[1]),o.a.createElement("p",{className:"body-text"},S.paragraphs[2]),o.a.createElement("div",{style:{display:"flex",alignItems:"center",flex:1}},o.a.createElement("img",{src:a(42),width:"100%"})),o.a.createElement("p",{className:"body-text"},G(S.paragraphs[3])),o.a.createElement("p",{className:"body-text"},G(S.paragraphs[4])),o.a.createElement("p",{className:"body-text"},G(S.paragraphs[5])),o.a.createElement("p",{className:"body-text"},G(S.paragraphs[6])),o.a.createElement("img",{src:a(43),width:"80%",style:{margin:"40px 0 "}}),o.a.createElement("h3",{className:"subtitle"},O.title),o.a.createElement("p",{className:"body-text"},G(O.paragraphs[0])),o.a.createElement("p",{className:"body-text"},O.paragraphs[1]),o.a.createElement(q,{ctx:this.ctx}),o.a.createElement("h3",{className:"subtitle"},j.title),o.a.createElement("p",{className:"body-text"},j.paragraphs[0]),o.a.createElement("h3",{className:"subtitle"},F.title),o.a.createElement("p",{className:"body-text"},F.paragraphs[0]),o.a.createElement("h3",{className:"subtitle"},A.title),o.a.createElement("p",{className:"body-text"},A.paragraphs[0]),o.a.createElement(V,{ctx:this.ctx}),o.a.createElement("h3",{className:"subtitle"},M.title),o.a.createElement("p",{className:"body-text"},M.paragraphs[0]),o.a.createElement("div",{style:{display:"flex",alignItems:"center",flex:1}},o.a.createElement("img",{src:a(44),width:"100%"})),o.a.createElement("p",{className:"body-text"},M.paragraphs[1]),o.a.createElement("div",{style:{display:"flex",alignItems:"center",flex:1}},o.a.createElement("img",{src:a(45),width:"80%"})),o.a.createElement("p",{className:"body-text"},M.paragraphs[2]),o.a.createElement(L,{ctx:this.ctx}),o.a.createElement("h3",{className:"subtitle"},R.title),o.a.createElement("p",{className:"body-text"},R.paragraphs[0]),o.a.createElement("p",{className:"body-text"},G(R.paragraphs[1])),o.a.createElement("p",{className:"body-text"},G(R.paragraphs[2])),o.a.createElement("div",{style:{width:10,height:50}}),o.a.createElement("p",{className:"footer"},"Duvida ou sugest\xe3o? Fale comigo, meu nome \xe9 Gabriel: ggyshay@gmail.com"))}}]),t}(n.Component),G=function(e){var t=("$"+e+"$").split(/(<strong>)|(<\/strong>)/).filter(function(e){return e&&!e.includes("strong>")});return o.a.createElement(o.a.Fragment,null,t.map(function(e,t){var a=e.replace("$","");return t%2===1?o.a.createElement("strong",{key:a+t},a):a}))},U=_;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,2,1]]]);
//# sourceMappingURL=main.b4581bc4.chunk.js.map