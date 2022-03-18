"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[7732],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),g=d(r),u=n,m=g["".concat(s,".").concat(u)]||g[u]||p[u]||l;return r?a.createElement(m,o(o({ref:t},h),{},{components:r})):a.createElement(m,o({ref:t},h))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1620:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=["components"],i={id:"protocol",title:"The BookKeeper protocol"},s=void 0,d={unversionedId:"development/protocol",id:"version-4.12.1/development/protocol",title:"The BookKeeper protocol",description:"BookKeeper uses a special replication protocol for guaranteeing persistent storage of entries in an ensemble of bookies.",source:"@site/versioned_docs/version-4.12.1/development/protocol.md",sourceDirName:"development",slug:"/development/protocol",permalink:"/docs/4.12.1/development/protocol",tags:[],version:"4.12.1",frontMatter:{id:"protocol",title:"The BookKeeper protocol"},sidebar:"version-4.12.1/docsSidebar",previous:{title:"ZooKeeper Authentication",permalink:"/docs/4.12.1/security/zookeeper"},next:{title:"BookKeeper configuration",permalink:"/docs/4.12.1/reference/config"}},h={},p=[{value:"Ledgers",id:"ledgers",level:2},{value:"Ledger metadata",id:"ledger-metadata",level:3},{value:"Ensembles",id:"ensembles",level:3},{value:"Write quorums",id:"write-quorums",level:3},{value:"Ack quorums",id:"ack-quorums",level:3},{value:"Guarantees",id:"guarantees",level:3},{value:"Writing to ledgers",id:"writing-to-ledgers",level:2},{value:"Closing a ledger as a writer",id:"closing-a-ledger-as-a-writer",level:3},{value:"Closing a ledger as a reader",id:"closing-a-ledger-as-a-reader",level:3},{value:"Ledgers to logs",id:"ledgers-to-logs",level:2},{value:"Opening a log",id:"opening-a-log",level:3},{value:"Rolling ledgers",id:"rolling-ledgers",level:3}],g={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"BookKeeper uses a special replication protocol for guaranteeing persistent storage of entries in an ensemble of bookies."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This document assumes that you have some knowledge of leader election and log replication and how these can be used in a distributed system. If not, we recommend reading the ",(0,l.kt)("a",{parentName:"p",href:"../api/ledger-api#example-application"},"example application")," documentation first.")),(0,l.kt)("h2",{id:"ledgers"},"Ledgers"),(0,l.kt)("p",null,"Ledgers are the basic building block of BookKeeper and the level at which BookKeeper makes its persistent storage guarantees. A replicated log consists of an ordered list of ledgers. See ",(0,l.kt)("a",{parentName:"p",href:"#ledgers-to-logs"},"Ledgers to logs")," for info on building a replicated log from ledgers."),(0,l.kt)("p",null,"Ledgers are composed of metadata and entries. The metadata is stored in ZooKeeper, which provides a ",(0,l.kt)("em",{parentName:"p"},"compare-and-swap")," (CAS) operation. Entries are stored on storage nodes known as bookies."),(0,l.kt)("p",null,"A ledger has a single writer and multiple readers (SWMR)."),(0,l.kt)("h3",{id:"ledger-metadata"},"Ledger metadata"),(0,l.kt)("p",null,"A ledger's metadata contains the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Identifer"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A 64-bit integer, unique within the system")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Ensemble size"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"E")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of nodes the ledger is stored on")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Write quorum size"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Q",(0,l.kt)("sub",null,"w"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of nodes each entry is written to. In effect, the max replication for the entry.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Ack quorum size"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Q",(0,l.kt)("sub",null,"a"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of nodes an entry must be acknowledged on. In effect, the minimum replication for the entry.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Current state"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The current status of the ledger. One of ",(0,l.kt)("inlineCode",{parentName:"td"},"OPEN"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"CLOSED"),", or ",(0,l.kt)("inlineCode",{parentName:"td"},"IN_RECOVERY"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Last entry"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The last entry in the ledger or ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")," is the current state is not ",(0,l.kt)("inlineCode",{parentName:"td"},"CLOSED"),".")))),(0,l.kt)("p",null,"In addition, each ledger's metadata consists of one or more ",(0,l.kt)("em",{parentName:"p"},"fragments"),". Each fragment is either"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the first entry of a fragment or"),(0,l.kt)("li",{parentName:"ul"},"a list of bookies for the fragment.")),(0,l.kt)("p",null,"When creating a ledger, the following invariant must hold:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"E >= Q",(0,l.kt)("sub",null,"w")," >= Qa")),(0,l.kt)("p",null,"Thus, the ensemble size (",(0,l.kt)("strong",{parentName:"p"},"E"),") must be larger than the write quorum size (",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"w")),"), which must in turn be larger than the ack quorum size (",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a")),"). If that condition does not hold, then the ledger creation operation will fail."),(0,l.kt)("h3",{id:"ensembles"},"Ensembles"),(0,l.kt)("p",null,"When a ledger is created, ",(0,l.kt)("strong",{parentName:"p"},"E")," bookies are chosen for the entries of that ledger. The bookies are the initial ensemble of the ledger. A ledger can have multiple ensembles, but an entry has only one ensemble. Changes in the ensemble involve a new fragment being added to the ledger."),(0,l.kt)("p",null,"Take the following example. In this ledger, with ensemble size of 3, there are two fragments and thus two ensembles, one starting at entry 0, the second at entry 12. The second ensemble differs from the first only by its first element. This could be because bookie1 has failed and therefore had to be replaced."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"First entry"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Bookies"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"B1, B2, B3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"12"),(0,l.kt)("td",{parentName:"tr",align:"left"},"B4, B2, B3")))),(0,l.kt)("h3",{id:"write-quorums"},"Write quorums"),(0,l.kt)("p",null,"Each entry in the log is written to ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"w"))," nodes. This is considered the write quorum for that entry. The write quorum is the subsequence of the ensemble, ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"w"))," in length, and starting at the bookie at index (entryid % ",(0,l.kt)("strong",{parentName:"p"},"E"),")."),(0,l.kt)("p",null,"For example, in a ledger of ",(0,l.kt)("strong",{parentName:"p"},"E")," = 4, ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"w")),", and ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a"))," = 2, with an ensemble consisting of B1, B2, B3, and B4, the write quorums for the first 6 entries will be:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Entry"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Write quorum"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"B1, B2, B3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"B2, B3, B4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"B3, B4, B1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"B4, B1, B2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"B1, B2, B3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"B2, B3, B4")))),(0,l.kt)("p",null,"There are only ",(0,l.kt)("strong",{parentName:"p"},"E")," distinct write quorums in any ensemble. If ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"w"))," = ",(0,l.kt)("strong",{parentName:"p"},"E"),", then there is only one, as no striping occurs."),(0,l.kt)("h3",{id:"ack-quorums"},"Ack quorums"),(0,l.kt)("p",null,"The ack quorum for an entry is any subset of the write quorum of size ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a")),". If ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a"))," bookies acknowledge an entry, it means it has been fully replicated."),(0,l.kt)("h3",{id:"guarantees"},"Guarantees"),(0,l.kt)("p",null,"The system can tolerate ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a"))," \u2013 1 failures without data loss."),(0,l.kt)("p",null,"Bookkeeper guarantees that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"All updates to a ledger will be read in the same order as they were written."),(0,l.kt)("li",{parentName:"ol"},"All clients will read the same sequence of updates from the ledger.")),(0,l.kt)("h2",{id:"writing-to-ledgers"},"Writing to ledgers"),(0,l.kt)("p",null,"writer, ensuring that entry ids are sequential is trivial. A bookie acknowledges a write once it has been persisted to disk and is therefore durable. Once ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a"))," bookies from the write quorum acknowledge the write, the write is acknowledged to the client, but only if all entries with lower entry ids in the ledger have already been acknowledged to the client."),(0,l.kt)("p",null,"The entry written contains the ledger id, the entry id, the last add confirmed and the payload. The last add confirmed is the last entry which had been acknowledged to the client when this entry was written. Sending this with the entry speeds up recovery of the ledger in the case that the writer crashes."),(0,l.kt)("p",null,"Another client can also read entries in the ledger up as far as the last add confirmed, as we guarantee that all entries thus far have been replicated on Qa nodes, and therefore all future readers will be able to also read it. However, to read like this, the ledger should be opened with a non-fencing open. Otherwise, it would kill the writer."),(0,l.kt)("p",null,"If a node fails to acknowledge a write, the writer will create a new ensemble by replacing the failed node in the current ensemble. It creates a new fragment with this ensemble, starting from the first message that has not been acknowledged to the client. Creating the new fragment involves making a CAS write to the metadata. If the CAS write fails, someone else has modified something in the ledger metadata. This concurrent modification could have been caused by recovery or rereplication. We reread the metadata. If the state of the ledger is no longer ",(0,l.kt)("inlineCode",{parentName:"p"},"OPEN"),", we send an error to the client for any outstanding writes. Otherwise, we try to replace the failed node again."),(0,l.kt)("h3",{id:"closing-a-ledger-as-a-writer"},"Closing a ledger as a writer"),(0,l.kt)("p",null,"Closing a ledger is straightforward for a writer. The writer makes a CAS write to the metadata, changing the state to ",(0,l.kt)("inlineCode",{parentName:"p"},"CLOSED")," and setting the last entry of the ledger to the last entry which we have acknowledged to the client."),(0,l.kt)("p",null,"If the CAS write fails, it means someone else has modified the metadata. We reread the metadata, and retry closing as long as the state of the ledger is still ",(0,l.kt)("inlineCode",{parentName:"p"},"OPEN"),". If the state is ",(0,l.kt)("inlineCode",{parentName:"p"},"IN_RECOVERY")," we send an error to the client. If the state is ",(0,l.kt)("inlineCode",{parentName:"p"},"CLOSED")," and the last entry is the same as the last entry we have acknowledged to the client, we complete the close operation successfully. If the last entry is different from what we have acknowledged to the client, we send an error to the client."),(0,l.kt)("h3",{id:"closing-a-ledger-as-a-reader"},"Closing a ledger as a reader"),(0,l.kt)("p",null,"A reader can also force a ledger to close. Forcing the ledger to close will prevent any writer from adding new entries to the ledger. This is called fencing. This can occur when a writer has crashed or become unavailable, and a new writer wants to take over writing to the log. The new writer must ensure that it has seen all updates from the previous writer, and prevent the previous writer from making any new updates before making any updates of its own."),(0,l.kt)("p",null,"To recover a ledger, we first update the state in the metadata to IN_RECOVERY. We then send a fence message to all the bookies in the last fragment of the ledger. When a bookie receives a fence message for a ledger, the fenced state of the ledger is persisted to disk. Once we receive a response from at least (",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"w"))," - ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a")),")+1 bookies from each write quorum in the ensemble, the ledger is fenced."),(0,l.kt)("p",null,"By ensuring we have received a response from at last (",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"w"))," - ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a")),") + 1 bookies in each write quorum, we ensure that, if the old writer is alive and tries to add a new entry there will be no write quorum in which Qa bookies will accept the write. If the old writer tries to update the ensemble, it will fail on the CAS metadata write, and then see that the ledger is in IN_RECOVERY state, and that it therefore shouldn\u2019t try to write to it."),(0,l.kt)("p",null,"The old writer will be able to write entries to individual bookies (we can\u2019t guarantee that the fence message reaches all bookies), but as it will not be able reach ack quorum, it will not be able to send a success response to its client. The client will get a LedgerFenced error instead."),(0,l.kt)("p",null,"It is important to note that when you get a ledger fenced message for an entry, it doesn\u2019t mean that the entry has not been written. It means that the entry may or may not have been written, and this can only be determined after the ledger is recovered. In effect, LedgerFenced should be treated like a timeout."),(0,l.kt)("p",null,"Once the ledger is fenced, recovery can begin. Recovery means finding the last entry of the ledger and closing the ledger. To find the last entry of the ledger, the client asks all bookies for the highest last add confirmed value they have seen. It waits until it has received a response at least (",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"w"))," - ",(0,l.kt)("strong",{parentName:"p"},"Q",(0,l.kt)("sub",null,"a")),") + 1 bookies from each write quorum, and takes the highest response as the entry id to start reading forward from. It then starts reading forward in the ledger, one entry at a time, replicating all entries it sees to the entire write quorum for that entry. Once it can no longer read any more entries, it updates the state in the metadata to ",(0,l.kt)("inlineCode",{parentName:"p"},"CLOSED"),", and sets the last entry of the ledger to the last entry it wrote. Multiple readers can try to recovery a ledger at the same time, but as the metadata write is CAS they will all converge on the same last entry of the ledger."),(0,l.kt)("h2",{id:"ledgers-to-logs"},"Ledgers to logs"),(0,l.kt)("p",null,"In BookKeeper, ledgers can be used to build a replicated log for your system. All guarantees provided by BookKeeper are at the ledger level. Guarantees on the whole log can be built using the ledger guarantees and any consistent datastore with a compare-and-swap (CAS) primitive. BookKeeper uses ZooKeeper as the datastore but others could theoretically be used."),(0,l.kt)("p",null,"A log in BookKeeper is built from some number of ledgers, with a fixed order. A ledger represents a single segment of the log. A ledger could be the whole period that one node was the leader, or there could be multiple ledgers for a single period of leadership. However, there can only ever be one leader that adds entries to a single ledger. Ledgers cannot be reopened for writing once they have been closed/recovered."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"BookKeeper does ",(0,l.kt)("em",{parentName:"p"},"not")," provide leader election. You must use a system like ZooKeeper for this.")),(0,l.kt)("p",null,"In many cases, leader election is really leader suggestion. Multiple nodes could think that they are leader at any one time. It is the job of the log to guarantee that only one can write changes to the system."),(0,l.kt)("h3",{id:"opening-a-log"},"Opening a log"),(0,l.kt)("p",null,"Once a node thinks it is leader for a particular log, it must take the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Read the list of ledgers for the log"),(0,l.kt)("li",{parentName:"ol"},"Fence the last two ledgers in the list. Two ledgers are fenced because the writer may be writing to the second-to-last ledger while adding the last ledger to the list."),(0,l.kt)("li",{parentName:"ol"},"Create a new ledger"),(0,l.kt)("li",{parentName:"ol"},"Add the new ledger to the ledger list"),(0,l.kt)("li",{parentName:"ol"},"Write the new ledger back to the datastore using a CAS operation")),(0,l.kt)("p",null,"The fencing in step 2 and the CAS operation in step 5 prevent two nodes from thinking that they have leadership at any one time."),(0,l.kt)("p",null,"The CAS operation will fail if the list of ledgers has changed between reading it and writing back the new list. When the CAS operation fails, the leader must start at step 1 again. Even better, they should check that they are in fact still the leader with the system that is providing leader election. The protocol will work correctly without this step, though it will be able to make very little progress if two nodes think they are leader and are duelling for the log."),(0,l.kt)("p",null,"The node must not serve any writes until step 5 completes successfully."),(0,l.kt)("h3",{id:"rolling-ledgers"},"Rolling ledgers"),(0,l.kt)("p",null,"The leader may wish to close the current ledger and open a new one every so often. Ledgers can only be deleted as a whole. If you don't roll the log, you won't be able to clean up old entries in the log without a leader change. By closing the current ledger and adding a new one, the leader allows the log to be truncated whenever that data is no longer needed. The steps for rolling the log is similar to those for creating a new ledger."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new ledger"),(0,l.kt)("li",{parentName:"ol"},"Add the new ledger to the ledger list"),(0,l.kt)("li",{parentName:"ol"},"Write the new ledger list to the datastore using CAS"),(0,l.kt)("li",{parentName:"ol"},"Close the previous ledger")),(0,l.kt)("p",null,"By deferring the closing of the previous ledger until step 4, we can continue writing to the log while we perform metadata update operations to add the new ledger. This is safe as long as you fence the last 2 ledgers when acquiring leadership."))}u.isMDXComponent=!0}}]);