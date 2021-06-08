# MonkeyPatch-WP-HappyForms-ReuseData
Reuse the data from Wordpress Plugin HappyForms after a request is done. 

Monkey Patching - HappyForms - frontend.js                                                       
                                                                                                 
HappyForms Class / Just add lines of code after the Form send Post-processing                    
Should work with Plugin Updates. Check on Updates of the Happy Forms JS if this functions has    
changed. If so, the /* Unchanged CODE */ lines here have to be changed accordingly to the original.                     
                                                                                                 
Must be loaded AFTER the original HappyForms JS - frontend.js                                    
But before the Form get's initalized by the Page                                                 
                                                                                                 
The used fields can be identified by adding a specific class in the HappyForm Configuration Page
Use Property CSS classes for that. Here we assume that there are fields for firstname, lastname and 
so on.
