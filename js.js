"use strict";


function selectAllCheckbox(){
    let list = document.getElementsByName('file types');
    let selectAll = document.getElementById("select-all");
    if(selectAll.checked == true){
        for(let item of list){
            item.checked = true;
        }  
    }
    else if (selectAll.checked == false){
        for(let item of list){
            item.checked = false;
        }
    }
}









