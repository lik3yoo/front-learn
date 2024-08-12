<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
<template>
	<view class="YmContent" :animation="animationData">
			<view class="topArea">
				<view class="top">
					<image v-on:click="me_3_click()"  src="/static/index/images/index_me_3.jpg" mode="scaleToFill" border="0"    class="me"></image>
					<text decode="true" class="title">答诊</text>
					<view v-on:click="btAnswer_18_click()" class="btAnswer">
						<image v-on:click="index_5_5_click()"  src="/static/index/images/index_5_5.jpg" mode="scaleToFill" border="0"    class="index_5"></image>
						<text decode="true" class="index_6">接诊</text>
					</view>
				</view>
			</view>
			<view class="index_1">
				<view class="index_7">
					<image v-on:click="index_8_8_click()"  src="/static/index/images/index_8_8.jpg" mode="scaleToFill" border="0"    class="index_8"></image>
					<input :value="index_9" @input="index_9_input" class="index_9" />
		
				</view>
				<view class="index_10">
					<view class="index_11">
						<image v-on:click="index_12_12_click()"  src="/static/index/images/index_12_12.jpg" mode="scaleToFill" border="0"    class="index_12"></image>
						<view class="index_13">
							<view class="index_14">
								<text decode="true" class="index_16">赵</text>
								<text decode="true" class="index_17">2020-12-09</text>
							</view>
							<text decode="true" class="index_15">回复及时回答细致</text>
						</view>
					</view>
				</view>
			</view>
		

		<view class="loading">{{loadingText}}</view>
		<view class="ymBbottom"></view>
	</view>
</template>

<script>
import index from "./index.js";
export default index;
</script>

<style lang="scss" scoped>
   @import url("/animate.min.css");
   @import './index.scss'
</style>