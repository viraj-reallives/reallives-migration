import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LandingLayout from "./layouts/LandingLayout";
import SubSiteLayout from "./layouts/SubSiteLayout";
import GamerLayout from "./layouts/GamerLayout";
import ScrollToTop from "./pages/ScrollFunction/Scroll";

const Portal = lazy(() => import("./pages/Portal"));
const RealLivesLanding = lazy(() => import("./pages/RealLivesLanding"));
const LicenseHub = lazy(() => import("./pages/licenses/LicenseHub"));
const SchoolLicense = lazy(() => import("./pages/licenses/SchoolLicense"));
const UniversityLicense = lazy(() => import("./pages/licenses/UniversityLicense"));
const HomeschoolerLicense = lazy(() => import("./pages/licenses/HomeschoolerLicense"));
const GamerLicense = lazy(() => import("./pages/licenses/GamerLicense"));
const SchoolHome = lazy(() => import("@pages/school/SchoolHome"));
const SchoolProducts = lazy(() => import("@pages/school/SchoolProducts"));
const SchoolChangemaker = lazy(() => import("@pages/school/SchoolChangemaker"));
const SchoolImpact = lazy(() => import("@pages/school/SchoolImpact"));
const SchoolResearch = lazy(() => import("@pages/school/SchoolResearch"));
const SchoolAbout = lazy(() => import("@pages/school/SchoolAbout"));
const SchoolContact = lazy(() => import("@pages/school/SchoolContact"));
const SchoolPricing = lazy(() => import("@pages/school/SchoolPricing"));
const SchoolFoundation = lazy(() => import("@pages/school/SchoolFoundation"));
const SchoolNewsletters = lazy(() => import("@pages/school/SchoolNewsletters"));
const SchoolTechnicalBlogs = lazy(() => import("@pages/school/SchoolTechnicalBlogs"));
const UniversityHome = lazy(() => import("@pages/university/UniversityHome"));
const UniversityProducts = lazy(() => import("@pages/university/UniversityProducts"));
const UniversityChangemaker = lazy(() => import("@pages/university/UniversityChangemaker"));
const UniversityImpact = lazy(() => import("@pages/university/UniversityImpact"));
const UniversityResearch = lazy(() => import("@pages/university/UniversityResearch"));
const UniversityPricing = lazy(() => import("@pages/university/UniversityPricing"));
const UniversityAbout = lazy(() => import("@pages/university/UniversityAbout"));
const UniversityContact = lazy(() => import("@pages/university/UniversityContact"));
const UniversityFoundation = lazy(() => import("@pages/university/UniversityFoundation"));
const UniversityNewsletters = lazy(() => import("@pages/university/UniversityNewsletters"));
const UniversityTechnicalBlogs = lazy(() => import("@pages/university/UniversityTechnicalBlogs"));
const HomeschoolerHome = lazy(() => import("@pages/homeschooler/HomeschoolerHome"));
const HomeschoolerProducts = lazy(() => import("@pages/homeschooler/HomeschoolerProducts"));
const HomeschoolerChangemaker = lazy(() => import("@pages/homeschooler/HomeschoolerChangemaker"));
const HomeschoolerImpact = lazy(() => import("@pages/homeschooler/HomeschoolerImpact"));
const HomeschoolerResearch = lazy(() => import("@pages/homeschooler/HomeschoolerResearch"));
const HomeschoolerPricing = lazy(() => import("@pages/homeschooler/HomeschoolerPricing"));
const HomeschoolerAbout = lazy(() => import("@pages/homeschooler/HomeschoolerAbout"));
const HomeschoolerContact = lazy(() => import("@pages/homeschooler/HomeschoolerContact"));
const HomeschoolerFoundation = lazy(() => import("@pages/homeschooler/HomeschoolerFoundation"));
const HomeschoolerNewsletters = lazy(() => import("@pages/homeschooler/HomeschoolerNewsletters"));
const HomeschoolerTechnicalBlogs = lazy(() => import("@pages/homeschooler/HomeschoolerTechnicalBlogs"));
const GamerHome = lazy(() => import("@pages/gamer/GamerHome"));
const GamerProducts = lazy(() => import("@pages/gamer/GamerProducts"));
const GamerAbout = lazy(() => import("@pages/gamer/GamerAbout"));
const GamerPricing = lazy(() => import("@pages/gamer/GamerPricing"));
const GamerContact = lazy(() => import("@pages/gamer/GamerContact"));
const NotFound = lazy(() => import("@pages/NotFound"));
const EthZurichWorkshop = lazy(() => import("./pages/impact/EthZurichWorkshop"));
const Navamindradhiraj_Unniversity = lazy(() => import("./pages/impact/Navamindradhiraj_University"));
const KyungheeUniversity = lazy(() => import("./pages/impact/KyungheeUniversity"));
const IIT_Bombay_University = lazy(() => import("./pages/impact/IIT_Bombay_University"));
const Chulalongkorn_University = lazy(() => import("./pages/impact/Chulalongkorn_University"));
const Research_Card1 = lazy(() => import("./pages/research/Research_Card1"));
const UaeBristol = lazy(() => import("./pages/research/UaeBristol"));
const Santa_Clara = lazy(() => import("./pages/research/Santa_Clara"));
const Albany_University = lazy(() => import("./pages/research/Albany_University"));
const Uppsala_University = lazy(() => import("./pages/research/Uppsala_University"));
const Individual_Research = lazy(() => import("./pages/research/Individual_Research"));
const Kame_Research = lazy(() => import("./pages/research/Kame_Research"));

const routerBasename =
  import.meta.env.BASE_URL.replace(/\/+$/, "") || undefined;

const LOADER_CYAN = "#2bdce7";

function RouteFallback() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        background: "#0a0a0c",
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <span
        style={{
          position: "relative",
          width: "3rem",
          height: "3rem",
          border: "3px solid rgba(43, 220, 231, 0.2)",
          borderTopColor: LOADER_CYAN,
          borderRadius: "50%",
          animation: "rl-route-spin 0.75s linear infinite",
          boxShadow: `0 0 24px rgba(43, 220, 231, 0.35)`,
        }}
      />
      <style>{`@keyframes rl-route-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Portal />} />

            <Route element={<LandingLayout />}>
              <Route path="/reallives" element={<RealLivesLanding />} />

              <Route path="/reallives/licenses" element={<LicenseHub />} />
              <Route
                path="/reallives/licenses/school"
                element={<SchoolLicense />}
              />
              <Route
                path="/reallives/licenses/university"
                element={<UniversityLicense />}
              />
              <Route
                path="/reallives/licenses/homeschooler"
                element={<HomeschoolerLicense />}
              />
              <Route
                path="/reallives/licenses/gamer"
                element={<GamerLicense />}
              />
            </Route>

            <Route
              path="/reallives/school"
              element={<SubSiteLayout siteKey="school" />}
            >
              <Route index element={<SchoolHome />} />
              <Route path="products" element={<SchoolProducts />} />
              <Route path="changemaker" element={<SchoolChangemaker />} />
              <Route path="impact" element={<SchoolImpact />} />
              <Route path="research" element={<SchoolResearch />} />
              <Route path="newsletters" element={<SchoolNewsletters />} />
              <Route
                path="newsletters/:articleId"
                element={<SchoolNewsletters />}
              />
              <Route path="technical-blogs" element={<SchoolTechnicalBlogs />} />
              <Route
                path="technical-blogs/:articleId"
                element={<SchoolTechnicalBlogs />}
              />
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
              <Route
                path="Kyung-Hee-University-Workshop"
                element={<KyungheeUniversity />}
              />
              <Route
                path="KyungheeUniversity"
                element={
                  <Navigate
                    to="/reallives/school/Kyung-Hee-University-Workshop"
                    replace
                  />
                }
              />
              <Route
                path="IIT-Bombay-Workshop"
                element={<IIT_Bombay_University />}
              />
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
              <Route
                path="Korea-University-Research"
                element={<Research_Card1 />}
              />
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
              <Route
                path="SUNY-Albany-Research"
                element={<Albany_University />}
              />
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

            <Route
              path="/reallives/university"
              element={<SubSiteLayout siteKey="university" />}
            >
              <Route index element={<UniversityHome />} />
              <Route path="products" element={<UniversityProducts />} />
              <Route path="changemaker" element={<UniversityChangemaker />} />
              <Route path="impact" element={<UniversityImpact />} />
              <Route path="research" element={<UniversityResearch />} />
              <Route path="newsletters" element={<UniversityNewsletters />} />
              <Route
                path="newsletters/:articleId"
                element={<UniversityNewsletters />}
              />
              <Route
                path="technical-blogs"
                element={<UniversityTechnicalBlogs />}
              />
              <Route
                path="technical-blogs/:articleId"
                element={<UniversityTechnicalBlogs />}
              />
              <Route path="pricing" element={<UniversityPricing />} />
              <Route path="about" element={<UniversityAbout />} />
              <Route path="contact" element={<UniversityContact />} />
              <Route path="foundation" element={<UniversityFoundation />} />
              <Route path="ETH-Zurich-Workshop" element={<EthZurichWorkshop />} />
              <Route
                path="ethzurichworkshop"
                element={
                  <Navigate
                    to="/reallives/university/ETH-Zurich-Workshop"
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
                    to="/reallives/university/Navamindradhiraj-University-Workshop"
                    replace
                  />
                }
              />
              <Route
                path="Kyung-Hee-University-Workshop"
                element={<KyungheeUniversity />}
              />
              <Route
                path="KyungheeUniversity"
                element={
                  <Navigate
                    to="/reallives/university/Kyung-Hee-University-Workshop"
                    replace
                  />
                }
              />
              <Route
                path="IIT-Bombay-Workshop"
                element={<IIT_Bombay_University />}
              />
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
              <Route
                path="Korea-University-Research"
                element={<Research_Card1 />}
              />
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
              <Route
                path="SUNY-Albany-Research"
                element={<Albany_University />}
              />
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

            <Route
              path="/reallives/homeschooler"
              element={<SubSiteLayout siteKey="homeschooler" />}
            >
              <Route index element={<HomeschoolerHome />} />
              <Route path="products" element={<HomeschoolerProducts />} />
              <Route path="changemaker" element={<HomeschoolerChangemaker />} />
              <Route path="impact" element={<HomeschoolerImpact />} />
              <Route path="research" element={<HomeschoolerResearch />} />
              <Route path="newsletters" element={<HomeschoolerNewsletters />} />
              <Route
                path="newsletters/:articleId"
                element={<HomeschoolerNewsletters />}
              />
              <Route
                path="technical-blogs"
                element={<HomeschoolerTechnicalBlogs />}
              />
              <Route
                path="technical-blogs/:articleId"
                element={<HomeschoolerTechnicalBlogs />}
              />
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
              <Route
                path="Kyung-Hee-University-Workshop"
                element={<KyungheeUniversity />}
              />
              <Route
                path="KyungheeUniversity"
                element={
                  <Navigate
                    to="/reallives/homeschooler/Kyung-Hee-University-Workshop"
                    replace
                  />
                }
              />
              <Route
                path="IIT-Bombay-Workshop"
                element={<IIT_Bombay_University />}
              />
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
              <Route
                path="Korea-University-Research"
                element={<Research_Card1 />}
              />
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
              <Route
                path="SUNY-Albany-Research"
                element={<Albany_University />}
              />
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
      </Suspense>
    </BrowserRouter>
  );
}
