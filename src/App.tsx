import './App.css';
import DollarImg from './assets/icon-dollar.svg';
import PersonImg from './assets/icon-person.svg';
import LogoImg from './assets/logo.svg';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  return (
    <>
      <header className='bg-amber-400 flex items-center justify-center p-8'>
        <img src={LogoImg} alt='SPLITTER Logo' />
      </header>
      <main className='bg-secondary-background rounded-2xl p-8'>
        <section className='space-y-8'>
          <div className='space-y-1'>
            <h2>Bill</h2>
            <Input
              placeholder='0'
              iconSrc={DollarImg}
              iconAlt={'Dollar sign'}
            />
          </div>
          <div className='space-y-1'>
            <h2>Select Tip %</h2>
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
            <h2>Number of People</h2>
            <Input placeholder='0' iconSrc={PersonImg} iconAlt={'Person'} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
