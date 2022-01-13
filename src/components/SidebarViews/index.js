import { useContext } from "react";
import { Context } from "../../contexts";
import Create from "./Create";
import Edit from "./Edit";
import RunCopy from "./RunCopy";
import RunPaste from "./RunPaste";

export default _ => {
    const [ showView, setShowView ] = useContext(Context);
    switch(showView){
        case "create": return <Create />;
        case "run-copy": return <RunCopy />; 
        case "run-paste": return <RunPaste />;
        case "edit": return <Edit />;
        default: return <h1>We don't know what's happening lol</h1>;
    }
}