import { useId } from "react";

const inputBox = ({
  label,
  amount,
  onAmountChange,
  selectCurrency = "usd",
  onCurrencyyChange,
  currencyOptions = [],
  disableInput = false,
  selectCurrencyDiable = false,

}) => {
  const idUnique = useId()
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex  ">
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block cursor-pointer" htmlFor={idUnique}>
          {label}
        </label>
        <input
        id={idUnique}
          type="number"
          className="outline-none w-full bg-transparent py-1.5 text-black"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={disableInput}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full cursor-pointer">Currency</p>
        <select
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyyChange && onCurrencyyChange(e.target.value)
          }
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none "
          disabled={selectCurrencyDiable}
        >
          {currencyOptions.map((currency) => {
          return  <option key={currency} value={currency}>
              {currency}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default inputBox;
