import {commonButtonTest } from "CommonRenderTest";
import {commonRenderTest} from "CommonRenderTest"

import Icons from "./Icons";
import Login from "./Login";
import Maps from "./Maps";
import Profile from "./Profile";
import Register from "./Register";
import Tables from "./Tables";
import ProfileInformation from "./ProfileInformation";
import SocialTrafficTable from "./SocialTrafficTable";
import PageVisitsTable from "./PageVisitsTable";

//Render Test
commonRenderTest.bind(this)(Icons)
commonRenderTest.bind(this)(Login)
commonRenderTest.bind(this)(Maps)
commonRenderTest.bind(this)(Profile)
commonRenderTest.bind(this)(Register)
commonRenderTest.bind(this)(Tables)
commonRenderTest.bind(this)(ProfileInformation)
commonRenderTest.bind(this)(PageVisitsTable)
commonRenderTest.bind(this)(SocialTrafficTable)


//Button Tests
commonButtonTest.bind(this)(Profile)
commonButtonTest.bind(this)(Login)
commonButtonTest.bind(this)(Register)
