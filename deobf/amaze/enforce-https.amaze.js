const always_off = ["localhost", "xublap.student.rit.edu"];
if ("https:" !== location.protocol) {
    let o = !0;
    always_off.forEach(t => {
        location.href.includes(t) && o && (o = !1)
    }), o && location.replace(`https:${location.href.substring(location.protocol.length)}`)
}