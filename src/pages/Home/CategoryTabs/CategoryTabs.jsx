import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleToyCard from './SingleToyCard.jsx';

const CategoryTabs = () => {
    const [toys, setToys] = useState([]);
    const [toyData, setToyData] = useState([]);
    const [activeTab, setActiveTab] = useState("Bus");

    useEffect(() => {
        fetch('https://toy-marketplace-server-sooty-seven.vercel.app/addToy')
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [activeTab]);

    useEffect(() => {
        const filteredToys = toys?.filter(toy => toy.subCategory == activeTab);
        setToyData(filteredToys);
    }, [activeTab, toys]);

    return (
        <div className="mt-20 sm:flex-col">
            <Tabs>
                <TabList className="text-center bg-amber-300">
                    <Tab onClick={() => setActiveTab("Bus")}>Bus</Tab>
                    <Tab onClick={() => setActiveTab("Truck")}>Truck</Tab>
                    <Tab onClick={() => setActiveTab("Air")}>Air</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="flip-left">
                        {
                            toyData.map(data => <SingleToyCard 
                                key={data._id}
                                data={data} 
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="flip-left">
                        {
                            toyData.map(data => <SingleToyCard 
                                key={data._id}
                                data={data} 
                            />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="flip-left">
                        {
                            toyData.map(data => <SingleToyCard 
                                key={data._id}
                                data={data} 
                            />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTabs;