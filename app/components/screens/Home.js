
import React from 'react';
import { View } from 'react-native';
import Screen from '../common/Screen';
import SearchBar from '../SearchBar';
import FeaturedNews from '../FeaturedNews';
import BreakingNews from '../BreakingNews';
import TechNews from '../TechNews';
import HealthNews from '../HealthNews';
import EntertainmentNews from '../EntertainmentNews';
import SportsNews from '../SportsNews';
import FlexedButtons from '../common/FlexedButtons';


const Home = () => {

    return (
        <Screen>
          <FlexedButtons />
          <SearchBar /> 
             <FeaturedNews item={
               {
                 author: "Express Web Desk",
                 title: "What CM Mamata Banerjee, Amit Shah said after ‘attack’ on JP Nadda’s convoy - The Indian Express",
                 urlToImage: "https://images.indianexpress.com/2019/01/mamata-fb-1.jpg"
               }
             } />
            <BreakingNews/>
             <HealthNews />
              <TechNews />
               <SportsNews />
               <EntertainmentNews /> 
        </Screen>
        
       );
}

export default Home;
