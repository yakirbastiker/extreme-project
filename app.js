/// for gallery
let img = document.getElementById('img-gall');
let right = document.getElementById('arr-right');
let left = document.getElementById('arr-left');
let cur = 1;
let att = "img/about-%cur%.jpg";
let newAtt; 
right.addEventListener('click', changeIMGRight);
left.addEventListener('click', changeIMGLeft);



function changeIMGRight (){
    
    cur++;
    
    if (cur > 5){
        cur = 1;
        newAtt =  att.replace('%cur%' , cur);
        img.src = newAtt;
        
    } else {
        newAtt =  att.replace("%cur%" , cur);
        img.src = newAtt;
        
    }
}

function changeIMGLeft (){
    
    cur--;
    if (cur < 1){
        cur = 5;
        newAtt =  att.replace('%cur%' , cur);
        img.src = newAtt;
    } else {
        newAtt =  att.replace('%cur%' , cur);
        img.src = newAtt;
    }
}


