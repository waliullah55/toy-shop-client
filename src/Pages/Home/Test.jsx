import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const Test = () => {
    return ( 
        <Tabs>
        <TabList className='tab space-x-2'>
          <Tab className='tab btn w-20 btn-info btn-outline '>Car </Tab>
          <Tab className='tab btn w-20 btn-info btn-outline '>Ttuck</Tab>
          <Tab className='tab btn w-20 btn-info btn-outline '>Motor</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    
    );
};

export default Test;