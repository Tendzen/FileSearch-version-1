"use strict";

function handleData()
{
    let mimeTypeArray = [];
    let formData = new FormData(document.querySelector("form"));
    for(let pair of formData.entries()) 
    {
        mimeTypeArray.push(pair[1]);
    }
    let checkCheckbox = document.querySelectorAll('input[type=checkbox]');
    for(let item of checkCheckbox){
        if(item.checked > 0){
            document.getElementById('showStringButton').style.display = 'block';
            for(let item of checkCheckbox){
                item.checked = false;
            }
        }
        else if(item.checked == 0){
            console.log('Select the file type');
        }
    }
    let newStr = mimeTypeArray.join(' or ');
    let strQueryTerm = `"mimeType=${newStr}"`;
    
    function copyToClipboard(){
        let el = document.createElement('textarea');
        el.value = strQueryTerm;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        let selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);
        }
        document.getElementById('showStringButton').style.display = 'none';
      };
    
    document.getElementById('showStringButton').addEventListener('click',copyToClipboard);
    return false;
}
