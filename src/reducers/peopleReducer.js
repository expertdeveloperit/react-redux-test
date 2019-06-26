/* 
  src/reducers/peopleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case "GET_PEOPLE_LIST":
      return Object.assign({}, state, {
        persons: action.payload
      });
    case "LOAD_PERSON_DETAILS":
      return Object.assign({}, state, {
        person: state.persons.filter(
          person => person.id === parseInt(action.payload, 10)
        )[0]
      });

    default:
      return state;
  }
};
