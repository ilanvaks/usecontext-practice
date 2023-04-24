// 1) import useContext
import { useContext } from "react"
// 2) import userText
import { UserStatus } from "../App.js"

export default function Button () {
  // 3) use UserText
  const[signedIn, setSignedIn] = useContext(UserStatus)
  return (
    <>
    <button onClick={ () => setSignedIn(!signedIn) }>
          {signedIn ? "Sign Out" : "Sign In"}
    </button>
    </>
  )
}