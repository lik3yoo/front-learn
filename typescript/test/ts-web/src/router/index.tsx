import { Routes, HashRouter, Route } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Pages from "../pages"
import Header from "../components/Header"
import axios from '@/utils/axios'
import { useDispatch } from "react-redux";
import { setUserInfo } from '@/store/user'

const Root = () => {

	const dispatch = useDispatch()

	const getUserInfo = () => {
		axios({ url: '/api/user/userInfo' }).then(res => {
			console.log(res)
		})
	}

	useEffect(() => {
		getUserInfo()
	}, []);


	return (
		<HashRouter>
			<Header />
			<Routes>
				<Route index element={ <Pages.User /> } />
				<Route path="/user" element={ <Pages.User /> } />
				<Route path="/list" element={ <Pages.List /> } />
				<Route />
			</Routes>
		</HashRouter>
	)
}

export default Root
