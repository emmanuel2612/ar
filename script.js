window.onload = () => {

    const animate1 = document.getElementById("animate-1");
    const animate2 = document.getElementById("animate-2");
    const intro = document.querySelector(".intro");


    window.onscroll = () => {

        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            animate1.style.transform = "translateX(0%)";

            setTimeout(() => {
                animate1.style.opacity = "1";
            }, 150);


           
                intro.style.backgroundColor = "#14181a";
        

        } else {
           
            
                intro.style.paddingTop = "100px";
        
        }

        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            animate2.style.transform = "translateX(0%)";

            setTimeout(() => {
                animate2.style.opacity = "1";
            }, 150);

        }


    }







}
