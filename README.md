run ```yarn && yarn webpack```

open ```indexA.html``` in chrome, open devtools console, you'll see an error, because "buildin/global.js" is being included in **vendor-scripts** which is not loaded on ```indexA.html``` page, page B works well

you can try and add react into the **vendor-scripts** like this
```
"vendor-scripts": [
	"react",
	"mobx",
],
```
and now "process/browser.js" gone from a.js as well, it is tho required to load module "js-htmlencode" which is taken as example.