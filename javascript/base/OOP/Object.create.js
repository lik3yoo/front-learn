const base = {
	x: 1,
	y: 2
}

const withBase = Object.create(base, {
	z: {
		value: 3,
		writable: true,
		enumerable: false,
		configurable: true
	},
	p: {
		get: function () {
			return `p:${this._p}`
		},
		set: function (value) {
			this._p = value
		},
		enumerable: true,
		configurable: true
	}
})

withBase.p = '111'
console.log(withBase.p)