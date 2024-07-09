import { useEffect, useState } from "react";

//ye hook create kr rhe h aur iske naam ke peeche use lagate h
//mainly hooks take optional arguments but ours is taking currency ki info
//this hook will return some data
//now i am calling api
//when someone will use this hook then that api is called
function useCurrencyInfo(currency) {
  //empty object h
  const [data, setData] = useState({});
//   const func = async () => {
//     const url = "https://currencyconverter.p.rapidapi.com/availablecurrencies";
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "c61874a811msh01459c9fd23bf16p15f4f3jsn8a014999101a",
//         "X-RapidAPI-Host": "currencyconverter.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//       setData(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  //isme we need two things one is callback and other is dependency array ki is cheez me agar koi change
  //aayega then i will call
  useEffect(() => {
    //fetch call karwaya
    //fetch se chaining kr skte h .then() jitni marzi ho
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      //data ko json me convert kr diya h
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    //jab hum usd se inr me convert kre tab ye call kre toh dependency me ye aayega
  }, [currency]);
  console.log(data);
  //return [data, setData]
  return data;
}

export default useCurrencyInfo;
