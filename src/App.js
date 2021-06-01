import Header from './components/layouts/Header';
import CharacterContextProvider from './contexts/CharacterContext';
import Main from './pages/Main'

function App() {
  return (
    <CharacterContextProvider>
      <div>
        <Header />
        <Main />
      </div>
    </CharacterContextProvider>
  );
}

export default App;


