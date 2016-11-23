var todoList = {
	items: ['item 1', 'item 2', 'item 3'],
	display: function() {
		console.log('My To-Dos: ', this.items);
	},
	add: function(todo) {
		this.items.push(todo);
		this.display();
	},
	change: function(pos, newVal) {
		this.items[pos] = newVal;
		this.display();
	},
	delete: function(pos) {
		this.items.splice(pos, 1);
		this.display();
	}
};
