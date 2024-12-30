import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import HistoryPage from './components/HistoryPage';

const App = () => {
    return (
        <div className={'main-wrapper'}>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/user/:userId" element={<HistoryPage />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
