import {createContext, useReducer} from 'react'
import githubReducer from './GithubReducer'
const GithubContext = createContext()
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user:{},
    repos: [],
    loading: false,
    
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  

  
  
  // clear users from state
  // const clearUsers = () => dispatch({
  //   type: "CLEAR_USERS",
  // })
  //set loading
  // const setLoading = () => dispatch(
  //   {
  //     type:'SET_LOADING',
  //   }
  //   )

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // loading: state.loading,
        // user:state.user,
        // repos: state.repos,
        ...state,
        dispatch,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext