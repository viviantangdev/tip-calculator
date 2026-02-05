import './App.css';
import DollarImg from './assets/icon-dollar.svg';
import PersonImg from './assets/icon-person.svg';
import LogoImg from './assets/logo.svg';
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
            <Input iconSrc={DollarImg} iconAlt={'Dollar sign'} />
          </div>
          <div className='space-y-1'>
            <h2>Number of people</h2>
            <Input iconSrc={PersonImg} iconAlt={'Person'} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
