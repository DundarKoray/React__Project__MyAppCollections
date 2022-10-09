
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import SlotMachine from './SlotMachine';


const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <SlotMachine/>
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            