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
  // atack event
  liElement.firstElementChild.addEventListener("click", function (e) {
    let menu = liElement.firstElementChild.querySelector('[data-menu="menu"]');
    if (menu && menu.contains(e.target)) return;
    window.location.assign(`/post-detail.html?id=${item?.id}`);
  });

  const elementEdit =
    liElement.firstElementChild.querySelector('[data-id="edit"]');
  elementEdit.addEventListener("click", function () {
    window.location.assign(`/add-edit-post.html?id=${item?.id}`);
  });
  return liElement;
}

export function renderListPost(ElementSelect, data) {
  if (!Array.isArray(data) && data.length == 0) return;
  const getElmentPostId = selectIdElment(ElementSelect);
  if (!getElmentPostId) return;

  getElmentPostId.textContent = "";

  data.forEach((item) => {
    const elementLi = renderElmentLi(item);
    getElmentPostId.appendChild(elementLi);
  });
}
