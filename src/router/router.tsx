import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Monitoring from "../pages/DCManagement/Monitoring";
import IntelligentAssetManagement from "../pages/DCManagement/IntelligentAssetManagement";
import NetworkMonitoring from "../pages/DCManagement/NetworkMonitoring";
import ChangeManagement from "../pages/DCManagement/ChangeManagement";
import ColocationInfrastructure from "../pages/DCManagement/ColocationInfrastructure";
import DataCenterPlanning from "../pages/DCManagement/DataCenterPlanning";
import FirmwareOSManagement from "../pages/DCManagement/FirmwareOSManagement";
import IPAM from "../pages/DCManagement/IPAM";
import CustomerPortal from "../pages/DCManagement/CustomerPortal";
import CustomInsights from "../pages/DCManagement/CustomInsights";
import CustomSolutions from "../pages/DCManagement/CustomSolutions";
import DigitalTwin from "../pages/intelligence/DigitalTwins";
import PowerMapping from "../pages/intelligence/PowerMapping";
import SmartAlerting from "../pages/intelligence/SmartAlerting";
import SmartControlSystems from "../pages/intelligence/SmartControlSystems";
import AutomatedDiscovery from "../pages/intelligence/AutomatedDiscovery";
import DCOICompliance from "../pages/compliance/DCOICompliance";
import EUCompliance from "../pages/compliance/EUCompliance";
import EN50600Compliance from "../pages/compliance/EN50600Compliance";
import LEEDCompliance from "../pages/compliance/LEEDCompliance";
import ISO301342Compliance from "../pages/compliance/ISO301342Compliance";
import EnergyStarCompliance from "../pages/compliance/EnergyStarCompliance";
import JRCGuidelines from "../pages/compliance/JRCGuidelines";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/dc-management/monitoring',
                element: <Monitoring />
            },
            {
                path: '/dc-management/asset-management',
                element: <IntelligentAssetManagement />
            },
            {
                path: '/dc-management/networking',
                element: <NetworkMonitoring />
            },
            {
                path: '/dc-management/change-management',
                element: <ChangeManagement />
            },
            {
                path: '/dc-management/colocation',
                element: <ColocationInfrastructure />
            },
            {
                path: '/dc-management/dc-planner',
                element: <DataCenterPlanning />
            },
            {
                path: '/dc-management/firmware',
                element: <FirmwareOSManagement />
            },
            {
                path: '/dc-management/ipam',
                element: <IPAM />
            },
            {
                path: '/dc-management/customer-portal',
                element: <CustomerPortal />
            },
            {
                path: '/dc-management/insights',
                element: <CustomInsights />
            },
            {
                path: '/dc-management/custom-solutions',
                element: <CustomSolutions />
            },
            {
                path: '/intelligence/digital-twins',
                element: <DigitalTwin />
            },
            {
                path: '/intelligence/power-mapping',
                element: <PowerMapping />
            },
            {
                path: '/intelligence/predictive-failure',
                element: <SmartAlerting />
            },
            {
                path: '/intelligence/control-systems',
                element: <SmartControlSystems />
            },
            {
                path: '/intelligence/discovery',
                element: <AutomatedDiscovery />
            },
            {
                path: '/compliance/dcoi',
                element: <DCOICompliance />
            },
            {
                path: '/compliance/eu-2023-1791',
                element: <EUCompliance />
            },
            {
                path: '/compliance/en-50600',
                element: <EN50600Compliance />
            },
            {
                path: '/compliance/leed',
                element: <LEEDCompliance />
            },
            {
                path: '/compliance/iso-iec-30134-2',
                element: <ISO301342Compliance />
            },
            {
                path: '/compliance/energy-star',
                element: <EnergyStarCompliance />
            },
            {
                path: '/compliance/ec-jrc',
                element: <JRCGuidelines />
            },
        ]
    }
])

export default router;