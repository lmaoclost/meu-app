import { Header } from './components/Header';
import { OutroHeader } from './components/OutroHeader';
import { MeuForm } from './components/MeuForm';
import './App.css';

export function App() {
  const handleClick = (userName) => {
    console.log(`Olá ${userName}`);
  }
  return (
    <>
      <Header />
      <OutroHeader />
      <MeuForm />
      <button onClick={() => handleClick('Renan')}>Clique Aqui</button>
    </>
  )
}
