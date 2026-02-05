import './App.css';
import DollarImg from './assets/icon-dollar.svg';
import PersonImg from './assets/icon-person.svg';
import LogoImg from './assets/logo.svg';
import { Input } from './components/Input';
import { Button } from './components/TipButton';

function App() {
  return (
    <div className='w-screen  md:flex md:flex-col md:items-center md:justify-center md:h-screen'>
      <header className='flex items-center justify-center p-8'>
        <img src={LogoImg} alt='SPLITTER Logo' />
      </header>
      <main className='bg-secondary-background rounded-2xl p-8 space-y-8 md:flex md:gap-8 md:max-w-250'>
        <section className='space-y-8 md:flex-1'>
          <div className='space-y-1'>
            <h2 className='text-primary-heading-text'>Bill</h2>
            <Input
              placeholder='0'
              iconSrc={DollarImg}
              iconAlt={'Dollar sign'}
            />
          </div>
          <div className='space-y-1'>
            <h2 className='text-primary-heading-text'>Select Tip %</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              <Button value={5} />
              <Button value={10} />
              <Button value={15} />
              <Button value={25} />
              <Button value={50} />

              <Input placeholder='Custom' />
            </div>
          </div>
          <div className='space-y-1'>
            <div className='flex justify-between items-end'>
              <h2 className='text-primary-heading-text'>Number of People</h2>
              <p className='text-validate'>Can´t be zero</p>
            </div>
            <Input placeholder='0' iconSrc={PersonImg} iconAlt={'Person'} />
          </div>
        </section>
        <section className='bg-tertiary-background rounded-2xl p-4 md:flex-1 md:flex md:flex-col md:justify-between md:p-8'>
          <div className='my-8 space-y-4'>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-primary-text'>Tip Amount</h2>
                <p className='text-secondary-text'>/ person</p>
              </div>
              <span className='text-4xl text-accent'>$40</span>
            </div>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-primary-text'>Total</h2>
                <p className='text-secondary-text'>/ person</p>
              </div>
              <span className='text-4xl text-accent'>$40</span>
            </div>
          </div>
          <button type='button' className='reset-button'>
            Reset
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
