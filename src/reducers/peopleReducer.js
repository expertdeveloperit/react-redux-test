/* 
  src/reducers/peopleReducer.js
*/
export default (state = {}, action) => {
  console.log("action", action.payload);
  const regex = new RegExp(action.text, "i");
  switch (action.type) {
    case "GET_PEOPLE_LIST":
      const data = JSON.stringify(action.payload);
      window.localStorage.setItem("appState", data);
      return {
        ...state,
        persons: action.payload
      };
    case "LOAD_PERSON_DETAILS":
      return {
        ...state,
        person: state.persons.filter(
          person => person.id === parseInt(action.payload, 10)
        )[0]
      };

    case "SEARCH_TEXT":
      const appState = window.localStorage.getItem("appState");
      const personsData = JSON.parse(appState);
      console.log("state", state.persons);
      return {
        ...state,
        persons:
          personsData && action.payload != null
            ? personsData.filter(obj =>
                Object.keys(obj).some(key =>
                  typeof obj[key] != "number"
                    ? obj[key].includes(action.payload)
                    : obj[key].toString().includes(action.payload)
                )
              )
            : state.persons
      };
    default:
      return state;
  }
};
