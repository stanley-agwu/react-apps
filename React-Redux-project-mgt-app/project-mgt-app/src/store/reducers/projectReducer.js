const initState = {
  projects: [
    {id: '1', title: 'search for happiness', content: 'Let us make some happy little clouds in our world.'},
    {id: '2', title: 'Bring the artist', content: 'We artists are a different breed of people.'},
    {id: '3', title: 'bunch of people', content: 'We are a happy bunch.'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state
    default:
      return state
  }
};

export default projectReducer;