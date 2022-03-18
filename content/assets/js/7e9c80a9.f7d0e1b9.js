"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[363],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||a;return n?o.createElement(d,l(l({ref:t},s),{},{components:n})):o.createElement(d,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5091:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"manual",title:"Manual deployment"},u=void 0,p={unversionedId:"deployment/manual",id:"version-4.8.2/deployment/manual",title:"Manual deployment",description:"The easiest way to deploy BookKeeper is using schedulers like DC/OS, but you can also deploy BookKeeper clusters manually. A BookKeeper cluster consists of two main components:",source:"@site/versioned_docs/version-4.8.2/deployment/manual.md",sourceDirName:"deployment",slug:"/deployment/manual",permalink:"/docs/4.8.2/deployment/manual",tags:[],version:"4.8.2",frontMatter:{id:"manual",title:"Manual deployment"},sidebar:"version-4.8.2/docsSidebar",previous:{title:"BookKeeper concepts and architecture",permalink:"/docs/4.8.2/getting-started/concepts"},next:{title:"Deploying BookKeeper on DC/OS",permalink:"/docs/4.8.2/deployment/dcos"}},s={},c=[{value:"ZooKeeper setup",id:"zookeeper-setup",level:2},{value:"Starting up bookies",id:"starting-up-bookies",level:2},{value:"Cluster metadata setup",id:"cluster-metadata-setup",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The easiest way to deploy BookKeeper is using schedulers like ",(0,a.kt)("a",{parentName:"p",href:"dcos"},"DC/OS"),", but you can also deploy BookKeeper clusters manually. A BookKeeper cluster consists of two main components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"#zookeeper-setup"},"ZooKeeper")," cluster that is used for configuration- and coordination-related tasks"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("a",{parentName:"li",href:"#starting-up-bookies"},"ensemble")," of bookies")),(0,a.kt)("h2",{id:"zookeeper-setup"},"ZooKeeper setup"),(0,a.kt)("p",null,"We won't provide a full guide to setting up a ZooKeeper cluster here. We recommend that you consult ",(0,a.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/current/zookeeperAdmin.html"},"this guide")," in the official ZooKeeper documentation."),(0,a.kt)("h2",{id:"starting-up-bookies"},"Starting up bookies"),(0,a.kt)("p",null,"Once your ZooKeeper cluster is up and running, you can start up as many bookies as you'd like to form a cluster. Before starting up each bookie, you need to modify the bookie's configuration to make sure that it points to the right ZooKeeper cluster."),(0,a.kt)("p",null,"On each bookie host, you need to ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/installation#download"},"download")," the BookKeeper package as a tarball. Once you've done that, you need to configure the bookie by setting values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bookkeeper-server/conf/bk_server.conf")," config file. The one parameter that you will absolutely need to change is the ",(0,a.kt)("inlineCode",{parentName:"p"},"zkServers")," parameter, which you will need to set to the ZooKeeper connection string for your ZooKeeper cluster. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"zkServers=100.0.0.1:2181,100.0.0.2:2181,100.0.0.3:2181\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A full listing of configurable parameters available in ",(0,a.kt)("inlineCode",{parentName:"p"},"bookkeeper-server/conf/bk_server.conf")," can be found in the ",(0,a.kt)("a",{parentName:"p",href:"../reference/config"},"Configuration")," reference manual.")),(0,a.kt)("p",null,"Once the bookie's configuration is set, you can start it up using the ",(0,a.kt)("a",{parentName:"p",href:"../reference/cli#bookkeeper-bookie"},(0,a.kt)("inlineCode",{parentName:"a"},"bookie"))," command of the ",(0,a.kt)("a",{parentName:"p",href:"../reference/cli#bookkeeper"},(0,a.kt)("inlineCode",{parentName:"a"},"bookkeeper"))," CLI tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ bookkeeper-server/bin/bookkeeper bookie\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also build BookKeeper ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/installation#clone"},"by cloning it from source")," or ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/installation#build-using-maven"},"using Maven"),"."),(0,a.kt)("h3",{parentName:"blockquote",id:"system-requirements"},"System requirements")),(0,a.kt)("p",null,"The number of bookies you should run in a BookKeeper cluster depends on the quorum mode that you've chosen, the desired throughput, and the number of clients using the cluster simultaneously."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Quorum type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Number of bookies"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Self-verifying quorum"),(0,a.kt)("td",{parentName:"tr",align:"left"},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Generic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"4")))),(0,a.kt)("p",null,"Increasing the number of bookies will enable higher throughput, and there is ",(0,a.kt)("strong",{parentName:"p"},"no upper limit")," on the number of bookies. "),(0,a.kt)("h2",{id:"cluster-metadata-setup"},"Cluster metadata setup"),(0,a.kt)("p",null,"Once you've started up a cluster of bookies, you need to set up cluster metadata for the cluster by running the following command from any bookie in the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ bookkeeper-server/bin/bookkeeper shell metaformat\n")),(0,a.kt)("p",null,"You can run in the formatting "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"metaformat")," command performs all the necessary ZooKeeper cluster metadata tasks and thus only needs to be run ",(0,a.kt)("em",{parentName:"p"},"once")," and from ",(0,a.kt)("em",{parentName:"p"},"any")," bookie in the BookKeeper cluster.")),(0,a.kt)("p",null,"Once cluster metadata formatting has been completed, your BookKeeper cluster is ready to go!"))}k.isMDXComponent=!0}}]);