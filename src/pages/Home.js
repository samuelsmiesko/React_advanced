import './Home.scss'
import Button1 from './components/Button1';
const Home = () => {
    

    return (
        <div className='Home'>
            <p style={{fontSize: '2.0em'}}>Home</p>
            <p>This is page where I show my CSS elements with animations.</p>
            <div className="DIV1">
                <Button1/>
            </div>
            <div className="DIV2">
                <Button1/>
            </div>
            <div className="DIV3">

            </div>
        </div>
    )
    
  };
  
  export default Home;