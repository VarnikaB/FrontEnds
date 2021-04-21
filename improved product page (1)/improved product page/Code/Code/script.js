function viewimage(selection)
{
    let option=selection;
    let option_src=option.path[0].src;
    for(let i=1;i<=5;i++)
    {
        let modelmenu=document.getElementById(`model_${i}`);
        modelmenu.classList.remove('active_model');
        
    }
    option.path[0].className='active_model';
    document.getElementById('main_model').src=option_src;

}

function ToggleHide(hide)
{
    let option=hide.path;
    let change_sign=option[0];
    let data=option[3].querySelector('.toggleclass');
    if(data.style.display!='none')
    {
        change_sign.src='Images/plus.jpg';
        data.style.display='none';
    }
    else{
        change_sign.src='Images/subtract.png';
        data.style.display='block';
    }
    let data1=option[3].querySelector('.toggleclass1');
    if(data1.style.display!='none')
    {
        data1.style.display='none';
    }
    else{
        data1.style.display='block';
    }

}
function change_color(choice)
{
 
    let color=choice.path[0].value;
    let source='Images/';
    let hamburger_models=document.querySelectorAll('.d-block');

    for(let i=1;i<=5;i++)
    {
        let modelmenu=document.getElementById(`model_${i}`);
        modelmenu.src=source+`${color}_model_${i}.webp`;

        hamburger_models[i-1].src=source+`${color}_model_${i}.webp`;
        
    }
    let all_color=document.querySelectorAll('.color-hover');

    for(let i=0;i<all_color.length;i++)
    {
        all_color[i].classList.remove('active_color');
    }
    let main_model=document.querySelector('#main_model');
    main_model.src=source+`${color}_model_1.webp`;

    choice.path[0].className+=' active_color';
}

function myFunction(){
    let list=document.querySelector('#hamburger_list');
    if(list.style.display=='block')
    {
        list.style.display='none';
    }
    else{
        list.style.display='block';
    }
}

function change_size(choice){
    let curr=choice.path[0];

    let all_size=document.querySelectorAll('.size-hover');
    for(let i=0;i<all_size.length;i++)
    {
        all_size[i].classList.remove('active_size');
    }
    curr.className+=' active_size';
}