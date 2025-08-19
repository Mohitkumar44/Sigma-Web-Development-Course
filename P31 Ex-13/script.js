function creatCard(title,channelName,views,monthsAgo,duration,thumbnail) {
    if (views>999) {
        views = views/1000 + "K";
    }
    else if(views>999999){
        views = views/1000000 + "M";
    }
    else if(views>999999999){
        views = views/1000000000 + "B";
    }
    document.querySelector(".title").innerHTML = title;
    document.querySelector(".channelname").innerHTML = channelName;
    document.querySelector(".views").innerHTML = "• " +  views + " views";
    document.querySelector(".duration").innerHTML = duration;
    document.querySelector(".months").innerHTML = "• " + monthsAgo;
}
creatCard("Inserting and Removing Elements using JavaScript | Sigma Web Development Course - Tutorial #71","CodeWithHarry","247000","1 year ago","23:48","https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5mVkE1L8aRrmby-O4vHvVOVgltg");