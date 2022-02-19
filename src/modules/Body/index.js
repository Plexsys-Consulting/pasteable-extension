import { useViewContext } from "modules/common/contexts/ViewContext";
import { MapContext } from "modules/common/contexts/MapContext";
import CreateMap from "./CreateMap";
import EditMaps from "./EditMaps";
import RunCopy from "./RunCopy";
import RunPaste from "./RunPaste";

const SwitchView = () => {
    const [showView] = useViewContext();
    
    switch (showView) {
        case "create": return <CreateMap />;
        case "run-copy": return <RunCopy />;
        case "run-paste": return <RunPaste />;
        case "edit": return <EditMaps />;
        default: return <CreateMap />;
    }
}

const SidebarViews = () => {
    return (
        <MapContext>
            <SwitchView />
        </MapContext>
    )
};

export default SidebarViews;