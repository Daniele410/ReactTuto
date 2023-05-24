import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner() {
  //bonne façon
  const title = 'La maison jungle';
  
  return (
    <div className='lmj-banner'>
      
     <div className='Imj-banner-row'>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>{title}</h1> 
      <Recommendation />
      </div>
      
    </div>
  )
}

export default Banner




  // premier faison
/*const title = "La maison jungle"
return (<h1>{title}</h1>) */

    // deuxième façon
/* return (
    <div style={{
      color:'black',
      textAlign: 'right',
      padding: 32,
      borderBottom: 'solid 3px black'
    }}>
        <h1>La maison jungle</h1>
    </div> 
)*/
