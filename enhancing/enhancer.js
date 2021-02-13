module.exports = {
	succeed,
	fail,
	repair,
	get,
};

function succeed(item) {
	succeededItem = item;
	if (succeededItem.enhancement > 19)
		return { ...succeededItem
		};
	else return { ...succeededItem,
		enhancement: succeededItem.enhancement + 1
	}
}

function fail(item) {
	failedItem = item;
	if (failedItem.enhancement < 15) {
		return { ...failedItem,
			durability: failedItem.durability - 5
		}
	} else if (failedItem.enhancement === 15 || failedItem.enhancement === 16) {
		return { ...failedItem,
			durability: failedItem.durability - 10
		}
	} else if (failedItem.enhancement > 16) {
		return { ...failedItem,
			durability: failedItem.durability - 10,
			enhancement: failedItem.enhancement - 1
		}
	}
	return { ...item
	};
}

function repair(item) {
	return { ...item,
		durability: 100
	};
}

function get(item) {
	return { ...item
	};
}