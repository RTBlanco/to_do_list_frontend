class List {
    
    constructor(list, listAttributes) {
        this.id = list.id
        this.title = listAttributes.title
        this.description = listAttributes.description
        this.category = listAttributes.category
        List.all.push(this)
    }

    renderList() {
        return `
        <div data-id=${this.id}>
            <h1>${this.title}</h1>
            <p>${this.description}</p>
            <h4>${this.category.name}</h4>
            <button data-id=${this.id}>edit</button>
        </div>
        <br><br> `;
    }
}

List.all = [];