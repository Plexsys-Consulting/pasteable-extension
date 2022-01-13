import TopBar from './components/TopBar';
import SidebarViews from './components/SidebarViews';
import { preventBubble } from './functions';
import Context from './contexts';

export default () => {
  return (
    <Context>
      <div className='flex flex-col w-full h-full' onClick={e=>preventBubble(e)}>
        <TopBar />
        <SidebarViews />
      </div>
    </Context>
  );
}