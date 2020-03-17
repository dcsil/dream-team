import React from "react";
import { render } from '@testing-library/react';
import Home from "./Home";
import {commonRenderTest} from "../../App.test"

commonRenderTest.bind(this)(Home)