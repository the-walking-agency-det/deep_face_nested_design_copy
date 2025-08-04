import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ContentPage from './pages/ContentPage';
import CardsPage from './pages/CardsPage';
import FormPage from './pages/FormPage';
import GridPage from './pages/GridPage';
import CardDetailPage from './pages/CardDetailPage';
import TypographyPage from './pages/TypographyPage';
import IconographyPage from './pages/IconographyPage';
import MediaPage from './pages/MediaPage';

function App() {

  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <nav className="bg-white dark:bg-gray-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
                  DEEP_FACE
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/content"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Content
                </Link>
                <Link
                  to="/cards"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cards
                </Link>
                <Link
                  to="/form"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Form
                </Link>
                <Link
                  to="/grid"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Grid
                </Link>
                <Link
                  to="/typography"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Typography
                </Link>
                <Link
                  to="/iconography"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Iconography
                </Link>
                <Link
                  to="/media"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Media
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/cards/:id" element={<CardDetailPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/iconography" element={<IconographyPage />} />
          <Route path="/media" element={<MediaPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;