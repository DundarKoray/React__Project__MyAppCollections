
import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner";
import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import './App.scss';

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !==id);
        setTours(newTours);
    }

    const fetchTours = async () => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const tours = await response.json();
            // console.log(tours);
            setLoading(false);
            setTours(tours);
        }   catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);
    
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <InnerNavBar />
                    <div className="tours-app">
                        {tours.length === 0 
                            ? 
                                <div> 
                                    <h2>No tours left!</h2>
                                    <button className="btn-primary" onClick={()=>{fetchTours()}}>Refresh</button>
                                </div> 
                            :   
                                loading 
                                ? <Loading /> 
                                : <Tours tours={tours} removeTour={removeTour}/>      
                        }
                    </div>
                </Banner>    
            </SimpleHero>            
        </div>
    );
}
 
export default App;