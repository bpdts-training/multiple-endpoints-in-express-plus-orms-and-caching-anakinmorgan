{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;\red199\green200\blue201;\red22\green21\blue22;}
{\*\expandedcolortbl;;\cssrgb\c81961\c82353\c82745;\cssrgb\c11373\c10980\c11373\c3922;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Creating a Basic Server with Express\cb1 \
\cb3 ====================================\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 The purpose of this first workshop is to build a basic server using the Express library.\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 To do it, you'll need:\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 * Node 13.12.0 (or a higher version, install if from Self Service)\cb1 \
\cb3 * Atom or another text editor (install it from Self Service).\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 Please don't use a JavaScript-specific IDE like WebStorm for this particular exercise. The object is to understand the basics of a JavaScript Express project.\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 Basic Steps\cb1 \
\cb3 -----------\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 1. Create a directory, should be within this repo so that you can push your answer up to Github.\cb1 \
\cb3 2. Initialise a Node.js project using npm. Ensure the entry point is a file called 'app.js'\cb1 \
\cb3 3. Install express using npm\cb1 \
\cb3 4. Use a text editor to create a file in the directory called "app.js"\cb1 \
\cb3 5. Use online tutorials to write the correct code to serve an api endpoint.\cb1 \
\cb3 6. Run your app using 'node app.js' and use your browser to view the result.\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 Before creating a full API endpoint, you might like to try having Express just send a "Hello World" message.\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 Resources (All Optional)\cb1 \
\cb3 ------------------------\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 ### On the web\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 * {\field{\*\fldinst{HYPERLINK "https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30"}}{\fldrslt https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30}}\cb1 \
\cb3 * {\field{\*\fldinst{HYPERLINK "https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9"}}{\fldrslt https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9}}\cb1 \
\cb3 * {\field{\*\fldinst{HYPERLINK "https://www.robinwieruch.de/node-express-server-rest-api"}}{\fldrslt https://www.robinwieruch.de/node-express-server-rest-api\
}}\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 ### On Pluralsight\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 * {\field{\*\fldinst{HYPERLINK "https://app.pluralsight.com/library/courses/node-js-express-rest-web-services-update/table-of-contents"}}{\fldrslt https://app.pluralsight.com/library/courses/node-js-express-rest-web-services-update/table-of-contents\
}}\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 Once You're Done\cb1 \
\cb3 ----------------\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 If you found that horrifically easy, then use Self Service to install Postgres, and see if you can pull information from a database table into you Express API, then display it.\
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 * {\field{\*\fldinst{HYPERLINK "https://medium.com/@dannibla/connecting-nodejs-postgresql-f8967b9f5932"}}{\fldrslt https://medium.com/@dannibla/connecting-nodejs-postgresql-f8967b9f5932}}\cb1 \
\cb3 * {\field{\*\fldinst{HYPERLINK "https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/"}}{\fldrslt https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/\
}}\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb1 \
\pard\pardeftab720\sl360\partightenfactor0
\cf2 \cb3 Warning! I haven't checked those two guides, they may be wrong or out of date, and you might find that there are issues on DWP devices, but this is the "nice to have" section. Give it a go if you have time.\
}