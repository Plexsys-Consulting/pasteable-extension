import Header from 'modules/Header';
import Body from 'modules/Body';
import { preventBubble } from 'modules/common/functions';
import { ViewContext } from 'modules/common/contexts/ViewContext';

const App = () => {
  return (
    <ViewContext>
      <div className='flex flex-col w-full h-full' onClick={e=>preventBubble(e)}>
        <Header />
        <Body />
      </div>
    </ViewContext>
  );
};

export default App;