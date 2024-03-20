import React, { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  amountDisabled = false,
  currencyDisabled = false,
  selectCurrency = "usd",
  onCurrencyChange,
  currencyOptions = [],
  className = "",
}) {
  const inputId = useId();

  return (
    <>
      <div
        className={` bg-gray-700 flex flex-wrap p-2 m-4 rounded-lg ${className}`}
      >
        <div className=" w-full sm:w-1/2 flex flex-col my-1 text-2xl text-white">
          <label htmlFor={inputId}>{label}</label>
          <input
            id={inputId}
            type="number"
            className=" h-12 outline-none border-none rounded-lg px-2 text-orange-500"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            placeholder="Enter an amount"
            disabled={amountDisabled}
          />
        </div>
        <div className=" w-full sm:w-1/2 flex flex-col items-center sm:items-end my-1 text-2xl text-white">
          <p className=" mb-2">Currency Type</p>
          <select
            className=" rounded-lg px-2 text-orange-500"
            value={selectCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Input;
