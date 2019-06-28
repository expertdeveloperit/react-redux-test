/* 
  src/reducers/peopleReducer.js
*/
const initialState = {
  peopleList:
    window && window.localStorage
      ? JSON.parse(window.localStorage.getItem('appState'))
      : []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PEOPLE_LIST':
      const data = JSON.stringify(action.payload);
      window.localStorage.setItem('appState', data);
      return {
        ...state,
        personList: action.payload,
        persons: action.payload
      };
    case 'LOAD_PERSON_DETAILS':
      return {
        ...state,
        person: state.peopleList.filter(
          person => person.id === parseInt(action.payload, 10)
        )[0]
      };

    case 'SEARCH_TEXT':
      return {
        ...state,
        persons:
          state.peopleList && action.payload != null
            ? state.peopleList.filter(obj =>
                Object.keys(obj).some(key =>
                  typeof obj[key] !== 'number'
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
