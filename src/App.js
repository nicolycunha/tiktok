import './App.css'
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Nicoly"
          description="O gato goleiro"
          music="musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={444}
          messages={455}
          shares={553}
          name="Pedro"
          description="O gato fofinho"
          music="musica qualquer"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  )
}

export default App
