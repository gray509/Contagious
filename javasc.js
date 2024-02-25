const info= {
    elementID: "",
    position: 0,
    color: "",
    subGridCount : document.getElementById("mainGridId").childElementCount,
    count: 0
}
let timeId = 0;
const contageous = (elementID)=>//
{
    if (info.count > 1 && elementID === info.elementID)
        clearInterval(timeId);
    else
    {
        info.position = elementID;
        info.elementID = elementID;
        info.count++;
        setColor();
        transition();
        info.count++;
    }
}
const setColor =() =>// generate a randomized color
{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    info.color = "#" + randomColor;
    document.getElementById(info.elementID).style.backgroundColor = info.color;
    document.getElementById("title").style.color = info.color;
    
}
const transitionStep =() => // will transition and color the next grid
{
    if (info.position > info.subGridCount)
         info.position = 1;
    if (info.position === parseInt(info.elementID))
        {
            setColor();
        }
    const y = info.position.toString();
    document.getElementById(y).style.backgroundColor = info.color;
    info.position++;
        
}

const transition = () => // set up the start of transition
{
    info.position = parseInt(info.elementID) + 1;
    const time = 1000;
    clearInterval(timeId);
    timeId = setInterval(transitionStep,time);
}
