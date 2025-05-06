import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import PortfolioCard from "./PortfolioCard";
import GraphicCard from "./GraphicCard";

 
export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("Websites");
  const data = [
    
    
    {
      label: "Websites",
      value: "Websites",
      desc: <PortfolioCard/>,
    },
    {
        label: "Graphic Design",
        value: "Graphic",
        desc:   <GraphicCard/>,
      },
   
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none   mx-auto   border-blue-gray-50  "
        indicatorProps={{
          className:
            "bg-transparent   border-b-2  border-orange-600 -z-10 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-orange-600 font-semibold text-lg p-2" : "text-gray-500  p-2"}
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