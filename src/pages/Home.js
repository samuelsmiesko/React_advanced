import './Home.scss'
import Button1 from './components/Button1';
import Input1 from './components/Input1';

const Home = () => {
    

    return (
        <div className='Home'>
            <p style={{fontSize: '2.0em', paddingLeft: '30vw'}}>Home</p>
            <p style={{fontSize: '1.5em', paddingLeft: '30vw'}}>This is page where I show my CSS elements with animations.</p>
            <div className="DIV1">
                
                <Button1/>
                
            </div>
            <div className="DIV2">
                
                <Input1/>
            </div>
            <div className="DIV3">
                
            </div>
        </div>
    )
    
  };
  
  export default Home;