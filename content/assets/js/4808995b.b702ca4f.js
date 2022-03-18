"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[1594],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,k=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"ledger-api",title:"The Ledger API"},s=void 0,c={unversionedId:"api/ledger-api",id:"version-4.5.1/api/ledger-api",title:"The Ledger API",description:"The ledger API is a lower-level API for BookKeeper that enables you to interact with ledgers directly.",source:"@site/versioned_docs/version-4.5.1/api/ledger-api.md",sourceDirName:"api",slug:"/api/ledger-api",permalink:"/docs/4.5.1/api/ledger-api",tags:[],version:"4.5.1",frontMatter:{id:"ledger-api",title:"The Ledger API"},sidebar:"version-4.5.1/docsSidebar",previous:{title:"BookKeeper API",permalink:"/docs/4.5.1/api/overview"},next:{title:"The Advanced Ledger API",permalink:"/docs/4.5.1/api/ledger-adv-api"}},p={},d=[{value:"The Java ledger API client",id:"the-java-ledger-api-client",level:2},{value:"Installation",id:"installation",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Connection string",id:"connection-string",level:2},{value:"Creating a new client",id:"creating-a-new-client",level:2},{value:"Creating ledgers",id:"creating-ledgers",level:2},{value:"Create ledgers asynchronously",id:"create-ledgers-asynchronously",level:3},{value:"Adding entries to ledgers",id:"adding-entries-to-ledgers",level:2},{value:"Add entries asynchronously",id:"add-entries-asynchronously",level:3},{value:"Reading entries from ledgers",id:"reading-entries-from-ledgers",level:2},{value:"Reading entries after the LastAddConfirmed range",id:"reading-entries-after-the-lastaddconfirmed-range",level:3},{value:"Deleting ledgers",id:"deleting-ledgers",level:2},{value:"Delete entries asynchronously",id:"delete-entries-asynchronously",level:3},{value:"Simple example",id:"simple-example",level:2},{value:"Example application",id:"example-application",level:2},{value:"Setup",id:"setup",level:3},{value:"Goal",id:"goal",level:3},{value:"The base application",id:"the-base-application",level:3},{value:"Leaders and followers (and a bit of background)",id:"leaders-and-followers-and-a-bit-of-background",level:3},{value:"Why not just use ZooKeeper?",id:"why-not-just-use-zookeeper",level:3},{value:"Electing a leader",id:"electing-a-leader",level:3}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ledger API is a lower-level API for BookKeeper that enables you to interact with ledgers directly."),(0,o.kt)("h2",{id:"the-java-ledger-api-client"},"The Java ledger API client"),(0,o.kt)("p",null,"To get started with the Java client for BookKeeper, install the ",(0,o.kt)("inlineCode",{parentName:"p"},"bookkeeper-server")," library as a dependency in your Java application."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a more in-depth tutorial that involves a real use case for BookKeeper, see the ",(0,o.kt)("a",{parentName:"p",href:"#example-application"},"Example application")," guide.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The BookKeeper Java client library is available via ",(0,o.kt)("a",{parentName:"p",href:"http://search.maven.org/"},"Maven Central")," and can be installed using ",(0,o.kt)("a",{parentName:"p",href:"#maven"},"Maven"),", ",(0,o.kt)("a",{parentName:"p",href:"#gradle"},"Gradle"),", and other build tools."),(0,o.kt)("h3",{id:"maven"},"Maven"),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven"),", add this to your ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-pom.html"},(0,o.kt)("inlineCode",{parentName:"a"},"pom.xml"))," build configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- in your <properties> block --\x3e\n<bookkeeper.version>4.5.1</bookkeeper.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.bookkeeper</groupId>\n  <artifactId>bookkeeper-server</artifactId>\n  <version>${bookkeeper.version}</version>\n</dependency>\n")),(0,o.kt)("h3",{id:"gradle"},"Gradle"),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle"),", add this to your ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/gradle/"},(0,o.kt)("inlineCode",{parentName:"a"},"build.gradle"))," build configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    compile group: 'org.apache.bookkeeper', name: 'bookkeeper-server', version: '4.5.0'\n}\n\n// Alternatively:\ndependencies {\n    compile 'org.apache.bookkeeper:bookkeeper-server:4.5.0'\n}\n")),(0,o.kt)("h2",{id:"connection-string"},"Connection string"),(0,o.kt)("p",null,"When interacting with BookKeeper using the Java client, you need to provide your client with a connection string, for which you have three options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide your entire ZooKeeper connection string, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"zk1:2181,zk2:2181,zk3:2181"),"."),(0,o.kt)("li",{parentName:"ul"},"Provide a host and port for one node in your ZooKeeper cluster, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"zk1:2181"),". In general, it's better to provide a full connection string (in case the ZooKeeper node you attempt to connect to is down)."),(0,o.kt)("li",{parentName:"ul"},"If your ZooKeeper cluster can be discovered via DNS, you can provide the DNS name, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"my-zookeeper-cluster.com"),".")),(0,o.kt)("h2",{id:"creating-a-new-client"},"Creating a new client"),(0,o.kt)("p",null,"In order to create a new ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.staged.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/client/BookKeeper"},(0,o.kt)("inlineCode",{parentName:"a"},"BookKeeper"))," client object, you need to pass in a ",(0,o.kt)("a",{parentName:"p",href:"#connection-string"},"connection string"),". Here is an example client object using a ZooKeeper connection string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'try {\n    String connectionString = "127.0.0.1:2181"; // For a single-node, local ZooKeeper cluster\n    BookKeeper bkClient = new BookKeeper(connectionString);\n} catch (InterruptedException | IOException | KeeperException e) {\n    e.printStackTrace();\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're running BookKeeper ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/run-locally"},"locally"),", using the ",(0,o.kt)("a",{parentName:"p",href:"../reference/cli#bookkeeper-localbookie"},(0,o.kt)("inlineCode",{parentName:"a"},"localbookie"))," command, use ",(0,o.kt)("inlineCode",{parentName:"p"},'"127.0.0.1:2181"')," for your connection string, as in the example above.")),(0,o.kt)("p",null,"There are, however, other ways that you can create a client object:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By passing in a ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.staged.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/conf/ClientConfiguration"},(0,o.kt)("inlineCode",{parentName:"a"},"ClientConfiguration"))," object. Here's an example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"ClientConfiguration config = new ClientConfiguration();\nconfig.setZkServers(zkConnectionString);\nconfig.setAddEntryTimeout(2000);\nBookKeeper bkClient = new BookKeeper(config);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By specifying a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientConfiguration")," and a ",(0,o.kt)("a",{parentName:"p",href:"http://zookeeper.apache.org/doc/current/api/org/apache/zookeeper/ZooKeeper.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ZooKeeper"))," client object:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"ClientConfiguration config = new ClientConfiguration();\nconfig.setAddEntryTimeout(5000);\nZooKeeper zkClient = new ZooKeeper(/* client args */);\nBookKeeper bkClient = new BookKeeper(config, zkClient);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"forConfig")," method:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookKeeper bkClient = BookKeeper.forConfig(conf).build();\n")))),(0,o.kt)("h2",{id:"creating-ledgers"},"Creating ledgers"),(0,o.kt)("p",null,"The easiest way to create a ledger using the Java client is via the ",(0,o.kt)("inlineCode",{parentName:"p"},"createLedger")," method, which creates a new ledger synchronously and returns a ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.staged.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/client/LedgerHandle"},(0,o.kt)("inlineCode",{parentName:"a"},"LedgerHandle")),". You must specify at least a ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.staged.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/client/BookKeeper.DigestType"},(0,o.kt)("inlineCode",{parentName:"a"},"DigestType"))," and a password."),(0,o.kt)("p",null,"Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'byte[] password = "some-password".getBytes();\nLedgerHandle handle = bkClient.createLedger(BookKeeper.DigestType.MAC, password);\n')),(0,o.kt)("p",null,"You can also create ledgers asynchronously"),(0,o.kt)("h3",{id:"create-ledgers-asynchronously"},"Create ledgers asynchronously"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class LedgerCreationCallback implements AsyncCallback.CreateCallback {\n    public void createComplete(int returnCode, LedgerHandle handle, Object ctx) {\n        System.out.println("Ledger successfully created");\n    }\n}\n\nclient.asyncCreateLedger(\n        3,\n        2,\n        BookKeeper.DigestType.MAC,\n        password,\n        new LedgerCreationCallback(),\n        "some context"\n);\n')),(0,o.kt)("h2",{id:"adding-entries-to-ledgers"},"Adding entries to ledgers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'long entryId = ledger.addEntry("Some entry data".getBytes());\n')),(0,o.kt)("h3",{id:"add-entries-asynchronously"},"Add entries asynchronously"),(0,o.kt)("h2",{id:"reading-entries-from-ledgers"},"Reading entries from ledgers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Enumerator<LedgerEntry> entries = handle.readEntries(1, 99);\n")),(0,o.kt)("p",null,"To read all possible entries from the ledger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Enumerator<LedgerEntry> entries =\n  handle.readEntries(0, handle.getLastAddConfirmed());\n\nwhile (entries.hasNextElement()) {\n    LedgerEntry entry = entries.nextElement();\n    System.out.println("Successfully read entry " + entry.getId());\n}\n')),(0,o.kt)("h3",{id:"reading-entries-after-the-lastaddconfirmed-range"},"Reading entries after the LastAddConfirmed range"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"readUnconfirmedEntries")," allowing to read after the LastAddConfirmed range.\nIt lets the client read without checking the local value of LastAddConfirmed, so that it is possible to read entries for which the writer has not received the acknowledge yet.\nFor entries which are within the range 0..LastAddConfirmed, BookKeeper guarantees that the writer has successfully received the acknowledge.\nFor entries outside that range it is possible that the writer never received the acknowledge and so there is the risk that the reader is seeing entries before the writer and this could result in a consistency issue in some cases.\nWith this method you can even read entries before the LastAddConfirmed and entries after it with one call, the expected consistency will be as described above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Enumerator<LedgerEntry> entries =\n  handle.readUnconfirmedEntries(0, lastEntryIdExpectedToRead);\n\nwhile (entries.hasNextElement()) {\n    LedgerEntry entry = entries.nextElement();\n    System.out.println("Successfully read entry " + entry.getId());\n}\n')),(0,o.kt)("h2",{id:"deleting-ledgers"},"Deleting ledgers"),(0,o.kt)("p",null,"Ledgers can be deleted synchronously which may throw exception:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"long ledgerId = 1234;\n\ntry {\n    bkClient.deleteLedger(ledgerId);\n} catch (Exception e) {\n  e.printStackTrace();\n}\n")),(0,o.kt)("h3",{id:"delete-entries-asynchronously"},"Delete entries asynchronously"),(0,o.kt)("p",null,"Ledgers can also be deleted asynchronously:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class DeleteEntryCallback implements AsyncCallback.DeleteCallback {\n    public void deleteComplete() {\n        System.out.println("Delete completed");\n    }\n}\nbkClient.asyncDeleteLedger(ledgerID, new DeleteEntryCallback(), null);\n')),(0,o.kt)("h2",{id:"simple-example"},"Simple example"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a more involved BookKeeper client example, see the ",(0,o.kt)("a",{parentName:"p",href:"#example-application"},"example application")," below.")),(0,o.kt)("p",null,"In the code sample below, a BookKeeper client:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"creates a ledger"),(0,o.kt)("li",{parentName:"ul"},"writes entries to the ledger"),(0,o.kt)("li",{parentName:"ul"},"closes the ledger (meaning no further writes are possible)"),(0,o.kt)("li",{parentName:"ul"},"re-opens the ledger for reading"),(0,o.kt)("li",{parentName:"ul"},"reads all available entries")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Create a client object for the local ensemble. This\n// operation throws multiple exceptions, so make sure to\n// use a try/catch block when instantiating client objects.\nBookKeeper bkc = new BookKeeper("localhost:2181");\n\n// A password for the new ledger\nbyte[] ledgerPassword = /* some sequence of bytes, perhaps random */;\n\n// Create a new ledger and fetch its identifier\nLedgerHandle lh = bkc.createLedger(BookKeeper.DigestType.MAC, ledgerPassword);\nlong ledgerId = lh.getId();\n\n// Create a buffer for four-byte entries\nByteBuffer entry = ByteBuffer.allocate(4);\n\nint numberOfEntries = 100;\n\n// Add entries to the ledger, then close it\nfor (int i = 0; i < numberOfEntries; i++){\n    entry.putInt(i);\n    entry.position(0);\n    lh.addEntry(entry.array());\n}\nlh.close();\n\n// Open the ledger for reading\nlh = bkc.openLedger(ledgerId, BookKeeper.DigestType.MAC, ledgerPassword);\n\n// Read all available entries\nEnumeration<LedgerEntry> entries = lh.readEntries(0, numberOfEntries - 1);\n\nwhile(entries.hasMoreElements()) {\n    ByteBuffer result = ByteBuffer.wrap(ls.nextElement().getEntry());\n    Integer retrEntry = result.getInt();\n\n    // Print the integer stored in each entry\n    System.out.println(String.format("Result: %s", retrEntry));\n}\n\n// Close the ledger and the client\nlh.close();\nbkc.close();\n')),(0,o.kt)("p",null,"Running this should return this output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Result: 0\nResult: 1\nResult: 2\n# etc\n")),(0,o.kt)("h2",{id:"example-application"},"Example application"),(0,o.kt)("p",null,"This tutorial walks you through building an example application that uses BookKeeper as the replicated log. The application uses the BookKeeper Java client to interact with BookKeeper."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The code for this tutorial can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ivankelly/bookkeeper-tutorial/"},"this GitHub repo"),". The final code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dice")," class can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ivankelly/bookkeeper-tutorial/blob/master/src/main/java/org/apache/bookkeeper/Dice.java"},"here"),".")),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Before you start, you will need to have a BookKeeper cluster running locally on your machine. For installation instructions, see ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation"},"Installation"),"."),(0,o.kt)("p",null,"To start up a cluster consisting of six bookies locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bookkeeper-server/bin/bookkeeper localbookie 6\n")),(0,o.kt)("p",null,"You can specify a different number of bookies if you'd like."),(0,o.kt)("h3",{id:"goal"},"Goal"),(0,o.kt)("p",null,"The goal of the dice application is to have"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"multiple instances of this application,"),(0,o.kt)("li",{parentName:"ul"},"possibly running on different machines,"),(0,o.kt)("li",{parentName:"ul"},"all of which display the exact same sequence of numbers.")),(0,o.kt)("p",null,"In other words, the log needs to be both durable and consistent, regardless of how many bookies are participating in the BookKeeper ensemble. If one of the bookies crashes or becomes unable to communicate with the other bookies in any way, it should ",(0,o.kt)("em",{parentName:"p"},"still")," display the same sequence of numbers as the others. This tutorial will show you how to achieve this."),(0,o.kt)("p",null,"To begin, download the base application, compile and run it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/ivankelly/bookkeeper-tutorial.git\n$ mvn package\n$ mvn exec:java -Dexec.mainClass=org.apache.bookkeeper.Dice\n")),(0,o.kt)("p",null,"That should yield output that looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] Scanning for projects...\n[INFO]                                                                         \n[INFO] ------------------------------------------------------------------------\n[INFO] Building tutorial 1.0-SNAPSHOT\n[INFO] ------------------------------------------------------------------------\n[INFO]\n[INFO] --- exec-maven-plugin:1.3.2:java (default-cli) @ tutorial ---\n[WARNING] Warning: killAfter is now deprecated. Do you need it ? Please comment on MEXEC-6.\nValue = 4\nValue = 5\nValue = 3\n")),(0,o.kt)("h3",{id:"the-base-application"},"The base application"),(0,o.kt)("p",null,"The application in this tutorial is a dice application. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dice")," class below has a ",(0,o.kt)("inlineCode",{parentName:"p"},"playDice")," function that generates a random number between 1 and 6 every second, prints the value of the dice roll, and runs indefinitely."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Dice {\n    Random r = new Random();\n\n    void playDice() throws InterruptedException {\n        while (true) {\n            Thread.sleep(1000);\n            System.out.println("Value = " + (r.nextInt(6) + 1));\n        }\n    }\n}\n')),(0,o.kt)("p",null,"When you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function of this class, a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Dice")," object will be instantiated and then run indefinitely:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Dice {\n    // other methods\n\n    public static void main(String[] args) throws InterruptedException {\n        Dice d = new Dice();\n        d.playDice();\n    }\n}\n")),(0,o.kt)("h3",{id:"leaders-and-followers-and-a-bit-of-background"},"Leaders and followers (and a bit of background)"),(0,o.kt)("p",null,"To achieve this common view in multiple instances of the program, we need each instance to agree on what the next number in the sequence will be. For example, the instances must agree that 4 is the first number and 2 is the second number and 5 is the third number and so on. This is a difficult problem, especially in the case that any instance may go away at any time, and messages between the instances can be lost or reordered."),(0,o.kt)("p",null,"Luckily, there are already algorithms to solve this. Paxos is an abstract algorithm to implement this kind of agreement, while Zab and Raft are more practical protocols. This video gives a good overview about how these algorithms usually look. They all have a similar core."),(0,o.kt)("p",null,"It would be possible to run the Paxos to agree on each number in the sequence. However, running Paxos each time can be expensive. What Zab and Raft do is that they use a Paxos-like algorithm to elect a leader. The leader then decides what the sequence of events should be, putting them in a log, which the other instances can then follow to maintain the same state as the leader."),(0,o.kt)("p",null,"Bookkeeper provides the functionality for the second part of the protocol, allowing a leader to write events to a log and have multiple followers tailing the log. However, bookkeeper does not do leader election. You will need a zookeeper or raft instance for that purpose."),(0,o.kt)("h3",{id:"why-not-just-use-zookeeper"},"Why not just use ZooKeeper?"),(0,o.kt)("p",null,"There are a number of reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Zookeeper's log is only exposed through a tree like interface. It can be hard to shoehorn your application into this."),(0,o.kt)("li",{parentName:"ol"},"A zookeeper ensemble of multiple machines is limited to one log. You may want one log per resource, which will become expensive very quickly."),(0,o.kt)("li",{parentName:"ol"},"Adding extra machines to a zookeeper ensemble does not increase capacity nor throughput.")),(0,o.kt)("p",null,"Bookkeeper can be seen as a means of exposing ZooKeeper's replicated log to applications in a scalable fashion. ZooKeeper is still used by BookKeeper, however, to maintain consistency guarantees, though clients don't need to interact with ZooKeeper directly."),(0,o.kt)("h3",{id:"electing-a-leader"},"Electing a leader"),(0,o.kt)("p",null,"We'll use zookeeper to elect a leader. A zookeeper instance will have started locally when you started the localbookie application above. To verify it's running, run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo stat | nc localhost 2181\nZookeeper version: 3.4.6-1569965, built on 02/20/2014 09:09 GMT\nClients:\n /127.0.0.1:59343[1](queued=0,recved=40,sent=41)\n /127.0.0.1:49354[1](queued=0,recved=11,sent=11)\n /127.0.0.1:49361[0](queued=0,recved=1,sent=0)\n /127.0.0.1:59344[1](queued=0,recved=38,sent=39)\n /127.0.0.1:59345[1](queued=0,recved=38,sent=39)\n /127.0.0.1:59346[1](queued=0,recved=38,sent=39)\n\nLatency min/avg/max: 0/0/23\nReceived: 167\nSent: 170\nConnections: 6\nOutstanding: 0\nZxid: 0x11\nMode: standalone\nNode count: 16\n")),(0,o.kt)("p",null,"To interact with zookeeper, we'll use the Curator client rather than the stock zookeeper client. Getting things right with the zookeeper client can be tricky, and curator removes a lot of the pointy corners for you. In fact, curator even provides a leader election recipe, so we need to do very little work to get leader election in our application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Dice extends LeaderSelectorListenerAdapter implements Closeable {\n\n    final static String ZOOKEEPER_SERVER = "127.0.0.1:2181";\n    final static String ELECTION_PATH = "/dice-elect";\n\n    ...\n\n    Dice() throws InterruptedException {\n        curator = CuratorFrameworkFactory.newClient(ZOOKEEPER_SERVER,\n                2000, 10000, new ExponentialBackoffRetry(1000, 3));\n        curator.start();\n        curator.blockUntilConnected();\n\n        leaderSelector = new LeaderSelector(curator, ELECTION_PATH, this);\n        leaderSelector.autoRequeue();\n        leaderSelector.start();\n    }\n')),(0,o.kt)("p",null,"In the constructor for Dice, we need to create the curator client. We specify four things when creating the client, the location of the zookeeper service, the session timeout, the connect timeout and the retry policy."),(0,o.kt)("p",null,"The session timeout is a zookeeper concept. If the zookeeper server doesn't hear anything from the client for this amount of time, any leases which the client holds will be timed out. This is important in leader election. For leader election, the curator client will take a lease on ELECTION_PATH. The first instance to take the lease will become leader and the rest will become followers. However, their claim on the lease will remain in the cue. If the first instance then goes away, due to a crash etc., its session will timeout. Once the session times out, the lease will be released and the next instance in the queue will become the leader. The call to autoRequeue() will make the client queue itself again if it loses the lease for some other reason, such as if it was still alive, but it a garbage collection cycle caused it to lose its session, and thereby its lease. I've set the lease to be quite low so that when we test out leader election, transitions will be quite quick. The optimum length for session timeout depends very much on the use case. The other parameters are the connection timeout, i.e. the amount of time it will spend trying to connect to a zookeeper server before giving up, and the retry policy. The retry policy specifies how the client should respond to transient errors, such as connection loss. Operations that fail with transient errors can be retried, and this argument specifies how often the retries should occur."),(0,o.kt)("p",null,"Finally, you'll have noticed that Dice now extends LeaderSelectorListenerAdapter and implements Closeable. Closeable is there to close the resource we have initialized in the constructor, the curator client and the leaderSelector. LeaderSelectorListenerAdapter is a callback that the leaderSelector uses to notify the instance that it is now the leader. It is passed as the third argument to the LeaderSelector constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public void takeLeadership(CuratorFramework client)\n            throws Exception {\n        synchronized (this) {\n            leader = true;\n            try {\n                while (true) {\n                    this.wait();\n                }\n            } catch (InterruptedException ie) {\n                Thread.currentThread().interrupt();\n                leader = false;\n            }\n        }\n    }\n")),(0,o.kt)("p",null,"takeLeadership() is the callback called by LeaderSelector when the instance is leader. It should only return when the instance wants to give up leadership. In our case, we never do so we wait on the current object until we're interrupted. To signal to the rest of the program that we are leader we set a volatile boolean called leader to true. This is unset after we are interrupted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    void playDice() throws InterruptedException {\n        while (true) {\n            while (leader) {\n                Thread.sleep(1000);\n                System.out.println("Value = " + (r.nextInt(6) + 1)\n                                   + ", isLeader = " + leader);\n            }\n        }\n    }\n')),(0,o.kt)("p",null,"Finally, we modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"playDice")," function to only generate random numbers when it is the leader."),(0,o.kt)("p",null,"Run two instances of the program in two different terminals. You'll see that one becomes leader and prints numbers and the other just sits there."),(0,o.kt)("p",null,"Now stop the leader using Control-Z. This will pause the process, but it won't kill it. You will be dropped back to the shell in that terminal. After a couple of seconds, the session timeout, you will see that the other instance has become the leader. Zookeeper will guarantee that only one instance is selected as leader at any time."),(0,o.kt)("p",null,"Now go back to the shell that the original leader was on and wake up the process using fg. You'll see something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"...\n...\nValue = 4, isLeader = true\nValue = 4, isLeader = true\n^Z\n[1]+  Stopped                 mvn exec:java -Dexec.mainClass=org.apache.bookkeeper.Dice\n$ fg\nmvn exec:java -Dexec.mainClass=org.apache.bookkeeper.Dice\nValue = 3, isLeader = true\nValue = 1, isLeader = false\n")))}h.isMDXComponent=!0}}]);