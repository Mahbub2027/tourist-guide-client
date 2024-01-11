// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

const TourPlan = () => {
    const {tour_plan_1, tour_plan_2, tour_plan_3} = useLoaderData();
    // const [tourPlan, setTourPlan] = useState();

    return (
        <div>
                    <Accordion allowZeroExpanded={true}
                        className="w-10/12 mx-auto flex flex-col lg:flex-row justify-center gap-5">
                        <AccordionItem>
                            <AccordionItemHeading className="">
                                <AccordionItemButton>
                                <div className="card  bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
                                    <div className="card-body px-20">
                                        <h2 className="card-title ">Plan 1</h2>                                       
                                    </div>
                                </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="card bg-gradient-to-r from-cyan-500 to-blue-500  text-white shadow-xl">
                                    <div className="card-body">
                                        <p className="w-96">{tour_plan_1}</p>
                                     </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                <div className="card  bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
                                    <div className="card-body px-20">
                                        <h2 className="card-title ">Plan 2</h2>
                                    </div>
                                </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
                                    <div className="card-body">
                                        
                                        <p className="w-96">{tour_plan_2}</p>
                                     </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                <div className="card  bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
                                    <div className="card-body px-20">
                                        <h2 className="card-title ">Plan 3</h2>                  
                                    </div>
                                </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl">
                                    <div className="card-body">
                                        
                                        <p className="w-96">{tour_plan_3}</p>
                                     </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        
                    </Accordion>
                </div>)
            // }
        // </div>
    // );
};

export default TourPlan;