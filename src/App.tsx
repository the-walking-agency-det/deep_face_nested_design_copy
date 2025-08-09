import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import lazyLoad from './utils/lazyLoad';
import Breadcrumbs from './components/common/Breadcrumbs';
import Tour from './components/specific/Tour';

const DashboardPage = lazyLoad(() => import('./pages/DashboardPage'));
const ContentPage = lazyLoad(() => import('./pages/ContentPage'));
const CardsPage = lazyLoad(() => import('./pages/CardsPage'));
const CardDetailPage = lazyLoad(() => import('./pages/CardDetailPage'));
const FormPage = lazyLoad(() => import('./pages/FormPage'));
const GridPage = lazyLoad(() => import('./pages/GridPage'));
const TypographyPage = lazyLoad(() => import('./pages/TypographyPage'));
const IconographyPage = lazyLoad(() => import('./pages/IconographyPage'));
const MediaPage = lazyLoad(() => import('./pages/MediaPage'));
const ReleaseManagerPage = lazyLoad(() => import('./pages/ReleaseManagerPage'));
const RoyaltyTrackerPage = lazyLoad(() => import('./pages/RoyaltyTrackerPage'));
const SocialAnalyticsPage = lazyLoad(() => import('./pages/SocialAnalyticsPage'));
const ISRCManagerPage = lazyLoad(() => import('./pages/ISRCManagerPage'));
const PreSavePage = lazyLoad(() => import('./pages/PreSavePage'));
const PersonalizedPage = lazyLoad(() => import('./pages/PersonalizedPage'));
const GrantPage = lazyLoad(() => import('./pages/GrantPage'));
const AudioArtPage = lazyLoad(() => import('./pages/AudioArtPage'));
>>>>>>> origin/feat/pre-save-flow
=======
const PreSavePage = lazyLoad(() => import('./pages/PreSavePage'));
const PersonalizedPage = lazyLoad(() => import('./pages/PersonalizedPage'));
const GrantPage = lazyLoad(() => import('./pages/GrantPage'));
const AudioArtPage = lazyLoad(() => import('./pages/AudioArtPage'));
>>>>>>> origin/feat/pre-save-flow

function App() {
  return (
    <Router>
      <Tour />
      <div className="bg-light-background dark:bg-dark-background text-light-text-primary dark:text-dark-text-primary min-h-screen">
        <nav className="bg-light-surface dark:bg-dark-surface shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
                  DEEP_FACE
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="/"
                  className="nav-dashboard text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/content"
                  className="nav-content text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Content
                </Link>
                <Link
                  to="/cards"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cards
                </Link>
                <Link
                  to="/form"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Form
                </Link>
                <Link
                  to="/grid"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Grid
                </Link>
                <Link
                  to="/typography"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Typography
                </Link>
                <Link
                  to="/iconography"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Iconography
                </Link>
                <Link
                  to="/media"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Media
                </Link>
                <Link
                  to="/releases"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Releases
                </Link>
                <Link
                  to="/analytics"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Analytics
                </Link>
                <Link
                  to="/royalties"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Royalties
                </Link>
                <Link
                  to="/isrc"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  ISRC Manager
                </Link>
                <Link
                  to="/flow/presave"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pre-Save Flow
                </Link>
                <Link
                  to="/flow/personalized"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Personalized Flow
                </Link>
                <Link
                  to="/flow/grants"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Grant Flow
                </Link>
                <Link
                    to="/flow/audio-art"
                    className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                    Audio Art Flow
>>>>>>> origin/feat/pre-save-flow
                </Link>
=======
                  to="/flow/presave"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pre-Save Flow
                </Link>
                <Link
                  to="/flow/personalized"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Personalized Flow
                </Link>
                <Link
                  to="/flow/grants"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Grant Flow
                </Link>
                <Link
                    to="/flow/audio-art"
                    className="text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                    Audio Art Flow
>>>>>>> origin/feat/pre-save-flow
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="p-4 sm:p-6 lg:p-8">
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/cards/:id" element={<CardDetailPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/grid" element={<GridPage />} />
            <Route path="/royalties" element={<RoyaltyTrackerPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/iconography" element={<IconographyPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/analytics" element={<SocialAnalyticsPage />} />
            <Rout
                e path="/releases" element={<ReleaseManagerPage />} />
            <Route path="/isrc" element={<ISRCManagerPage />} />
            <Route path="/flow/presave" element={<PreSavePage />} />
            <Route path="/flow/personalized" element={<PersonalizedPage />} />
            <Route path="/flow/grants" element={<GrantPage />} />
            <Route path="/flow/audio-art" element={<AudioArtPage />} />
>>>>>>> origin/feat/pre-save-flow
=======
            <Route path="/flow/presave" element={<PreSavePage />} />
            <Route path="/flow/personalized" element={<PersonalizedPage />} />
            <Route path="/flow/grants" element={<GrantPage />} />
            <Route path="/flow/audio-art" element={<AudioArtPage />} />
>>>>>>> origin/feat/pre-save-flow
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
