const brandLogo = document.querySelector(".brand-logo-border");
const convertButton = document.querySelector(".article-footer button");
const textarea = document.querySelector(".article-body-textarea textarea");
const pre = document.querySelector(".article-body pre");
const inputUrl = document.querySelector("#web-url");
const linkButton = document.querySelector(".button-url button");

brandLogo.onclick = () => {
    //alert("로고 클릭 되었음.");
    //location.href = "https://papago.naver.com";
    //location.replace("https://papago.naver.com");
    location.href = "http://172.30.32.1:5500/papago/historyback.html";
}

convertButton.onclick = () => {
    pre.textContent = textarea.value;
}

textarea.onkeyup = () => {
    pre.textContent = textarea.value;
}

linkButton.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++){
        if(inputUrl.value.includes(protocols[i])){
            location.href = inputUrl.value;
            return;
        }
    }

    location.href = "https://" + inputUrl.value;
}

inputUrl.onkeypress = () => {
    if(window.event.keyCode == 13) {
        linkButton.click();
    }

}