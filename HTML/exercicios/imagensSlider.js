const allImgsNodeList = document.querySelectorAll('p');
const allImgs = Array.from(allImgsNodeList);
const widthWindow = window.innerWidth;

let idx = 0;
let startPosition = allImgs[0].getBoundingClientRect().x;
let startImg = allImgs[0];

function moveImage(speed, actualPosition, actualImg, idx=0, jumpSpeed)
{
    let moverImg = setInterval(() => {

        if(!actualImg.classList.contains("visible"))
        {
            actualImg.classList.add("visible");
        }         

        if(actualPosition < widthWindow)
        {
            actualPosition+= jumpSpeed
        }   
        else
        {
            clearInterval(moverImg);
            nextImg(speed, idx, actualImg, jumpSpeed);
        }
    
        actualImg.style.marginLeft = actualPosition + 'px';            
    }, speed)
}

function nextImg(speed, idx, oldImg, jumpSpeed)
{
    oldImg.classList.remove("visible");
    console.log("invoked", idx)

    idx++;
    actualPosition = allImgs[idx]?.getBoundingClientRect().x;
    actualImg = allImgs[idx];

    if(idx < allImgs.length) moveImage(speed, actualPosition, actualImg, idx, jumpSpeed)
    else
    {
        const mainDiv = document.getElementById("main");
        
        let end = document.createElement(h2);
        mainDiv.appendChild(end);
        end.innerHTML = "FIM";
    }    
}

moveImage(25, startPosition, startImg, 0, 7);