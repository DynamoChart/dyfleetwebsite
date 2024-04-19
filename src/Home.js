import React from 'react';
import Nav from './Nav'; // Importing Nav
import Footer from './Footer'; // Importing Footer
import './Home.css';
import hd from "./hd.png"; // Importing the image
import vgif from "./v.gif"
import check from "./c.png"

import df from "./df.png"
import nbad from "./nbad.png"
import finpp from "./finpp.png"
function Home() {
 

  return (
    <div>
      <Nav />
      <div className='homemain'>
        <div className='HeroHomegg'>
          <div className='herotext'>
          
            <h1>Stay ahead with advanced fleet management software.</h1>
            <p>DynamoChart is the ideal upgrade from outdated fleet management software, providing comprehensive solutions to manage both your vehicles and drivers.Enhance cost efficiency, and assume full control over your fleet management.</p>
            <button className='bdmoma'>Book a demo</button>
          </div>
          <div className='heropic'>
            <img src={hd} alt="Descriptive Alt Text" />
          </div>
        </div>
        <div className='gifveh'>
          <div className='textofgif'>
           
          <h1> KEEP TABS ON YOUR VEHICLES.</h1>
          <div className='titlevch'>  <img src={check} alt="Check Icon" /> 
            <p>Extremely User-Friendly:</p>
            </div>
            <div className='subvhhomehere'>Our system is designed for ease of use, ensuring you can manage your fleet effortlessly.</div>
            
            
            <div className='titlevch'>  <img src={check} alt="Check Icon" /> 
            <p>Active Vehicle and Driver Monitoring:</p>
            </div>
            <div className='subvhhomehere'>Continuously verify that all vehicles are active and paired with qualified drivers.</div>
        

            <div className='titlevch'>  <img src={check} alt="Check Icon" /> 
            <p>Comprehensive Expense Tracking:</p>
            </div>
            <div className='subvhhomehere'>Assign costs related to fuel, insurance, and maintenance to each vehicle for accurate budgeting.</div>
        

            <div className='titlevch'>  <img src={check} alt="Check Icon" /> 
            <p>Team Communication:</p>
            </div>
            <div className='subvhhomehere'>Write notes specific to each vehicle to keep your team well-informed.</div>
        
            <div className='titlevch'>  <img src={check} alt="Check Icon" /> 
            <p>Task Management:</p>
            </div>
            <div className='subvhhomehere'>Create and assign tasks for your team for each vehicle to enhance operational efficiency.</div>
        

            <div className='titlevch'>  <img src={check} alt="Check Icon" /> 
            <p>Equipment Allocation:</p>
            </div>
            <div className='subvhhomehere'>Assign work equipment to each vehicle to ensure proper resource distribution.</div>

            <div className='titlevch'>  <img src={check} alt="Check Icon" /> 
            <p>Geographic Zoning:</p>
            </div>
            <div className='subvhhomehere'>Designate operational areas to your vehicles to optimize routing and deployment.</div>

            <div className='titlevch'>  <img src={check} alt="Check Icon" /> 
            <p>Dashboard Visualization:</p>
            </div>
            <div className='subvhhomehere'>Enjoy a user-friendly dashboard that provides a comprehensive view of your entire fleet.</div>
          </div>
          <div className='gifofgif'>
            <img src={vgif} alt="Fleet management GIF" />
          </div>
        </div>
        <div className='driversstatusi'>
       
        <div className='texfordfdr'>CLOSELY MONITOR EACH STEP AND EVERY CHANGE.  </div>
        <div className='subtexfordfdr'>Enhance your oversight by meticulously measuring all steps and changes. Monitor your drivers' status and analyze your fleet's performance to make informed decisions. Allocate workloads based on driver performance to optimize efficiency.</div>
      
        <div className='picordfdr'>
          <img src={df} alt="" /> {/* Image placed here */}
        </div>

        

        </div>
        <div className='driversstatusi'>
       
       <div className='texfordfdr'>MAINTAIN CLOSE MONITORING OF YOUR FLEET'S HEALTH.</div>
       <div className='subtexfordfdr'>Ensure your fleet remains in optimal condition by tracking the times it is most efficient and identifying any factors that may hinder its performance. Keep all necessary information at your fingertips to maintain smooth and seamless fleet operations.</div>
     
       <div className='picordfdr1234'>
         <img src={nbad} alt="" /> {/* Image placed here */}
       </div>

       

       </div>
       <div className='HeroHomegg'>
          <div className='herotext'>
          
            <h1 >Manage your fines, create and assign equipment, define operational areas</h1>
            <p>Efficiently manage your fines, create and assign equipment to vehicles and drivers, define operational areas, and monitor your fleet based on these designated zones.</p>
            <button className='bdmoma'>Book a demo</button>
          </div>
          <div className='heropic'>
            <img src={finpp} alt="Descriptive Alt Text" />
          </div>
        </div>
      </div>
      <div className="nav-buttonsddppp">
        <div className='crtexthome'>Join DynamoFleet today and start your 14-day free trial!</div>
        <div className='justbfor'> <a href="http://app.dynamofleet.com/register" className="nav-buttonsssoop" >Create a Free Account</a>
        <a href="/contact" className="nav-buttonoooo">Contact us</a> 
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;