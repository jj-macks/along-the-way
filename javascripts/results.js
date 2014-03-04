$(document).ready( function() {
  var accordion_template = $('#accordion-template').html();
  var template = Handlebars.compile( accordion_template );
  var data = {
    places: placeData
  };

  $('#accordion').html( template( data ) );

  // Add click listener to the right side arrow to open and close
  // the advanced search panel
  $('#push').click( function(e) {
     e.preventDefault();
     // Toggle displaying the results
     $('#results-view').fadeToggle();
     // Toggle opening and close the results window
     $('#results-window').toggleClass('expandResults');
     // Instantiate the accordion
     $( "#accordion" ).accordion();
  });
});


var placeData = [
      {
         "geometry" : {
            "location" : {
               "lat" : -33.87054,
               "lng" : 151.198815
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "c71365287e7606bd21a3311d21fda087830b7813",
         "name" : "Pancakes on the Rocks",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 1224,
               "html_attributions" : [ "From a Google User" ],
               "raw_reference" : {
                  "fife_url" : "https://lh4.googleusercontent.com/-75WfBLZ72qE/UTmX7RuJiNI/AAAAAAAAAUs/WPTeNp7bJvU/s0/2013-03-07"
               },
               "width" : 1632
            }
         ],
         "price_level" : 2,
         "rating" : 3.7,
         "reference" : "CoQBdgAAAPx2hdQySoYhqisjoL8fo3HCJryGj36tmlxWLrvSujyZg_VAqWAfgJpTH_yYcSQHvv4xRGrcRbQ8zw3mC3C5nSkaLltUwdXrQbttPaAzjxf1uSNF6ZfWE4ig_2FGMnlL7h5rWjV3lcpXjPzxYGfQvwHnHksvSgEmEOqByL5uC5g0EhDlPg1oUCe8a_QhZ88Sx2arGhTf8FPULrkopNl2oDMJfvcHEpXcTg",
         "types" : [ "bakery", "store", "meal_takeaway", "food", "establishment" ],
         "vicinity" : "Harbourside Shopping Centre,Darling Harbour,227/229-230 Darling Dr, Sydney"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.867217,
               "lng" : 151.192465
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "989df9aadca97a738b18e81d11d05603015cafc9",
         "name" : "John St Square Supermarket",
         "reference" : "CoQBewAAAATCZI7SvN6NuyOh5sBCnDMdgloh2oR_xkYteIUMSgnJmiosBUCeoHbuu9km3O0tSun3YTRN08OF7K4VCAmdHfN9weyGFnlqxSdlaWV6BHIYzFtjfzejNZAM6rsSwdsJxYzYLE_ru9Gq0XTTT8yr9rOCPrCjudffqwZ05RVvlNepEhCq-nLMQ-qff8SIE53zQj8oGhTm2enAZan7xVTRoTwXeGoMDLGJcQ",
         "types" : [ "food", "store", "establishment" ],
         "vicinity" : "45 Harris St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870779,
               "lng" : 151.198959
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "8bcbe06e54aee1530f383ff96c83f5d9bbaee54d",
         "name" : "Hurricane's Grill",
         "opening_hours" : {
            "open_now" : false
         },
         "photos" : [
            {
               "height" : 612,
               "html_attributions" : [ "From a Google User" ],
               "raw_reference" : {
                  "fife_url" : "https://lh6.googleusercontent.com/-472944WGTLE/UTM5tIHuMuI/AAAAAAAAACI/Je0eZ5PaXto/s0/Hurricane%2527s%2BGrill%2B%2526%2BBar"
               },
               "width" : 816
            }
         ],
         "price_level" : 3,
         "rating" : 4.1,
         "reference" : "CoQBcwAAADKw7yU-K63qz8GBas3dEIiOFCE5OAmuWearPw4nvwHKDjK0sYU1M78P1qxoFxbiGcSoCrfdXNMgOdTUYDZafL7XgrpaFj9Cu-dyP4BXjGGVNOdtvqlg450zJUqppmg6AbNdlmUpqaPF5ZNftcVwnGN0FBd690pAcBldX30dI313EhD_0vKtBDNOGAG-lZ9y7I5ZGhR7sXgF6yYSTirKt-LQc2Yd16z8dw",
         "types" : [ "store", "restaurant", "food", "establishment" ],
         "vicinity" : "Harbourside Shopping Centre Shops 433-436, Level 2/Darling Dr, Darling Harbour"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.868173,
               "lng" : 151.194652
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "a6e36e20e63dfff2f8d5ef4dfa7c55f2c32d524c",
         "name" : "Adriano Zumbo at the Star",
         "opening_hours" : {
            "open_now" : false
         },
         "photos" : [
            {
               "height" : 160,
               "html_attributions" : [],
               "raw_reference" : {
                  "fife_url" : "https://lh6.googleusercontent.com/-rfsPHlHaJ3s/UmJ0n7QA3aI/AAAAAACgOdo/Q47-GpSda_o/s1600/Adriano%2BZumbo%2BPastissier"
               },
               "width" : 200
            }
         ],
         "rating" : 4.3,
         "reference" : "CoQBewAAAIKGb5Ah025gkPqGNFi5iodp0zY5K2d--WufJDsn-fqo9ypfbEdZ_-7e-xl_EsgEZyX1pHG8CdzPqqSfsTx1mi88KzkXJPc6qeN3ee1LvKVFNyMJmbJknUJz6zbAWhCSd_6gQheAwYl0lRRayjQcojy1cXQbJWRIkVN3gHfgbErYEhD-JgWo9bXgu9Q1K0tR823mGhRi2yHA82XFAkeL2ak9u79qZuYxwQ",
         "types" : [ "bakery", "store", "food", "establishment" ],
         "vicinity" : "Shop 1, Cafe Court, The Star/80 Pyrmont St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870136,
               "lng" : 151.197158
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "0ffae97910a140a21ee26aa23bf38652320ba37b",
         "name" : "Sydney Electric Bikes",
         "opening_hours" : {
            "open_now" : false
         },
         "photos" : [
            {
               "height" : 372,
               "html_attributions" : [],
               "raw_reference" : {
                  "fife_url" : "https://lh6.googleusercontent.com/-nqFvlpGzE2Y/UvlDDHssgFI/AAAAAAAAfeE/e9vDY1pXsik/s0/photo.jpg"
               },
               "width" : 630
            }
         ],
         "reference" : "CoQBdwAAAFxNhYgeS3szGUJTEoUC9hevWDdP7W7e739tx7EXx3HsjbknLEQF49x2wRE3r4pQU5tPElIkFTd215FdQAn29ykCPLWEBPWOFBfYrb5HXDtpwJ4OY2MzoVtvyAeXyaJEiCngW1oF82jd0pDmh_9wxuJOBjCtLgCKoZ1WoUx7LKzwEhCGGxop1FmGSZ63hezDHCx0GhSvcxhcQbF5KUmCmfML8yTFOykIpw",
         "types" : [ "bicycle_store", "store", "establishment" ],
         "vicinity" : "2/1-9 Pyrmont Bridge Rd, Sydney"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870468,
               "lng" : 151.19223
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
         "id" : "d46a505fcf31127fd03684df9a9b87d4a9c70700",
         "name" : "Six Star Spa",
         "opening_hours" : {
            "open_now" : false
         },
         "photos" : [
            {
               "height" : 617,
               "html_attributions" : [],
               "raw_reference" : {
                  "fife_url" : "https://lh4.googleusercontent.com/-Y4MD_ga0Pvg/UuvESCDULRI/AAAAAAAAeLo/DVqLHI9rvnc/s0/photo.jpg"
               },
               "width" : 900
            }
         ],
         "reference" : "CnRtAAAArFVG6ccbx-99snGZOH4KW_nb1pp-oCuawDIUf2zrv4mOBoY95JqBPt7epOMKoDe2ReuHpK-w-c6fO1n4cqnTr4o_Xfm8_9Ntcd4TnlqRVUGxtxLjSl9ohbd_K_ABrefbIGW9mIiQEZZB200Zu2JVmBIQxhG6DAu_gU0E4VUFGsDwaRoUU4WI6H4Ma0eI_nlYWMI76aUpIuI",
         "types" : [ "store", "spa", "health", "establishment" ],
         "vicinity" : "Suite G.02/55 Miller St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870591,
               "lng" : 151.19576
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "5fc4a9c674eada22542342da30f447357b0fe33f",
         "name" : "Life Interiors",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 460,
               "html_attributions" : [],
               "raw_reference" : {
                  "fife_url" : "https://lh3.googleusercontent.com/--7fRUVrbZZk/UjVxvw16BCI/AAAAAACeCk0/-KrZR_EqGw0/s1600/Life%2BInteriors%2BPty%2BLtd"
               },
               "width" : 392
            }
         ],
         "rating" : 4.8,
         "reference" : "CnRwAAAA7_8bo-aaZXA0aS-9pQQi-vmMdjKWDDy35yWFk-0i-gwObyw_GP5sFDHn1dtccjJDEIJk0vjIaDIcxnLGmWcJh7YI0Q02rehQ0EqgEnljSwhT47JzWjvC9A3E3FEvLyXFshArxLpKCI-AzJWwNWUJxRIQjw5qutndzGIaVUEbXuIkCRoUYhC24R6fcFpHmaogzzmqcWBwaPA",
         "types" : [
            "furniture_store",
            "general_contractor",
            "home_goods_store",
            "store",
            "establishment"
         ],
         "vicinity" : "2/104 Pyrmont Bridge Rd, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.868391,
               "lng" : 151.194507
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "cb1001b033f082340237c216f7c8bee2bb1dfc2b",
         "name" : "Gelato Messina - Pyrmont",
         "opening_hours" : {
            "open_now" : false
         },
         "photos" : [
            {
               "height" : 1000,
               "html_attributions" : [],
               "raw_reference" : {
                  "fife_url" : "https://lh4.googleusercontent.com/-1NO-f6hmNNs/Ufsh1RuL68I/AAAAAAAAABk/u65N1CiqwUQ/s0/IMG_8130.JPG"
               },
               "width" : 1002
            }
         ],
         "rating" : 4.7,
         "reference" : "CoQBegAAAHQ5qNDGAtKfL_NH1dYUvBO9v74GV9RBsJUF2XNwQCiN8jT0oGBHHAAN-hhukeGDrB0PiZWsSQZTgrJTen1y0qC5lJa_ohpcgBR5fHCF9USJMtR3IdQUnNFIZrNbTm8r_YFq5JrYaUZ19aD80LE5VycZfPAkOqd72qgs6POG4ZjyEhCqq0kmGkp_sFxuklMML-mSGhR2X8XDANunFpW2o6dt1CVwYqJA2A",
         "types" : [ "store", "food", "establishment" ],
         "vicinity" : "80 Pyrmont St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.869552,
               "lng" : 151.193474
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/wine-71.png",
         "id" : "b65d54d2c17f107a3cab5ff7a08b42c82cc4552e",
         "name" : "Porters Liquor Pyrmont Pymont Cellars",
         "opening_hours" : {
            "open_now" : true
         },
         "reference" : "CpQBhwAAAK_Z3SDEDnlHqPTDKjXM4oX-ziAVWRXY1qgUzCf18yVqHRgIDcWGxLxdnCFDtvuPO_xcUY6HtIV2vGyq-l0NCRAbZcwx_es25jwucZgXeODQ4K9pPIPN1iqYHT3m-h950CZP9uxNiWXPnJ7T0-hB2xW0Btxylv5wWGRvnkiAbeCuU1v94kNeHTf9n3-rxqkm4RIQxSaxPvclMGLjpKYU1AMjERoUcB718TM8eKFAtCJ7iXpVIpm_f08",
         "types" : [ "liquor_store", "food", "store", "establishment" ],
         "vicinity" : "119 Harris St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.866518,
               "lng" : 151.192193
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/wine-71.png",
         "id" : "a24f009db1d39b147b7def691023c46b1c60e895",
         "name" : "Red Bottle",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 465,
               "html_attributions" : [ "From a Google User" ],
               "raw_reference" : {
                  "fife_url" : "https://lh5.googleusercontent.com/-FRnR0Wf6j-Q/TaeJvLCd1NI/AAAAAAAAAAM/HlhweAELl8c/Redbottle_edit_front_landscape%2Bpyrmont.jpg"
               },
               "width" : 700
            }
         ],
         "reference" : "CnRsAAAAvfeNQ9X7VpXklA_yYAUoNv5Lg7xlNN8y8xssH2C8clYYsOoxIMAkzpF82ICxFkMIZhuT-UDbP465Sx6oXcVUlSheO5OLP2R_MyCugpatCBwebMpQ3g74MLWNRxsPXCD-GpJrWILHe3F_bNW2Fpo1xxIQi__K5dSN_QI8IX2VKt_K8xoUWrx8dnPPve489oHLxrBDtOsR5f0",
         "types" : [ "liquor_store", "store", "establishment" ],
         "vicinity" : "42 Harris St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.869657,
               "lng" : 151.194648
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
         "id" : "902dc97fe7182ef8be9e00b6301802d6695af6de",
         "name" : "Harrogate Teas NSW",
         "reference" : "CoQBdAAAAGPCJUaGdO_g6fnEuh92KzKbGdjdMvFj3lv8XB7E5Bmoi7sM6omlMe4WgoUlV8srT0YgC3SqDfoZbsA33xD_IX2NF1I5hoEuB7OzrZ46RmwEPB5zhVqftIosfrMEbmVg0DAWDWZSwRJUeVM2QOy1Iudiv9gfLDSLMefGyd6TPFPfEhD-ZWzr8IQFr3IcSToX5kiRGhQKVoGmROvQazLU4nXpuDxWMkmnag",
         "types" : [ "store", "cafe", "food", "establishment" ],
         "vicinity" : "3 Union St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870203,
               "lng" : 151.192924
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "af16622b1ec256deb574ebccc9bbe27a9e0c3e99",
         "name" : "SUPA IGA Pyrmont",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 480,
               "html_attributions" : [],
               "raw_reference" : {
                  "fife_url" : "https://lh5.googleusercontent.com/-WORtsJBzrp0/Uul6gUtGS8I/AAAAAAAAdzE/xcbYdSgaHkU/s0/photo.jpg"
               },
               "width" : 640
            }
         ],
         "reference" : "CoQBcQAAADkRJdZmtox_sFTGnh28VtbXvggcj1FfXGfnvt1smm58xzeaegjJa3HdH_1Ok1zefI50f_siXLY_EkFoE7BQ0qXeUCekZVLDoc5du3UYvBYIItt1q3tHyIZdtpJtXxpGzClCEPPlYETPPtLFxmo4VIehtqBClPhUHNtqt82-DCaTEhBHWD-uUI0kZ7MCKtsO1dXNGhSncc0D-b6xt6N7cwNNYQGoOKYT6w",
         "types" : [ "grocery_or_supermarket", "food", "store", "establishment" ],
         "vicinity" : "63 Miller St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870651,
               "lng" : 151.198877
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "09e6deef9ce41aae1de6fe7130b0410e98037b3a",
         "name" : "The British Lolly Shop",
         "reference" : "CoQBeAAAAJ3z0OVQnvWpYJa8NN0RgjKKbmpO24unPyGXL6HaKPsrwrrX9F3NlBGf4hzzoBP5WuBxmcd7fHdDCxFJghgkjbVcOb4i9qraov9IN8o8Wp41m1mxsfvuC8fJhgevy0KNDEK4Crg2YnEPOScNbsI7IkO8px93F2etjbK1iwFv17CsEhB_l9x1CcMeWQeyEEtgwvJMGhQOj1YFiektq0z1BtK38LDSLC4xjg",
         "types" : [ "store", "establishment" ],
         "vicinity" : "2-10 Darling Drive Darling Harbour NSW 2000"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.869578,
               "lng" : 151.193734
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "3ecedf0dbef0334a17ea2242e4e92cf3b5ef6327",
         "name" : "Urban Oasis",
         "opening_hours" : {
            "open_now" : false
         },
         "photos" : [
            {
               "height" : 416,
               "html_attributions" : [],
               "raw_reference" : {
                  "fife_url" : "https://lh6.googleusercontent.com/-1jB3tYlzJKg/UuHMJH4ULWI/AAAAAAAAdQw/iFDqVnmNSSQ/s0/photo.jpg"
               },
               "width" : 375
            }
         ],
         "reference" : "CnRsAAAAXlTBZZA49Y65nOmqOvFoaqnvPtYsoAnEHClLRky8jQQPVs8XXbcLgIHeKZsYlfsXkMHrqYw8CNmaPjUy0y00D4kBZt2nAFeo-BNhAy1lEiVQk_MqPBs5Pqd4nD3fu1iNQZt3Gvyv54VGa2bHHxTfLBIQQo5T2TU8Y14R0Uh-qMoQYRoU47akLi4mpk6kBojy9vt05Kh5NC8",
         "types" : [ "clothing_store", "store", "establishment" ],
         "vicinity" : "121 Harris St, Sydney"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870893,
               "lng" : 151.196788
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "33f54dd451cde7093a3b4dfddf1a4180269511ff",
         "name" : "Kwik Kopy Darling Harbour",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 155,
               "html_attributions" : [],
               "raw_reference" : {
                  "fife_url" : "https://lh3.googleusercontent.com/-M42EdTZRoEQ/UbqyHarTBjI/AAAAAACVQ-s/xIa7rFDYTvU/s1600/photo.jpg"
               },
               "width" : 220
            }
         ],
         "rating" : 4.9,
         "reference" : "CoQBegAAANuwmshr_GDUIeipRJtq9PG52RBrRrM3L7tZanPvgORG3mtrFEUyDJJwOD067ALgD29oFMMdR4n-5cr_M1gMRDl6WI7Yp8eM__rSuHtzZg9p_uu-3kk8fohquemguI36iKdTuRiH1BOAzAT5Z7cQfNYMDDFDM8UR1TpI4qWA0XfYEhDnNiMfhXBbyf0N0AXcOhZYGhTu_scgYS3FfKczqk928HdNBklXSg",
         "types" : [ "store", "establishment" ],
         "vicinity" : "97/1-5 Harwood St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870091,
               "lng" : 151.196776
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
         "id" : "c5f6eda786046de4419a6a1172feb207d97c8c53",
         "name" : "Esprit",
         "reference" : "CnRoAAAAF8DSwrIJ-oJAxOmbBg3jwAVYre_bs-Hg9fA-Sg7c3Y1a78iTth903cU5RnYRV75pecLoMwtgfHKhati30aq9aHoL5nXfOCVoQgzwZsGWmahIlF5ukCws8sYWLHvocmi34s-GtkSAaNeKh33lfo-3TxIQVBfYh4n0WOKqT1Q5WZnjoBoUh30uMaXRn3IjLhLl_11IgeYvhLE",
         "types" : [ "clothing_store", "store", "establishment" ],
         "vicinity" : "Unit 11, 2 Pyrmont Bridge Rd, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.87037,
               "lng" : 151.198403
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
         "id" : "e8a26f93b41049a965c65cb1c46fdbde33e47630",
         "name" : "Movenpick Icecream",
         "reference" : "CoQBdAAAALce2WeUvlbaPFqo2aG-6yDDWcoRzE_6WCzZI4ik-AUBzF5uI3f4vsWUgtlTZdxMKf5L5yds51wGlFxP_n8UYAVDue5_PKKFAwCY-isdO1pl3G_l7SpByfi8fBp98x0HiUDh003onBkVg7B8RPiDaYWrevGVpnKj-mPKpIjL6TWtEhAAaUenpQFL72f0Rqu9osgnGhQ0zLONFUojb8qM06YqGM-wdez_Xg",
         "types" : [ "store", "cafe", "food", "establishment" ],
         "vicinity" : "Ksk17/ 2-10 Darling Drive Darling Harbour NSW 2000 Australia"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.869506,
               "lng" : 151.196333
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "1ca4ff090b2f896ada7c08c237d455929576afd2",
         "name" : "Coles Supermarket",
         "reference" : "CoQBcwAAAFp1mgns88Q6OW95VF0-GwFWoLba_UYdRSX4pPaOmqSWYKphyVIg1OL1O8zUYyvd5vjbhcDi97DWwZ02ViX5h3Z-uhmxVCrBaD4Sb-e-hOD9mtWlnPMhbwC98JLPRK2kikJT7tb8VPr8wwhCKit_yaa3ioY4ejbSKjixoLoqIFkGEhBCk9LjQa-wf6NBgBhH-AjdGhTmw9V99AHbAIgiG-cVlaSelvL8Hg",
         "types" : [ "grocery_or_supermarket", "food", "store", "establishment" ],
         "vicinity" : "50/70 Union St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870569,
               "lng" : 151.19884
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "12e2b8e9aeb6901029aa6e3d375b80778438087f",
         "name" : "Harbourside Pharmacy",
         "reference" : "CoQBdgAAANNgGFrdiDyQw-YfC9s7J4vqBq9ssmdlu5efsmWC63NRLzHJO4aKoGsSlKVnJOfOQVUa2Gn3GXBrdDPdEhPHHgC6_-OvKiJTlTOHU1DnAfu4tH6mXB0JHOXVlxO4OX3MQXxtQcbNtpLMi1mg6joNvINjtW5dGWoYz8R8TJpCpT0LEhDtRZ3qsUy2csqX16oj17W7GhSikJDDCxN18QTWnMuwpnoqP3ZioQ",
         "types" : [ "pharmacy", "store", "health", "establishment" ],
         "vicinity" : "2-10 Darling Drive Darling Harbour NSW 2000"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.869578,
               "lng" : 151.193734
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "84c9d028f3f8bc773ad772b19cb6433a0d036fd7",
         "name" : "Nomadic Rug Traders",
         "opening_hours" : {
            "open_now" : false
         },
         "reference" : "CoQBdAAAAIiYB5RgYsDYLEttUJv6_ZCXb77s0zMkxRIsPz09qRJ2bIuX-ssCRIZvzCCwEM6v8ZegOU-odxgB0Tzb8wLRDHUYvahXmaUO6YuIe4Ye415eEY9LWpbZKfX2zbmlLTn5GzWPV53BS-aEezvLQoFyoMI19Lbd9YHbVrAeig8azcqFEhBaC2zHQsrJo_X9U5us8HH-GhRd4r0BnIEG0rN4IQrlgOluMshHIg",
         "types" : [ "store", "establishment" ],
         "vicinity" : "123 Harris St, Pyrmont"
      }
   ]
