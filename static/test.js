/************************************************************************************
      Sortable functions for Drag & Drop Interface
      *************************************************************************************/
     $( function() {
        $( "#new-jobs-list" ).sortable({
          connectWith: ["#in-progress-list", "#waiting-jobs-list", "#complete-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#new-jobs').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#new-jobs').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            $('#new-jobs').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
          start: function( event, ui ) { //event is triggered when sorting starts.

          },
          stop: function( event, ui ) { //event is triggered when sorting has stopped.

          }
        });
      });

      $( function() {
        $( "#in-progress-list" ).sortable({
          connectWith: ["#waiting-jobs-list", "#complete-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#in-progress').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#in-progress').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            $('#in-progress').css('background-color', 'rgba(0,0,0,.0)')
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
        $( "#waiting-jobs-list" ).sortable({
          connectWith: ["#in-progress-list", "#complete-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#waiting').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#waiting').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            $('#waiting').css('background-color', 'rgba(0,0,0,.0)')
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
          connectWith: ["#in-progress-list", "#waiting-jobs-list", "#rework-jobs-list", "#feedback-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#complete').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#complete').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            $('#complete').css('background-color', 'rgba(0,0,0,.0)')
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
        $( "#feedback-jobs-list" ).sortable({
          connectWith: ["#in-progress-list", "#waiting-jobs-list", "#complete-jobs-list", "#rework-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#feedback').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#feedback').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            $('#feedback').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
        });
      });

      $( function() {
        $( "#rework-jobs-list" ).sortable({
          connectWith: ["#in-progress-list", "#waiting-jobs-list", "#complete-jobs-list", "#feedback-jobs-list"],
          over: function( event, ui ) { //triggered when sortable element hovers sortable list
            $('#rework').css('background-color', 'rgba(0,0,0,.1)')
          },
          out: function( event, ui ) { //event is triggered when a sortable item is moved away from a sortable list.
            $('#rework').css('background-color', 'rgba(0,0,0,.0)')
          },
          receive: function( event, ui ) { // event is triggered when an item from a connected sortable list has been dropped into another list
            $('#rework').css('background-color', 'rgba(0,0,0,.0)')
          },
          revert: 100,
        });
      });  
