import { useContext } from "react"
import { UserStatus } from "../App.js"
import Button from "./Button.jsx"

export default function SubPage () {
  const [signedIn, setSignedIn] = useContext(UserStatus)
  return (
    <>
      <h2>SubPage</h2>    
     <Button/>
    </>
  )
}