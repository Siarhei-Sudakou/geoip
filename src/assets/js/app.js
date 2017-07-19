import './../css/styles.scss'


$(function(){

    /**
     * Set active menu items
     */
    let current = location.pathname;
    if (current !== '/')
    {
        $('#nav a').each(function(){
            let $this = $(this);
            if($this.attr('href').indexOf(current) !== -1){
                $this.addClass('active');
            }
        })
    }

    /**
     * Search field submit
     */
    $('#nav .right.menu i').click(()=>{
        let ip = $('#nav .right.menu input').val();
        location.href = `/search/${ip}`;
    });
});