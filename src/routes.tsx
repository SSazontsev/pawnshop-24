import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@components';
import { HomePage } from '@pages';

const root = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <HomePage />
			}
		]
	}
]);

export default root;
