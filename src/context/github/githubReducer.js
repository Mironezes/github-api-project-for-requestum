import { 
  CLEAR_SEARCH, 
  CLEAR_USER, 
  GET_USER_REPS, 
  GET_USER, 
  GET_REPO, 
  SEARCH_USERS, 
  SET_LOADING,
  SET_REPOS_SEARCH, 
  SET_USERS_SEARCH, 
  SEARCH_REPOS, 
  GET_PREV_REQUEST} from "../actionTypes"

  
const handlers = {
  [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, isLoading: false }),
  [SEARCH_REPOS]: (state, {payload}) => ({...state, repos: payload, isLoading: false }),

  [GET_USER]: (state, {payload}) => ({...state, user: payload, isLoading: false }),
  [GET_USER_REPS]: (state, {payload}) => ({...state, userRepos: payload, isLoading: false }),

  [GET_REPO]: (state, {payload}) => ({...state, repo: payload, isLoading: false }),

  [SET_REPOS_SEARCH]: state => ({...state, isReposSearch: !state.isReposSearch }),
  [SET_USERS_SEARCH]: state => ({...state, isUsersSearch: !state.isUsersSearch }),

  [SET_LOADING]: state => ({...state, isLoading: true }),
  [GET_PREV_REQUEST]: (state, {payload}) => ({...state, prevRequests: [...state.prevRequests, ...payload] }),

  [CLEAR_SEARCH]: state => ({...state, users: [], repos: [], prevRequests: []}),
  [CLEAR_USER]: state => ({...state, user: [], userRepos: []}),

  DEFAULT: state => state
}

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state,action)
}