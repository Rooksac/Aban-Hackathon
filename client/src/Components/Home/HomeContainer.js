import React, { useEffect, useState } from 'react'
import "./Home.css";
import VictimPreviewContainer from './VictimPreviewContainer';


export default function HomeContainer({english, firstSixData}) {

  let words;
  if(english) { words = [
    {id:0,value:"A series of nationwide civil protests in Iran, sometimes known as Bloody November or (using the Iranian calendar) Bloody Aban (Persian: آبان خونین) took place in 2019 and 2020. Initially caused by a 50–200% increase in fuel prices, they occurred as part of the wider Iranian Democracy Movement, leading to calls for the overthrow of the government in Iran and Supreme Leader Ali Khamenei. The protests commenced as peaceful gatherings on the evening of 15 November but spread to 21 cities within hours, as videos of the protest circulated online, eventually becoming the most violent and severe anti-government unrest since the rise of Iran's Islamic Republic in 1979."},
    {id:1,value:"To block the sharing of information regarding the protests and the deaths of hundreds of protesters on social media platforms, the government shut down the Internet nationwide, resulting in a near-total internet blackout of around six days. In an effort to crush the protests, the Iranian government (according to Amnesty International) shot protesters dead from rooftops, helicopters, and at close range with machine gun fire. In an effort to mask the scale and casualty count of the protests, it hauled away large numbers of bodies of the dead protesters, and threatened families of slain protesters not to speak to the media or hold funerals."},
    {id:2,value:"As many as 1,500 Iranian protesters were killed. The government crackdown and protests resulted in the destruction of 731 government banks including Iran's central bank, nine Islamic religious centres, protesters tearing down anti-American billboards, and posters and statues of the Supreme Leader Ali Khamenei as well as former leader Ruhollah Khomeini. Fifty government military bases were also attacked by protesters. The Iranian regime also employed a week long nationwide internet shutdown becoming the longest total Internet shutdown in a large country. It was also the first blackout that effectively isolated a whole nation."},
    {id:3,value:"The uprising, as well as the wider Iranian Democracy Movement in general, differed from earlier protests in 2009 in not being limited to students and large cities, and in the speed, severity and higher death toll of the government crackdown, which crushed the uprising in three days, although protests flared up periodically in the months after."},
  ]} else {
    words = [
    {id:0,value:"مجموعه ای از اعتراضات مدنی سراسری در ایران که گاهی به آبان خونین یا آبان خونین (به فارسی: آبان خونین) معروف است در سال های 2019 و 2020 برگزار شد. به عنوان بخشی از جنبش گسترده‌تر دموکراسی ایران رخ داد و منجر به درخواست‌هایی برای سرنگونی دولت در ایران و رهبر معظم انقلاب علی خامنه‌ای شد. تظاهرات به عنوان تجمعات مسالمت آمیز در شامگاه 15 نوامبر آغاز شد، اما در عرض چند ساعت به 21 شهر گسترش یافت، زیرا ویدئوهای اعتراض در فضای مجازی پخش شد و در نهایت به خشن ترین و شدیدترین ناآرامی ضد دولتی از زمان ظهور جمهوری اسلامی ایران در سال 1979 تبدیل شد."},
    {id:1,value:"دولت برای جلوگیری از اشتراک‌گذاری اطلاعات مربوط به اعتراضات و کشته شدن صدها معترض در شبکه‌های اجتماعی، اینترنت را در سراسر کشور قطع کرد که منجر به قطعی کامل اینترنت در حدود شش روز شد. در تلاش برای سرکوب اعتراضات، دولت ایران (به گفته عفو بین الملل) معترضان را از پشت بام ها، هلیکوپترها و از فاصله نزدیک با شلیک مسلسل به قتل رساند. در تلاش برای پنهان کردن ابعاد و تعداد تلفات تظاهرات، تعداد زیادی از اجساد معترضان کشته شده را با خود برد و خانواده‌های معترضان کشته شده را تهدید کرد که با رسانه‌ها صحبت نکنند و مراسم خاکسپاری برگزار نکنند."},
    {id:2,value:"حدود 1500 معترض ایرانی کشته شدند. سرکوب و اعتراضات دولتی منجر به تخریب 731 بانک دولتی از جمله بانک مرکزی ایران، 9 مرکز مذهبی اسلامی، معترضان به پاره کردن بیلبوردهای ضد آمریکایی و پوسترها و مجسمه‌های رهبر معظم علی خامنه‌ای و همچنین روح‌الله خمینی، رهبر سابق ایران شد. 50 پایگاه نظامی دولتی نیز مورد حمله معترضان قرار گرفتند. رژیم ایران همچنین یک هفته خاموشی سراسری اینترنت را به کار گرفت و به طولانی‌ترین قطعی اینترنت در یک کشور بزرگ تبدیل شد. همچنین این اولین خاموشی بود که عملاً یک ملت را منزوی کرد."},
    {id:3,value:"قیام و همچنین جنبش دموکراسی ایران به طور کلی، با اعتراضات قبلی در سال 2009 در محدود نبودن به دانشجویان و شهرهای بزرگ و در سرعت، شدت و تلفات بیشتر سرکوب حکومت، که قیام را در هم شکست. سه روز، اگرچه اعتراضات به صورت دوره ای در ماه های بعد شعله ور شد."},
    ]
  }

  let i = 0;
  const [wordData,setWordData]=useState(words[i].value)

  const handleNextClick=()=>{
    if(i <= words.length){
      i++; 
      console.log(i)
      setWordData(words[i].value)
      console.log(wordData)
    } else {
      i = 0;
      setWordData(words[i].value);
    }
  }

  const handlePrevClick=()=>{
    if(i > 0){
      i--; 
      console.log(i)
      setWordData(words[i].value)
      console.log(wordData)
    } 
  }

  return (
    <>
    <div className='home-div'>
      <div className='home-text-div'>
      <h1>What happened?</h1>
      <div className='flex_row'>
      <p className='summary'>{wordData}</p>
        <div className='prev-next-buttons'>
          <button onClick={()=>handlePrevClick()} className='next-prev-button'> Previous </button>
          <button onClick={()=>handleNextClick()} className='next-prev-button'> Next </button>
        </div>
      </div>
    </div>
     </div>
     <VictimPreviewContainer firstSixData={firstSixData}/>
    </>
  )
}
