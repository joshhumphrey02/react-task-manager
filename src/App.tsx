import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Layout from './Layout';
import Home from '@/screens/home';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			errorElement: <ErrorPage />,
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
			],
		},
	]);
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Toaster position="top-right" reverseOrder={true} />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;
