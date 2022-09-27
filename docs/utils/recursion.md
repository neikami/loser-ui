## 处理树形数据为扁平数据
```javascript
	let list = []
	const treeData = [ { id: '1', pid: '0', label:'1', children: [ { id: '1-1', pid: '1', label: '1-1', children: [ { id: '1-1-1', pid: '1-1', label: '1-1-1', } ] } ] }, { id: '2', pid: '0', label:'2', children: [ { id: '2-1', pid: '2', label: '2-1', children: [ { id: '2-1-1', pid: '2-1', label: '2-1-1', } ] } ] } ]
	const fn = (arr) => {
		arr.forEach(el => {
			list.push({
				id: el.id,
				pid: el.pid,
				label: el.label
			})	
			if (el.children && el.children.length > 0 ) fn(el.children)
		});
	}
	fn(treeData)
	console.log(list)
```
## 处理扁平数据为树形数据
### 方法1
```javascript
	const list = [ { "id": "1", "pid": "0", "label": "1" }, { "id": "1-1", "pid": "1", "label": "1-1" }, { "id": "1-1-1", "pid": "1-1", "label": "1-1-1" }, { "id": "2", "pid": "0", "label": "2" }, { "id": "2-1", "pid": "2", "label": "2-1" }, { "id": "2-1-1", "pid": "2-1", "label": "2-1-1" } ]
	const GetTreeData = data => {
		let TreeData = [];
		let map = new Map(); //存在id,对应所在的内存地址
		data.forEach(el => {
			if (map.has(el.pid)) {
				if (!map.get(el.pid).children) {
					map.get(el.pid).children = [];
					map.get(el.pid).children.push(el);
					map.set(el.id, el);
				}
			} else if (!map.has(el.pid) && el.pid == 0) {
				TreeData.push(el);
				map.set(el.id, el);
			}
		});
		return TreeData;
	}
	let TreeData = GetTreeData(list);
	console.log(TreeData);
```
### 方法2
```javascript
	const list = [ { "id": "1", "pid": "0", "label": "1" }, { "id": "1-1", "pid": "1", "label": "1-1" }, { "id": "1-1-1", "pid": "1-1", "label": "1-1-1" }, { "id": "2", "pid": "0", "label": "2" }, { "id": "2-1", "pid": "2", "label": "2-1" }, { "id": "2-1-1", "pid": "2-1", "label": "2-1-1" } ]
	function getTreeData (arr, parentId) {
		function loop (parentId) {
			return arr.reduce((pre, cur) => {
				if (cur.pid === parentId) {
					cur.children = loop(cur.id)
					if (cur.children.length > 0) {
						pre.push(cur)
					} else {
						delete cur.children
						pre.push(cur)
					}
				}
				return pre
			}, [])
		}
		return loop(parentId)
	};
	const result = getTreeData(list, '0') // 0为最上级pid
	console.log(result)
```