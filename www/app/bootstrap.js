/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define('app', ['dom7', 'router'],
        function ($$, router) {
            'use strict';


            // Initialize your app
            var myApp = new Framework7({
                onPageAfterAnimation: router.afterAnimation,
                onPageBeforeInit: router.beforeInit,
                pushState: true,
                template7Pages: true,
                modalTitle: 'BeaconTest',
                material: true 

            });

            var mainView = myApp.addView('.view-main', {
                dynamicNavbar: true
            });

            /*
             * disable android backbutton hach
             */
            document.addEventListener('backbutton', function (e) {
                e.preventDefault();

                var backhint = $$('.back-hint');
                if (backhint.length > 0)
                    return backhint.click();

                $$('.navbar-on-center .back').click();


            }, false);

			
            /*
             * fast click hack
             */			
            $$(document).on('touchstart', '.touch-fix', function (e) {
                e.preventDefault();
                $$(this).click();
                $$(this).removeClass('active-state');
            });
			
			window.shouldRotateToOrientation = function (deg){
				return false;
			}
			

            return {
                'f7': myApp,
                'view': mainView
            };
        });


