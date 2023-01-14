import './index.css'
import { createRoot } from 'react-dom/client'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

const tag = <strong>Hello React</strong>

root.render(
    <App />
)