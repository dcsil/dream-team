import {commonButtonTest } from "CommonRenderTest";
import {commonRenderTest} from "CommonRenderTest"

import Login from "./Login";
import Maps from "./Maps";
import Profile from "./Profile";
import Register from "./Register";
import Tables from "./Tables";
import ProfileInformation from "./ProfileInformation";
import SocialTrafficTable from "./SocialTrafficTable";
import PageVisitsTable from "./PageVisitsTable";
import TableCardHeader from "./TableCardHeader";

//Render Test
commonRenderTest.bind(this)(Login)
commonRenderTest.bind(this)(Maps)
//commonRenderTest.bind(this)(Profile)
commonRenderTest.bind(this)(Register)
commonRenderTest.bind(this)(Tables)
commonRenderTest.bind(this)(ProfileInformation)
commonRenderTest.bind(this)(PageVisitsTable)
commonRenderTest.bind(this)(SocialTrafficTable)
commonRenderTest.bind(this)(TableCardHeader)


//Button Tests
//commonButtonTest.bind(this)(Profile)
commonButtonTest.bind(this)(Login)
commonButtonTest.bind(this)(Register)
