import ReactDOM from 'react-dom';
import Main from './components/Main';
import serviceWorkerUnregister from 'config/serviceWorker';
import 'typeface-roboto';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorkerUnregister();
