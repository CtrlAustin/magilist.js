# magilist.js 
An easy to use multi-list generator for your website

## How to Use:
* Add magilist.js to your project anywhere you'd like (its reccomended to keep list.json in the project root but it can be moved under advanced elements)
* open magilist.js and edit the user elements to fit your needs
* add an element with the ID the same as the title the list you want to use
* Style to your taste!

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
<(itemTag) href="(list.link)" class="(itemWrapperClass)">
  <img (customDataImg) src="" alt="">
  <(tooltipTag) (customDataTooltip) class="(tooltipClassName)"></p>
</div>
```

## Bare minimum html document to get magilist working
```HTML
<html>
<head>
    <title>Magilist</title>
</head>
<body>
    <div id="list1"></div>
    <script src="magilist.js"></script>
</body>
</html>
```

## CSS elements for styling:

`.itemWrapper` - the default class name for the wrapper around each list item

`.tooltip` - Styling for the tooltip, this is a standard `<p>` tag
