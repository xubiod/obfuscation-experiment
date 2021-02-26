'use strict';
const always_off = ["localhost", "xublap.student.rit.edu"];
if ("https:" !== location.protocol) {
  let o = true;
  always_off.forEach((t) => {
    if (location.href.includes(t) && o) {
      /** @type {boolean} */
      o = false;
    }
  });
  if (o) {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
}
;