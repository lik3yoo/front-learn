## 目的

用于测试将第三方库放入到项目中，给第三方库写声明文件

## 方法一：使用绝对路径

1. 将`echarts`放入到项目中
2. 使用`import * as echarts from 'echarts'`引入
3. 将`echarts`的声明文件放入到项目中，此处是`types`
4. 需要在 tsconfig.json 中增加如下配置来解决类型提示报错

```json
"path": {
	"echarts": [
		"./types/echarts.d.ts"
	]
}
```

5. 解决 webpack 打包报错，需要在 webpack 的 alias 中增加第三方库的实际位置

```javascript
resolve:{
	alias: {
		"echarts": path.join(__dirname, 'libs/echarts')
	}
}
```

## 方法二： 使用相对路径
1. 将`echarts`放入到项目中
2. 使用`import * as echarts from '../libs/echarts'`
3. 将`echarts`的声明文件和第三方库放到一起，名称为`库名.d.ts`，此处是`echarts.d.ts`
