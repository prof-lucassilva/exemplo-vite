import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
        <img className="w-full" src={viteLogo} alt="Imagem"></img>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-gray-800">Título</h2>
            <p className="text-gray-700 text-base">
              Descrição do conteúdo vai aqui. Com o Tailwind, você estiliza de maneira rápida e eficiente.
            </p>
          </div>
      </div>
    </>
  )
}

export default App
