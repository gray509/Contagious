const subGridCount = document.getElementById("mainGridId").childElementCount;


var changeColor =(elementID) =>
{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(elementID).style.backgroundColor = "#" + randomColor;
    return("#" + randomColor);
}

const transition =(color, elementID) =>
{
    var x = parseInt(elementID) + 1;
    const transitionStep = () =>
    {
        if (x > subGridCount)
            x = 1;
        if (x === parseInt(elementID))
            return;
        const y = x.toString();
        console.log(y);
        delayed(y,color);
        x ++;
        setTimeout(transitionStep,2000);
       
    };
    transitionStep();

}

const delayed = (y,color) =>
{
    document.getElementById(y).style.backgroundColor = color;
}

const contageous = (elementID)=>
{
    var color = changeColor(elementID);
    transition(color, elementID);
}
