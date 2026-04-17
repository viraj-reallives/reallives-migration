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
import SchoolHome from '@pages/school/SchoolHome';
import SchoolProducts from '@pages/school/SchoolProducts';
import SchoolChangemaker from '@pages/school/SchoolChangemaker';
import SchoolImpact from '@pages/school/SchoolImpact';
import SchoolResearch from '@pages/school/SchoolResearch';
import SchoolAbout from '@pages/school/SchoolAbout';
import SchoolContact from '@pages/school/SchoolContact';
import SchoolPricing from '@pages/school/SchoolPricing';
import SchoolFoundation from '@pages/school/SchoolFoundation';
import SchoolNewsletters from '@pages/school/SchoolNewsletters';
import SchoolTechnicalBlogs from '@pages/school/SchoolTechnicalBlogs';
import UniversityHome from '@pages/university/UniversityHome';
import UniversityProducts from '@pages/university/UniversityProducts';
import UniversityChangemaker from '@pages/university/UniversityChangemaker';
import UniversityImpact from '@pages/university/UniversityImpact';
import UniversityResearch from '@pages/university/UniversityResearch';
import UniversityPricing from '@pages/university/UniversityPricing';
import UniversityAbout from '@pages/university/UniversityAbout';
import UniversityContact from '@pages/university/UniversityContact';
import UniversityFoundation from '@pages/university/UniversityFoundation';
import UniversityNewsletters from '@pages/university/UniversityNewsletters';
import UniversityTechnicalBlogs from '@pages/university/UniversityTechnicalBlogs';
import HomeschoolerHome from '@pages/homeschooler/HomeschoolerHome';
import HomeschoolerProducts from '@pages/homeschooler/HomeschoolerProducts';
import HomeschoolerChangemaker from '@pages/homeschooler/HomeschoolerChangemaker';
import HomeschoolerImpact from '@pages/homeschooler/HomeschoolerImpact';
import HomeschoolerResearch from '@pages/homeschooler/HomeschoolerResearch';
import HomeschoolerPricing from '@pages/homeschooler/HomeschoolerPricing';
import HomeschoolerAbout from '@pages/homeschooler/HomeschoolerAbout';
import HomeschoolerContact from '@pages/homeschooler/HomeschoolerContact';
import HomeschoolerFoundation from '@pages/homeschooler/HomeschoolerFoundation';
import HomeschoolerNewsletters from '@pages/homeschooler/HomeschoolerNewsletters';
import HomeschoolerTechnicalBlogs from '@pages/homeschooler/HomeschoolerTechnicalBlogs';
import GamerHome from '@pages/gamer/GamerHome';
import GamerProducts from '@pages/gamer/GamerProducts';
import GamerAbout from '@pages/gamer/GamerAbout';
import GamerPricing from '@pages/gamer/GamerPricing';
import GamerContact from '@pages/gamer/GamerContact';
import NotFound from '@pages/NotFound';
import EthZurichWorkshop from './pages/impact/EthZurichWorkshop';
import Navamindradhiraj_Unniversity from './pages/impact/Navamindradhiraj_University'

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
            <Route index element={<SchoolHome />} />
            <Route path="products" element={<SchoolProducts />} />
            <Route path="changemaker" element={<SchoolChangemaker />} />
            <Route path="impact" element={<SchoolImpact />} />
            <Route path="research" element={<SchoolResearch />} />
            <Route path="newsletters" element={<SchoolNewsletters />} />
            <Route path="newsletters/:articleId" element={<SchoolNewsletters />} />
            <Route path="technical-blogs" element={<SchoolTechnicalBlogs />} />
            <Route path="technical-blogs/:articleId" element={<SchoolTechnicalBlogs />} />
            <Route path="pricing" element={<SchoolPricing />} />
            <Route path="about" element={<SchoolAbout />} />
            <Route path="contact" element={<SchoolContact />} />
            <Route path="foundation" element={<SchoolFoundation />} />
            <Route path="ethzurichworkshop" element={<EthZurichWorkshop/>}/>
            <Route path="Navamindradhiraj_Unniversity" element={<Navamindradhiraj_Unniversity/>}/>



          </Route>

          <Route path="/reallives/university" element={<SubSiteLayout siteKey="university" />}>
            <Route index element={<UniversityHome />} />
            <Route path="products" element={<UniversityProducts />} />
            <Route path="changemaker" element={<UniversityChangemaker />} />
            <Route path="impact" element={<UniversityImpact />} />
            <Route path="research" element={<UniversityResearch />} />
            <Route path="newsletters" element={<UniversityNewsletters />} />
            <Route path="newsletters/:articleId" element={<UniversityNewsletters />} />
            <Route path="technical-blogs" element={<UniversityTechnicalBlogs />} />
            <Route path="technical-blogs/:articleId" element={<UniversityTechnicalBlogs />} />
            <Route path="pricing" element={<UniversityPricing />} />
            <Route path="about" element={<UniversityAbout />} />
            <Route path="contact" element={<UniversityContact />} />
            <Route path="foundation" element={<UniversityFoundation />} />
          </Route>

          <Route path="/reallives/homeschooler" element={<SubSiteLayout siteKey="homeschooler" />}>
            <Route index element={<HomeschoolerHome />} />
            <Route path="products" element={<HomeschoolerProducts />} />
            <Route path="changemaker" element={<HomeschoolerChangemaker />} />
            <Route path="impact" element={<HomeschoolerImpact />} />
            <Route path="research" element={<HomeschoolerResearch />} />
            <Route path="newsletters" element={<HomeschoolerNewsletters />} />
            <Route path="newsletters/:articleId" element={<HomeschoolerNewsletters />} />
            <Route path="technical-blogs" element={<HomeschoolerTechnicalBlogs />} />
            <Route path="technical-blogs/:articleId" element={<HomeschoolerTechnicalBlogs />} />
            <Route path="pricing" element={<HomeschoolerPricing />} />
            <Route path="about" element={<HomeschoolerAbout />} />
            <Route path="contact" element={<HomeschoolerContact />} />
            <Route path="foundation" element={<HomeschoolerFoundation />} />
          </Route>

          <Route path="/reallives/gamer" element={<GamerLayout />}>
            <Route index element={<GamerHome />} />
            <Route path="about" element={<GamerAbout />} />
            <Route path="products" element={<GamerProducts />} />
            <Route path="pricing" element={<GamerPricing />} />
            <Route path="contact" element={<GamerContact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
