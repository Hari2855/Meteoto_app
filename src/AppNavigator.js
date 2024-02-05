import {StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Accident from './Screens/Home screen/Accident'
import Mechanic from './Screens/Home screen/Mechanic' 
import Booking from './Screens/Booking'
import Towing from './Screens/Home screen/Towing'
import Booking2 from './Screens/Booking2';
import MechanicNotFound from './Screens/Home screen/MechanicNotFound';
import TowingNotFound from './Screens/Home screen/TowingNotFound';
import Keymakermap from './Screens/Home screen/Keymakermap';
import Keymaker from './Screens/Home screen/Keymaker';
import Keymakernotfound from './Screens/Home screen/Keymakernotfound';
import Fulestations from './Screens/Home screen/Fulestations';
import Hospital from './Screens/Home screen/Hospital';
import CarService from './Screens/Car services screens/CarService';
import CarForm from './Screens/Car services screens/CarForm';
import CarMap from './Screens/Car services screens/CarMap';
import CarBooking from './Screens/Car services screens/CarBooking';
import Test from './Test';
import AutoHome from './Screens/Autoparts/AutoHome';
import Autoparsmenu from './Screens/Autoparts/Autoparstmenu';
import Cart from './Screens/Autoparts/Cart';
import Partmap from './Screens/Autoparts/Partmap';
import partdetails from './Screens/Autoparts/Partdetails';
import Address1 from './Screens/Autoparts/Address1';
import Updateaddress from './Screens/Autoparts/Updateaddress';
import Newaddress from './Screens/Autoparts/Newaddress';
import OneTimeaddress from './Screens/Autoparts/OneTimeaddress';
import NewUpdatedaddress from './Screens/Autoparts/NewUpdatedaddress';
import Bill from './Screens/Autoparts/Bill';
import Payments from './Screens/Autoparts/Payments';
import Ordersuccess from './Screens/Autoparts/Ordersuccess';
import Emerjencycall from './Screens/Home screen/Emerjencycall';
import BookingStatus from './Screens/Car services screens/BookingStatus';
import EnterAddress from './Screens/Autoparts/EnterAddress';
import HomeScreen from './Screens/3D-wheel/HomeScreen';
import ShopProfile from './Screens/3D-wheel/ShopProfile';
import Profle from './Screens/3D-wheel/Profle';
import Replies from './Screens/3D-wheel/Replies';
import Electronichome from './Screens/Electronic export/Electronichome';
import Electronicmap from './Screens/Electronic export/Electronicmap';
import Booking1 from './Screens/Electronic export/Booking';
import WindShield from './Screens/Windshield/WindShield';
import Time from './Screens/Windshield/Time';
import Windmap from './Screens/Windshield/Windmap';
import Cng1 from './Screens/Fuel/Cng1';
import Charging1 from './Screens/Fuel/Charging1';
import Bill1 from './Screens/Track screens/Bill';
import Payments1 from './Screens/Track screens/Payments';
import Partconfirmmetion from './Screens/Track screens/Partconfirmmetion';
import WaitingConfirm from './Screens/Track screens/WaitingConfirm';
import Booking3 from './Screens/Track screens/Booking3';
import Emergencytrack from './Screens/Track screens/Emerjencytrack';
import Splash from './normal/Splash';
import Carscreen from './normal/Carscreen';
import Autopartstrack from './Screens/Autoparts/Autopartstrack';
import Parent from './normal/Parent'
import Logoscreen from './normal/Logoscreen';
import Servicecartrack from './Screens/Track screens/Servicecartrack';
import Jobcard from './Screens/Track screens/Jobcard';
import Payments2 from './Screens/Track screens/Payments2';
import Jobcard2 from './Screens/Track screens/Jobcard2';
import Invoice from './Screens/Track screens/Invoice';
import Paymentsuccess1 from './Screens/Track screens/Paymentsuccess';
import Paymentsuccess2 from './Screens/Track screens/Paymentsuccess2';
import Bookingconfirmed from './Screens/Track screens/Bookingconfirmed';
import Servicebooking from './Screens/Track screens/Servicebooking';
import Orderdetails from './Screens/Track screens/Orderdetails';
import Emptyreview from './Screens/Track screens/Emptyreview';
import Editprofile from './Screens/User screens/Editprofile';
import Serviceinvoice from './Screens/User screens/Serviceinvoice';
import Invoice2 from './Screens/User screens/Invoice';
import Myorders from './Screens/User screens/Myorders';
import Orderdetails2 from './Screens/User screens/Orderdetails';
import Orderdetails3 from './Screens/User screens/Orderdetails3';
import Returnorder from './Screens/User screens/Returnorder';
import MyCars from './Screens/User screens/MyCars';
import Managecars from './Screens/User screens/Managecars';
import Addcar from './Screens/User screens/Addcar';
import Mycarform from './Screens/User screens/Mycarform';
import Caradded from './Screens/User screens/Caradded';
import Document from './Screens/User screens/Document';
import Uploaddoc from './Screens/User screens/Uploaddoc';
import MyDocuments from './Screens/User screens/MyDocuments';
import Deletedoc from './Screens/User screens/Deletedoc';
import Saveddoc from './Screens/User screens/Saveddoc';
import Sos from './Screens/User screens/Sos';
import Setting from './Screens/User screens/Setting';
import Helpsupport from './Screens/User screens/Help&support';
import Faq from './Screens/User screens/Faq';
import Chatwithus from './Screens/User screens/Chatwithus';
import Contactus from './Screens/User screens/Contactus';
import Feedback from './Screens/User screens/Feedback';
import Message from './Screens/Cat screens/Message';
import Onboarding from './normal/Onboarding';
import Home from './Screens/Home screen/Home';
import Onboarding2 from './normal/Onboarding2';
import Onboarding3 from './normal/Onboarding3';
import Signup from './normal/Signup';
import Verification from './normal/Verification';
import Login from './normal/Login';
import Waintingscreen from './Screens/Autoparts/Waintingscreen';
import ACservice from './Screens/AC service/ACservice';
import DENTINGPENTING from './Screens/Denting & Penting/Denting&Penting';
import Caespa from './Screens/Car spa/Carspa';
import Accessories from './Screens/Accessories/Accessories';
import Modify from './Screens/Modify/Modify';
import DoorRepair from './Screens/Door Repair/DoorRepair';
import Graphicwork from './Screens/Graphic Work/Graphicwork';
import Seatcover from './Screens/Seat cover/Seatcover';
import Interior from './Screens/Interior design/Interior';
import Fastag from './Screens/Fastag/Fastag';


const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#333333'} />
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Carscreen' component={Carscreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Logoscreen' component={Logoscreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Onboarding' component={Onboarding} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Onboarding2' component={Onboarding2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Onboarding3' component={Onboarding3} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Signup' component={Signup} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Verification' component={Verification} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Login' component={Login} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Parent' component={Parent} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Editprofile' component={Editprofile} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Accident' component={Accident} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Emerjencycall' component={Emerjencycall}/>
        <Stack.Screen name='Mechanic' component={Mechanic} />
        <Stack.Screen name='Booking' component={Booking} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Towing' component={Towing} />
        <Stack.Screen name='Booking2' component={Booking2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='MechanicNotFound' component={MechanicNotFound} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='TowingNotFound' component={TowingNotFound} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Keymakermap' component={Keymakermap} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Keymaker' component={Keymaker} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Keymakernotfound' component={Keymakernotfound} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Fulestations' component={Fulestations} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Hospital' component={Hospital} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='CarService' component={CarService} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='CarForm' component={CarForm} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='CarMap' component={CarMap} />
        <Stack.Screen name='CarBooking' component={CarBooking} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='BookingStatus' component={BookingStatus} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Test' component={Test} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='AutoHome' component={AutoHome} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Autoparsmenu' component={Autoparsmenu} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Partmap' component={Partmap} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Waitscreen' component={Waintingscreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Cart' component={Cart} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Partdetails' component={partdetails} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='EnterAddress' component={EnterAddress} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Address1' component={Address1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Updateaddress' component={Updateaddress} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Newaddress' component={Newaddress} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='OneTimeaddress' component={OneTimeaddress} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='NewUpdatedaddress' component={NewUpdatedaddress} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Bill' component={Bill} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Payments' component={Payments} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Ordersuccess' component={Ordersuccess} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='ShopProfile' component={ShopProfile} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Profile1' component={Profle} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Replies' component={Replies} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Electronic' component={Electronichome} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Electronicmap' component={Electronicmap} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Booking1' component={Booking1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='WindShield' component={WindShield} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Time' component={Time} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Windmap' component={Windmap} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Cng1' component={Cng1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Charging1' component={Charging1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Bill1' component={Bill1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Payments1' component={Payments1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Partconfirmmetion' component={Partconfirmmetion} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Autopartstrack' component={Autopartstrack} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Wait' component={WaitingConfirm} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Booking3' component={Booking3} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Emergencytrack' component={Emergencytrack} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Servicecartrack' component={Servicecartrack} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Jobcard' component={Jobcard} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Jobcard2' component={Jobcard2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Payments2' component={Payments2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Invoice' component={Invoice} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Paymentsuccess1' component={Paymentsuccess1} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Paymentsuccess2' component={Paymentsuccess2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Bookingconfirmed' component={Bookingconfirmed} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Servicebooking' component={Servicebooking} options={{ ...TransitionPresets.SlideFromRightIOS }}/>
        <Stack.Screen name='Orderdetails' component={Orderdetails} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Emptyreview' component={Emptyreview} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Serviceinvoice' component={Serviceinvoice} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Invoice2' component={Invoice2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Myorders' component={Myorders} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Orderdetails2' component={Orderdetails2} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Orderdetails3' component={Orderdetails3} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Returnorder' component={Returnorder} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Mycars' component={MyCars} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Managecars' component={Managecars} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Addcar' component={Addcar} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Mycarform' component={Mycarform} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Caradded' component={Caradded} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Document' component={Document} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Uploaddoc' component={Uploaddoc} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='MyDocuments' component={MyDocuments} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Deletedoc' component={Deletedoc} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Saveddoc' component={Saveddoc} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Sos' component={Sos} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Setting' component={Setting} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Help' component={Helpsupport} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Faq' component={Faq} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Chatwithus' component={Chatwithus} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Contact' component={Contactus} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Feedback' component={Feedback} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Message' component={Message} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Acservice' component={ACservice} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Denting&Penting' component={DENTINGPENTING} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Carspa' component={Caespa} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Accessories' component={Accessories} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Modify' component={Modify} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Doorrepair' component={DoorRepair} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Graphicwork' component={Graphicwork} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Seatcover' component={Seatcover} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='Interior' component={Interior} options={{ ...TransitionPresets.SlideFromRightIOS }} />
        <Stack.Screen name='fastag' component={Fastag} options={{ ...TransitionPresets.SlideFromRightIOS }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator