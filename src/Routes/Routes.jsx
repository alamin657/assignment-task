import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ShowSummary from '../ShowSummary'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: "/summary/:id",
        element: <ShowSummary />
    }

]
)
