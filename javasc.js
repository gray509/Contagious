const info= {
    elementID: "",
    position: 0,
    color: "",
    subGridCount : document.getElementById("mainGridId").childElementCount
}
const contageous = (elementID)=>
{
    info.position = elementID;
    info.elementID = elementID;
    setColor();
    transition();
}
const setColor =() =>
{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    info.color = "#" + randomColor;
    document.getElementById(info.elementID).style.backgroundColor = info.color;
    document.getElementById("title").style.color = info.color;
    
}

const transitionStep =() =>
{
    if (info.position > info.subGridCount)
         info.position = 1;
    if (info.position === parseInt(info.elementID))
        return;
    const y = info.position.toString();
    document.getElementById(y).style.backgroundColor = info.color;
    info.position++;
}

const transition = () =>
{
    info.position = parseInt(info.elementID) + 1;
    const time = 200;
    let id = setInterval(transitionStep,time);
    setTimeout(() => {
        clearInterval(id);
    }, time * 9);
}