import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/login/Login";
import Register from "../pages/login/register/Register";
import MyProfile from "../pages/profile/MyProfile";
import DashboardLayout from "../components/layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../pages/dashboard/home/DashboardHome";
import Classes from "../pages/dashboard/classes/Classes";
import AddClass from "../pages/dashboard/addClass/AddClass";
import SingleClass from "../pages/dashboard/singleClass/SingleClass";
import SingleSubject from "../pages/dashboard/singleClass/subjects/SingleSubject/SingleSubject";
import AddSubject from "../pages/dashboard/addSubject/AddSubject";
import InviteTeacher from "../pages/dashboard/singleClass/subjects/SingleSubject/inviteTeacher/InviteTeacher";
import InviteStudent from "../pages/dashboard/singleClass/subjects/SingleSubject/inviteStudent/InviteStudent";
import ClassWork from "../pages/dashboard/singleClass/subjects/SingleSubject/classWork/ClassWork";
import SubmitClassWork from "../pages/dashboard/singleClass/subjects/SingleSubject/classWork/submitClassWork/SubmitClassWork";
import ViewSubmission from "../pages/dashboard/singleClass/subjects/SingleSubject/classWork/viewSubmission/ViewSubmission";
import AcceptInvite from "../pages/invite/AcceptInvite";
import Attendence from "../pages/dashboard/attendence/Attendence";
import AttendenceHistory from "../pages/dashboard/attendence/AttendenceHistory";
import Students from "../pages/dashboard/singleClass/subjects/SingleSubject/students/Students";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/my-profile",
        element: <MyProfile />,
      },

      {
        path: "/dashboard/add-new-class",
        element: <AddClass />,
      },
      {
        path: "/dashboard/classes/:classId/add-new-subject",
        element: <AddSubject />,
      },
      {
        path: "/dashboard/classes",
        element: <Classes />,
      },
      {
        path: "/dashboard/classes/:classId",
        element: <SingleClass />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId",
        element: <SingleSubject />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId/invite-teacher",
        element: <InviteTeacher />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId/invite-student",
        element: <InviteStudent />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId/students",
        element: <Students />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId/class-work",
        element: <ClassWork />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId/class-work/:classWorkId/submit",
        element: <SubmitClassWork />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId/class-work/:classWorkId/view-submission",
        element: <ViewSubmission />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId/attendence",
        element: <Attendence />,
      },
      {
        path: "/dashboard/classes/:classId/subject/:subjectId/attendence-history",
        element: <AttendenceHistory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/accept-invitation/:classId/:subjectId/:email/:role",
    element: <AcceptInvite />,
  },
]);
