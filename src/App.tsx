import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage';
import HistoryPage from './components/HistoryPage';

const App = () => {
    return (
        <div className={'main-wrapper'}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/user/:userId" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
