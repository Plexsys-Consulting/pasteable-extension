import TopBar from './components/TopBar';
import SidebarViews from './components/SidebarViews';
import { preventBubble } from './functions';
import { ViewContext } from './contexts/ViewContext';

const App = () => {
  return (
    <ViewContext>
      <div className='flex flex-col w-full h-full' onClick={e=>preventBubble(e)}>
        <TopBar />
        <SidebarViews />
      </div>
    </ViewContext>
  );
};

export default App;