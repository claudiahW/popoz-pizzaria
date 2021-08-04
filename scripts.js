$.button(function(event) {
    if ($("input").val() === "") {
        alert('Enter valid data')
        return;
    }

    alert('Thank you for your order!')
    event.preventDefault();
    this.reset();