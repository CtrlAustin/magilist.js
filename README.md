# magilist.js 
An easy to use multi-list generator for your website

## How to Use:
* Add magilist.js to your project anywhere you'd like
* open magilist.js and edit the user elements to fit your needs
* Style to your needs!
* its reccomended to keep list.json in the project root but it can be moved under advanced elements
* you can now add more lists by creating divs with the id of the list name!

## Current HTML Layout
magilist generates its lists in one set way at the moment
heres an example using all of the defailt values
```HTML
<div class="itemWrapper">
  <img src="" alt="">
  <p class="tooltip"></p>
</div>
```

heres a more advanced look at where everything is added
variable names are in parenthesis
```HTML
<(itemTag) class="(itemWrapperClass)">
  <img (customDataImg) src="" alt="">
  <(tooltipTag) (customDataTooltip) class="(tooltipClassName)"></p>
</div>
```
