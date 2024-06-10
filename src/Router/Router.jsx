
import {
  createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProfileLayout from "../Layout/ProfileLayout";
import UserProfile from "../UserProfile/UserProfile";
import PrivateRoute from "../Private/Private";
import Dashboard from "../Layout/Dashboard";
import UploadClass from "../Teacher/UploadClass";
import Classes from "../Teacher/Classes";
import UpdateClass from "../Teacher/UpdateClass";
import Deitals from "../Teacher/Deitals";
import AllClass from "../Admin/AllClass";
import ApplyTeacher from "../Pages/ApplyTeacher/ApplyTeacher";
import TeacherReq from "../Admin/TeacherReq";
import ManageUser from "../Admin/ManageUser";
import AdminPrivate from "../Private/AdminPrivate";
import TeacherPrivate from "../Private/TeacherPrivate";
import AllClasses from "../Pages/AllClass/AllClasses";
import Deatils from "../Pages/AllClass/Deatils";
import Payment from "../Pages/Payment/Payment";
import EnrollClass from "../UserProfile/EnrollClass";
import Continue from "../UserProfile/Continue";
import SeeProgress from "../Admin/SeeProgress";
import Error404Page from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,errorElement:<Error404Page></Error404Page>,children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allclasses',
            element:<AllClasses></AllClasses>
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><Deatils></Deatils></PrivateRoute>,
            loader:({params})=>fetch(`https://edu-teach-server.vercel.app/class/${params.id}`)
        },
        {
            path:'/enroll/:id',
            element:<PrivateRoute><Payment></Payment></PrivateRoute>,
            loader:({params})=>fetch(`https://edu-teach-server.vercel.app/class/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/Register',
            element:<Register></Register>
        },
        {
            path:'/apply-teacher',
            element:<PrivateRoute><ApplyTeacher></ApplyTeacher></PrivateRoute>
        }
      ]
    },
    {
      path: "profile",
      element: <PrivateRoute><ProfileLayout></ProfileLayout></PrivateRoute>,children:[
        {
            path:'my-profile',
            element: <UserProfile></UserProfile>
        },
        {
            path:'enrollclass',
            element: <EnrollClass></EnrollClass>
        },
        {
            path:'continue/:id',
            element: <Continue></Continue>,
            loader:({params})=>fetch(`https://edu-teach-server.vercel.app/class/${params.id}`)
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,children:[
        {
            path:'admin-profile',
            element: <AdminPrivate><UserProfile></UserProfile></AdminPrivate>
        },
        {
            path:'allclass',
            element: <AdminPrivate><AllClass></AllClass></AdminPrivate>
        },
        {
            path:'teacher-request',
            element: <AdminPrivate><TeacherReq></TeacherReq></AdminPrivate>
        },
        {
            path:'manageuser',
            element: <AdminPrivate><ManageUser></ManageUser></AdminPrivate>
        },
        {
            path:'progress/:id',
            element: <AdminPrivate><SeeProgress></SeeProgress></AdminPrivate>,
            loader:({params})=>fetch(`https://edu-teach-server.vercel.app/class/${params.id}`)
        },


      //  teacher
      {
        path:'teacher-profile',
        element: <TeacherPrivate><UserProfile></UserProfile></TeacherPrivate>
    },
        {
            path:'Add-class',
            element: <TeacherPrivate><UploadClass></UploadClass></TeacherPrivate>
        },
        {
            path:'myclasses',
            element: <TeacherPrivate><Classes></Classes></TeacherPrivate>
        },
        {
          path:'update/:id',
          element:<TeacherPrivate><UpdateClass></UpdateClass></TeacherPrivate>,
          loader:({params})=>fetch(`https://edu-teach-server.vercel.app/class/${params.id}`)
        },
        {
          path:'myclass/:id',
          element:<TeacherPrivate><Deitals></Deitals></TeacherPrivate>,
          loader:({params})=>fetch(`https://edu-teach-server.vercel.app/class/${params.id}`)
        }
      ]
    },
    {
      path:'*',
      element:<Error404Page></Error404Page>
    }
  ]);