// ###########################################################
// # magilist.js v1.3 beta                                   #
// # This is a fork of magilog for a more general use        #
// # created by CtrlAustin                                   #
// # Distributed under the GPL3 Licence                      #
// ###########################################################

// user elements:
const showTooltips = true;                           // Show or hide tooltips
const tooltipClassName = 'tooltip';                  // The class that the tooltip has
const tooltipOffsetX = 10;                           // Offsets for the tooltip
const tooltipOffsetY = 10;

// advanced elements:
const listFilePath = 'list.json';                    // The path to yout JSON file including the file name
const tooltipTag = 'p';                              // The tag that the tooltip uses
const itemTag = 'div';                               // The tag that every item has in the list set this to 'a' for link support
const itemWrapperClass = 'itemWrapper'               // The class name of each item
const customDataImg = '';                            // If you want to add custom data to the tooltip like an id
const customDataTooltip = '';                        // If you want to add custom data to the tooltip 
const errorMessage = 'Error fetching JSON data:';    // If you want a custom error message



// ``**########## ! main code - avoid messing with this ! ############**``
const filePath = listFilePath;

fetch(filePath)
    .then(response => response.json())
    .then(data => {
        const lists = data.lists;
        lists.forEach(list => {
            if (document.getElementById(list.name)) {
                var parentContainer = document.getElementById(list.name);
                list.items.forEach(item => {
                    const div = document.createElement(itemTag);
                    div.classList.add(itemWrapperClass);
                    if (itemTag == 'a') {
                        div.href = item.link;
                    }
                    const img = document.createElement('img');
                    img.src = item.image;
                    img.alt = item.alt;
                    if (showTooltips) {
                        img.addEventListener('mousemove', (event) => {
                            tooltip.style.left = event.clientX + tooltipOffsetX + 'px';
                            tooltip.style.top = event.clientY + tooltipOffsetY + 'px';
                            tooltip.style.zIndex = '999';
                            tooltip.style.display = 'block';
                            tooltip.style.position = 'fixed';
                        });
                        img.addEventListener('mouseout', function () {
                            tooltip.style.display = 'none';
                        });
                    }
                    div.appendChild(img);
                    const tooltip = document.createElement(tooltipTag);
                    tooltip.classList.add(tooltipClassName);
                    tooltip.innerHTML = item.tooltip;
                    tooltip.style.display = 'none';
                    div.appendChild(tooltip);
                    parentContainer.appendChild(div);
                });
                console.log("found element")
            } else {
                console.log("didnt find " + list.name)
            }

        });
    })
    .catch(error => {
        console.log(errorMessage, error);
    });
