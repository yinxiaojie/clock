window.onload=function () {
    let clock=document.querySelector(".clock");
    let h=document.querySelector(".h");
    let m=document.querySelector(".m");
    let s=document.querySelector(".s");

    setInterval(time,1000);
    function time() {
        let now=new Date();
        let hdate=now.getHours();
        let mdate=now.getMinutes();
        let sdate=now.getSeconds();
        console.log(sdate);
        h.style.transform=`rotate(${(hdate*3600+mdate*60+sdate)/(3600*12)*360}deg)`;
        m.style.transform=`rotate(${(mdate*6)}deg)`;
        s.style.transform=`rotate(${sdate/60*360}deg)`;
    }
};