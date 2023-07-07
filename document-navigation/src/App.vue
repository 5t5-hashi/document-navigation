<template>
	<router-view />
</template>

<style lang="less">
#app {
	height: 100%;
	width: 100%;
}

html,
body {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	font-family: "HM" !important;
}
div {
	box-sizing: border-box;
}

.content {
	padding: 20px 300px;
}
@--sb-track-color: #5f5d56;
@--sb-thumb-color: #ccb06c;
@--sb-size: 7px;
body {
	scrollbar-color: @--sb-thumb-color @--sb-track-color;
}

::-webkit-scrollbar {
	width: @--sb-size;
}

::-webkit-scrollbar-track {
	background: @--sb-track-color;
	border-radius: 20px;
}

::-webkit-scrollbar-thumb {
	background: @--sb-thumb-color;
	border-radius: 20px;
	border: 1px solid #989781;
}
</style>
