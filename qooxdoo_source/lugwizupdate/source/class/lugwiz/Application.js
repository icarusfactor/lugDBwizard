/* ************************************************************************

   Copyright: GPL 3.0

   License: GPL 3.0

   Authors: Daniel Yount - aka @icarusfactor

   Version 0.8.4

************************************************************************ */

/* ************************************************************************

#asset(lugwiz/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "lugwiz"
 */
qx.Class.define("lugwiz.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */



    main : function()
    {
      // Call super class
      this.base(arguments);


      /** My global variable */

     userNameID   : "" 
     DELcheckbox  : null 
     userNameData : "" 
  userCountryData : ""
    userStateData : ""
     userCityData : ""  
      typeBoxData : ""      
  intervalsBoData : ""
      wifiBoxData : ""
       ethBoxData : ""
  hardwareBoxData : ""


      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */
      
      var CountryData = [ 'Online Only','United States','Canada','Afghanistan',
'Albania','Algeria','American Samoa','Andorra','Angola','Anguilla',
'Antarctica','Antigua and/or Barbuda','Argentina','Armenia','Aruba',
'Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh',
'Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan',
'Bolivia','Bosnia and Herzegovina','Botswana','Bouvet Island',
'Brazil','British lndian Ocean Territory','Brunei Darussalam',
'Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Cape Verde',
'Cayman Islands','Central African Republic','Chad','Chile' ,'China' ,
'Christmas Island' ,'Cocos (Keeling) Islands' ,'Colombia' ,'Comoros' ,
'Congo' ,'Cook Islands' ,'Costa Rica' ,'Croatia (Hrvatska)' ,'Cuba' ,
'Cyprus' ,'Czech Republic' ,'Denmark' ,'Djibouti' ,'Dominica' ,'Dominican Republic' ,
'East Timor' ,'Ecudaor' ,'Egypt' ,'El Salvador' ,'Equatorial Guinea' ,
'Eritrea' ,'Estonia' ,'Ethiopia' ,'Falkland Islands (Malvinas)' ,
'Faroe Islands' ,'Fiji' ,'Finland' ,'France' ,'France, Metropolitan' ,
'French Guiana' ,'French Polynesia' ,'French Southern Territories' ,
'Gabon' ,'Gambia' ,'Georgia' ,'Germany' ,'Ghana' ,'Gibraltar' ,
'Greece' ,'Greenland' ,'Grenada' ,'Guadeloupe' ,'Guam' ,'Guatemala' ,
'Guinea' ,'Guinea-Bissau' ,'Guyana' ,'Haiti' ,'Heard and Mc Donald Islands' ,
'Honduras' ,'Hong Kong' ,'Hungary' ,'Iceland' ,'India' ,'Indonesia' ,
'Iran (Islamic Republic of)' ,'Iraq' ,'Ireland' ,'Israel' ,'Italy' ,
'Ivory Coast' ,'Jamaica' ,'Japan' ,'Jordan' ,'Kazakhstan' ,'Kenya' ,
'Kiribati' ,'Korea Democratic People\'s Republic of' ,'Korea, Republic of' ,
'Kuwait' ,'Kyrgyzstan' ,'Lao People\'s Democratic Republic' ,'Latvia' ,
'Lebanon' ,'Lesotho' ,'Liberia' ,'Libyan Arab Jamahiriya' ,'Liechtenstein' ,
'Lithuania' ,'Luxembourg' ,'Macau' ,'Macedonia' ,'Madagascar' ,'Malawi' ,
'Malaysia' ,'Maldives' ,'Mali' ,'Malta' ,'Marshall Islands' ,'Martinique' ,
'Mauritania' ,'Mauritius' ,'Mayotte' ,'Mexico' ,'Micronesia, Federated States of' ,
'Moldova, Republic of' ,'Monaco' ,'Mongolia' ,'Montserrat' ,'Morocco' ,
'Mozambique' ,'Myanmar' ,'Namibia' ,'Nauru' ,'Nepal' ,'Netherlands' ,
'Netherlands Antilles' ,'New Caledonia' ,'New Zealand' ,'Nicaragua' ,
'Niger' ,'Nigeria' ,'Niue' ,'Norfork Island' ,'Northern Mariana Islands' ,
'Norway' ,'Oman' ,'Pakistan' ,'Palau' ,'Panama' ,'Papua New Guinea' ,
'Paraguay' ,'Peru' ,'Philippines' ,'Pitcairn' ,'Poland' ,'Portugal' ,
'Puerto Rico' ,'Qatar' ,'Reunion' ,'Romania' ,'Russian Federation' ,
'Rwanda' ,'Saint Kitts and Nevis' ,'Saint Lucia' ,'Saint Vincent and the Grenadines' ,
'Samoa' ,'San Marino' ,'Sao Tome and Principe' ,'Saudi Arabia' ,
'Senegal' ,'Seychelles' ,'Sierra Leone' ,'Singapore' ,'Slovakia' ,
'Slovenia' ,'Solomon Islands' ,'Somalia' ,'South Africa' ,
'South Georgia South Sandwich Islands' ,'Spain' ,
'Sri Lanka' ,'St. Helena' ,'St. Pierre and Miquelon' ,
'Sudan' ,'Suriname' ,'Svalbarn and Jan Mayen Islands' ,
'Swaziland' ,'Sweden' ,'Switzerland' ,'Syrian Arab Republic' ,
'Taiwan' ,'Tajikistan' ,'Tanzania, United Republic of' ,
'Thailand' ,'Togo' ,'Tokelau' ,'Tonga' ,'Trinidad and Tobago' ,
'Tunisia' ,'Turkey' ,'Turkmenistan' ,'Turks and Caicos Islands' ,
'Tuvalu' ,'Uganda' ,'Ukraine' ,'United Arab Emirates' ,
'United Kingdom' ,'United States minor outlying islands' ,
'Uruguay' ,'Uzbekistan' ,'Vanuatu' ,'Vatican City State' ,
'Venezuela' ,'Vietnam' ,'Virigan Islands (British)' ,
'Virgin Islands (U.S.)' ,'Wallis and Futuna Islands' ,
'Western Sahara' ,'Yemen' ,'Yugoslavia' ,'Zaire' ,'Zambia' ,'Zimbabwe' ];

var CountryArray = new qx.data.Array(CountryData);


var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(20)).set({
        width:  475,                                                       
        height: 600,         
        padding: 20,
        paddingRight: 150,
        textColor: "black",
        backgroundColor: "#F6F6FE"
      });
this.getRoot().add(container);



function getHTTPObject() 
     { 
        if (typeof XMLHttpRequest != 'undefined') 
         { return new XMLHttpRequest(); }

        try
         { return new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e)
         { try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {} }
        return false;
     }



      /*
      -------------------------------------------------------------------------
        USE AN EXISTING NODE TO ADD WIDGETS INTO THE PAGE LAYOUT FLOW
      -------------------------------------------------------------------------
      */
  
      // create the form
      var form = new qx.ui.form.Form();

       // Create an add / update button
      var VersionButton = new qx.ui.form.Button("Version 0.8.4");
      var SelectGetButton = new qx.ui.form.Button("    FILL TEXT FROM ID    ");
      var SelectUpdateButton = new qx.ui.form.Button("        UPDATE / REMOVE        ");
      var SelectAddButton = new qx.ui.form.Button("          ADD         ");

      // Add button to document at fixed coordinates

      userNameID =  "0";
 
      this.getRoot().add(VersionButton, {left: 380,  top: 5 });
      this.getRoot().add(SelectGetButton, {left: 220,  top: 5});
      this.getRoot().add(SelectUpdateButton, {left: 80,  top: 5});
      this.getRoot().add(SelectAddButton, {left: 20, top: 5});
      SelectUpdateButton.setEnabled(false);
      //SelectGetButton.setEnabled(false);
      VersionButton.setEnabled(false);

      // Add an event listener
      SelectAddButton.addListener("execute", function(e) {
      window.parent.loadlugDBadd();
      });

    

       // add the first headline
      form.addGroupHeader("        ");




      // add the first headline
      form.addGroupHeader("Edit this ID");
      
      //when creating the widget have the default id from loaded value if set. 
        //alert( "SELECT ON: " +  window.select_on  );
      if( localStorage.getItem( 'userspace_select_action') == "false" ){   
            //alert( "select action == false" );
            var IDspinner = new qx.ui.form.Spinner(0, 0 ,9999); //This will limit the amount of LUGs that it can update.
          } 
      else {
            var IDspinner = new qx.ui.form.Spinner(0, parseInt(localStorage.getItem( 'userspace_select_action' )  ) ,9999); //This will limit the amount of LUGs that it can update.
            //alert( "select action != false" );
           }


      IDspinner.setRequired(true);
      //The below lines are commented so the user has to actually select ID
      // and not just update inital ID.
      //IDspinner.setValue("0");
      //this.userNameID =  "0";
      form.add(IDspinner, "Group ID");
      IDspinner.addListener("changeValue", function(e) {
      this.userNameID =  e.getData();
      userNameID =  e.getData();
      },this );


      // Add an event listener
      SelectGetButton.addListener("execute", function(e) {
      //This will refresh the update widget with data from id that will load 1 item of LUG data into local storage                                  
      //this.userNameID =  "0";
      window.parent.loadlugDBupdatewithid( userNameID );
      });





      var checkDelete = new qx.ui.form.CheckBox( "Delete Entry" );
      checkDelete.set({value: false});
      this.DELcheckbox = false;
      form.add( checkDelete, "" );
      checkDelete.addListener("changeValue", function(e) {
      this.DELcheckbox = e.getData();

      if( this.DELcheckbox == true   ){ setEntryDisabled();} 
      if( this.DELcheckbox == false  ){ setEntryEnabled();} 
      }, this);



      // add the first headline
      form.addGroupHeader("Registration");

      // add usernamne
      if( localStorage.getItem( 'userspace_select_action' )  == "false" )
         {   
         var userName = new qx.ui.form.TextField();
         this.userNameData = "";
         }
      else
        {
         var userName = new qx.ui.form.TextField( localStorage.getItem( 'userspace_select_groupname' ) );
         this.userNameData = localStorage.getItem( 'userspace_select_groupname' );
        }    

      userName.setRequired(true);
      form.add(userName, "User Group");

      userName.addListener("changeValue", function(e) {
      this.userNameData = e.getData();
      }, this);


      // add the first headline
      form.addGroupHeader("Location");



      var userCountry = new qx.ui.form.List()
      userCountry.setWidth(200); 
      userCountry.setSelectionMode("one");

       userCountry.setRequired(true);
      form.add(userCountry, "Country");


      // If fill mode set it to the one in Local Storage, otherwise do nothing.
//      if( localStorage.getItem( 'userspace_select_action' ) == "false"   )
//         { 
//          //default update without fill.
//          //userCountry.setSelection( 1 );
     this.userCountryData = "";
//
//
//         }
//      else
//         {
//           //fill mode. 
//           var countryStr = localStorage.getItem( 'userspace_select_groupcountry' );
//           //loop through country names and find one that matches , if none Online Only
//           for(var i = 0; i < CountryData.length - 1; i++)
//           {
//           if(countryStr == CountryData[i] ) 
//              {
//
//               //userCountry.setSelection(i );
//               this.userCountryData = CountryData[i] ;
//               //alert("Found "+CountryData[i] );
//              }
//           }
//
//         }

      //Setup listener for country menu 
      userCountry.addListener("changeSelection", function(e) {
             this.userCountryData = e.getData()[0].getLabel();
             }, this);






      if( localStorage.getItem( 'userspace_select_action' )  == "false" )
         { 
         var userState = new qx.ui.form.TextField();
         this.userStateData = "";
         }
      else
         {
         var userState = new qx.ui.form.TextField( localStorage.getItem('userspace_select_groupstate' )  );
         this.userStateData = localStorage.getItem( 'userspace_select_groupstate' );
         }
      userState.setRequired(true);
      form.add(userState, "State");

      userState.addListener("changeValue", function(e) {
      this.userStateData = e.getData();
      }, this);
 



       if( localStorage.getItem( 'userspace_select_action' )  == "false" )
        { 
        var userCity = new qx.ui.form.TextField();
        this.userCityData = "";
        }
      else
        {
        var userCity = new qx.ui.form.TextField(  localStorage.getItem( 'userspace_select_groupcity' )  );
        this.userCityData = localStorage.getItem( 'userspace_select_groupcity' );
        }
      userCity.setRequired(true);
      form.add(userCity, "City");

      userCity.addListener("changeValue", function(e) {
      this.userCityData = e.getData();
      }, this);


      // add a save checkbox
      //form.add(new qx.ui.form.CheckBox(), "Save?");

      // add the second header
      form.addGroupHeader("Event Times");

      // add some additional widgets
      var typeBox = new qx.ui.form.SelectBox();
      typeBox.add(new qx.ui.form.ListItem("Public", null , "Public"));
      typeBox.add(new qx.ui.form.ListItem("Private"));
      typeBox.add(new qx.ui.form.ListItem("Online"));
      typeBox.add(new qx.ui.form.ListItem("Public/Online"));
      typeBox.add(new qx.ui.form.ListItem("Private/Online"));
      typeBox.add(new qx.ui.form.ListItem("Restricted"));
      typeBox.add(new qx.ui.form.ListItem("Unknown"));
      form.add(typeBox, "Type");
      this.typeBoxData = ["Public"];
      typeBox.addListener("changeSelection", function(e) {
      //alert( "Checked: " + e.getData() );
      this.typeBoxData = e.getData()[0].getLabel();
      }, this);




      var intervalsBox = new qx.ui.form.SelectBox();
      intervalsBox.add(new qx.ui.form.ListItem("Daily", null , "Daily"));
      intervalsBox.add(new qx.ui.form.ListItem("Bi-Weekly"));
      intervalsBox.add(new qx.ui.form.ListItem("Weekly"));
      intervalsBox.add(new qx.ui.form.ListItem("Bi-Montly"));
      intervalsBox.add(new qx.ui.form.ListItem("Montly"));
      intervalsBox.add(new qx.ui.form.ListItem("Every Other Month"));
      intervalsBox.add(new qx.ui.form.ListItem("Quaterly"));
      intervalsBox.add(new qx.ui.form.ListItem("Annual"));
      form.add(intervalsBox, "Intervals");
      this.intervalsBoxData = ["Daily"];
      intervalsBox.addListener("changeSelection", function(e) {
      //alert( "Checked: " + e.getData() );
      this.intervalsBoxData = e.getData()[0].getLabel();
      }, this);


      // add the second header
      form.addGroupHeader("Site Information");


      // add some additional widgets
      var wifiBox = new qx.ui.form.SelectBox();
      wifiBox.add(new qx.ui.form.ListItem("Public", null , "Public"));
      wifiBox.add(new qx.ui.form.ListItem("Private"));
      wifiBox.add(new qx.ui.form.ListItem("Pay"));
      wifiBox.add(new qx.ui.form.ListItem("None"));
      wifiBox.add(new qx.ui.form.ListItem("Unknown"));
      form.add(wifiBox, "Wifi");
      this.wifiBoxData = ["Public"];
      wifiBox.addListener("changeSelection", function(e) {
      this.wifiBoxData = e.getData()[0].getLabel();
      }, this);



      // add some additional widgets
      var ethBox = new qx.ui.form.SelectBox();
      ethBox.add(new qx.ui.form.ListItem("Public", null , "Public"));
      ethBox.add(new qx.ui.form.ListItem("Private"));
      ethBox.add(new qx.ui.form.ListItem("Pay"));
      ethBox.add(new qx.ui.form.ListItem("None"));
      ethBox.add(new qx.ui.form.ListItem("Unknown"));
      form.add(ethBox, "Ethernet");
      this.ethBoxData = ["Public"];
      ethBox.addListener("changeSelection", function(e) {
      this.ethBoxData = e.getData()[0].getLabel();
      }, this);



      // add some additional widgets
      var hardwareBox = new qx.ui.form.SelectBox();
      hardwareBox.add(new qx.ui.form.ListItem("No Restriction", null  ,"Not Restricted"));
      hardwareBox.add(new qx.ui.form.ListItem("Restricted"));
      hardwareBox.add(new qx.ui.form.ListItem("None"));
      hardwareBox.add(new qx.ui.form.ListItem("Unknown"));
      form.add(hardwareBox, "Bring Hardware");
      this.hardwareBoxData = ["Not Restricted"];
      hardwareBox.addListener("changeSelection", function(e) {
      this.hardwareBoxData = e.getData()[0].getLabel();
      }, this);


      

      //var box1 = new qx.ui.groupbox.GroupBox("Group Page Startup Options", "icon/16/apps/utilities-text-editor.png");
      //box1.setLayout(new qx.ui.layout.VBox());


 




      // send button with validation
      var sendButton = new qx.ui.form.Button("Update");
      sendButton.addListener("execute", function() {
        if (form.validate()) {
//          alert("send...");
//          alert("list properties --> " + qx.dev.Debug.debugProperties( model )  )    ;

//          alert("properties --> " + "\n" +
//                this.DELcheckbox + "\n" +
//                this.userNameID + "\n" + 
//                this.userNameData + "\n" + 
//                this.userCountryData + "\n" +
//                this.userStateData + "\n" +
//                this.userCityData + "\n" +  
//                this.typeBoxData + "\n" +
//                this.intervalsBoxData + "\n" +
//                this.wifiBoxData + "\n" +
//                this.ethBoxData + "\n" +
//                this.hardwareBoxData + "\n" 
//                 );
          var UGData = {
//          username : controller.getModel().getUsername()
            delcheckbox : this.DELcheckbox ,
            usernameid  : this.userNameID , 
            username    : this.userNameData , 
            usercountry : this.userCountryData ,
            userstate   : this.userStateData ,
            usercity    : this.userCityData ,  
            typebox     : this.typeBoxData ,
            intervals   : this.intervalsBoxData ,
            wifi        : this.wifiBoxData ,
            eth         : this.ethBoxData ,
            hardware    : this.hardwareBoxData 
        };
        this.fireDataEvent("post", UGData);
        this.close();

        }
      }, this);
      form.addButton(sendButton);

      // reset button
      var resetButton = new qx.ui.form.Button("Reset");
      resetButton.addListener("execute", function() {
        form.reset();
      }, this);
      form.addButton(resetButton);



     
      // create the form and add it to the document
      //this.getRoot().add(new qx.ui.form.renderer.Single(form), {left: 10, top: 10 });

      container.add( new qx.ui.form.renderer.Single(form), {left: 10, top: 10  } );

     
      // binding /////////////////////////
      var controllerL = new qx.data.controller.List( CountryArray , userCountry );
      var controller = new qx.data.controller.Form(null, form);


     // post handling
      this.addListener("post", function(e) {
      var msg = e.getData();

      //Need to change this so it is parsing it from the msg var.
      var usernameidD    = encodeURIComponent( this.userNameID ); 
      var delcheckboxD   = encodeURIComponent( this.DELcheckbox ); 
      var usernameD      = encodeURIComponent( this.userNameData );  
      var usercountryD   = encodeURIComponent( this.userCountryData ); 
      var userstateD     = encodeURIComponent( this.userStateData ); 
      var usercityD      = encodeURIComponent( this.userCityData ); 
      var usertypeD      = encodeURIComponent( this.typeBoxData ); 
      var userintervalsD = encodeURIComponent( this.intervalsBoxData ); 
      var userwifiD      = encodeURIComponent( this.wifiBoxData ); 
      var userethD       = encodeURIComponent( this.ethBoxData ); 
      var userhardwareD  = encodeURIComponent( this.hardwareBoxData ); 



      var http = getHTTPObject();
      http.open("GET",
                "../getDBdata.php?ugid="+usernameidD+"&ugdel="+delcheckboxD+"&ugn="+usernameD+"&ugc="+usercountryD+"&ugs="+userstateD+"&ugcty="+usercityD+"&ugt="+usertypeD+"&ugi="+userintervalsD+"&ugw="+userwifiD+"&uge="+userethD+"&ugh="+userhardwareD , true);
      http.onreadystatechange = function()
               { 
                if (http.readyState == 4)
                    {
                    alert( "MODIFIED ID "+usernameidD );   
                     //alert( "RESPONSE TEXT \n" + http.responseText);
                    }
               // else 
               //     {
               //      alert( "NO RESPONSE TEXT \n" );
               //     }
               } 
      
      http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      http.send( "" );
      form.reset();
  
     }, this);



function setEntryDisabled()
    {

    userName.setEnabled(false);
    userCountry.setEnabled(false);
    userState.setEnabled(false);
    userCity.setEnabled(false);
    typeBox.setEnabled(false);
    intervalsBox.setEnabled(false);
    wifiBox.setEnabled(false);
    ethBox.setEnabled(false);
    hardwareBox.setEnabled(false);

    userName.setRequired(false);
    userCountry.setRequired(false);
    userState.setRequired(false);
    userCity.setRequired(false);

    } 

function setEntryEnabled()
    {

    userName.setEnabled(true);
    userCountry.setEnabled(true);
    userState.setEnabled(true);
    userCity.setEnabled(true);
    typeBox.setEnabled(true);
    intervalsBox.setEnabled(true);
    wifiBox.setEnabled(true);
    ethBox.setEnabled(true);
    hardwareBox.setEnabled(true);

    userName.setRequired(true);
    userCountry.setRequired(true);
    userState.setRequired(true);
    userCity.setRequired(true);

    } 



    
 }
    
  }



});
