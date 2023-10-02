import { api } from "../../config/apiconfig";
import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    // category,
    // material,
    // minPrice,
    // maxPrice,
    // minDiscount,
    // sort,
    // stock,
    pageNumber,
    // pageSize,
  } = reqData;

  try {
    const { data } = await api.get(
      `/api/products?pageNumber=${pageNumber}`
    );
    console.log("product data ", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload:data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload:error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;

  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload:data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload:error.message });
  }
};
