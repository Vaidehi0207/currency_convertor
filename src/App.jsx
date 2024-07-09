import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  //now sets the states
  //defualt value 0 dall di h setAmount ki
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  //for conversion result
  const [convertedAmount, setconvertedAmount] = useState(0)

  //hook use krne ke liye jo create kiya tha
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  //now to swap two variables
  const swap = () => {
    // Swap 'from' and 'to' currencies
    setFrom(to)
    setTo(from)
    // Swap 'amount' and 'convertedAmount' after setting the new 'from' and 'to' currencies
    setAmount(convertedAmount)
    setconvertedAmount(amount)
  }

  //wo value h jo final amount show karegi
  const convert = () => {
    // Convert 'amount' to 'to' currency
    setconvertedAmount(amount * currencyInfo[to]);
}
return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,

    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
            //whenever form get submitted the convert as we have given
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                      label="From"
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      selectCurrency={from}
                      onAmountChange={(amount) => setAmount(amount)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        //swap ka button chalane ke liye onclick swap kr denge
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>

                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        //current currency ki jo value h 
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                        amountDisable 
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
);
}

export default App
