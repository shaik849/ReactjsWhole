import { createContext } from 'react'

const UsersContext = createContext({
  user : "default user",
  login : "default login",
})


export default UsersContext