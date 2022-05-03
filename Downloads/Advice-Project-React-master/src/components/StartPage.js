import chloe from '../Images/chloe.gif';
import lost from '../Images/lost.jpeg';
import light from '../Images/light.jpeg';
import yoda from '../Images/yoda.jpeg'
import killbill from '../Images/killbill.gif'
import Header from '../components/Header'
import Button from '../components/Button'
import Advice from '../components/Advice'

export const StartPage = () => {
    return (
<>
<Header/>
<Button />
<Advice />
 

<img src={chloe} alt="Chloe" className="background-img1"/>
<img src={lost} alt="Lost" className="background-img2"/>
<img src={light} alt="Light" className="background-img3"/>
<img src={yoda} alt="Yoda" className="background-img4"/>
<img src={killbill} alt="Killbill" className="background-img5"/>

</>
)
};
