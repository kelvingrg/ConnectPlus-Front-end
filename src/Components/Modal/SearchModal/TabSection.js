// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
//   } from "@material-tailwind/react";
   
//   export default function Example() {
//     const data = [
//       {
//         label: "People",
//         value: "People",
//         desc: `It really matters and then like it really doesn't matter.
//         What matters is the people who are sparked by it. And the people 
//         who are like offended by it, it doesn't matter.`,
//       },
//       {
//         label: "Jobs",
//         value: "Jobs",
//         desc: `Because it's about motivating the doers. Because I'm here
//         to follow my dreams and inspire other people to follow their dreams, too.`,
//       },
//     ];
   
//     return (
//       <Tabs id="custom-animation" value="html">
//         <TabsHeader>
//           {data.map(({ label, value }) => (
//             <Tab key={value} value={value}>
//               {label}
//             </Tab>
//           ))}
//         </TabsHeader>
//         <TabsBody
//           animate={{
//             mount: { y: 0 },
//             unmount: { y: 250 },
//           }}
//         >
//           {data.map(({ value, desc }) => (
//             <TabPanel key={value} value={value}>
//               {desc}
//             </TabPanel>
//           ))}
//         </TabsBody>
//       </Tabs>
//     );
//   }

import React from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-ccOrange bg-ccBlack"
                    : "text-black  bg-white" )
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
               People
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-ccOrange bg-ccBlack"
                    : "text-black  bg-white" )
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Job
              </a>
            </li>
           
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
              { (openTab === 1) &&  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>}

               {(openTab === 2) && <div  id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs color="pink" />;
    </>
  );
}