import React, {useId} from 'react'

function InputBox({
    //prop name
    label,
    amount,
    onAmountChange,  
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    //isse ek unique value mil jayegi
    const amountInputId = useId()
    return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    <div className="w-1/2">
        <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
            {label}
        </label>
        <input
        //yaha pe bind kiya
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            //field enable h ya disbale
            disabled={amountDisable}
            //isme kuch value hogi jo amount humne user se liya tha
            value={amount}
            //event fire kiya aur method call kiya uper liya h onAmountChange
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
    </div>
    <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            //select field ki current value selectCurrency se utha rhe
            value={selectCurrency}
            //iske change hone pe value change honi chahiye
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
        >
            {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                        </option>
                ))}
        </select>
    </div>
</div>
);
}
export default InputBox