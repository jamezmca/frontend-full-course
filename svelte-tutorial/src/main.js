import { mount } from 'svelte'
import './fanta.css'
import './index.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
