var finsh='rgb(142, 245, 17)',normal="#4a3f35",start="#b7efcd",end="#e7305b";
var num=25,spe=100;
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
   }

function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}
function swapBar(i,j)
{
    var temp=divBars.children[i].style.height;
    divBars.children[i].style.height=divBars.children[j].style.height;
    divBars.children[j].style.height=temp;
}
function colorFinish()
{
    for(var i=0;i<a.length;i++)
        a[i].style.background=finsh;
}

function disabledInput()
{
    var buttons=Array.from(document.querySelectorAll(".buttons button"));
    
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].setAttribute('disabled','on');
        buttons[i].classList.add('dis');
    }
    arrSizeInput.setAttribute('disabled','on');
    speedInput.setAttribute('disabled','on');
}

function enabledInput()
{
    var buttons=Array.from(document.querySelectorAll(".buttons button"));
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].removeAttribute('disabled');
        buttons[i].classList.remove('dis');
    }
    arrSizeInput.removeAttribute('disabled');
    speedInput.removeAttribute('disabled');
}
//get input
var arrSizeInput=document.getElementById('arrSize'),spanArrVal=document.getElementById('arrSV'),
    speedInput=document.getElementById('speed'),spanSpeedVal=document.getElementById('SV');

function updateInput()
{
    spanArrVal.textContent=num=parseInt(arrSizeInput.value);
    getArrRand();
    
}
arrSizeInput.oninput=updateInput;
speedInput.oninput=function(){
    spanSpeedVal.textContent=spe=parseInt(speedInput.value);
}

// genetete random arr

var arr=[];
var a
var divBars=document.getElementById('bars');
function clearArr()
{
    arr=[];
    a=Array.from(document.querySelectorAll('#bars .bar'));
    for(var i=0;i<a.length;i++)
        divBars.removeChild(a[i]);
}
function getArrRand()
{
    clearArr();
    for(var i=0;i<num;i++)
        arr.push(i+1);
    for(var i=0;i<num;i++)
    {
        var index=Math.floor(Math.random()*(num));
        var temp=arr[index];
        arr[index]=arr[i];
        arr[i]=temp;
    }
    
    //genetete the bars form arr
    
    for(var i=0;i<num;i++)
    {
        var bar=document.createElement('div');
        bar.classList.add('bar');
        bar.style.height=arr[i]+'vh';
        bar.style.background=normal;
        divBars.appendChild(bar);
    }
    a=Array.from(document.querySelectorAll('#bars .bar'))
}
getArrRand();


//make button to genrete new array
var randBut=document.getElementById('but');
randBut.onclick=getArrRand;



//-------------------------------------------------------starting algortioms sort----------------------------------------------------------


//1-buble sort
async function bubble_Sort(){

    disabledInput();
    var len = arr.length;
    for (var i=0; i < len; i++)
    {
        for (var j=0; j < len-i-1; j++)
        {
            a[j].style.background=start;
            a[j+1].style.background=end;
            await timer(spe);
            if (arr[j] > arr[j+1])
            {
                swap(arr, j, j+1);
                a[j].style.background=normal;
                a[j+1].style.background=normal;
                
                swapBar(j, j+1);
            }
            else
            {
                a[j].style.background=normal;
                a[j+1].style.background=normal;
            }
            
           
        }
    }
    colorFinish();
    enabledInput();
}
var bub=document.getElementById('bubble');
bub.onclick=bubble_Sort;

//2-selection sort
async function selectionSort()
{
    disabledInput();
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var min = i;
        a[i].style.background=start;
        for (var j = i + 1; j < len; j++)
         {
            if (arr[min] > arr[j])
            {
                min = j;
            }
        }
        a[min].style.background=end;
        await timer(spe);
        if (min !== i) {
            var tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;

            swapBar(i, min);
        }
        a[i].style.background=normal;
        a[min].style.background=normal;
    }
    colorFinish();
    enabledInput();
}
var sel=document.getElementById('sel');
sel.onclick=selectionSort;


//3-inserstion sort
async function insertionSort ()
{
    disabledInput();
    let length = arr.length;
    for (let i = 1; i < length; i++)
     {
        let key = arr[i];
        a[i].style.background=start;
        let j = i - 1;
        while (j >= 0 && arr[j] > key) 
        {
            a[j].style.background=end;
            arr[j + 1] = arr[j];
            swapBar(j+1,j);
            j = j - 1;
            await timer(spe);
            a[j+1].style.background=normal;
        }
        arr[j + 1] = key;
        a[i].style.background=normal;
        
    }
    colorFinish();
    enabledInput();
}

var inp=document.getElementById('in');
inp.onclick=insertionSort;