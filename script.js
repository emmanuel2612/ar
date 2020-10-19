window.onload = () => {

    const animate1 = document.getElementById("animate-1");
    const animate2 = document.getElementById("animate-2");
    const intro = document.querySelectorAll(".intro");


    window.onscroll = () => {

        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            animate1.style.transform = "translateX(0%)";

            setTimeout(() => {
                animate1.style.opacity = "1";
            }, 150);


            var i;
            for (i = 0; i < intro.length; i++) {
                intro[i].style.backgroundColor = "#14181a";
            }

        } else {
            var i;
            for (i = 0; i < intro.length; i++) {
                intro[i].style.backgroundColor = "white";
                intro[i].style.paddingTop = "100px";
            }
        }

        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            animate2.style.transform = "translateX(0%)";

            setTimeout(() => {
                animate2.style.opacity = "1";
            }, 150);

        }


    }







}
