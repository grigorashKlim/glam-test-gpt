import MainPage from './components/MainPage';
import HistoryPage from './components/HistoryPage';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

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
