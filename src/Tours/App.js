
import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner";
import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import styles from './app.module.scss';

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
                    <div className={styles.goals}>
                        Goals
                        <br />1: Fetch the data from JSON API and list all the tours.
                        <br />2: Add a remove button for each tour where it deletes the tour from the list.
                        <br />3: When there is no tours left, make refresh button appear to print all the tours again.
                    </div>
                    <div className={styles.toursApp}>
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