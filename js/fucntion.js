function createRow(phone, index) {
    return `<tr>
    <td>${index}</td>
    <td>${phone.name}</td>
    <td>${phone.price}$</td>
    <td>${phone.status}</td>
    <td>${phone.description}</td>
    <td>${phone.createdAt}</td>
    <td>${phone.updatedAt}</td>
    <td>
        <ion-icon name="create-outline"></ion-icon>
        <ion-icon class="deletee" name="trash-outline"></ion-icon>
    </td>
    </tr>
    `
}

export {createRow}