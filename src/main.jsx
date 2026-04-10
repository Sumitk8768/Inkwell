import 'remixicon/fonts/remixicon.css'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ArticleProvider} from './context/BlogContext.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(

   <AuthProvider>
<ArticleProvider>
    <AppRoutes />
  </ArticleProvider>
   </AuthProvider>
)
