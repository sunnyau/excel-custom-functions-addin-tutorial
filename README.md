# excel custom functions addin tutorial

We follow this https://learn.microsoft.com/en-gb/office/dev/add-ins/quickstarts/excel-custom-functions-quickstart?tabs=excel-online to generate these codes while choosing Typescript. 


This website also tells you how to test the add-in in Excel on web.

Here are the summary

# To test your add-in in Excel on the web

## Get an Excel file link ready.

1. Go to your OneDrive, My files. And then Create or Open an existing Excel file. 
2. Click the share link and then copy the link.

## start the local web server

`npm run start:web -- --document {url}`

E.g.

`npm run start:web -- --document https://1drv.ms/x/c/bda3b0275f4c9bb7/EYYqiu9xK4xHvIe1aXzol6QBKDp7-nzkIWcNJxOjvk_BEw?e=nExbE2`

The terminal should show you a link to open the excel file on web with "Launching excel"

## Problem solving

If you see this error message on Excel web, "cannot access manifest url at https://127.0.0.1:3000/manifest.xml Please ensure the url is accessible"

you need to stop the existing 127.0.0.1 web server. You an choose one of them, in this order

1. run `npm stop`
2. run `npx kill-port 3000`
3. Reboot your laptop
4. Use a different port by replacing 3000 to a new number in all your files.

## code development

If you change your code ( e.g. taskpane.html ) and save it, you will instantly see the result on Excel, with or without refreshing the web browser.

## Where to see console.log message

Turn on your Microsoft Edge -> More tools -> Developer tools. Then click the console icon ( top middle )

## To stop the local web server

`npm run stop`

## To clear Excel (web) addin

Open Microsoft Edge browser -> Privacy, search and services -> Clear browsing data now -> clear everything.
