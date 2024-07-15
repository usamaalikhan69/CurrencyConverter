import { useMemo, useState } from "react";
import InputBox from "./components/inputBox";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedResult, setConvertedResult] = useState(0);

  const currencyHook = useCurrency(from);
  const options = useMemo(() => Object.keys(currencyHook));
  const convertCurrency = () => {
    setConvertedResult((amount * currencyHook[to]).toFixed(2));
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedResult(amount);
    setAmount(convertedResult);
  };
  return (
    <>
      <div className="w-full flex flex-wrap h-screen  justify-center items-center mx-auto 	 backdrop-blur-sm rounded bg-cover">
        <div className=" px-3 md:w-full ">
          <div className="max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <h1 className="text-white py-5 text-center  md:text-2xl font-bold ">Currency Converter Generator</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                convertCurrency();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  amount={amount}
                  label={"From"}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                  currencyOptions={options}
                  onCurrencyyChange={(currency) => setFrom(currency)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="to"
                  amount={convertedResult}
                  selectCurrency={to}
                  currencyOptions={options}
                  onCurrencyyChange={(currency) => setTo(currency)}
                  disableInput
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
