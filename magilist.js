// ###########################################################
// # magilist.js v1.0 beta                                   #
// # This is a fork of magilog for a more general use        #
// # created by CtrlAustin                                   #
// # Distributed under the GPL3 Licence                      #
// ###########################################################

// user elements:
const listWrapperName = 'musicwrapper';              // The class name of a wrapper for all that magilist does
const listFilePath = 'list.json';                    // The path to yout JSON file including the file name

// advanced elements:
const tooltipTag = 'p';                              // The tag that the tooltip uses
const itemWrapperClass = 'itemWrapper'               // The class name of each item
const itemTag = 'div';                               // The tag that every item has in the list
const customDataImg = '';                            // If you want to add custom data to the tooltip like an id
const customDataTooltip = '';                        // If you want to add custom data to the tooltip 
const tooltipClassName = 'tooltip';                  // The class that the tooltip has
const errorMessage = 'Error fetching JSON data:';    // If you want a custom error message



// ``**########## !main code - avoid messing with this! ############**``
const parentContainer = document.getElementsByClassName(listWrapperName)[0];
const filePath = listFilePath;

fetch(filePath)
    .then(response => response.json())
    .then(data => {
        const list = data.list;
        list.forEach(item => {
            const div = document.createElement(itemTag);
            div.classList.add(itemWrapperClass)
            div.innerHTML = `<img ${customDataImg} src="${item.image}" alt="${item.alt}"> <${tooltipTag} ${customDataTooltip} class="${tooltipClassName}"> ${item.tooltip} </${tooltipTag}>`;
            parentContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.log(errorMessage, error);
    });