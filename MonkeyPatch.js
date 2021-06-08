/*****************************************************************************************************************
*    .-'-.    Monkey Patching - HappyForms - frontend.js                                                       
*  _/.-.-.\_                                                                                                   
* ( ( o o ) ) HappyForms Class / Just add lines of code after the Form send Post-processing                    
*  |/  '  \|  Should work with Plugin Updates. Check on Updates of the Happy Forms JS if this functions has    
*   \ `-´ /   changed. If so, the Unchanged CODE lines here has to be changed accordingly.                     
*   /`'''`\                                                                                                    
*  /       \  Must be loaded AFTER the original HappyForms JS - frontend.js                                    
*             But before the Form get's initalized by the Page                                                 
*                                                                                                              
*             The used fields can be identified by adding a specific class in the HappyForm Configuration Page
*             Use Property CSS classes for that. Here we assume that there are fields for firstname, lastname and 
*             so on.
******************************************************************************************************************/
HappyForms.Form.prototype.submit = function( e ) {                                             /* Unchanged CODE */
    e.preventDefault();                                                                        /* Unchanged CODE */
                                                                                               /* Unchanged CODE */
    this.$form.addClass( 'happyforms-form--submitting' );                                      /* Unchanged CODE */
    this.$submits.attr( 'disabled', 'disabled' );                                              /* Unchanged CODE */
/*---------------------------------------------------------------------------------------------------------------*/    
/*Additional CODE */       // Get Data from Happy Forms Field identified by css-class
/*Additional CODE */       let sent_data = { firstName :        '.formdata-firstname' ,
/*Additional CODE */                         lastName :         '.formdata-lastname' ,
/*Additional CODE */                         phoneNo :          '.formdata-phone' ,
/*Additional CODE */                         email :            '.formdata-email'
/*Additional CODE */                       };    
/*Additional CODE */       // Fetch values from inputs
/*Additional CODE */       Object.keys(sent_data).forEach((key,i)=>{ 
/*Additional CODE */                  sent_data[key] = jQuery(sent_data[key]).find('input, textarea, select').val();  
/*Additional CODE */       });  
/*---------------------------------------------------------------------------------------------------------------*/
    jQuery.ajax( {                                                                             /* Unchanged CODE */
      type: 'post',                                                                            /* Unchanged CODE */
      data: this.serialize( e.target ),                                                        /* Unchanged CODE */
    } ).done( (evt)=>{                                                                         /* Unchanged CODE */
                                                                                               /* Unchanged CODE */
            this.onSubmitComplete( evt );                                                      /* Unchanged CODE */
                                                                                               /* Unchanged CODE */
/*---------------------------------------------------------------------------------------------------------------*/
/*Additional CODE */                                             
/*Additional CODE */            /* Additional subroutine to forward data to Cardess */
/*Additional CODE */            console.log('injected code',evt,sent_data);
/*Additional CODE */
/*Additional CODE */            let ajax_url = '/wp-admin/admin-ajax.php';
/*Additional CODE */            let wp_action = '[individual ajax function]';
/*Additional CODE */            
/*Additional CODE */            sent_data.action=wp_action;
/*Additional CODE */
/*Additional CODE */            jQuery.ajax({
/*Additional CODE */                  dataType: 'json',
/*Additional CODE */                  url: ajax_url,
/*Additional CODE */                  method:'post',
/*Additional CODE */                  data: sent_data,
/*Additional CODE */                  success: (response)=>{ console.log('Response: ',response);
/*Additional CODE */                                          
/*Additional CODE */
/*Additional CODE */                                       } ,
/*Additional CODE */                  error:(arr)=>{ console.warn('Error sending data');
/*Additional CODE */                                          
/*Additional CODE */                                      }
/*Additional CODE */           });
/*Additional CODE */
/*---------------------------------------------------------------------------------------------------------------*/
                                                                                               /* Unchanged CODE */
       } );                                                                                    /* Unchanged CODE */
  };                                                                                           /* Unchanged CODE */
/*****************************************************************************************************************/
/* Monkey Patching - DONE                                                                                        */
/*****************************************************************************************************************/
