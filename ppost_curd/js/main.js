import apiPost from "./api/apiPost";
import {
   renderListPost , initSearchParams , renderPaginate , initPaginate
} from "./utils";



async function handleBaseParams(filterName, filterValue) {
  const url = new URL(window.location);
  url.searchParams.set(filterName, filterValue);
  if (filterName === "title_like") url.searchParams.set("_page", 1);
  history.pushState({}, "", url);
  try {
    let queryParams = new URLSearchParams(window.location.search);
    const { data, pagination } = await apiPost.getAll(queryParams);
    renderListPost('postsList' ,data);
    renderPaginate('postsPagination' , pagination);
  } catch (error) {
    console.log("looix 2");
  }
}


(async () => {
  try {
    const url = new URL(window.location);
    if (!url.searchParams.get("_page")) url.searchParams.set("_page", 1);
    if (!url.searchParams.get("_limit")) url.searchParams.set("_limit", 10);
    history.pushState({}, "", url);
    const queryParams = url.searchParams

    initSearchParams({
      elementId:'search-input',
      defaultParams: queryParams,
      onchangeValue: (value) => handleBaseParams('title_like' , value),
      titleParamsSearch : 'title_like'
    });

    initPaginate({
      elementId:'postsPagination',
      defaultParams: queryParams,
      onchangeValue: (value) => handleBaseParams('_page' , value),
    });
    // dungf new URLSearchParams chuyenr toString de nhin thay params
    // queryParams.toString()
    const { data, pagination } = await apiPost.getAll(queryParams);
    renderListPost('postsList' , data);
    renderPaginate('postsPagination' , pagination);
  } catch (error) {
    console.log(error);
  }
})();
