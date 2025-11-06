import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./component/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";

// Individual service pages
import LandRegistry from "./page/ServicePages/LandRegistry";
import Topographical from "./page/ServicePages/Topographical";
import BuildingSurvey from "./page/ServicePages/BuildingSurvey";
import ThreeDScanning from "./page/ServicePages/ThreeDScanning";
import VolumeSurveying from "./page/ServicePages/VolumeSurveying";
import BoundaryDisputes from "./page/ServicePages/BoundaryDisputes";
import ForestryServices from "./page/ServicePages/ForestryServices";
import SettingOut from "./page/ServicePages/SettingOut";
import DroneMapping from "./page/ServicePages/DroneMapping";
import IrishWater from "./page/ServicePages/IrishWater";
import AsBuiltSurveys from "./page/ServicePages/AsBuiltSurveys";
import SiteSurveys from "./page/ServicePages/SiteSurveys";
import Trusted from "./page/Trusted";
import Contact from "./page/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="trustedPartners" element={<Trusted />} />

      {/* Individual Service Pages */}
      <Route path="services/land-registry" element={<LandRegistry />} />
      <Route
        path="services/topographical-surveying"
        element={<Topographical />}
      />
      <Route path="services/building-survey" element={<BuildingSurvey />} />
      <Route path="services/3d-scanning" element={<ThreeDScanning />} />
      <Route path="services/volume-surveying" element={<VolumeSurveying />} />
      <Route path="services/boundary-disputes" element={<BoundaryDisputes />} />
      <Route path="services/forestry-services" element={<ForestryServices />} />
      <Route path="services/setting-out" element={<SettingOut />} />
      <Route path="services/drone-mapping" element={<DroneMapping />} />
      <Route path="services/irish-water" element={<IrishWater />} />
      <Route path="services/as-built-surveys" element={<AsBuiltSurveys />} />
      <Route path="services/site-surveys" element={<SiteSurveys />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
