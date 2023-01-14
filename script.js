setInterval(() => {
    d= new Date();
    ht = d.getHours();
    mt = d.getMinutes();
    st = d.getSeconds();
    hrot = 30*ht + mt/2;
    mrot = 6*mt;
    srot = 6*st;

    hour.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
},1000);