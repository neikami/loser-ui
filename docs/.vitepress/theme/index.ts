import Theme from 'vitepress/theme'
import './styles/index.scss'
import './styles/style.scss'
import * as Button  from '../../components/button'
export default {
  ...Theme,
  enhanceApp({ app }) {
    Button.default.install(app)
  }
}