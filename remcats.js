var timeouts = 0;
var cc = 0;
$('#table_users_allegro_cats').find('tr').each(function () {
    let el = $(this).find('td')[1];
        setTimeout(() => {
            save_category(this.id.substring(4), false, "")
            cc++;
            console.log(cc+ ": skasowano: " + this.id.substring(4));
        }, timeouts);
        timeouts += 100;
})

