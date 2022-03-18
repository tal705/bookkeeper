"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[6146],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8223:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s="BP-42: New Client API - list ledgers",d={type:"mdx",permalink:"/bps/BP-42-new-api-list-ledgers",source:"@site/src/pages/bps/BP-42-new-api-list-ledgers.md",title:"BP-42: New Client API - list ledgers",description:"Motivation",frontMatter:{}},p=[{value:"Motivation",id:"motivation",level:3},{value:"Ledgers listing",id:"ledgers-listing",level:4},{value:"Simpler access to LedgerMetadata",id:"simpler-access-to-ledgermetadata",level:4},{value:"Ledger id inside LedgerMetadata",id:"ledger-id-inside-ledgermetadata",level:4},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Ledgers listing",id:"ledgers-listing-1",level:4},{value:"Simpler access to LedgerMetadata",id:"simpler-access-to-ledgermetadata-1",level:4},{value:"Ledger id inside LedgerMetadata",id:"ledger-id-inside-ledgermetadata-1",level:4},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bp-42-new-client-api---list-ledgers"},"BP-42: New Client API - list ledgers"),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The new Client API (",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.bookkeeper.client.api.BookKeeper"),") aims to replace obsolete BookKeeper API but some features are not implemented yet, like the functionalities provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"BookKeeperAdmin"),".\nFor example, it does not expose a method to list available ledgers, comparable to ",(0,a.kt)("inlineCode",{parentName:"p"},"BookKeeperAdmin#listLedgers()"),"."),(0,a.kt)("h4",{id:"ledgers-listing"},"Ledgers listing"),(0,a.kt)("p",null,"The goal here is to extend the Client API for listing ledgers. Moreover current method  ",(0,a.kt)("inlineCode",{parentName:"p"},"BookKeeperAdmin#listLedgers()")," does not report errors from the metadata driver; for instance, if an IOException occurs during iterator flow, the error is not visible to the caller and the iteration is stopped (e.g. hasNext will return false). However there is no intention to change this behaviour in this proposal."),(0,a.kt)("h4",{id:"simpler-access-to-ledgermetadata"},"Simpler access to LedgerMetadata"),(0,a.kt)("p",null,"The goal here is to streamline the access to ",(0,a.kt)("inlineCode",{parentName:"p"},"LedgerMetadata"),", directly from BookKeeper interface."),(0,a.kt)("h4",{id:"ledger-id-inside-ledgermetadata"},"Ledger id inside LedgerMetadata"),(0,a.kt)("p",null,"Currently there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"ledgerId")," property inside ",(0,a.kt)("inlineCode",{parentName:"p"},"LedgerMetadata")," interface, this can be helpful in some contexts."),(0,a.kt)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,a.kt)("p",null,"This proposal adds new interfaces to ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.bookkeeper.client.api")," package, similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.bookkeeper.client.api.BookKeeper")," methods. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// new interface\ninterface LedgersIterator {\n\n    boolean hasNext() throws IOException;\n\n    long next() throws IOException;\n}\n\n// new interface\ninterface ListLedgersResult extends AutoCloseable {\n\n    LedgersIterator iterator();\n\n    Iterable<Long> toIterable();\n}\n\n// new interface\ninterface ListLedgersResultBuilder extends OpBuilder<Void>{\n\n    // empty now, maybe some filters in future\n}\n\ninterface BookKeeper {\n\n    ....\n\n    ListLedgersResultBuilder newListLedgersOp();\n\n    CompleatableFuture<LedgerMetadata> getLedgerMetadata(long ledgerId);\n\n}\n\ninterface LedgerMetadata {\n    \n    ....\n\n    long getLedgerId();\n\n}\n")),(0,a.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,a.kt)("h4",{id:"ledgers-listing-1"},"Ledgers listing"),(0,a.kt)("p",null,"The implementation is pretty similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"BookKeeperAdmin#listLedgers()")," but there are few enhancements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handle metadata driver errors, since the IOException is directly thrown up to caller, allowing user to handle network errors in a more suitable way."),(0,a.kt)("li",{parentName:"ul"},"Leave the possibility to restrict/filter returned ledgers in future, without API breaking changes   "),(0,a.kt)("li",{parentName:"ul"},"Dispose some resources needed to retrieve ledgers (",(0,a.kt)("inlineCode",{parentName:"li"},"ListLedgersResult")," extends ",(0,a.kt)("inlineCode",{parentName:"li"},"AutoCloseable"),")) (will be empty for current implementations)")),(0,a.kt)("p",null,"The implementation will be the same used in BookKeeperAdmin, iterating over ",(0,a.kt)("inlineCode",{parentName:"p"},"LedgerRangeIterator"),", which already handles ledgers search properly."),(0,a.kt)("h4",{id:"simpler-access-to-ledgermetadata-1"},"Simpler access to LedgerMetadata"),(0,a.kt)("p",null,"The implementation will use LedgerManager to retrieve metadata for a specified ledgerId.  "),(0,a.kt)("h4",{id:"ledger-id-inside-ledgermetadata-1"},"Ledger id inside LedgerMetadata"),(0,a.kt)("p",null,"Each time a LedgerMetadata instance is created, the ledgerId is known, so it is trivial to set it in the instance."),(0,a.kt)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,a.kt)("p",null,"No impact for current API, the proposal does not aim to explicit deprecate ",(0,a.kt)("inlineCode",{parentName:"p"},"BookKeeperAdmin#listLedgers()")," method."),(0,a.kt)("h3",{id:"test-plan"},"Test Plan"),(0,a.kt)("p",null,"This proposal needs only new unit tests, other tests must continue pass without any changes."),(0,a.kt)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,a.kt)("p",null,"An alternative could be creates a new API similar to BookKeeperAdmin but it is better to invest enhancing ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.bookkeeper.client.api.BookKeeper")," API."))}u.isMDXComponent=!0}}]);