import { useState } from 'react';
import './App.css';
import DollarImg from './assets/icon-dollar.svg';
import PersonImg from './assets/icon-person.svg';
import LogoImg from './assets/logo.svg';
import { Input } from './components/Input';
import { Button } from './components/TipButton';

function App() {
  const tips: number[] = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState<number>(0);

  const tipAmount: string =
    bill && people ? ((bill * (tip / 100)) / people).toFixed(2) : '0.00';

  const totalAmount: string =
    bill && people ? (bill / people + Number(tipAmount)).toFixed(2) : '0.00';

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
    setCustomTip(0);
  };

  return (
    <div className='w-screen  md:flex md:flex-col md:items-center md:justify-center md:h-screen'>
      <header className='flex items-center justify-center p-8'>
        <img src={LogoImg} alt='SPLITTER Logo' />
      </header>
      <main className='bg-secondary-background rounded-2xl p-8 flex flex-col md:flex-row gap-8 md:max-w-250'>
        <section className='space-y-8 md:flex-1'>
          <div className='space-y-1'>
            <h2 className='text-primary-heading-text'>Bill</h2>
            <Input
              value={bill}
              onChange={(v) => setBill(v)}
              placeholder='0'
              iconSrc={DollarImg}
              iconAlt={'Dollar sign'}
            />
          </div>
          <div className='space-y-1'>
            <h2 className='text-primary-heading-text'>Select Tip %</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {tips.map((value) => (
                <Button
                  key={value}
                  value={value}
                  onClick={() => setTip(value)}
                  styling={`${tip === value && 'bg-accent text-input-text'}`}
                />
              ))}

              <Input
                value={customTip === 0 ? undefined : customTip}
                onChange={(v) => {
                  setCustomTip(v);
                  setTip(v);
                }}
                placeholder='Custom'
              />
            </div>
          </div>
          <div className='space-y-1'>
            <div className='flex justify-between items-end'>
              <h2 className='text-primary-heading-text'>Number of People</h2>
              {people === 0 && (

              <p className='text-validate'>Can´t be zero</p>
              )}
            </div>
            <Input
              value={people}
              onChange={(v) => setPeople(v)}
              placeholder='0'
              iconSrc={PersonImg}
              iconAlt={'Person'}
            />
          </div>
        </section>
        <section className='bg-tertiary-background rounded-2xl p-4 md:flex-1 md:flex md:flex-col md:justify-between md:p-8'>
          <div className='my-8 space-y-4'>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-primary-text'>Tip Amount</h2>
                <p className='text-secondary-text'>/ person</p>
              </div>
              <p className='text-4xl text-accent'>${tipAmount}</p>
            </div>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-primary-text'>Total</h2>
                <p className='text-secondary-text'>/ person</p>
              </div>
              <p className='text-4xl text-accent'>${totalAmount}</p>
            </div>
          </div>
          <button type='button' onClick={handleReset} className='reset-button'>
            Reset
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
