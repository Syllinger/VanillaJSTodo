var todoList = {
	items: [],
	display: function() {
		console.log('My To-Dos: ', this.items);
	},
	add: function(value) {
		this.items.push({
        	value: value,
        	completed: false
        });
		this.display();
	},
	change: function(pos, newVal) {
		this.items[pos].value = newVal;
		this.display();
	},
	delete: function(pos) {
		this.items.splice(pos, 1);
		this.display();
	},
	toggle: function(pos) {
		this.items[pos].completed = !this.items[pos].completed;
		this.display();
	}
};
