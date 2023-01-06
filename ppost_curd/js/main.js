import apiPost from "./api/apiPost";
import { debounce } from "lodash";
import {
  setTextContent,
  setImages,
  parseDateToNumber,
  tructContentText,
  selectIdElment,
} from "./utils";

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

function renderListPost(data) {
  if (!Array.isArray(data) && data.length == 0) return;
  const getElmentPostId = selectIdElment("postsList");
  if (!getElmentPostId) return;

  getElmentPostId.textContent = "";

  data.forEach((item, idex) => {
    const elementLi = renderElmentLi(item);
    getElmentPostId.appendChild(elementLi);
  });
}

async function handleBaseParams(filterName, filterValue) {
  const url = new URL(window.location);
  url.searchParams.set(filterName, filterValue);
  if (filterName === "title_like") url.searchParams.set("_page", 1);
  history.pushState({}, "", url);
  try {
    let queryParams = new URLSearchParams(window.location.search);
    const { data, pagination } = await apiPost.getAll(queryParams);
    renderListPost(data);
    renderPaginate(pagination);
  } catch (error) {
    console.log("looix 2");
  }
}

function handleClickPrev(event) {
  event.preventDefault();
  const getIdPaginateUl = selectIdElment("postsPagination");
  if (!getIdPaginateUl) return false;
  const page = getIdPaginateUl.getAttribute("data-page");
  if (page <= 1) return;
  handleBaseParams("_page", Number(page) - 1);
}

function handleClickNext(event) {
  event.preventDefault();
  const getIdPaginateUl = selectIdElment("postsPagination");
  if (!getIdPaginateUl) return false;
  const page = getIdPaginateUl.getAttribute("data-page");
  const totalPage = getIdPaginateUl.getAttribute("data-total-page");
  if (page >= totalPage) return;
  handleBaseParams("_page", Number(page) + 1);
}

function renderPaginate(pagination) {
  const getIdPaginateUl = selectIdElment("postsPagination");
  if (Object.keys(pagination).length === 0) return;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);
  getIdPaginateUl.dataset.page = _page;
  getIdPaginateUl.dataset.totalPage = totalPage;
  if (_page <= 1) getIdPaginateUl.firstElementChild.classList.add("disabled");
  else getIdPaginateUl.firstElementChild.classList.remove("disabled");
  if (_page >= totalPage)
    getIdPaginateUl.lastElementChild.classList.add("disabled");
  else getIdPaginateUl.lastElementChild.classList.remove("disabled");
}

function handleClickPage(event) {
  event.preventDefault();
  const getPage = this.firstElementChild.getAttribute("data-page");
  handleBaseParams("_page", Number(getPage));
}

function initPaginate() {
  const getIdPaginateUl = selectIdElment("postsPagination");
  if (!getIdPaginateUl) return;
  let clickPrev = getIdPaginateUl.firstElementChild.firstElementChild;
  clickPrev.addEventListener("click", handleClickPrev);
  let clickNext = getIdPaginateUl.lastElementChild.lastElementChild;
  clickNext.addEventListener("click", handleClickNext);

  let clickPage = getIdPaginateUl.querySelectorAll(".page-item_1");
  for (const element of clickPage) {
    element.addEventListener("click", handleClickPage);
  }
}

function initParams() {
  const url = new URL(window.location);
  if (!url.searchParams.get("_page")) url.searchParams.set("_page", 1);
  if (!url.searchParams.get("_limit")) url.searchParams.set("_limit", 10);
  history.pushState({}, "", url);
  console.log(url);
}

function initSearchParams() {
  const getIdinputSearch = selectIdElment("search-input");
  if (!getIdinputSearch) return;
  let queryParams = new URLSearchParams(window.location.search);
  if (queryParams.get("title_like"))
    getIdinputSearch.value = queryParams.get("title_like");
  const debounceFun = debounce(
    (e) => handleBaseParams("title_like", e.target.value),
    500
  );
  getIdinputSearch.addEventListener("input", debounceFun);
}

(async () => {
  try {
    initParams();
    initPaginate();
    initSearchParams();
    let queryParams = new URLSearchParams(window.location.search);
    // dungf new URLSearchParams chuyenr toString de nhin thay params
    // queryParams.toString()
    const { data, pagination } = await apiPost.getAll(queryParams);
    renderListPost(data);
    renderPaginate(pagination);
  } catch (error) {
    console.log(error);
  }
})();
