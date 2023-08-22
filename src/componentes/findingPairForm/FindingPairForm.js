import { useFindingPair } from '../../hooks/useFindingPair';
import { AiOutlineCopy } from "react-icons/ai";
import "./FindingPairForm.css"
 
export const FindingPairForm = ()=>{ 
  const { onFocusHandler,
          onBlurHandler,
          tryPairingHandler,
          copyToClipboard,
          copyPublicKeyText} = useFindingPair() 
                     
  return( 
    <div className="formContainerFindingPair">                    
      <form className="formFindingPair" onSubmit={tryPairingHandler}>
      <input className="nickNameInputFindingPair" type="text" name="findingPairInput" placeholder="Insert a public key of your peer" autoComplete="off" onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
        <button className="startChatButtonFindingPair" type="submit" >Start chat</button>
        <div className="copyPublicKeyContainer" onClick={copyToClipboard}>
          <AiOutlineCopy className="copyIcon" />
          <p className="copyPublicKeyText">{copyPublicKeyText}</p>
        </div>
      </form>                                        
    </div>             
  )
}