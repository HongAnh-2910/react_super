
import {
  setTextContent,
  setImages,
  parseDateToNumber,
  tructContentText,
  selectIdElment,
} from "../utils";

function renderElmentLi(item) {
    if (!item) return;
    const getTemlateId = selectIdElment("postItemTemplate");
    if (!getTemlateId) return;
    const liElement = getTemlateId.content.firstElementChild.cloneNode(true);
    setTextContent(liElement, '[data-id="title"]', item.title);
  
    setTextContent(liElement, '[data-id="author"]', item.author);
    setImages(liElement, '[data-id="thumbnail"]', item.imageUrl);
    parseDateToNumber(liElement, '[data-id="timeSpan"]', item.createdAt);
    setTextContent(
      liElement,
      '[data-id="description"]',
      tructContentText(item.description)
    );
    return liElement;
  }
  
  export function renderListPost(ElementSelect ,data) {
    if (!Array.isArray(data) && data.length == 0) return;
    const getElmentPostId = selectIdElment(ElementSelect);
    if (!getElmentPostId) return;
  
    getElmentPostId.textContent = "";
  
    data.forEach((item) => {
      const elementLi = renderElmentLi(item);
      getElmentPostId.appendChild(elementLi);
    });
  }