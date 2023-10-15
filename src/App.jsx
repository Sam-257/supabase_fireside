import { lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageWrapper from "core/PageWrapper";
import supabaseClient from "config/supabaseClient";

// Lazy imports
const Home = lazy(() => import("pages/Home"));
const Login = lazy(() => import("pages/Login"));
const Signup = lazy(() => import("pages/Signup"));
const ForgotPassword = lazy(() => import("pages/ForgotPassword"));

const App = () => {
	useEffect(() => {
		console.log(supabaseClient);
		// const fetchData = async () => {
		// 	const response = await supabaseClient
		// 	.from('profiles')
		// 	.select();
		// 	console.log('response', response);
		// }
		// fetchData();
			// .then((response) => {
			// 	console.log(response);
			// })
		supabaseClient.from('profiles').select()
			.then((response) => console.log(response));

	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageWrapper />}>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
				<Route path="/forgot-password" element={<ForgotPassword />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
