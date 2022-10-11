
import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner";
import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import InnerNavBar from "../InnerNavBar/InnerNavBar";

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

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
                    {loading 
                        ? <Loading /> 
                        : <Tours tours={tours} />
                    }   
                </Banner>    
            </SimpleHero>            
        </div>
    );
}
 
export default App;