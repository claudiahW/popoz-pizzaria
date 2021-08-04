$.button(function(event) {
    if ($("input").val() === "") {
        alert('Enter valid data')
        return;
      
    }
    {

    alert('Thank you for your order!')
    event.preventDefault("yes");
    this.reset();

    alert('Thank you for your order!')
    event.preventDefault("no");
    this.reset();
}