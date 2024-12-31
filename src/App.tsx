
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeView from './views/HomeView';
import ErrorPage from './views/ErrorPage';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ProfileView from './views/ProfileView';
import Friends from './components/profile/Friends';
import Profile from './components/profile/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <HomeView />,
      errorElement: <ErrorPage />
    },
    {
      path: 'profile',
      element: <ProfileView />,
      children: [
        {
          path: '',
          element: <Profile />
        },
        {
          path: 'friends',
          element: <Friends />
        }
      ]
    },
    {
      path: 'login',
      element: <LoginView />,
    },
    {
      path: 'register',
      element: <RegisterView />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
