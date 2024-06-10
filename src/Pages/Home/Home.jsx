import React from 'react';
import Banner from '../../Components/banner/Banner';
import Branding from '../../Components/Branding/Branding';
import ApplyTech from '../../Components/ApplyTech/ApplyTech';
import Total from '../../Components/Total/Total';
import ShowFeedBack from '../../Components/ShowFeedBack/ShowFeedBack';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Branding></Branding>
            <Total></Total>
            <ApplyTech></ApplyTech>
            <ShowFeedBack></ShowFeedBack>
        </div>
    );
};

export default Home;