import axios from "axios";

export const GET_PETCENTER = "GET_PETCENTER";
export const GET_PETCENTER_LOADING = "GET_PETCENTER_LOADING";
export const GET_PETCENTER_ERROR = "GET_PETCENTER_ERROR";
export const TOTALPAGE_COUNT = "TOTALPAGE_COUNT";
export const GET_PAGE = "GET_PAGE";

export const getPetCenter = (petcenter) => ({
  type: GET_PETCENTER,
  payload: petcenter,
});
export const getPetCenterLoading = () => ({ type: GET_PETCENTER_LOADING });
export const getPetCenterError = () => ({ type: GET_PETCENTER_ERROR });
export const totalPageCount = (page) => ({
  type: TOTALPAGE_COUNT,
  payload: page,
});
export const getPage = (onepage) => ({
  type: GET_PAGE,
  payload: onepage,
});

export const getPetCenterData = (currentPage) => async (dispatch) => {
  try {
    dispatch(getPetCenterLoading());
    const { data } = await axios.get(
      `https://shielded-scrubland-70420.herokuapp.com/petcenter/all?page=${currentPage}&size=2`
    );
    dispatch(getPetCenter(data.petcenters));
    dispatch(totalPageCount(data.totalPages));
  } catch (error) {
    dispatch(getPetCenter(error));
  }
};

export const handlePageClick = (page) => (dispatch) => {
  let currentPage = page.selected + 1;
  console.log('currentPage:', currentPage);
  // dispatch(getPage(currentPage));
  getPetCenterData(currentPage);
};
