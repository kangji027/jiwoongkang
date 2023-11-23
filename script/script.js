$(document).ready(function(){

    //스크롤
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        let skill1left = $('.skills_1').offset().left;
        let skill2left = $('.skills_2').offset().left;
        let skill3left = $('.skills_3').offset().left;
        let skill4left = $('.skills_4').offset().left;
        let skill5left = $('.skills_5').offset().left;
        let skill6left = $('.skills_6').offset().left;
        let skill7left = $('.skills_7').offset().left;
        const sec4main = $('.sec4main').offset().top;
        const bannerot = $('.banner-img').offset().top;
        const bannerht = $('.banner-img').height();
        const banner = $('.banner').height();
        const toparea = $('.top-area').height();
        const sec4 = $('.sec-4').offset().top;
        console.log(sct);

        var ww = $(window).width();
        var wh = $(window).height();

    if(sct<parseInt(banner + toparea)){
        $('.banner-img').css({
            position:'fixed',
            top: '37.037%',
            left: '60.312%'
        })
    }if(wh>=900 && parseInt(banner + toparea)<sct){
        $('.banner-img').css({
            position:'absolute',
            top: '165.462%',
            left: '60.312%'
        })
    }if(wh<900 && parseInt(banner + toparea)<sct){
        $('.banner-img').css({
            position:'absolute',
            top: '180%',
            left: '60.312%'
        })
    }if(ww <1600 && wh<900 && parseInt(banner + toparea)<sct){
        $('.banner-img').css({
            position:'absolute',
            top: '190%',
            left: '60.312%'
        })
    }

    //alert
    if(sct > sec4 + 200){
        $('.alert').css({
            display : 'none'
        })
    }else{
        $('.alert').css({
            display : 'block'
        })
    }

    //가로 인터렉션
    if(sct>400){
    // 400~1100 (about)
    // 0= a * 400 + b
    // -500 = a * 1100 + b
    // a = -5/7 b = -9/2375
    const z = -5/7 * sct + 2000/7;
    if(sct > 380 && sct < 1500){
        $('.about-txt').css('transform',`translateX(${z}px)`);
    }
    }
    // 1700~ 2400 (works)
    // 0 = a * 1700 + b
    // -500 = a * 2400 + b
    // a = -5/7 b = 8500/7
    const j =  -5/7 * sct + 8500/7
    if(sct>1700){
        $('.works-txt').css('transform',`translateX(${j}px)`)
    }
    // 6800 ~ 7500 (contact)
    // 0 = a * 6800 + b
    // -500 = a * 7500 + b
    // a = -5/7 b = 34000/7
    const m = -5/7 * sct + 34000/7
    if(sct>6800){
        $('.contact-txt').css('transform',`translateX(${m}px)`)
    }
    // 6100 ~ 6600 (반응형 contact1)
    // 0 = a * 6100 + b
    // -500 = a * 6600 + b
    // a = -1 b = 6100
    const c = -1 * sct + 6100
    if(ww<1600 && sct>6100){
        $('.contact-txt').css('transform',`translateX(${c}px)`)
    }


    
    //aos
    if(skill1left == 100){
        $('.skills_1').css({
            color: `#D6AE5D`
        })
    }else{
        $('.skills_1').css({
            color: `#3F3B37`
        })
    }
    if(skill2left == 100){
        $('.skills_2').css({
            color: `#D6AE5D`
        })
    }else{
        $('.skills_2').css({
            color: `#3F3B37`
        })
    }
    if(skill3left == 100){
        $('.skills_3').css({
            color: `#D6AE5D`
        })
    }else{
        $('.skills_3').css({
            color: `#3F3B37`
        })
    }
    if(skill4left == 100){
        $('.skills_4').css({
            color: `#D6AE5D`
        })
    }else{
        $('.skills_4').css({
            color: `#3F3B37`
        })
    }
    if(skill5left == 100){
        $('.skills_5').css({
            color: `#D6AE5D`
        })
    }else{
        $('.skills_5').css({
            color: `#3F3B37`
        })
    }
    if(skill6left == 100){
        $('.skills_6').css({
            color: `#D6AE5D`
        })
    }else{
        $('.skills_6').css({
            color: `#3F3B37`
        })
    }
    if(skill7left == 100){
        $('.skills_7').css({
            color: `#D6AE5D`
        })
    }else{
        $('.skills_7').css({
            color: `#3F3B37`
        })
    }


    //3d card
    
    if(sct>sec4){
        const frame1 = document.getElementById('frame1')
        const card1 = document.getElementById('m-img1')
        const light1 = document.getElementById('light1')
        

        let { x, y, width, height} = frame1.getBoundingClientRect()
        
        function mouseMove(e){
            const left1 = e.clientX - x
            const top1 = e.clientY - y
            const centerX = left1 - width / 2
            const centerY = top1 - height / 2
            const d = Math.sqrt(centerX**2 + centerY**2)

            card1.style.boxShadow =`
            ${-centerX/10}px ${-centerY/10} rgba{0, 0, 0, 0.1}
            `

            card1.style.transform =`
            rotate3d(
                ${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg
            )`
            
            
        }

        frame1.addEventListener('mouseenter', () => {
            frame1.addEventListener('mousemove', mouseMove)
        })
    
        frame1.addEventListener('mouseleave', () => {
            frame1.removeEventListener('mousemove', mouseMove)
            card1.style.boxShadow=''
            light1.style.backgroundImage=''
            card1.style.transform=''
        })
        window.addEventListener('resize', () => {
            rect = frame1.getBoundingClientRect()
            x = rect.x
            y = rect.y
            width = rect.width
            height = rect.height
        })


    }
    if(sct>sec4main){

        const frame2 = document.getElementById('frame2')
        const card2 = document.getElementById('m-img2')

        
        let { x, y, width, height} = frame2.getBoundingClientRect()


        function mouseMove(a){
            const left2 = a.clientX - x
            const top2 = a.clientY - y
            const centerX2 = left2 - width / 2
            const centerY2 = top2 - height / 2
            const d2 = Math.sqrt(centerX2**2 + centerY2**2)

            card2.style.boxShadow =`
            ${-centerX2/10}px ${-centerY2/10} rgba{0, 0, 0, 0.1}
            `

            card2.style.transform =`
            rotate3d(
                ${-centerY2 / 100}, ${centerX2 / 100}, 0, ${d2 / 8}deg
            )`
        }

        frame2.addEventListener('mouseenter', () => {
            frame2.addEventListener('mousemove', mouseMove)
        })
    
        frame2.addEventListener('mouseleave', () => {
            frame2.removeEventListener('mousemove', mouseMove)
            card2.style.boxShadow=''
            card2.style.transform=''
        })
        window.addEventListener('resize', () => {
            rect = frame2.getBoundingClientRect()
            x2 = rect.x2
            y2 = rect.y2
            width2 = rect.width2
            height2 = rect.height2
        })
    }


    });


    

    //백투탑
    $('.top-btn').click(function(){
        window.scrollTo({
            top:0 ,behavior:'smooth'
        });
    });


    //데이터 인덱스

    let dataindex1 = $('.about-txt').offset().top;
    let dataindex2 = $('.works-txt').offset().top;
    let dataindex3 = $('.sec-5').offset().top;

    $('.area').each(function(index){
        $(this).attr('data-index',index);
    });
    $('.area1').click(function(){
        $('html,body').stop().animate({
            scrollTop:dataindex1
        });
    });
    $('.area2').click(function(){
        $('html,body').stop().animate({
            scrollTop:dataindex2
        });
    });
    $('.area3').click(function(){
        $('html,body').stop().animate({
            scrollTop:dataindex3
        });
    });
     
});