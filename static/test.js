/************************************************************************************
      Sortable functions for Drag & Drop Interface
      *************************************************************************************/
     $( function() {
        $( "#new-jobs-list" ).sortable({
          connectWith: ["#printer-1-list", "#printer-2-list", "#printer-3-list", "#printer-4-list", "#cleaningtank-1-list" , "#cleaningtank-2-list", "#cleaningtank-3-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#new-jobs').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#new-jobs').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            // $('#new-jobs').css('background-color', 'rgba(0,0,0,.0)')
            var x = document.getElementById("new-jobs-list");
            $.post( "/api/updateTicket", {
              new_queue: "",
              ticket_num: (x.innerText).substring(0, 5)
            });
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.

          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.

          }
        });
      });

      $( function() {
        $( "#printer-1-list" ).sortable({
          connectWith: ["#printer-2-list", "#printer-3-list", "#printer-4-list", "#new-jobs-list", "#cleaningtank-1-list" , "#cleaningtank-2-list", "#cleaningtank-3-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#in-progress1').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#in-progress1').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("in-progress1");
            $.post( "/api/updateTicket", {
              new_queue: "PRINTING ON PRINTER 1 - ",
              ticket_num: (x.innerText).substring(0, 5)
            });
            $('#in-progress1').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(4deg)');
          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(0deg)');
          }
        });
      });

      $( function() {
        $( "#printer-2-list" ).sortable({
          connectWith: ["#printer-1-list", "#printer-3-list", "#printer-4-list", "#new-jobs-list", "#cleaningtank-1-list" , "#cleaningtank-2-list", "#cleaningtank-3-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#in-progress2').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#in-progress2').css('background-color', 'rgba(0,0,0,.0)')

          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("in-progress2");
            $.post( "/api/updateTicket", {
              new_queue: "PRINTING ON PRINTER 2 - ",
              ticket_num: (x.innerText).substring(0, 5)
            });
            $('#in-progress2').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(4deg)');
          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(0deg)');
          }
        });
      });

      $( function() {
        $( "#printer-3-list" ).sortable({
          connectWith: ["#printer-1-list", "#printer-2-list", "#printer-4-list", "#new-jobs-list", "#cleaningtank-1-list" , "#cleaningtank-2-list", "#cleaningtank-3-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#in-progress3').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#in-progress3').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("in-progress3");
            $.post( "/api/updateTicket", {
              new_queue: "PRINTING ON PRINTER 3 - ",
              ticket_num: (x.innerText).substring(0, 5)
            });
            $('#in-progress3').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(4deg)');
          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(0deg)');
          }
        });
      });

      $( function() {
        $( "#printer-4-list" ).sortable({
          connectWith: ["#printer-1-list", "#printer-2-list", "#printer-3-list","#new-jobs-list", "#cleaningtank-1-list" , "#cleaningtank-2-list", "#cleaningtank-3-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#in-progress4').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#in-progress4').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("in-progress4");
            $.post( "/api/updateTicket", {
              new_queue: "PRINTING ON PRINTER 4 - ",
              ticket_num: (x.innerText).substring(0, 5)
            });
            $('#in-progress4').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(4deg)');
          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(0deg)');
          }
        });
      });


      $( function() {
        $( "#cleaningtank-1-list" ).sortable({
          connectWith: ["#printer-1-list", "#printer-2-list", "#printer-3-list", "#printer-4-list", "#cleaningtank-2-list", "#cleaningtank-3-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#waiting1').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#waiting1').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("waiting1");
            $.post( "/api/updateTicket", {
              new_queue: "IN CLEANING TANK 1 - ",
              ticket_num: (x.innerText).substring(0, 5)
            });
            $('#waiting1').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(4deg)');
          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(0deg)');
          }
        });
      });

      $( function() {
        $( "#cleaningtank-2-list" ).sortable({
          connectWith: ["#printer-1-list", "#printer-2-list", "#printer-3-list", "#printer-4-list", "#cleaningtank-1-list", "#cleaningtank-3-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#waiting2').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#waiting2').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("waiting2");
            $.post( "/api/updateTicket", {
              new_queue: "IN CLEANING TANK 2 - ",
              ticket_num: (x.innerText).substring(0, 5)
            });
            $('#waiting2').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(4deg)');
          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(0deg)');
          }
        });
      });

      $( function() {
        $( "#cleaningtank-3-list" ).sortable({
          connectWith: ["#printer-1-list", "#printer-2-list", "#printer-3-list", "#printer-4-list", "#cleaningtank-1-list", "#cleaningtank-2-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#waiting3').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#waiting3').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("waiting3");
            $.post( "/api/updateTicket", {
              new_queue: "IN CLEANING TANK 3 - ",
              ticket_num: (x.innerText).substring(0, 5)
            });

            $('#waiting3').css('background-color', 'rgba(0,0,0,.0)')

          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(4deg)');
          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(0deg)');
          }
        });
      });

      $( function() {
        $( "#complete-jobs-list" ).sortable({
          connectWith: ["#printer-1-list", "#printer-2-list", "#printer-3-list", "#printer-4-list", "#cleaningtank-1-list" , "#cleaningtank-2-list", "#cleaningtank-3-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#complete').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#complete').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("complete");
            $.post( "/api/updateTicket", {
              new_queue: "DRYING -  ",
              ticket_num: (x.innerText).substring(0, 5)
            });
            var status = 'Complete';
            var orderId = ui.item["0"].firstChild.id;
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(4deg)');
          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.
            var elementId = (ui.item[0].firstChild.id)
            $('#'+elementId).css('transform', 'rotate(0deg)');
          }
        });
      });

      $( function() {
        $( "#rework-jobs-list" ).sortable({
          connectWith: ["#new-jobs-list", "#printer-1-list", "#printer-2-list", "#printer-3-list", "#printer-4-list", "#cleaningtank-1-list" , "#cleaningtank-2-list", "#cleaningtank-3-list", "#complete-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#rework').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#rework').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            var x = document.getElementById("rework");
            $.post( "/api/updateTicket", {
              new_queue: "READY FOR PICKUP - ",
              ticket_num: (x.innerText).substring(0, 5)
            });
          },
          revert: 100,
        });
      });  
