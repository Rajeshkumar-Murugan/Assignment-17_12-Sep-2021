setInterval(()=>{
        message=document.getElementById("tweet")
        text = message.value;
        document.getElementById('counter').innerHTML = text.length;
    }
)
