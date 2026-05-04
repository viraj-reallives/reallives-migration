import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import KyungheeUniversity from './pages/impact/KyungheeUniversity';
import IIT_Bombay_University from './pages/impact/IIT_Bombay_University';
import Chulalongkorn_University from './pages/impact/Chulalongkorn_University';
import Research_Card1 from './pages/research/Research_Card1';
import UaeBristol from './pages/research/UaeBristol';
import Santa_Clara from './pages/research/Santa_Clara';
import Albany_University from './pages/research/Albany_University';
import Uppsala_University from './pages/research/Uppsala_University';
import Individual_Research from './pages/research/Individual_Research';
import Kame_Research from './pages/research/Kame_Research';
import ScrollToTop from './pages/ScrollFunction/Scroll';

const routerBasename =
  import.meta.env.BASE_URL.replace(/\/+$/, '') || undefined;

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
    
    <ScrollToTop/>

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
            <Route path="ETH-Zurich-Workshop" element={<EthZurichWorkshop />} />
            <Route
              path="ethzurichworkshop"
              element={
                <Navigate to="/reallives/school/ETH-Zurich-Workshop" replace />
              }
            />
            <Route
              path="Navamindradhiraj-University-Workshop"
              element={<Navamindradhiraj_Unniversity />}
            />
            <Route
              path="Navamindradhiraj_Unniversity"
              element={
                <Navigate
                  to="/reallives/school/Navamindradhiraj-University-Workshop"
                  replace
                />
              }
            />
            <Route path="Kyung-Hee-University-Workshop" element={<KyungheeUniversity />} />
            <Route
              path="KyungheeUniversity"
              element={
                <Navigate
                  to="/reallives/school/Kyung-Hee-University-Workshop"
                  replace
                />
              }
            />
            <Route path="IIT-Bombay-Workshop" element={<IIT_Bombay_University />} />
            <Route
              path="IIT_Bombay_University"
              element={
                <Navigate to="/reallives/school/IIT-Bombay-Workshop" replace />
              }
            />
            <Route
              path="Chulalongkorn-University-Workshop"
              element={<Chulalongkorn_University />}
            />
            <Route
              path="Chulalongkorn_University"
              element={
                <Navigate
                  to="/reallives/school/Chulalongkorn-University-Workshop"
                  replace
                />
              }
            />
            <Route path="Korea-University-Research" element={<Research_Card1 />} />
            <Route
              path="Research_Card1"
              element={
                <Navigate
                  to="/reallives/school/Korea-University-Research"
                  replace
                />
              }
            />
            <Route path="UWE-Bristol-Research" element={<UaeBristol />} />
            <Route
              path="UaeBristol"
              element={
                <Navigate to="/reallives/school/UWE-Bristol-Research" replace />
              }
            />
            <Route
              path="Santa-Clara-University-Research"
              element={<Santa_Clara />}
            />
            <Route
              path="Santa_Clara"
              element={
                <Navigate
                  to="/reallives/school/Santa-Clara-University-Research"
                  replace
                />
              }
            />
            <Route path="SUNY-Albany-Research" element={<Albany_University />} />
            <Route
              path="Albany_University"
              element={
                <Navigate to="/reallives/school/SUNY-Albany-Research" replace />
              }
            />
            <Route
              path="Uppsala-University-Research"
              element={<Uppsala_University />}
            />
            <Route
              path="Uppsala_University"
              element={
                <Navigate
                  to="/reallives/school/Uppsala-University-Research"
                  replace
                />
              }
            />
            <Route
              path="Kallen-Tsikalas-Youth-Simulation-Research"
              element={<Individual_Research />}
            />
            <Route
              path="Individual_Research"
              element={
                <Navigate
                  to="/reallives/school/Kallen-Tsikalas-Youth-Simulation-Research"
                  replace
                />
              }
            />
            <Route
              path="KAME-Seoul-Multicultural-Research"
              element={<Kame_Research />}
            />
            <Route
              path="Kame_Research"
              element={
                <Navigate
                  to="/reallives/school/KAME-Seoul-Multicultural-Research"
                  replace
                />
              }
            />

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
            <Route path="ETH-Zurich-Workshop" element={<EthZurichWorkshop />} />
            <Route
              path="ethzurichworkshop"
              element={
                <Navigate to="/reallives/university/ETH-Zurich-Workshop" replace />
              }
            />
            <Route
              path="Navamindradhiraj-University-Workshop"
              element={<Navamindradhiraj_Unniversity />}
            />
            <Route
              path="Navamindradhiraj_Unniversity"
              element={
                <Navigate
                  to="/reallives/university/Navamindradhiraj-University-Workshop"
                  replace
                />
              }
            />
            <Route path="Kyung-Hee-University-Workshop" element={<KyungheeUniversity />} />
            <Route
              path="KyungheeUniversity"
              element={
                <Navigate
                  to="/reallives/university/Kyung-Hee-University-Workshop"
                  replace
                />
              }
            />
            <Route path="IIT-Bombay-Workshop" element={<IIT_Bombay_University />} />
            <Route
              path="IIT_Bombay_University"
              element={
                <Navigate
                  to="/reallives/university/IIT-Bombay-Workshop"
                  replace
                />
              }
            />
            <Route
              path="Chulalongkorn-University-Workshop"
              element={<Chulalongkorn_University />}
            />
            <Route
              path="Chulalongkorn_University"
              element={
                <Navigate
                  to="/reallives/university/Chulalongkorn-University-Workshop"
                  replace
                />
              }
            />
            <Route path="Korea-University-Research" element={<Research_Card1 />} />
            <Route
              path="Research_Card1"
              element={
                <Navigate
                  to="/reallives/university/Korea-University-Research"
                  replace
                />
              }
            />
            <Route path="UWE-Bristol-Research" element={<UaeBristol />} />
            <Route
              path="UaeBristol"
              element={
                <Navigate
                  to="/reallives/university/UWE-Bristol-Research"
                  replace
                />
              }
            />
            <Route
              path="Santa-Clara-University-Research"
              element={<Santa_Clara />}
            />
            <Route
              path="Santa_Clara"
              element={
                <Navigate
                  to="/reallives/university/Santa-Clara-University-Research"
                  replace
                />
              }
            />
            <Route path="SUNY-Albany-Research" element={<Albany_University />} />
            <Route
              path="Albany_University"
              element={
                <Navigate
                  to="/reallives/university/SUNY-Albany-Research"
                  replace
                />
              }
            />
            <Route
              path="Uppsala-University-Research"
              element={<Uppsala_University />}
            />
            <Route
              path="Uppsala_University"
              element={
                <Navigate
                  to="/reallives/university/Uppsala-University-Research"
                  replace
                />
              }
            />
            <Route
              path="Kallen-Tsikalas-Youth-Simulation-Research"
              element={<Individual_Research />}
            />
            <Route
              path="Individual_Research"
              element={
                <Navigate
                  to="/reallives/university/Kallen-Tsikalas-Youth-Simulation-Research"
                  replace
                />
              }
            />
            <Route
              path="KAME-Seoul-Multicultural-Research"
              element={<Kame_Research />}
            />
            <Route
              path="Kame_Research"
              element={
                <Navigate
                  to="/reallives/university/KAME-Seoul-Multicultural-Research"
                  replace
                />
              }
            />
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
            <Route path="ETH-Zurich-Workshop" element={<EthZurichWorkshop />} />
            <Route
              path="ethzurichworkshop"
              element={
                <Navigate
                  to="/reallives/homeschooler/ETH-Zurich-Workshop"
                  replace
                />
              }
            />
            <Route
              path="Navamindradhiraj-University-Workshop"
              element={<Navamindradhiraj_Unniversity />}
            />
            <Route
              path="Navamindradhiraj_Unniversity"
              element={
                <Navigate
                  to="/reallives/homeschooler/Navamindradhiraj-University-Workshop"
                  replace
                />
              }
            />
            <Route path="Kyung-Hee-University-Workshop" element={<KyungheeUniversity />} />
            <Route
              path="KyungheeUniversity"
              element={
                <Navigate
                  to="/reallives/homeschooler/Kyung-Hee-University-Workshop"
                  replace
                />
              }
            />
            <Route path="IIT-Bombay-Workshop" element={<IIT_Bombay_University />} />
            <Route
              path="IIT_Bombay_University"
              element={
                <Navigate
                  to="/reallives/homeschooler/IIT-Bombay-Workshop"
                  replace
                />
              }
            />
            <Route
              path="Chulalongkorn-University-Workshop"
              element={<Chulalongkorn_University />}
            />
            <Route
              path="Chulalongkorn_University"
              element={
                <Navigate
                  to="/reallives/homeschooler/Chulalongkorn-University-Workshop"
                  replace
                />
              }
            />
            <Route path="Korea-University-Research" element={<Research_Card1 />} />
            <Route
              path="Research_Card1"
              element={
                <Navigate
                  to="/reallives/homeschooler/Korea-University-Research"
                  replace
                />
              }
            />
            <Route path="UWE-Bristol-Research" element={<UaeBristol />} />
            <Route
              path="UaeBristol"
              element={
                <Navigate
                  to="/reallives/homeschooler/UWE-Bristol-Research"
                  replace
                />
              }
            />
            <Route
              path="Santa-Clara-University-Research"
              element={<Santa_Clara />}
            />
            <Route
              path="Santa_Clara"
              element={
                <Navigate
                  to="/reallives/homeschooler/Santa-Clara-University-Research"
                  replace
                />
              }
            />
            <Route path="SUNY-Albany-Research" element={<Albany_University />} />
            <Route
              path="Albany_University"
              element={
                <Navigate
                  to="/reallives/homeschooler/SUNY-Albany-Research"
                  replace
                />
              }
            />
            <Route
              path="Uppsala-University-Research"
              element={<Uppsala_University />}
            />
            <Route
              path="Uppsala_University"
              element={
                <Navigate
                  to="/reallives/homeschooler/Uppsala-University-Research"
                  replace
                />
              }
            />
            <Route
              path="Kallen-Tsikalas-Youth-Simulation-Research"
              element={<Individual_Research />}
            />
            <Route
              path="Individual_Research"
              element={
                <Navigate
                  to="/reallives/homeschooler/Kallen-Tsikalas-Youth-Simulation-Research"
                  replace
                />
              }
            />
            <Route
              path="KAME-Seoul-Multicultural-Research"
              element={<Kame_Research />}
            />
            <Route
              path="Kame_Research"
              element={
                <Navigate
                  to="/reallives/homeschooler/KAME-Seoul-Multicultural-Research"
                  replace
                />
              }
            />
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
