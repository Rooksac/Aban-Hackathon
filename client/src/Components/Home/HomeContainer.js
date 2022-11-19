import React, { useEffect, useState } from 'react'
import "./Home.css";



export default function HomeContainer() {

  const words=[
    {id:0,value:"A series of nationwide civil protests in Iran, sometimes known as Bloody November or (using the Iranian calendar) Bloody Aban (Persian: آبان خونین) took place in 2019 and 2020. Initially caused by a 50–200% increase in fuel prices, they occurred as part of the wider Iranian Democracy Movement, leading to calls for the overthrow of the government in Iran and Supreme Leader Ali Khamenei. The protests commenced as peaceful gatherings on the evening of 15 November but spread to 21 cities within hours, as videos of the protest circulated online, eventually becoming the most violent and severe anti-government unrest since the rise of Iran's Islamic Republic in 1979."},
    {id:1,value:"To block the sharing of information regarding the protests and the deaths of hundreds of protesters on social media platforms, the government shut down the Internet nationwide, resulting in a near-total internet blackout of around six days. In an effort to crush the protests, the Iranian government (according to Amnesty International) shot protesters dead from rooftops, helicopters, and at close range with machine gun fire. In an effort to mask the scale and casualty count of the protests, it hauled away large numbers of bodies of the dead protesters, and threatened families of slain protesters not to speak to the media or hold funerals."},
    {id:2,value:"As many as 1,500 Iranian protesters were killed. The government crackdown and protests resulted in the destruction of 731 government banks including Iran's central bank, nine Islamic religious centres, protesters tearing down anti-American billboards, and posters and statues of the Supreme Leader Ali Khamenei as well as former leader Ruhollah Khomeini. Fifty government military bases were also attacked by protesters. The Iranian regime also employed a week long nationwide internet shutdown becoming the longest total Internet shutdown in a large country. It was also the first blackout that effectively isolated a whole nation."},
    {id:3,value:"The uprising, as well as the wider Iranian Democracy Movement in general, differed from earlier protests in 2009 in not being limited to students and large cities, and in the speed, severity and higher death toll of the government crackdown, which crushed the uprising in three days, although protests flared up periodically in the months after."},
  ];

  let i = 0;
  const [wordData,setWordData]=useState(words[i].value)
  
  // const handleClick=(index)=>{
  //   console.log(index)
  //   const wordSlider=words[index].value;
  //   setWordData(wordSlider)
  // }
  const handleClick=()=>{
    if(i < words.length){
      i++; 
      console.log(i)
      setWordData(words[i].value)
      console.log(wordData)
    }
    if(i = words.length){
      i = 0;
      setWordData(words[i].value);
    }
  }

  return (
    <div className='home-div'>
      <div className='home-text-div'>
      <h1>What happened?</h1>
      <div className='flex_row'>
      <p className='summary'>{wordData}</p>
          <button onClick={()=>handleClick()} className='next-button'> Next </button>
      </div>
    </div>
     </div>
  )
}
