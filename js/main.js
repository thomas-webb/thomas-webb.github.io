jQuery(document).ready(function(){
	
	/*Slider home menu*/
	"use strict";
	$('#slider-carousel').caroufredsel({
		responsive:true,
		width:'100%',
		circular:true,
		scoll:{
			items:1,
			duration:500,
			pauseOnHover:true
			
		},
		auto:true,
		items:
		{
			visible:{
				min:1,
				max:1
			},
			height:"variable"
		},
		pagination:{
			container:".sliderpager",
			pageAnchorBuilder:false
		}
	});
	
	/*Nav bar fade in*/
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top>=60){
			$("header").addClass('secondary');
		}
		else 
			if($("header").hasClass('secondary')){
				$("header").removeClass('secondary');
		}
	});
	
	/*Nav bar scroll function*/
	$('.slide-section').click(function(e){
		var linkHref = $(this).attr('href');
		var headerHeight = $('header').outerHeight();
		
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 1000);
		e.preventDefault();
	});
	
	/*Skill section expand*/
	$("#flip1").click(function(){
		$("#panel1").slideToggle("slow");
	});
	
	$("#flip2").click(function(){
		$("#panel2").slideToggle("slow");
	});
	
	$("#flip3").click(function(){
		$("#panel3").slideToggle("slow");
	});
	
	$("#flip4").click(function(){
	$("#panel4").slideToggle("slow");
	});
	
	
	/*Header fade in*/
    $(window).scroll( function(){
        $('.headerFadeIn').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},3000);
                    
            }
            
        }); 
	});
	
	/*Sub header fade in*/
    $(window).scroll( function(){
        $('.subheaderFadeIn').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},6000);
                    
            }
            
        }); 
	});
	
	
	/*Text fade in*/
    $(window).scroll( function(){
        $('.contentFadeIn').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},8000);
                    
            }
            
        }); 
	});
	
	/*Slider contact page*/
	$(window).ready(function(){
	  $(".button").click(function(){
		$(".slider").animate({left: '250px'});
	  });
	});

  
 });
	
