//All Functions Here
function GoogleSearchActivate() {
    SearchSwtBTN[0].style.backgroundColor = SrcSelectedColor;
    SearchSwtBTN[1].style.backgroundColor = SrcNonSelectedColor;
    SrcSwtNum = 0;
    if (SearchSwtBTN[0].style.backgroundColor = SrcSelectedColor) {
        localStorage.setItem("SelectedSrcEng", JSON.stringify(SearchSwtBTN[0].id))
    }
}

function YouTubeSearchActivate(e) {
    SearchSwtBTN[1].style.backgroundColor = SrcSelectedColor;
    SearchSwtBTN[0].style.backgroundColor = SrcNonSelectedColor;
    SrcSwtNum = 1;
    if (SearchSwtBTN[1].style.backgroundColor = SrcSelectedColor) {
        localStorage.setItem("SelectedSrcEng", JSON.stringify(SearchSwtBTN[1].id));
    }
}

function SearchGYT() {
    if (SearchVal.value != "") {
        if (SrcSwtNum != 1) {
            window.open(`https://www.google.co.in/search?q=${SearchVal.value}`)
        } else {
            window.open(`https://www.youtube.com/results?search_query=${SearchVal.value}`)
        }
    } else {
        SearchVal.style.border = "2px solid red";
    }
}

let Three = "";
// Show Elements 
function ShowCusURLs() {
    CusURLHtml = [];
    let OldDataOfCusURLHTML = localStorage.getItem("SavedLinks");
    if (OldDataOfCusURLHTML == null) {
        SavedData = [];
    } else {
        SavedData = JSON.parse(OldDataOfCusURLHTML);
    }

    Array.from(SavedData).forEach(function(ele, ind) {
        if (ele.Name.length >= 14) {
            Three = "..."
        } else {
            Three = "";
        }
        CusURLHtml += `<div class="CusLinkElets">
        <a href="${ele.Link}" class="CurMaiEleLinks" id="" target="_blank">${ele.Name.slice(0, 14)+ Three}</a>
        <div id="${ind}" onclick="DeleteEle(this.id)" class="Dltation"></div>
        </div>`
    });
    Array.from(Dltation).forEach(function(ele, ind) {
        if (Dltation[ind].style.display != "none") {
            Dltation[ind].style.display = "inline-block";
        } else {
            Dltation[ind].style.display = "none"
        }
    })
    MainCusCont.innerHTML = CusURLHtml;
}
//Deletation
function DeleteEle(i) {
    let OldDataOfCusURLHTML = localStorage.getItem("SavedLinks");
    if (OldDataOfCusURLHTML == null) {
        SavedData = [];
    } else {
        SavedData = JSON.parse(OldDataOfCusURLHTML);
    };
    SavedData.splice(i, 1);
    localStorage.setItem("SavedLinks", JSON.stringify(SavedData));
    ShowCusURLs();
}
//Adding Ele After Checking
function InputEle() {
    if (CstmURLInP.children[0].value != "" && CstmURLInP.children[1].value != "") {
        let LinkWithFun;
        let LinkByDflt;
        let TempLink = {
            Name: CstmURLInP.children[0].value,
            Link: mainLink
        }
        let OldDataOfCusURLHTML = localStorage.getItem("SavedLinks");
        if (OldDataOfCusURLHTML == null) {
            SavedData = [];
        } else {
            SavedData = JSON.parse(OldDataOfCusURLHTML);
        }
        SavedData.push(TempLink);
        localStorage.setItem("SavedLinks", JSON.stringify(SavedData));
        ShowCusURLs();
        CstmURLInP.children[0].style.borderColor = "Black";
        CstmURLInP.children[1].style.borderColor = "Black";
        CstmURLInP.children[0].value = "";
        CstmURLInP.children[1].value = "";
    } else if (CstmURLInP.children[0].value === "") {
        CstmURLInP.children[0].style.borderColor = "Red";
        CstmURLInP.children[1].style.borderColor = "Black";
        CstmURLInP.children[0].focus();
    } else if (CstmURLInP.children[1].value === "") {
        CstmURLInP.children[1].style.borderColor = "Red";
        CstmURLInP.children[0].style.borderColor = "Black";
        CstmURLInP.children[1].focus();
    } else {
        CstmURLInP.children[0].style.borderColor = "Red";
        CstmURLInP.children[1].style.borderColor = "Red";
    }
}

//Color Variabled Here
let SrcSelectedColor = "#005c9d";
let SrcNonSelectedColor = "transparent";

//Create Variables Here
let moreOptInNavTopBTN = document.getElementsByClassName("moreOptInNavTopBTN");
let LinkPageContnr = document.getElementById("LinkPageContnr");
let CurMaiEleLinks = document.getElementsByClassName("CurMaiEleLinks");
let CstmURLInP = document.getElementById("CstmURLInP");
let Lines = document.getElementsByClassName("Lines");
let nav = document.querySelector("nav");
let CLIWP = document.getElementsByClassName("CLIWP");
let SearchSwtBTN = document.getElementsByClassName("SearchSwtBTN");
let topNavLinks = document.getElementsByClassName("topNavLinks");
let WinSwtchrBTNs = document.getElementsByClassName("WinSwtchrBTNs");
let MainCusCont = document.getElementById("MainCusCont");
let Dltation = document.getElementsByClassName("Dltation");
let CusLinkElets = document.getElementsByClassName("CusLinkElets");
let ClickEve = document.getElementsByClassName("ClickEve");
let topBottomNavLinks = document.getElementsByClassName("topBottomNavLinks");
let SearchVal = SearchSwtBTN[0].parentElement.children[2];
let SrcSwtNum = 0;
let DataMainArray = [];
let a = 1;
let CusURLHtml = [];
let SavedData = [];

//Default Values
let SavedSrcEn = localStorage.getItem("SelectedSrcEng");
if (SavedSrcEn == null) {
    GoogleSearchActivate();
} else if (SavedSrcEn == `"YouTubeSltctBTN"`) {
    YouTubeSearchActivate();
} else if (SavedSrcEn == `"GoogleSltctBTN"`) {
    GoogleSearchActivate();
}
ShowCusURLs();
WinSwtchrBTNs[0].style.height = "0.55rem";

//Make Array and object Here
let IconLinksName = ["Google", "YouTube", "Facebook", "Instagram", "WhatsApp", "Twitter", "Gmail", "Telegram", "GutHub", "Translate", "YT Studio", "Paytm", "Flipkart", "Amazon", "OLX", "FileHippo", "Softonic", "9Apps"];
let IconLinkImg = ["Files/Google_Search.png", "Files/YouTube.png", "Files/Facebook.png", "Files/Instagram.png", "Files/WhatsApp.png", "Files/Twitter.png", "Files/Gmail.png", "Files/Telegram.png", "Files/GitHub.png", "Files/Translate.png", "Files/YTStudio.png", "Files/Paytm.png", "Files/Flipkart.png", "Files/Amazon.png", "Files/OLX.png", "Files/Filehippo.png", "Files/Softonic.png", "Files/9Apps.png"]
let IconLinks = [`https://www.google.com/`, `https://www.youtube.com/`, `https://www.facebook.com/`, `https://www.instagram.com/`, `https://web.whatsapp.com/`, `https://twitter.com/`, `https://mail.google.com/`, `https://web.telegram.org/`, `https://github.com`, `https://translate.google.com/`, `https://studio.youtube.com/`, `https://paytm.com/`, `https://www.flipkart.com/`, `https://www.amazon.in/`, `https://www.olx.com/`, `http://www.filehippo.com/`, `http://en.softonic.com/`, `http://www.9apps.com/`];



//Add Event Listener Here
//Event Listener To View More On nav Bar Top
moreOptInNavTopBTN[0].addEventListener("click", () => {
    if (nav.style.height != "8rem") {
        nav.style.height = "8rem";
        Lines[0].style.transform = "translateY(0px) rotate(45deg)";
        Lines[1].style.transform = "translateY(0px) rotate(-45deg)";
    } else {
        nav.style.height = "4rem";
        Lines[0].style.transform = "translateY(-5px) rotate(0deg)";
        Lines[1].style.transform = "translateY(5px) rotate(0deg)";
        topNavLinks[0].parentElement.parentElement.children[0].children[5].style.display = "none";
        Array.from(Dltation).forEach(function(ele, ind) {
            Dltation[ind].style.display = "none"
        })

    }
});

//Event For Search
SearchSwtBTN[0].addEventListener("click", GoogleSearchActivate)
SearchSwtBTN[1].addEventListener("click", YouTubeSearchActivate)

//Event For Final User Search 
SearchSwtBTN[1].parentElement.lastElementChild.addEventListener("click", SearchGYT)

SearchVal.addEventListener("keypress", (e) => {
    if (e.keyCode != 13) {} else {
        SearchGYT();
    }
    SearchVal.style.border = "2px solid skyBlue";
})

//Event For Link Win Switch
WinSwtchrBTNs[0].addEventListener("click", (e) => {
    LinkPageContnr.style.marginLeft = "0rem";
    WinSwtchrBTNs[0].style.height = "0.55rem";
    WinSwtchrBTNs[1].style.height = "0.4rem";
})
WinSwtchrBTNs[1].addEventListener("click", (e) => {
    LinkPageContnr.style.marginLeft = "-64rem";
    WinSwtchrBTNs[0].style.height = "0.4rem";
    WinSwtchrBTNs[1].style.height = "0.55rem";
})

//Event For PopUp Add URL Input
topNavLinks[5].addEventListener("click", () => {
    topNavLinks[0].parentElement.parentElement.children[0].children[5].style.display = "flex";
    CstmURLInP.children[0].focus();
})

let mainLink = "";

//Event For Final Add BTN
CstmURLInP.children[2].addEventListener("click", () => {
    let OldDataOfCusURLHTML = localStorage.getItem("SavedLinks");
    if (OldDataOfCusURLHTML == null) {
        SavedData = [];
    } else {
        SavedData = JSON.parse(OldDataOfCusURLHTML);
    }
    if (SavedData.length < "30") {
        let Val = CstmURLInP.children[1].value;
        let StyledVal = Val.toLowerCase();
        if (StyledVal.includes("https://") && StyledVal.includes(".")) {
            console.log("Yes");
            mainLink = CstmURLInP.children[1].value;
            InputEle();
        } else if (CstmURLInP.children[0].value === "") {
            CstmURLInP.children[0].style.borderColor = "Red";
            CstmURLInP.children[1].style.borderColor = "Black";
            CstmURLInP.children[0].focus();
        } else if (CstmURLInP.children[1].value === "") {
            CstmURLInP.children[1].style.borderColor = "Red";
            CstmURLInP.children[0].style.borderColor = "Black";
            CstmURLInP.children[1].focus();
        } else if (StyledVal.includes(".")) {
            mainLink = `https://${CstmURLInP.children[1].value}`;
            InputEle();
        } else if (!StyledVal.includes(".")) {
            CstmURLInP.children[1].style.borderColor = "Red";
        } else {
            CstmURLInP.children[0].style.borderColor = "Red";
            CstmURLInP.children[1].style.borderColor = "Red";
        }
    }

});

topBottomNavLinks[1].addEventListener("click", () => {
    Array.from(Dltation).forEach(function(ele, ind) {
        Dltation[ind].style.display = "inline-block"
    })
})

//ForLoops For Add Images and Text in Links
for (let i = 0; i < CLIWP.length; i++) {
    CLIWP[i].firstElementChild.setAttribute("src", IconLinkImg[i])
    CLIWP[i].lastElementChild.textContent = IconLinksName[i];
    CLIWP[i].setAttribute("href", IconLinks[i])
}

for (let i = 0; i < ClickEve.length; i++) {
    ClickEve[i].addEventListener("click", function(e) {
        ClickEve[i].classList.add("ClickInAni");
        setTimeout(() => {
            ClickEve[i].classList.remove("ClickInAni")
            ClickEve[i].classList.add("ClickOutAni")
            ClickEve[i].classList.remove("ClickOutAni")
        }, 200);
    })
}
