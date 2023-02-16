import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <header>
        Mesa de trabalho 03
      </header>
      <main>
        <p className='titulo'>Lorem Ipsum</p>
        <p className='paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis nihil laudantium, debitis accusamus nemo minima. Reprehenderit aperiam ut, officia dignissimos non ab repellendus veritatis deserunt deleniti doloribus quo voluptatum.</p>
        <p className='paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis nihil laudantium, debitis accusamus nemo minima. Reprehenderit aperiam ut, officia dignissimos non ab repellendus veritatis deserunt deleniti doloribus quo voluptatum.</p>
        <p className='paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis nihil laudantium, debitis accusamus nemo minima. Reprehenderit aperiam ut, officia dignissimos non ab repellendus veritatis deserunt deleniti doloribus quo voluptatum.</p>
        <p className='equipe'>Equipe: Kevilyn, Rubens, Dumith, Paula, Integrante que não lembro o nome haha</p>
      </main>
      <footer>Todos os direitos reservados 2022</footer>
    </div>  )
}

export default App
