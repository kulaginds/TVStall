$(document).ready(function() {
	var current_product = null;

	function showSection(name) {
		$("#search").removeClass("open");
		$("#order").removeClass("open");

		$("#" + name).addClass("open");

		switch (name) {
			case "order":
				updateOrderTab();
				break;
		}
	}

	function updateOrderTab() {
		if (current_product == null) {
			return;
		}

		showTab("cost-tab");
		$("#order .content .pay-form").removeClass("hide");
		$("#order .content .success-msg").addClass("hide");

		var price = $(current_product).find(".description span.price").html();

		$("#cost-tab p b.price").html(price);
		$("#payment-tab p b.price").html(price);
	}

	function showTab(name) {
		$("#order .content .tab-menu .tab-menu-item").removeClass("active");
		$("#order .content .tabs .tab").removeClass("active");
		$("#order .content .tab-menu .tab-menu-item[data-tab-name=" + name + "]").addClass("active");
		$("#" + name).addClass("active");
	}

	$("#search .content .list .product").click(function(e) {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
		} else {
			$(this).addClass('opened');
		}
	});

	$("section .header .back a").click(function(e) {
		showSection("search");
		return false;
	});

	$("#search .content .description .buy").click(function(e) {
		current_product = $(this).parent().parent();
		showSection("order");

		return false;
	});

	$("#order .content .tabs .tab .nav a.cancel").click(function(e) {
		showSection("search");
	});

	$("#order .content .tab-menu a").click(function(e) {
		var name = $(this).data("tab-name");
		showTab(name);
	});

	$("#cost-tab .nav .btn.next").click(function(e) {
		showTab("delivery-tab");
	});

	$("#delivery-tab .nav .btn.back").click(function(e) {
		showTab("cost-tab");
	});

	$("#delivery-tab .nav .btn.next").click(function(e) {
		showTab("payment-tab");
	});

	$("#payment-tab .nav .btn.back").click(function(e) {
		showTab("delivery-tab");
	});

	$("#payment-tab .nav .btn.finish").click(function(e) {
		$("#order .content .pay-form").addClass("hide");
		$("#order .content .success-msg").removeClass("hide");
	});

	$("#order .content .success-msg a.btn").click(function(e) {
		showSection("search");
	});

	$("#coupon").SBInput({
      keyboard: {
        type: 'fulltext_ru_nums'
      }
    });

    $("#house").SBInput({
      keyboard: {
        type: 'email'
      }
    });

    $("#apartment").SBInput({
      keyboard: {
        type: 'email'
      }
    });

    $("#coupon_form").submit(function(e) {
    	e.preventDefault();
    	alert('Функционал скидок в разработке.');
    	return false;
    });

    $("#pay_form").submit(function(e) {
    	e.preventDefault();
    	$("#order .content .pay-form").addClass("hide");
		$("#order .content .success-msg").removeClass("hide");
    	return false;
    });
});