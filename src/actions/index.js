import data from "../api/data";
/* 
  src/actions/index.js
*/
const receivePeople = people => ({
  type: "GET_PEOPLE_LIST",
  payload: people
});
export const loadPersonDetails = id => dispatch => {
  dispatch({
    type: "LOAD_PERSON_DETAILS",
    payload: id
  });
};
export const filterData = text => dispatch => {
  dispatch({
    type: "SEARCH_TEXT",
    payload: text
  });
};
export const loadPeopelData = () => dispatch => {
  data.getDetails(people => {
    dispatch(receivePeople(people));
  });
};
