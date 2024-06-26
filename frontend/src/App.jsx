import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utilites/PrivateRoute';

const Landing = lazy(() => import('./pages/landing'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Dashboard = lazy(() => import('./pages/dashboard'));

const Home = lazy(() => import('./pages/subpages/home'));
const About = lazy(() => import('./pages/subpages/about'));
const AboutUsCards = lazy(() => import('./pages/subpages/aboutuscards'));

const Resource= lazy(()=>import('./pages/subpages/resource') )

const Service = lazy(() => import('./pages/subpages/services'));

const Faqs=lazy(()=>import('./pages/subpages/faq'))

const  Testimonials = lazy(()=>import('./pages/subpages/testimonials'))

const Faq_QuestionAnswer = lazy(()=>import('./pages/subpages/faq_questionanswer'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />

          <Route  element={<PrivateRoute />}>

          <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route  path ="/dashboard/about" element={<About />} />
          <Route  path ="/dashboard/aboutuscards" element={<AboutUsCards />} />

          <Route  path ="/dashboard/resource" element={<Resource />} />

          <Route  path ="/dashboard/services" element={ <Service /> } />
          <Route  path ="/dashboard/faqs" element={ <Faqs /> } />

          <Route  path ="/dashboard/testimonials" element={ <Testimonials /> } />

          <Route  path ="/dashboard/faq_questionanswer" element={ <Faq_QuestionAnswer /> } />

         
          {/* Add more nested routes as needed */}
        </Route>

          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
