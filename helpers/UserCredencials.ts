export default class UserCredencislas {

   //possible usernames
    public static  readonly STANDARD_USER = 'standard_user';
    public static  readonly LOCKED_OUT_USER = 'locked_out_user';
    public static  readonly PROBLEM_USER = 'problem_user';
    public static  readonly PERFORMANCE_GLITCH_USER = 'performance_glitch_user';
    public static  readonly ERROR_USER  = 'error_user';
    public static  readonly VISUAL_USER = 'visual_user';  
    
    //possible passwords 
    public static  readonly CORRECT_PASSWORD = 'secret_sauce';                     
       

}
export function PROBLEM_USER(PROBLEM_USER: any, CORRECT_PASSWORD: any) {
    throw new Error('Function not implemented.');
}

