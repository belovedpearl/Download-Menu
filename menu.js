//select from html
let download = document.querySelector(".download-btn");
let filelink = "./Download-Menu/HMRC Starter-checklist April 2021 (1).pdf"

function timefunc(){

//      if (download.classList.contains("disable")){
//      return location.href =filelink
//    }

    //get data atribute from the html
    let timesec = download.dataset.time;
    download.classList.add('timesec')
    
    //set the timer to count down
    const counter = setInterval(() => {
        // check if timesec is > 0 to continue
        if (timesec > 0){
        timesec--
        return download.innerHTML = `Your file will download in <b>${timesec}</b> seconds`
        }
        
        // clearinterval after countdown
        clearInterval(counter)
        //set the textContent after the countdown
        // location.href = filelink
        download.textContent = `Your file is downloading...`
        // cancel setinterval
        setTimeout(() => {
            download.classList.replace('timesec', 'disable')
            download.innerHTML = `<span class="text">Download Again</span>`
        }, 3000);
    }, 1000);

    
}
download.addEventListener("click", timefunc)



//    let timer = () => {

//     //if (download.classList.contains("disable")){
//  //    return location.href =
//   // }
  

//     //get data attribute from html
//     let timesec = download.dataset.time;
//     download.classList.add('timesec')
    
//     setInterval(function(){
//         if (timesec > 0){
//         timesec--
//        return download.innerHTML = `Your file will download in <b>${timesec}</b> seconds`
//         }
//         //clearInterval(timer)
//         //location.href =  filelink
//         download.textContent = `Your file is downloading...`
//         setTimeout(() =>{
//             download.classList.replace('timesec', 'disable')
//             download.innerHTML =  `
//             <span class="text">Download Again</span>
//         `
//         }, 3000)
//     }, 1000)
//    };
   
//    // download.classList.add("hide")

//    download.addEventListener("click", timer)