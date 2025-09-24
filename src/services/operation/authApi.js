import {endpoints} from '../apis';
import {apiConnector} from '../apiConnector';
import { setLoading, setToken } from "../../slices/authSlice"
import { toast } from "react-hot-toast"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

export function signUp(
  accountType,
  Name,
  email,
  password,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        Name,
        email,
        password
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}
export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })    
        console.log("LOGIN API RESPONSE............", response)
        if (!response.data.success) {   
            throw new Error(response.data.message)
        }
        dispatch(setToken(response.data.token))
        toast.success("Login Successful")
        navigate("/dashboard")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
      navigate("/Login")
    }       
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  } 
}