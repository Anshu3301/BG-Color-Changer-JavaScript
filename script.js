let body = document.querySelector('body');

let arr = Array.from(document.getElementById("outer").children);

    arr.forEach((child) => {
        child.addEventListener("click",()=>{
            body.style.backgroundColor = `${child.getAttribute("id")}`;
        })
    });
