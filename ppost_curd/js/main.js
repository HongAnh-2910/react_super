import apiPost from "./api/apiPost";
import {
  setTextContent,
  setImages,
  parseDateToNumber,
  tructContentText,
} from "./utils";

function renderElmentLi(item) {
  if (!item) return;
  const getTemlateId = document.getElementById("postItemTemplate");
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

function renderListPost(data) {
  if (!Array.isArray(data) && data.length == 0) return;
  const getElmentPostId = document.getElementById("postsList");
  if (!getElmentPostId) return;
  data.forEach((item, idex) => {
    const elementLi = renderElmentLi(item);
    getElmentPostId.appendChild(elementLi);
  });
}

function handleClickPrev(event) {
  event.preventDefault();
  console.log("123");
}

function handleClickNext(event) {
  event.preventDefault();
  console.log("456");
}

function initPaginate() {
  const getIdPaginateUl = document.getElementById("postsPagination");
  if (!getIdPaginateUl) return;
  let clickPrev = getIdPaginateUl.firstElementChild.firstElementChild;
  clickPrev.addEventListener("click", handleClickPrev);
  let clickNext = getIdPaginateUl.lastElementChild.lastElementChild;
  clickNext.addEventListener("click", handleClickNext);
}

function initParams() {
  const url = new URL(window.location);
  if (!url.searchParams.get("_page")) url.searchParams.set("_page", 1);
  if (!url.searchParams.get("_limit")) url.searchParams.set("_limit", 10);
  history.pushState({}, "", url);
}

(async () => {
  try {
    initPaginate();
    initParams();
    let queryParams = new URLSearchParams(window.location.search);
    // dungf new URLSearchParams chuyenr toString de nhin thay params
    // queryParams.toString()
    const { data, paginate } = await apiPost.getAll(queryParams);
    renderListPost(data);
  } catch (error) {
    console.log(error);
  }
})();
