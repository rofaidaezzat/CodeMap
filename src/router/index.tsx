import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RoutLayout from '../Pages/Layout'
import HomePage from '../Pages'
import Tracks from '../Pages/Tracks'
import AboutUs from '../Pages/AboutUs'
import ContectUs from '../Pages/ContectUs'
import SignUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import ErrorHandler from '../errors/ErrorHandler'
import ProtectedRoute from '../auth/ProtectedRout'
import FAQFerMember from '../Pages/FAQFerMember'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import TermsAndConditions from '../Pages/TermsAndConditions'
import CookiesPolicy from '../Pages/CookiesPolicy'
import InfoOfFrontend from '../Pages/InfoOfFrontend'
// import RoadMapOfFrontend from '../Pages/RoadMapOfFrontend'
import SecondPageOfRoadMap from '../Pages/SecondPageOfRoadMap'


const storageKey = "loggedInUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;


const router = createBrowserRouter(createRoutesFromElements(
        <>
        {/* Root Layout*/}
        <Route path="/" element={<RoutLayout/>} errorElement={<ErrorHandler/>}>
        <Route index 
                element ={
                        <HomePage/>
                }
        />
        <Route path='/Tracks' 
                element={
                        <Tracks/>
                }/>
        <Route path='/AboutUs' 
                element={
                        <AboutUs/>
        }
        />
        <Route path='/ContactUs'
                element={
                        <ContectUs/>
                        }/>
        <Route path='/SignUp' 
                element={
                        <ProtectedRoute 
                                isAllowed={!userData?.jwt}
                                redirectPath="/login"
                                data={userData}
                        >
                        
                        <SignUp/>
                        </ProtectedRoute>
                        }/>
        <Route path='/LogIn' 
                element={
                        <ProtectedRoute
                                isAllowed={!userData?.jwt}
                                redirectPath="/"
                                data={userData}
                        >
                        <LogIn/>
                        </ProtectedRoute>
                        }/>
        <Route path='/FAQFerMember' 
                element={
                        <FAQFerMember/>
                }/>
                
        <Route path='/PrivacyPolicy' 
                element={
                        <PrivacyPolicy/>
                }/>
                        
        <Route path='/TermsAndConditions' 
                element={
                        <TermsAndConditions/>
                }/>
        <Route path='/CookiesPolicy' 
                element={
                        <CookiesPolicy/>
                }/>
                <Route path='/InfoOfFrontend' 
                element={
                        <InfoOfFrontend/>
                }/>
        <Route path='/SecondPageOfRoadMap' 
                element={
                        <SecondPageOfRoadMap/>
                }/>
                
        </Route>
        




        RoadMapOfFrontend
        {/* Page Not Found */}
        <Route path="*" element={<p>error</p>} />
        </>
)


)

export default router