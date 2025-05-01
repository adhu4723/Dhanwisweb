import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import PortfolioCard from "./PortfolioCard";

 
export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    
    {
      label: "All",
      value: "html",
      desc: <PortfolioCard/>,
    },
    {
      label: "Websites",
      value: "reviews",
      desc: <PortfolioCard/>,
    },
    {
        label: "Graphic Design",
        value: "design",
        desc: <PortfolioCard/>,
      },
   
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none  mx-auto py-6   border-blue-gray-50 bg-transparent "
        indicatorProps={{
          className:
            "bg-transparent  border-b-2 p-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900 font-bold p-2" : "text-gray-500 p-2"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}