"use strict";(self.webpackChunkdiscord_casestudy=self.webpackChunkdiscord_casestudy||[]).push([[741],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=d(r),m=i,p=h["".concat(s,".").concat(m)]||h[m]||l[m]||c;return r?t.createElement(p,o(o({ref:n},u),{},{components:r})):t.createElement(p,o({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=h;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var d=2;d<c;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8807:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return l}});var t=r(7462),i=r(3366),c=(r(7294),r(3905)),o=["components"],a={},s="Engineering",d={unversionedId:"engineering/architecture",id:"engineering/architecture",title:"Engineering",description:"\xdcber Discord werden t\xe4glich Millionen von Nachrichten versendet und Millionen Benutzer sind in Sprachkan\xe4len aktiv. Dieses Kapitel beschreibt, wie Discord das umsetzt.",source:"@site/docs/engineering/architecture.md",sourceDirName:"engineering",slug:"/engineering/architecture",permalink:"/discord-casestudy/docs/engineering/architecture",editUrl:"https://github.com/xeeija/discord-casestudy/edit/main/docs/engineering/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discord Allgemein",permalink:"/discord-casestudy/docs/intro"},next:{title:"Performance",permalink:"/discord-casestudy/docs/engineering/performance"}},u={},l=[{value:"Architektur",id:"architektur",level:2},{value:"Backend",id:"backend",level:2}],h={toc:l};function m(e){var n=e.components,a=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"engineering"},"Engineering"),(0,c.kt)("p",null,"\xdcber Discord werden t\xe4glich Millionen von Nachrichten versendet und Millionen Benutzer sind in Sprachkan\xe4len aktiv. Dieses Kapitel beschreibt, wie Discord das umsetzt. "),(0,c.kt)("h2",{id:"architektur"},"Architektur"),(0,c.kt)("p",null,"Um dieses gro\xdfe Ausma\xdf zu verwalten, verwendet Discord ganz grunds\xe4tzlich eine Client/Server-Architektur. Im Backend setzt man auf die Programmiersprachen Elixir und Rust, die f\xfcr hohe Auslastung und Performance entwickelt sind, und auf eine Adaption von WebRTC f\xfcr die Audio\xfcbertragung in Sprachkan\xe4len."),(0,c.kt)("p",null,'In Discord passiert das Hauptgeschehen in kleinen bis gro\xdfen Communities von Mitgliedern, die diverse Text- und Sprachkan\xe4le beeinhalten und als "Discord-Server" bezeichnet werden (nicht zu verwechseln mit den Backend-Servern). Eine weitere M\xf6glichkeit sind private Nachrichten und Anrufe mit einzelen Benutzern oder Freunden.'),(0,c.kt)("p",null,"Um die gro\xdfe Anzahl an Mitgliedern in einem Discord-Server handzuhaben, werden alle Nachrichten sowie Video-/Sprachverbindungen an die Backend-Server von Discord gesendet und dort an andere Benutzer weiterverteilt. Dadurch wird die IP-Adresse eines Benutzers vor anderen gesch\xfctzt. Video- und Sprachverbindungen werden zus\xe4tzlich \xfcber Media-Server von Discord geleitet, um u.a. administrative Funktionen zu bieten."),(0,c.kt)("h2",{id:"backend"},"Backend"),(0,c.kt)("p",null,'Um eine gewisse Ausfallsicherheit zu gew\xe4hrleisten, ist das Backend von Discord in das "Discord Gateway" und "Voice-Server" eingeteilt. Clients verbinden sich \xfcber eine WebSocket-Verbindung mit dem Gateway sobald sie in Discord online sind, um regelm\xe4\xdfig Statusinformationen auszutauschen. '),(0,c.kt)("p",null,"Beim Betreten eines Sprachkanals wird auch eine Verbindung mit einem Voice-Server hergestellt, der die Sprach\xfcbertragung \xfcbernimmt. Der gleiche Voice-Server verwaltet alle Kan\xe4le eines Discord-Servers (Community). Sollte ein Voice-Server nicht mehr erreichbar sein, wird das durch regelm\xe4\xdfige Pings automatisch erkannt, und er wird durch einen anderer Voice-Server ersetzt. Das Gateway ist davon nicht betroffen."),(0,c.kt)("p",null,(0,c.kt)("img",{loading:"lazy",alt:"Discord Backend",src:r(8508).Z,width:"1200",height:"1211"})),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Quellen:",(0,c.kt)("br",{parentName:"em"}),"How Discord Handles Two and Half Million Concurrent Voice Users using WebRTC, Jozsef Vass: ",(0,c.kt)("a",{parentName:"em",href:"https://discord.com/blog/how-discord-handles-two-and-half-million-concurrent-voice-users-using-webrtc"},"https://discord.com/blog/how-discord-handles-two-and-half-million-concurrent-voice-users-using-webrtc"),(0,c.kt)("br",{parentName:"em"}),"Using Rust to Scale Elixir for 11 Million Concurrent Users, Matt Nowack: ",(0,c.kt)("a",{parentName:"em",href:"https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users"},"https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users"),(0,c.kt)("br",{parentName:"em"}),"Why Discord is switching from Go to Rust, Jesse Howarth: ",(0,c.kt)("a",{parentName:"em",href:"https://discord.com/blog/why-discord-is-switching-from-go-to-rust"},"https://discord.com/blog/why-discord-is-switching-from-go-to-rust"))),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Autor: Bastian")))}m.isMDXComponent=!0},8508:function(e,n,r){n.Z=r.p+"assets/images/discord-backend-architecture-29c17f23573610cacae8a1e453bfc261.gif"}}]);