import { useState } from "react";
import useCurrencyInfo from "./hooks/convertCurrency";
import Input from "./components/Input.jsx";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyList = useCurrencyInfo(from);

  var optionList = Object.keys(currencyList);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyList[to]).toFixed(3));
  };

  return (
    <>
      <div
        className=" w-full h-screen bg-cover bg-no-repeat flex items-center justify-center flex-col"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <h1 className=" text-orange-500 font-bold shadow-md text-3xl md:text-5xl md:mb-2">
          Currency Converter
        </h1>
        <div className=" w-full md:w-2/3 xl:w-1/2 backdrop-blur-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* Input */}
            <Input
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyOptions={optionList}
              className=" mb-1"
            />

            <div className=" py-1 px-2 rounded-lg text-xl bg-orange-700 text-white w-16 mx-auto">
              <button type="button" onClick={swap}>
                Swap
              </button>
            </div>
            {/* Input */}
            <Input
              label="To"
              amount={convertedAmount}
              selectCurrency={to}
              onCurrencyChange={(curr) => setTo(curr)}
              currencyOptions={optionList}
              className=" mt-1"
            />
            <div className=" py-2 px-4 rounded-lg text-xl sm:text-2xl bg-orange-700 text-center text-white w-2/3 mx-auto mb-3">
              <button type="submit">
                Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
