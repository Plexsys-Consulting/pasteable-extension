import { useViewContext } from "../../contexts/ViewContext";
import CreateMap from "./CreateMap";
import EditMaps from "./EditMaps";
import RunCopy from "./RunCopy";
import RunPaste from "./RunPaste";

const SidebarViews = () => {
    const [ showView ] = useViewContext();
    switch(showView){
        case "create": return <CreateMap />;
        case "run-copy": return <RunCopy />; 
        case "run-paste": return <RunPaste />;
        case "edit": return <EditMaps />;
        default: return <CreateMap />;
    }
};

export default SidebarViews;