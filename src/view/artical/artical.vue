<template>
	<div class="art-container">
		<div class="left-content">
			<div class="art-header">
				<div class="title">NET Spire.Doc组件</div>
				<div class="pub-time">
					<span class="day">19</span>
					<div class="day-down">
						<span class="month">3月</span>
						<span class="year">2023</span>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="content-img">
					<img src="../../assets/bluesea.jpg" alt="" />
				</div>
				<div class="content-text">
					Spire.Doc for .NET是一款由E-iceblue公司开发的专业的Word
					.NET类库，使用该工具开发人员可以在任意.NET平台（C#，VB.NET，ASP.NET）上快速创建，读取，写入，转换，打印Word文档。作为一个独立的Word
					组件，Spire.Doc的运行无需安装Microsoft
					Word。而且，它可以将Microsoft
					Word文档创建功能集成到开发者的任何.NET应用程序。
				</div>
			</div>
			<div class="read-more">阅读全文</div>
			<div class="foot-info">
				<div class="tag">
					<span class="iconfont icon-tags"></span>
					<div class="tag-info">Vue</div>
					<div class="tag-info">HTML</div>
					<div class="tag-info">javaScript</div>
				</div>
				<div class="records">
					<span class="iconfont icon-eye read">999</span>
					<span class="iconfont icon-message message">999</span>
				</div>
			</div>
		</div>
		<div class="right-content"></div>
	</div>
	<div class="art-container">
		<div class="left-content">
			<div class="art-header">
				<div class="title">NET Spire.Doc组件</div>
				<div class="pub-time">
					<span class="day">19</span>
					<div class="day-down">
						<span class="month">3月</span>
						<span class="year">2023</span>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="content-img">
					<img src="../../assets/bluesea.jpg" alt="" />
				</div>
				<div class="content-text">
					Spire.Doc for .NET是一款由E-iceblue公司开发的专业的Word
					.NET类库，使用该工具开发人员可以在任意.NET平台（C#，VB.NET，ASP.NET）上快速创建，读取，写入，转换，打印Word文档。作为一个独立的Word
					组件，Spire.Doc的运行无需安装Microsoft
					Word。而且，它可以将Microsoft
					Word文档创建功能集成到开发者的任何.NET应用程序。
				</div>
			</div>
			<div class="read-more">阅读全文</div>
			<div class="foot-info">
				<div class="tag">
					<span class="iconfont icon-tags"></span>
					<div class="tag-info">Vue</div>
					<div class="tag-info">HTML</div>
					<div class="tag-info">javaScript</div>
				</div>
				<div class="records">
					<span class="iconfont icon-eye read">999</span>
					<span class="iconfont icon-message message">999</span>
				</div>
			</div>
		</div>
		<div class="right-content"></div>
	</div>
</template>

<script setup>
const tagList = [
	{
		id: 1,
		label: 'Vue',
	},
	{
		id: 2,
		label: 'HTML',
	},
	{
		id: 3,
		label: 'javaScript',
	},
];
</script>

<style lang="scss" scoped>
// icon样式
@import '//at.alicdn.com/t/c/font_3962272_o84zcuyn3j9.css';
.art-container {
	margin-bottom: 1rem;
	width: 60rem;
	// border: 1px solid red;
	background-color: #ffffff;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	.left-content {
		width: calc(100% - 16rem);
		margin: 0.7rem;
		.art-header {
			height: 3rem;
			display: flex;
			justify-content: space-between;
			.title {
				display: inline-block;
				line-height: 3rem;
				width: 100%;
				border-bottom: 2px solid #e8e9e7;
				padding-right: 3rem;
				vertical-align: bottom;
			}
			.pub-time {
				position: relative;
				top: -0.5rem;
				right: 0rem;
				width: 6rem;
				height: 3rem;
				margin-left: 1.2rem;
				.day {
					display: block;
					font-size: 1.5rem;
					text-align: center;
					color: #409eff;
					font-weight: bold;
				}
				.day-down {
					color: #989997;
					span {
						font-size: 0.95rem;
					}
					.year {
						padding-left: 0.9rem;
					}
				}
			}
		}
		.content {
			display: flex;
			.content-img {
				width: 40rem;
				height: 10rem;
				padding: 1rem 0;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.content-text {
				font-size: 0.8rem;
				padding: 1rem;
			}
		}
		.read-more {
			position: relative;
			font-size: 0.8rem;
			margin: 0.5rem 0;
			&::after {
				content: ' ';
				display: inline-block;
				height: 1px;
				background-color: #d0d0d0;
				width: 38.4rem;
				position: absolute;
				top: 0.6rem;
				left: 3.8rem;
			}
		}
		.foot-info {
			height: 3rem;
			display: flex;
			justify-content: space-between;
			color: #78798d;
			.tag {
				display: flex;
				position: relative;
				.tag-info {
					height: 1.3rem;
					background-color: #f1f2f0;
					font-size: 0.75rem;
					padding: 0.2rem 0.3rem;
					margin: 0 0.2rem;
				}
				.icon-tags:before {
					position: relative;
					top: 0.2rem;
				}
			}
			.records {
				padding-right: 3rem;
				width: 8rem;
				.read {
					margin: 0 0.6rem;
					&::before {
						padding-right: 0.3rem;
					}
				}
				.message {
					&::before {
						padding-right: 0.3rem;
					}
				}
			}
		}
	}
	.right-content {
		width: 16rem;
		margin-left: 2rem;
		background-color: aquamarine;
	}
}
</style>
