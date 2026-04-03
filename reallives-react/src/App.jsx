import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import LandingLayout from './layouts/LandingLayout';
import SubSiteLayout from './layouts/SubSiteLayout';
import GamerLayout from './layouts/GamerLayout';
import Portal from './pages/Portal';
import RealLivesLanding from './pages/RealLivesLanding';
import LicenseHub from './pages/licenses/LicenseHub';
import SchoolLicense from './pages/licenses/SchoolLicense';
import UniversityLicense from './pages/licenses/UniversityLicense';
import HomeschoolerLicense from './pages/licenses/HomeschoolerLicense';
import GamerLicense from './pages/licenses/GamerLicense';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Portal />} />

          <Route element={<LandingLayout />}>
            <Route path="/reallives" element={<RealLivesLanding />} />

            <Route path="/reallives/licenses" element={<LicenseHub />} />
            <Route path="/reallives/licenses/school" element={<SchoolLicense />} />
            <Route path="/reallives/licenses/university" element={<UniversityLicense />} />
            <Route path="/reallives/licenses/homeschooler" element={<HomeschoolerLicense />} />
            <Route path="/reallives/licenses/gamer" element={<GamerLicense />} />
          </Route>

          <Route path="/reallives/school" element={<SubSiteLayout siteKey="school" />}>
            <Route index element={<div>SchoolHome placeholder</div>} />
            <Route path="products" element={<div>SchoolProducts placeholder</div>} />
            <Route path="changemaker" element={<div>SchoolChangemaker placeholder</div>} />
            <Route path="impact" element={<div>SchoolImpact placeholder</div>} />
            <Route path="research" element={<div>SchoolResearch placeholder</div>} />
            <Route path="pricing" element={<div>SchoolPricing placeholder</div>} />
            <Route path="about" element={<div>SchoolAbout placeholder</div>} />
            <Route path="contact" element={<div>SchoolContact placeholder</div>} />
          </Route>

          <Route path="/reallives/university" element={<SubSiteLayout siteKey="university" />}>
            <Route index element={<div>UniversityHome placeholder</div>} />
            <Route path="products" element={<div>UniversityProducts placeholder</div>} />
            <Route path="changemaker" element={<div>UniversityChangemaker placeholder</div>} />
            <Route path="impact" element={<div>UniversityImpact placeholder</div>} />
            <Route path="research" element={<div>UniversityResearch placeholder</div>} />
            <Route path="pricing" element={<div>UniversityPricing placeholder</div>} />
            <Route path="about" element={<div>UniversityAbout placeholder</div>} />
            <Route path="contact" element={<div>UniversityContact placeholder</div>} />
          </Route>

          <Route path="/reallives/homeschooler" element={<SubSiteLayout siteKey="homeschooler" />}>
            <Route index element={<div>HomeschoolerHome placeholder</div>} />
            <Route path="products" element={<div>HomeschoolerProducts placeholder</div>} />
            <Route path="changemaker" element={<div>HomeschoolerChangemaker placeholder</div>} />
            <Route path="impact" element={<div>HomeschoolerImpact placeholder</div>} />
            <Route path="research" element={<div>HomeschoolerResearch placeholder</div>} />
            <Route path="pricing" element={<div>HomeschoolerPricing placeholder</div>} />
            <Route path="about" element={<div>HomeschoolerAbout placeholder</div>} />
            <Route path="contact" element={<div>HomeschoolerContact placeholder</div>} />
          </Route>

          <Route path="/reallives/gamer" element={<GamerLayout />}>
            <Route index element={<div>GamerHome placeholder</div>} />
            <Route path="about" element={<div>GamerAbout placeholder</div>} />
            <Route path="products" element={<div>GamerProducts placeholder</div>} />
            <Route path="pricing" element={<div>GamerPricing placeholder</div>} />
            <Route path="contact" element={<div>GamerContact placeholder</div>} />
          </Route>

          <Route path="*" element={<div>NotFound placeholder</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
