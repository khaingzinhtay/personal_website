let MenuBtn = document.getElementById('MenuBtn');
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-times')
});
let typed = new Typed('.auto-input',{
    strings:['Front-End Developer!','Freelancer!','UI Designer!','YouTuber!'],
    typedSpeed:100,
    backSpeed:100,
    backDelay:200,
    loop:true,
});