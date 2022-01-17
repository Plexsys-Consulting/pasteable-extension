import { usePasteableContext } from "../../contexts";
import Create from "./Create";
import Edit from "./Edit";
import RunCopy from "./RunCopy";
import RunPaste from "./RunPaste";

export default () => {
    const [ showView ] = usePasteableContext();
    switch(showView){
        case "create": return <Create />;
        case "run-copy": return <RunCopy />; 
        case "run-paste": return <RunPaste />;
        case "edit": return <Edit />;
        default: return <Create />;
    }
}