import { debounce } from "lodash";
import {selectIdElment} from "../utils"
export function initSearchParams({elementId,defaultParams,onchangeValue , titleParamsSearch}) {
    const getIdinputSearch = selectIdElment(elementId);
    if (!getIdinputSearch) return;
    if (defaultParams.get(titleParamsSearch))
      getIdinputSearch.value = defaultParams.get(titleParamsSearch);
    const debounceFun = debounce(
      (e) =>  onchangeValue?.(e.target.value),
      500
    );
    getIdinputSearch.addEventListener("input", debounceFun);
  }