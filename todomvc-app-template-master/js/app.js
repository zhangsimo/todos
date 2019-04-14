;(function(window) {
	const vm = new Vue({
		el: '#app',
		data: {
			oneId: -1,
			msg: '',
			list: [
				{ id: 1, name: 'zs', done: true },
				{ id: 2, name: 'ww', done: false },
				{ id: 3, name: 'ls', done: false }
			]
		},
		methods: {
			click1(id) {
				this.list = this.list.filter(item => {
					return item.id != id
				})
			},
			keyup1() {
				if(this.msg.trim() == ''){
					return
				}
				let id =
					this.list.length == 0 ? 1 : this.list[this.list.length - 1].id + 1

				this.list.push({
					id,
					name: this.msg,
					done: false
				})
				this.msg = ''
			},
			dbclick1(id) {
				this.oneId = id
			},
			keyup2(){
				this.oneId = -1
			},
			click3(){
				this.list=[]
			}
		},
		computed: {
			isShow(){
				return this.list.length >0 ? true : false
			}
		}
	})
})(window)
