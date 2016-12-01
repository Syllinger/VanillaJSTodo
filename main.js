var todoList = {
	items: [],
	add: function(value) {
		this.items.push({
        	value: value,
        	completed: false
        });
	},
	change: function(pos, newVal) {
		this.items[pos].value = newVal;
	},
	delete: function(pos) {
		this.items.splice(pos, 1);
	},
	toggle: function(pos) {
		this.items[pos].completed = !this.items[pos].completed;
	},
	toggleAll: function() {
		var itemsLen = this.items.length;
		var itemsComplete = 0;

		this.items.forEach(function(item) {
			if (item.completed) {
				itemsComplete++;
			}
		});

		this.items.forEach(function(item) {
			if (itemsComplete === itemsLen) {
				item.completed = false;
			} else {
				item.completed = true;
			}
		});
	}
};

var handlers = {
	add: function() {
		var addInput = document.getElementById('addInput');
		todoList.add(addInput.value);
		addInput.value = '';
		view.display();
	},
	change: function() {
		var changePosInput = document.getElementById('changePosInput');
		var changeInput = document.getElementById('changeInput');
		todoList.change(changePosInput.valueAsNumber, changeInput.value);
		changePosInput.value = '';
		changeInput.value = '';
		view.display();
	},
	delete:	function(pos) {
		todoList.delete(pos);
		view.display();
	},
	toggle:	function() {
		var togglePosInput = document.getElementById('togglePosInput');
		todoList.toggle(togglePosInput.valueAsNumber);
		view.display();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.display();
	}
};

var view = {
	display: function() {
		var listUL = document.querySelector('ul');
		listUL.innerHTML = '';
		var itemsLen = todoList.items.length;
		todoList.items.forEach(function(item, index) { 
			var itemLIOutput = '';
			var itemLI = document.createElement('li');
			
			if (item.completed) {
				itemLIOutput = '(x) ';
			} else {
				itemLIOutput = '( ) ';
			}

			itemLI.id = index;
			itemLI.textContent = itemLIOutput + item.value;
			itemLI.appendChild(this.createDeleteBtn());			
			listUL.appendChild(itemLI);
		}, this);
	},
	createDeleteBtn: function() {
		var deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete';
		deleteBtn.className = 'deleteBtn';
		return deleteBtn;
	},
	createEventListeners: function() {
		var listUL = document.querySelector('ul');
		listUL.addEventListener('click', function(e) {
			var clickedElement = e.target;
			if (clickedElement.className === 'deleteBtn') {
				handlers.delete(parseInt(clickedElement.parentNode.id));
			}
		});
	}
};

view.createEventListeners();