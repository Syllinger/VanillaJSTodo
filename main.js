var todoList = {
	items: [],
	display: function() {
		var itemsLen = this.items.length;
		if (itemsLen === 0) {
			console.log('Your To-Do list is empty!');
		} else {
			console.log('My To-Dos:');
			for (var i=0; i < itemsLen; i++) {
				if (this.items[i].completed) {
					console.log("(x) ", this.items[i].value);	
				} else {
					console.log("( ) ", this.items[i].value);
				}
			}
		}
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
	},
	toggleAll: function() {
		var itemsLen = this.items.length;
		var itemsComplete = 0;

		for (var i=0; i < itemsLen; i++) {
			if (this.items[i].completed) {
				itemsComplete++;
			}
		} 

		for (var i=0; i < itemsLen; i++) {
			if (itemsComplete === itemsLen) {
				this.items[i].completed = false;
			} else {
				this.items[i].completed = true;
			}
		}
		this.display();
	}
};

var displayBtn = document.getElementById('displayBtn');
displayBtn.addEventListener('click', function() {
	todoList.display();
});

var toggleAllBtn = document.getElementById('toggleAllBtn');
toggleAllBtn.addEventListener('click', function() {
	todoList.toggleAll();
});