import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import Detail from './pages/detail';


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/:name' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}
