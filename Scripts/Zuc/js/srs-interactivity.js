$(document).ready(function(){

// console.log('ready function called');

$('.addPlanButton').click(function(){
	$('.plan-registration-box').show(1000);
	$(this).css("background","#D9D8D6");
	$("html, body").animate({ scrollTop: 640 }, "slow");
	$('.planRegis-controls').css("visibility","visible");
});


$('.new-planAdd-title p').click(function(){
	$('.new-planAdd').find('.new-planAdd-detail').toggle(1000);
	$(this).find('.change-icon').toggleClass('fa-plus-square fa-minus-square');
});

// Info circle
$('.info-circle').click(function(){
	$('.info-text-container').toggle(500);
});

function openModal(className){
    $(className.data.key).removeClass('non-visible');
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
    function closeModal(className){
    $(className.data.key).addClass('non-visible');
  }

$('.addItemModal-button').bind('click',{key:'.addItem-modal'},openModal);

let cross = $('.addItem-form').find('.purple-background h2');
cross.bind('click',{key:'.addItem-modal'},closeModal);

$('.addItem-save').click(function(){
	$('.new-planAdd-detail').show(1000);
	$('.new-planAdd-title p').find('.change-icon').removeClass('fa-plus-square');
	$('.new-planAdd-title p').find('.change-icon').addClass('fa-minus-square');
	$('.addItem-modal').addClass('non-visible');
	$("html, body").animate({ scrollTop: 750 }, "slow")

});

// Plan registration add plan function

$('.planRegis-mainSubmit-button').bind('click',{key:'.mainSubmit-modal-container'},openModal);

$('.mainSubmit-modal').find('.close-modal').bind('click',{key:'.mainSubmit-modal-container'},closeModal);

//For removing plan registrtation form details and closing the modal
$('.remove-planRegis').bind('click',{key:'.remove-planModal-container'},openModal);

$('.remove-planModal').find('.close-modal').bind('click',{key:'.remove-planModal-container'},closeModal);

// Retailer Profile screen function for opening shipping location modal and closing
$('.location-form-button').bind('click',{key:'.shipping-locations-modal'},openModal);
//editing the shipping location data. the form should populate with entered data
$('.shipping-location-edit').bind('click',{key:'.shipping-locations-modal'},openModal);

let shippingCross = $('.shipping-locations-form').find('.purple-background h2');

shippingCross.bind('click',{key:'.shipping-locations-modal'},closeModal);

//Contact form

$('.contact-form-button').bind('click',{key:'.contacts-form-modal'},openModal);
$('.contact-form-edit').bind('click',{key:'.contacts-form-modal'},openModal);
let contactFormClose = $('.contacts-form').find('.purple-background h2');
contactFormClose.bind('click',{key:'.contacts-form-modal'},closeModal);


//order entry

$('.orderEntry-add-button').bind('click',{key:'.editOrder-modal-container'},openModal);

let orderAddButton = $('.editOrder-modal').find('.purple-background h2');

orderAddButton.bind('click',{key:'.editOrder-modal-container'},closeModal);

// Plan reporting: pending registrations

let todayDate = new Date();
let twoDigitMonth  = (todayDate.getMonth() >= 10) ? (todayDate.getMonth()+1) : '0'+(todayDate.getMonth()+1);
let currentDate = twoDigitMonth + '/' + todayDate.getDate() + '/' + todayDate.getFullYear();
let apos = '&#39;';
$('#today-date').append("Today"+apos+"s Date: "+currentDate);


//Plan inquiry

$('.openCancelation-container').click(function(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('.cancelation-modal').removeClass('non-visible');
	// $('.cancelation-modal').show(1000);
});

$('.plan-cancelation-container').find('.cross').click(function(){
	$('.cancelation-modal').addClass('non-visible');
});

$('.cancelPlan-Button').click(function(){
	//add non visible class
	$('.cancelation-modal').addClass('non-visible');
	$('.cancel-caution-container').removeClass('non-visible');

});

$('.open-PlanRegis').click(function(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('.planRegistration-modal-container').removeClass('non-visible');
});
$('.planRegistration-modal').find('.close-modal').bind('click',{key:'.planRegistration-modal-container'},closeModal);

// SPS Phase screens

$('.open-partnerProfileModal').click(function(){
	$('.partner-profile-modal-container').removeClass('non-visible');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});


$('.partner-profile-modal').find('.purple-background h2').click(function(){
	$('.partner-profile-modal-container').addClass('non-visible');
});

$('.open-agreementModal').bind('click',{key:'.agreementReader-modal-container'},openModal);
let closeAgreementModal = $('.agreementReader-modal').find('.purple-background h2');
closeAgreementModal.bind('click',{key:'.agreementReader-modal-container'},closeModal);

//when i do not agree link is clicked
$('.agreement-doNotCheck').bind('click',{key:'.agreementReader-modal-container'},closeModal);

//when I agree clicked
$('.agreement-check').click(function(){
	$('input[name="agreement-checked"]').attr('checked',true);
	$('.agreementReader-modal-container').addClass('non-visible');
});


$('.financial-info-circle').bind('click',{key:'.financial-details-modal-container'},openModal);
let closeFinancialInfoModal = $('.financial-details-modal').find(".purple-background h2");

closeFinancialInfoModal.bind('click',{key:'.financial-details-modal-container'},closeModal);

// agreement modal
let agreementText = $('.agreement-text');
		agreementText.scroll(function(){
			// console.log("scroll function called");
			let modalScrollTop= agreementText.scrollTop();
			let modalScrollHeight = agreementText.prop('scrollHeight');
			let modalInnerHeight = agreementText.innerHeight();

			// console.log('modalScrollTop is : '+ modalScrollTop+' modalScrollHeight is ' + modalScrollHeight +' And Modal Inner Height is ' + modalInnerHeight);
			if(modalScrollTop + modalInnerHeight >= (modalScrollHeight -50)){
				$('.agreement-controls').show(1000);
			}else{
				$('.agreement-controls').hide();
			}
		});

  //Video link for plan registration
    $('.videoLink a').bind('click',{key:'.video-modal-container'},openModal);
    $('.video-modal .cross').bind('click',{key:'.video-modal-container'},closeModal);
    //addItem modal seriel info
    $('.serial-info').click(function(){
    	$('.serial-text-container').toggle(500);
	});

$('.three-grid-column .video-box').click(function(){
	// console.log($(this).find('p').text());

	$('.as-video').removeClass('non-visible');
	$('.modal-video').empty();
	let videoModal = $('.as-video-modal');
	let title = $(this).find('p').text();
	videoModal.find('h2').text(title);
	let videoLink = $(this).find('.video-link').text();
	$('.modal-video').append('<source src="'+videoLink+'" type="video/mp4">');


});

$('.as-video-modal .close-modal').click(function(){
	$('.as-video').addClass('non-visible');
	let vid = document.getElementById('clicked-video');
	vid.load();
	$('.modal-video').empty();

	});

});
