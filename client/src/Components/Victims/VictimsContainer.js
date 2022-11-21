import React, {useState, useEffect} from 'react'
import VictimCard from './VictimCard'
import "./Victims.css";

export default function VictimsContainer({english}) {
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [ageArray, setAgeArray] = useState([])
  const [search, setSearch] = useState('')
  const [ageFilter, setAgeFilter] = useState('')
  let language = '/englishes';

  if(english){
    language = '/englishes'
  } else {
    language = '/farsis'
  }

  function handleSearchChange(e){
    setSearch(e.target.value)
  }

  function onSearch(){
    let newArray = ageArray.filter((v)=> v.name.toLowerCase().includes(search.toLowerCase())||v.location.toLowerCase().includes(search.toLowerCase()))
    setDisplayData(newArray)
  }

  function handleAgeChange(e){
    setAgeFilter(e.target.value)
  }

  function onAgeChange(){
    let newArray;
    switch (ageFilter) {
      case 'all':
        setAgeArray(data)
        break;
      case '17':
        newArray = data.filter(v => parseInt(v.age)<=17)
        setAgeArray(newArray)
        break;
      case '34':
        newArray = data.filter(v => parseInt(v.age)<=34 && parseInt(v.age)>=18)
        setAgeArray(newArray)
        break;
        case '54':
        newArray = data.filter(v => parseInt(v.age)<=54 && parseInt(v.age)>=35)
        setAgeArray(newArray)
        break;
        case 'over':
        newArray = data.filter(v => parseInt(v.age)>=55)
        setAgeArray(newArray)
        break;
        default:
          setAgeArray(data)
    }
    
  }
  
  useEffect(() => {
    fetch(`${language}`)
    .then((res) => res.json())
    .then(data => {
      setData(data)
      setDisplayData(data)
      setAgeArray(data)
      })
      setSearch('')
      setAgeFilter('all')
    }, [language])

    useEffect(onSearch, [search, ageArray])
    useEffect(onAgeChange, [ageFilter])

    
  return (
    <div>
      <input type='text' value={search} onChange = {handleSearchChange} placeholder = 'search by name or location' />
      <select value = {ageFilter} onChange={handleAgeChange}>
        <option value='all'>All ages</option>
        <option value='17'>17 and under</option>
        <option value = '34'>18-34</option>
        <option value = '54'>35-54</option>
        <option value='over'>55 and over</option>
      </select>
      <div className='all-victims-div'>
        {displayData.map(victim => <VictimCard  key = {victim.id} victim = {victim}/>)}
      </div>
    </div>
  )
}
