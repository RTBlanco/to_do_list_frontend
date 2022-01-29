class List {
    
    constructor(list, listAttributes) {
        this.id = list.id
        this.title = listAttributes.title
        this.description = listAttributes.description.split(' ')
        this.category = listAttributes.category
        List.all.push(this)
    }

    _renderUl() {
        let list = ''
        for (let i of this.description) {
            list += `<li>${i}</li>`
        }
        return list
    }

    renderList() {
        return `
        <div class='list-item' id='${this.id}'>
            <h1>${this.title}</h1>
            <ul>
                ${this._renderUl()}
            </ul>
            <h4>${this.category.name}</h4>
            <button id='del-${this.id}'>Delete</button>
        </div>
        <br><br> `;
    }
}

List.all = [];