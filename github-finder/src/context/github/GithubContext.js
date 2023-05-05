import {createContext, useReducer} from 'react'
import githubReducer from './GithubReducer'
const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user:{},
    repos: [],
    loading: false,
    
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  

  // get search results
  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    setLoading()
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const {items} = await response.json();
    // console.log(items);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
    
  };
  // get single user
  const getUser = async (login) => {
    
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if(response.status === 404){
      window.location = '/notfound'
    }else{
      const data = await response.json();
    // console.log(data);
    dispatch({
      type: "GET_USER",
      payload: data,
    });
    } 
  };

    // get user repos
    const getUserRepos = async (login) => {
    
      setLoading()
      const params = new URLSearchParams({
        sort:'created',
        per_page:10,
      })
      const response = await fetch(
        `${GITHUB_URL}/users/${login}/repos?${params}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      // console.log(items);
      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
      
    };
  // clear users from state
  const clearUsers = () => dispatch({
    type: "CLEAR_USERS",
  })
  //set loading
  const setLoading = () => dispatch(
    {
      type:'SET_LOADING',
    }
    )

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
        user:state.user,
        getUser,
        repos: state.repos,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext