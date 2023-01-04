import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export function setTextContent(parent, selector, text) {
  const element = parent.querySelector(selector);
  if (element) element.textContent = text;
}

export function setImages(parent, selector, img) {
  const element = parent.querySelector(selector);
  if (element) element.src = img;
  element.addEventListener("error", function () {
    element.src =
      "https://img.vn/uploads/thuvien/singa-png-20220719150401Tdj1WAJFQr.png";
  });
}

export function parseDateToNumber(parent, selector, time) {
  const element = parent.querySelector(selector);
  if (element) element.textContent = dayjs(time).fromNow();
}

export function tructContentText(description) {
  let desc =
    description.length > 100 ? `${description.slice(0, 99)}...` : description;
  return desc;
}
