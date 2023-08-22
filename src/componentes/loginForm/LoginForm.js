import { useLogin } from "../../hooks/useLogin";
import Spinner from 'react-bootstrap/Spinner';
import "./LoginForm.css"

export const LoginForm = ()=>{ 
  const { onFocusHandler,
          onBlurHandler,
          isLoading, 
          startSession} = useLogin()    
   
  return(
    <>
      {                   
        isLoading   ?
          <Spinner className="spinner" animation="border" />
                    :
          <>                            
            <div className="logoContainer">
              <img className="logoImage" src="https://i.postimg.cc/bNy9QWtG/logo.jpg"/>
            </div>
                              
            <div className="tutorialMessageContainerLogin">
              <p className="tutorialMessageLogin">Secret chat is a private chat encrypted end to end with private and public keys SHA256</p>
            </div>   
                                          
            <div className="formContainerLogin">
              <form className="formLogin" onSubmit={startSession}>                        
                <input className="nickNameInputLogin" name="nickNameInput" type="text" placeholder="Insert a nick name" autoComplete="off" autoCapitalize="none"  onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
                <button className="startSessionButtonLogin" type="submit">Start session</button>
              </form>                                        
            </div>
          </>      
      }
    </>        
  )
}