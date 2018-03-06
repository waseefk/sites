var menuButtonContainer = document.getElementById('menuButtonId');
var anchor = menuButtonContainer.querySelectorAll('div');
    
[].forEach.call(anchor, function(anchor)
{
    var open = false;
    
    anchor.onclick = function(event)
    {
        event.preventDefault();
        
        if(this.className.split(' ').indexOf('close') == -1)
        {  
            this.className += ' close';
            
            open = true;
            openMenu();
        }
        else
        {
            var classes = this.className.split(' ');
            var index = classes.indexOf('close');
            classes.splice(index,1);
            this.className = classes.join(' ');
            
            open = false;
            closeMenu();
        }
    }
}); 