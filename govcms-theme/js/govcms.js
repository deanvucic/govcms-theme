function startCounter(e){jQuery(e).prop("Counter",0).animate({Counter:jQuery(e).text()},{duration:2e3,easing:"swing",step:function(t){jQuery(e).text(Math.ceil(t))}})}function isElementVisible(e){var t=jQuery(window).scrollTop(),s=t+jQuery(window).height(),r=jQuery(e).offset().top,a=r+jQuery(e).height();return s>=a&&r>=t}function priceCalc(){return pageViews=jQuery("#page-views").val(),siteCount=jQuery("#number-of-sites").val(),totalAnnualCost=199,totalSetupCost=88,jQuery("#calcForm").addClass("fade-out"),jQuery("#calcResults #totalAnnualCost").text(totalAnnualCost),jQuery("#calcResults #totalSetupCost").text(totalSetupCost),jQuery("#calcResults #calcHeading").text("Your estimated total costs are"),jQuery("#calcResults").removeClass("sr-only"),jQuery("#calcResults").removeClass("fade-out"),jQuery("#calcResults").addClass("fade-in"),!1}function priceReCalc(){return jQuery("#calcForm").removeClass("fade-out"),jQuery("#calcResults").removeClass("fade-in"),jQuery("#calcResults").addClass("fade-out"),jQuery("#calcResults #calcHeading").text("Calculate your costs"),jQuery("#calcForm").addClass("fade-in"),jQuery("#calcResults").addClass("sr-only"),!1}jQuery(document).ready(function(){jQuery(".move-to-top").appendTo("#top-and-first-wrapper"),jQuery(".move-into-top").appendTo("section#about > div.container > div.row"),jQuery("#search-api-page-search-form").wrap("<div class='col-md-10 col-md-offset-1'></div>"),jQuery("#block-workbench-block").addClass("container"),jQuery("ul.tabs.primary").addClass("nav nav-tabs").removeClass("tabs").removeClass("primary"),jQuery(".drupal-version-list").toggleClass("sr-only"),jQuery(".drupal-version-checkbox").change(function(){jQuery(".drupal-version-list").toggleClass("sr-only")}),jQuery(".site-info-add").click(function(){var e=jQuery(".site-info")[0].outerHTML,t=jQuery(".site-info").length,s=t+1;return e=e.replace(/1\"/g,s+'"'),jQuery(".site-info").last().after(e),!1}),jQuery(".split").each(function(){jQuery(window).width()>993&&(height1=jQuery(".section-one",this).height(),height2=jQuery(".section-two",this).height(),height1>height2?(rightHeight=jQuery(".section-one",this).height(),jQuery(".section-two",this).height(rightHeight)):(rightHeight=jQuery(".section-two",this).height(),jQuery(".section-one",this).height(rightHeight)))}),jQuery(window).scroll(function(){jQuery(".fancyCounter").each(function(){var e=isElementVisible(jQuery(this));e&&!jQuery(this).hasClass("counting")&&(jQuery(this).addClass("counting"),startCounter(this))})})});