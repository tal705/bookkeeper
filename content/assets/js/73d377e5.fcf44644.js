"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[115],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},951:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"overview",title:"Apache BookKeeper 4.10.0"},p=void 0,s={unversionedId:"overview/overview",id:"version-4.10.0/overview/overview",title:"Apache BookKeeper 4.10.0",description:"\x3c!--",source:"@site/versioned_docs/version-4.10.0/overview/overview.md",sourceDirName:"overview",slug:"/overview/",permalink:"/docs/4.10.0/overview/",tags:[],version:"4.10.0",frontMatter:{id:"overview",title:"Apache BookKeeper 4.10.0"},sidebar:"version-4.10.0/docsSidebar",next:{title:"BookKeeper installation",permalink:"/docs/4.10.0/getting-started/installation"}},c={},d=[{value:"Users",id:"users",level:3},{value:"Administrators",id:"administrators",level:3},{value:"Contributors",id:"contributors",level:3}],u={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation is for Apache BookKeeper","\u2122"," version 4.10.0."),(0,o.kt)("p",null,"Apache BookKeeper","\u2122"," is a scalable, fault-tolerant, low-latency storage service optimized for real-time workloads. It offers durability, replication, and strong consistency as essentials for building reliable real-time applications."),(0,o.kt)("p",null,"BookKeeper is suitable for a wide variety of use cases, including:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Use case"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"WAL")," (write-ahead logging)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The HDFS ",(0,o.kt)("a",{parentName:"td",href:"https://hadoop.apache.org/docs/r2.5.2/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithNFS.html#BookKeeper_as_a_Shared_storage_EXPERIMENTAL"},"namenode"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"WAL")," (write-ahead logging)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Twitter ",(0,o.kt)("a",{parentName:"td",href:"https://blog.twitter.com/engineering/en_us/a/2016/strong-consistency-in-manhattan.html"},"Manhattan"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"WAL")," (write-ahead logging)"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/diennea/herddb"},"HerdDB"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Message storage"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"http://pulsar.incubator.apache.org/docs/latest/getting-started/ConceptsAndArchitecture/#persistent-storage"},"Apache Pulsar"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Offset/cursor storage"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"http://pulsar.incubator.apache.org/docs/latest/getting-started/ConceptsAndArchitecture/#persistent-storage"},"Apache Pulsar"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Object/",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Binary_large_object"},"BLOB")," storage"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Storing snapshots to replicated state machines")))),(0,o.kt)("p",null,"Learn more about Apache BookKeeper","\u2122"," and what it can do for your organization:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/release-notes#4100"},"Apache BookKeeper 4.10.0 Release Notes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bookkeeper.staged.apache.org//docs/latest/api/javadoc"},"Java API docs"))),(0,o.kt)("p",null,"Or start ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation"},"using")," Apache BookKeeper today."),(0,o.kt)("h3",{id:"users"},"Users"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Concepts"),": Start with ",(0,o.kt)("a",{parentName:"li",href:"../getting-started/concepts"},"concepts"),". This will help you to fully understand\nthe other parts of the documentation, including the setup, integration and operation guides."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Getting Started"),": Install ",(0,o.kt)("a",{parentName:"li",href:"../getting-started/installation"},"Apache BookKeeper")," and run bookies ",(0,o.kt)("a",{parentName:"li",href:"../getting-started/run-locally"},"locally")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API"),": Read the ",(0,o.kt)("a",{parentName:"li",href:"../api/overview"},"API")," documentation to learn how to use Apache BookKeeper to build your applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deployment"),": The ",(0,o.kt)("a",{parentName:"li",href:"../deployment/manual"},"Deployment Guide")," shows how to deploy Apache BookKeeper to production clusters.")),(0,o.kt)("h3",{id:"administrators"},"Administrators"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Operations"),": The ",(0,o.kt)("a",{parentName:"li",href:"../admin/bookies"},"Admin Guide")," shows how to run Apache BookKeeper on production, what are the production\nconsiderations and best practices.")),(0,o.kt)("h3",{id:"contributors"},"Contributors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Details"),": Learn ",(0,o.kt)("a",{parentName:"li",href:"../development/protocol"},"design details")," to know more internals.")))}m.isMDXComponent=!0}}]);