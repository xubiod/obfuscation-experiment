const always_off=["localhost","xublap.student.rit.edu"];if("https:"!==location.protocol){let o=!0;always_off.forEach(t=>{location.href.includes(t)&&o&&(o=!1)}),o&&location.replace(`https:${location.href.substring(location.protocol.length)}`)}

/*

const always_off = ["localhost", "xublap.student.rit.edu"];
if (location.protocol !== 'https:') {
    let enforce = true;
    always_off.forEach(e => {
        if (location.href.includes(e) && enforce) enforce = false;
    });
    if (enforce) location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

 */