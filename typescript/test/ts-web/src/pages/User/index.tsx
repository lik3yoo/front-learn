import React from "react"
import { Skeleton } from "antd"
import { useSelector } from "react-redux"
import type { UserInfo } from '@/types/userinfo'


interface RootState {
	user: {
		userInfo: UserInfo
	}
}

export default function User() {
	const userInfo = useSelector((state: RootState) => state.user.userInfo
	)

	return (
		<Skeleton>
			<div className="user">
				<p>
					<label>UserName:</label>
					<span>{ userInfo.userName }</span>
				</p>
				<p>
					<label htmlFor="">Phone</label>
					<span>{ userInfo.phone }</span>
				</p>
			</div>
		</Skeleton>
	)
}
